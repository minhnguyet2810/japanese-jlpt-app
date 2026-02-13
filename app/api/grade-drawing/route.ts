import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim() || '';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';

export interface GradeDrawingBody {
  /** Base64 PNG (có hoặc không prefix data:image/png;base64,) */
  imageBase64: string;
  /** Chữ đúng cần vẽ (bộ thủ hoặc kanji) */
  expectedChar: string;
  /** Gợi ý bằng tiếng Việt (vd: "mái nhà", "chữ Tự") */
  promptVi?: string;
}

export interface GradeDrawingResult {
  score: number;
  feedback: string;
}

function parseGradeDrawingResponse(content: string): GradeDrawingResult {
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
  const parsed = JSON.parse(jsonStr) as GradeDrawingResult;
  if (typeof parsed.score !== 'number' || typeof parsed.feedback !== 'string') {
    throw new Error('Định dạng phản hồi không đúng');
  }
  return {
    score: Math.min(10, Math.max(1, parsed.score)),
    feedback: String(parsed.feedback),
  };
}

export async function POST(request: NextRequest) {
  if (!GEMINI_API_KEY && !OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'Chưa cấu hình AI. Thêm GEMINI_API_KEY hoặc OPENAI_API_KEY vào .env.local.' },
      { status: 503 }
    );
  }

  let body: GradeDrawingBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Body không hợp lệ.' }, { status: 400 });
  }

  let base64 = typeof body.imageBase64 === 'string' ? body.imageBase64.trim() : '';
  if (!base64) {
    return NextResponse.json({ error: 'Thiếu ảnh vẽ (imageBase64).' }, { status: 400 });
  }
  if (base64.includes(',')) base64 = base64.split(',')[1] ?? base64;
  const expectedChar = typeof body.expectedChar === 'string' ? body.expectedChar.trim() : '';
  const promptVi = typeof body.promptVi === 'string' ? body.promptVi.trim() : '';

  const systemPrompt = `Bạn là trợ lý chấm chữ Hán/Kanji viết tay. Học viên vẽ một chữ (bộ thủ hoặc kanji) trên canvas.
Nhiệm vụ: So sánh bức vẽ với chữ mẫu "${expectedChar}"${promptVi ? ` (gợi ý nghĩa: ${promptVi})` : ''}. Đánh giá độ giống về hình dạng, thứ tự nét (nếu nhận ra được), cân đối.
Trả lời ĐÚNG theo format JSON sau (không markdown, không giải thích ngoài JSON):
{"score": <1-10>, "feedback": "<1-3 câu nhận xét bằng tiếng Việt: đúng chưa, nét nào cần sửa, gợi ý luyện>"}

Quy tắc: score 10 = rất giống, đúng nét; 1 = không nhận ra hoặc sai hoàn toàn. Chỉ trả lời bằng một đoạn JSON hợp lệ.`;

  try {
    if (GEMINI_API_KEY) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: systemPrompt + '\n\nẢnh vẽ của học viên (canvas):' },
                  {
                    inline_data: {
                      mime_type: 'image/png',
                      data: base64,
                    },
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 400,
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
          content?: { parts?: Array<{ text?: string }> };
        }>;
      };
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (!text) {
        return NextResponse.json({ error: 'Không nhận được phản hồi từ AI.' }, { status: 502 });
      }
      const parsed = parseGradeDrawingResponse(text);
      return NextResponse.json(parsed);
    }

    // OpenAI with vision (gpt-4o-mini supports image)
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Ảnh vẽ của học viên (canvas):' },
              {
                type: 'image_url',
                image_url: { url: `data:image/png;base64,${base64}` },
              },
            ],
          },
        ],
        temperature: 0.2,
        max_tokens: 400,
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
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) {
      return NextResponse.json({ error: 'Không nhận được phản hồi từ AI.' }, { status: 502 });
    }
    const parsed = parseGradeDrawingResponse(text);
    return NextResponse.json(parsed);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Lỗi gọi API';
    return NextResponse.json(
      { error: `Chấm bài vẽ thất bại: ${message}` },
      { status: 500 }
    );
  }
}
