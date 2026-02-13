import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim() || '';
const USE_GEMINI = !!GEMINI_API_KEY;

export interface GradePronunciationBody {
  expectedText: string;
  userTranscription: string;
}

export interface GradePronunciationResult {
  score: number;
  feedback: string;
  longVowelOk?: boolean;
  sokuonOk?: boolean;
}

const SYSTEM_PROMPT = `Bạn là trợ lý chấm phát âm tiếng Nhật, tập trung vào Trường âm (長音 - kéo dài nguyên âm) và Âm ngắt (促音 - っ, khoảng lặng 1 phách trước phụ âm kép).
Nhiệm vụ: So sánh "câu/từ mẫu" (expectedText) với "câu/từ mà học viên đã nói" (userTranscription - thường do nhận diện giọng nói chuyển thành chữ).
Trả lời ĐÚNG theo format JSON sau (không markdown, không giải thích ngoài JSON):
{"score": <1-10>, "feedback": "<1-3 câu nhận xét bằng tiếng Việt: có phát âm đúng trường âm và âm ngắt không, cần kéo dài chỗ nào hay ngắt chỗ nào>", "longVowelOk": <true/false>, "sokuonOk": <true/false>}

Quy tắc:
- score: 1-10 (10 = phát âm trường âm và âm ngắt đúng; điểm thấp nếu thiếu kéo dài hoặc thiếu ngắt).
- feedback: ngắn gọn, chỉ ra cụ thể nếu sai (ví dụ: "Cần kéo dài âm ば trong おばあさん" hoặc "Cần ngắt trước っ trong きって").
- longVowelOk: true nếu học viên có vẻ đã kéo dài đúng các trường âm (hoặc transcription phản ánh đúng).
- sokuonOk: true nếu học viên có vẻ đã ngắt đúng (hoặc transcription phản ánh đúng).
- Nếu userTranscription trống hoặc không rõ, cho score thấp và feedback "Không nghe rõ, hãy thử nói lại."
- Chỉ trả lời bằng một đoạn JSON hợp lệ.`;

function parsePronunciationResponse(content: string): GradePronunciationResult {
  let jsonStr = content.trim();
  const codeBlock = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) jsonStr = codeBlock[1].trim();
  if (!jsonStr.includes('{')) throw new Error('Không tìm thấy JSON');
  const start = jsonStr.indexOf('{');
  let depth = 0;
  let end = start;
  for (let i = start; i < jsonStr.length; i++) {
    if (jsonStr[i] === '{') depth++;
    if (jsonStr[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  jsonStr = jsonStr.slice(start, end);
  const parsed = JSON.parse(jsonStr) as GradePronunciationResult;
  if (typeof parsed.score !== 'number' || typeof parsed.feedback !== 'string') {
    throw new Error('Định dạng phản hồi không đúng');
  }
  return {
    score: Math.min(10, Math.max(1, parsed.score)),
    feedback: String(parsed.feedback),
    longVowelOk: typeof parsed.longVowelOk === 'boolean' ? parsed.longVowelOk : undefined,
    sokuonOk: typeof parsed.sokuonOk === 'boolean' ? parsed.sokuonOk : undefined,
  };
}

export async function POST(request: NextRequest) {
  const hasOpenAI = !!OPENAI_API_KEY;
  const hasGemini = !!GEMINI_API_KEY;
  if (!hasOpenAI && !hasGemini) {
    return NextResponse.json(
      {
        error:
          'Chưa cấu hình AI. Thêm GEMINI_API_KEY hoặc OPENAI_API_KEY vào .env.local.',
      },
      { status: 503 }
    );
  }

  let body: GradePronunciationBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Body không hợp lệ.' }, { status: 400 });
  }

  const expectedText = typeof body.expectedText === 'string' ? body.expectedText.trim() : '';
  const userTranscription = typeof body.userTranscription === 'string' ? body.userTranscription.trim() : '';

  if (!expectedText) {
    return NextResponse.json(
      { error: 'Thiếu expectedText (câu/từ mẫu cần đọc).' },
      { status: 400 }
    );
  }

  const userMessage = `expectedText (câu/từ mẫu): ${expectedText}\nuserTranscription (học viên đã nói - từ nhận diện giọng nói): ${userTranscription || '(trống)'}`;

  try {
    if (USE_GEMINI) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [{ parts: [{ text: userMessage }] }],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 500,
              thinkingConfig: { thinkingBudget: 0 },
            },
          }),
        }
      );
      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json(
          { error: `Gemini lỗi (${res.status}): ${errText.slice(0, 200)}` },
          { status: 502 }
        );
      }
      const data = (await res.json()) as {
        candidates?: Array<{
          content?: {
            parts?: Array<{ text?: string; thought?: boolean }>;
          };
        }>;
      };
      const parts = data.candidates?.[0]?.content?.parts ?? [];
      const textParts = parts
        .filter((p): p is { text: string } => typeof p?.text === 'string' && !(p as { thought?: boolean }).thought)
        .map((p) => p.text.trim())
        .filter(Boolean);
      const textPart = textParts.join('\n').trim();
      if (!textPart) {
        return NextResponse.json({ error: 'Không nhận được phản hồi từ Gemini.' }, { status: 502 });
      }
      const parsed = parsePronunciationResponse(textPart);
      return NextResponse.json(parsed);
    }

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { error: `OpenAI lỗi (${res.status}): ${errText.slice(0, 200)}` },
        { status: 502 }
      );
    }

    const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      return NextResponse.json({ error: 'Không nhận được phản hồi từ AI.' }, { status: 502 });
    }
    const parsed = parsePronunciationResponse(content);
    return NextResponse.json(parsed);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Lỗi gọi API';
    return NextResponse.json(
      { error: `Chấm phát âm thất bại: ${message}` },
      { status: 500 }
    );
  }
}
