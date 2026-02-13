import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim() || '';
const USE_GEMINI = !!GEMINI_API_KEY; // Dùng Gemini (free) khi có key

export interface GradeWritingBody {
  text: string;
  lessonId: string;
  context?: string;
}

export interface GradeWritingResult {
  score: number;
  feedback: string;
  suggestions: string[];
}

function buildSystemPrompt(lessonId: string, context?: string): string {
  const base = `Bạn là trợ lý chấm bài viết tiếng Nhật cho học viên học theo giáo trình Minna no Nihongo (trình độ N5).
Nhiệm vụ: chấm đoạn văn ngắn học viên viết và trả lời ĐÚNG theo format JSON sau (không thêm markdown, không giải thích ngoài JSON):
{"score": <số từ 1 đến 10>, "feedback": "<1-3 câu nhận xét tổng quan bằng tiếng Việt>", "suggestions": ["<gợi ý sửa 1>", "<gợi ý sửa 2>", ...]}

Quy tắc:
- score: 1-10 (10 = rất tốt, đúng ngữ pháp và phù hợp bài học; 1 = chưa đúng hoặc gần như trống).
- feedback: nhận xét ngắn, động viên nếu có tiến bộ, chỉ ra điểm mạnh/điểm cần cải thiện.
- suggestions: mảng các câu tiếng Việt gợi ý sửa lỗi cụ thể (ngữ pháp, trợ từ, chính tả, cách dùng từ). Nếu không có lỗi thì để mảng rỗng [] hoặc 1 gợi ý mở rộng.
- Chỉ trả lời bằng một đoạn JSON hợp lệ, không thêm text trước hay sau.`;
  if (lessonId) {
    const lessonNote = `Bài học hiện tại: ${lessonId}.`;
    const contextNote = context ? ` Nội dung ngữ pháp/từ vựng cần kiểm tra: ${context}` : '';
    return `${base} ${lessonNote}${contextNote}`;
  }
  return base;
}

function parseGradeResponse(content: string): GradeWritingResult {
  let jsonStr = content.trim();
  const codeBlock = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) jsonStr = codeBlock[1].trim();
  // Nếu không có code block, tìm đoạn JSON đầu tiên dạng { ... }
  if (!codeBlock && (jsonStr.includes('{') && jsonStr.includes('}'))) {
    const start = jsonStr.indexOf('{');
    let depth = 0;
    let end = start;
    for (let i = start; i < jsonStr.length; i++) {
      if (jsonStr[i] === '{') depth++;
      if (jsonStr[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
    }
    jsonStr = jsonStr.slice(start, end);
  }
  const parsed = JSON.parse(jsonStr) as GradeWritingResult;
  if (typeof parsed.score !== 'number' || typeof parsed.feedback !== 'string') {
    throw new Error('Định dạng phản hồi không đúng');
  }
  if (!Array.isArray(parsed.suggestions)) parsed.suggestions = [];
  return parsed;
}

export async function POST(request: NextRequest) {
  const hasOpenAI = !!OPENAI_API_KEY;
  const hasGemini = !!GEMINI_API_KEY;
  if (!hasOpenAI && !hasGemini) {
    return NextResponse.json(
      {
        error:
          'Chưa cấu hình AI. Thêm vào .env.local: GEMINI_API_KEY=... (miễn phí, lấy tại aistudio.google.com/apikey) hoặc OPENAI_API_KEY=sk-...',
      },
      { status: 503 }
    );
  }

  let body: GradeWritingBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Body không hợp lệ.' }, { status: 400 });
  }

  const { text, lessonId, context } = body;
  const trimmed = typeof text === 'string' ? text.trim() : '';
  if (!trimmed) {
    return NextResponse.json(
      { error: 'Vui lòng viết ít nhất một câu trước khi gửi chấm.' },
      { status: 400 }
    );
  }

  const systemPrompt = buildSystemPrompt(lessonId || 'N5', context);
  const userMessage = `Đoạn văn học viên viết:\n\n${trimmed}`;

  try {
    // Ưu tiên Gemini (free) nếu có key; không thì dùng OpenAI
    if (USE_GEMINI) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [{ parts: [{ text: userMessage }] }],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 800,
              thinkingConfig: { thinkingBudget: 0 },
            },
          }),
        }
      );
      if (!res.ok) {
        const errText = await res.text();
        let errMessage = errText.slice(0, 280);
        try {
          const errJson = JSON.parse(errText) as { error?: { message?: string } };
          errMessage = errJson?.error?.message || errMessage;
        } catch {
          // keep slice
        }
        return NextResponse.json(
          { error: `Gemini lỗi (${res.status}): ${errMessage}` },
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
      const textPart = textParts.join('\n').trim() || parts.map((p) => p?.text).filter(Boolean).join('\n').trim();
      if (!textPart) {
        return NextResponse.json({ error: 'Không nhận được phản hồi từ Gemini.' }, { status: 502 });
      }
      const parsed = parseGradeResponse(textPart);
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
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.3,
        max_tokens: 800,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      let errMessage = errText.slice(0, 300);
      try {
        const errJson = JSON.parse(errText) as { error?: { message?: string }; message?: string };
        errMessage = errJson?.error?.message || errJson?.message || errMessage;
      } catch {
        // keep errMessage as slice
      }
      if (res.status === 401) {
        errMessage = 'API key không hợp lệ hoặc đã thu hồi. Kiểm tra key tại platform.openai.com/api-keys. ' + errMessage;
      }
      if (res.status === 429) {
        errMessage = 'Hết hạn mức hoặc hết credit OpenAI. Kiểm tra tài khoản OpenAI. ' + errMessage;
      }
      return NextResponse.json(
        { error: `OpenAI lỗi (${res.status}): ${errMessage}` },
        { status: 502 }
      );
    }

    const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      return NextResponse.json({ error: 'Không nhận được phản hồi từ AI.' }, { status: 502 });
    }
    const parsed = parseGradeResponse(content);
    return NextResponse.json(parsed);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Lỗi gọi API';
    return NextResponse.json(
      { error: `Chấm bài thất bại: ${message}` },
      { status: 500 }
    );
  }
}
