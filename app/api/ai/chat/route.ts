/**
 * POST /api/ai/chat — AI Assistant (chỉ tài khoản is_premium).
 * Body: { message, lessonSlug? }. Hỗ trợ OpenAI hoặc Gemini (free).
 */
import { NextResponse } from 'next/server';
import { createSupabaseServerClient, getCurrentUserAndProfile } from '@/lib/supabase/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim() || '';
const OPENAI_MODEL = process.env.OPENAI_CHAT_MODEL || 'gpt-4o-mini';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUserAndProfile();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Vui lòng đăng nhập.' },
        { status: 401 }
      );
    }
    if (!user.is_premium) {
      return NextResponse.json(
        { error: 'premium_required', message: 'Tính năng AI Assistant chỉ dành cho thành viên VIP.' },
        { status: 403 }
      );
    }

    if (!OPENAI_API_KEY && !GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI chưa được cấu hình. Thêm GEMINI_API_KEY (free) hoặc OPENAI_API_KEY vào .env.local.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    const lessonSlug = typeof body?.lessonSlug === 'string' ? body.lessonSlug : undefined;

    if (!message) {
      return NextResponse.json(
        { error: 'Bad request', message: 'Thiếu message.' },
        { status: 400 }
      );
    }

    let lessonContext = '';
    if (lessonSlug) {
      const supabase = await createSupabaseServerClient();
      const { data: lessonData } = await supabase
        .from('lessons')
        .select('title, description, grammar_summary, content')
        .eq('slug', lessonSlug)
        .single();
      const lesson = lessonData as { title?: string; description?: string; grammar_summary?: string; content?: unknown } | null;
      if (lesson) {
        lessonContext = [
          `Bài học hiện tại: ${lesson.title ?? ''}.`,
          lesson.description ? `Mô tả: ${lesson.description}` : '',
          lesson.grammar_summary ? `Tóm tắt ngữ pháp: ${lesson.grammar_summary}` : '',
          lesson.content && typeof lesson.content === 'object'
            ? `Nội dung (từ vựng, câu, ngữ pháp): ${JSON.stringify(lesson.content).slice(0, 4000)}`
            : '',
        ]
          .filter(Boolean)
          .join('\n');
      }
    }

    const systemContent = [
      'Bạn là trợ lý học tiếng Nhật JLPT. Nhiệm vụ: giải thích ngữ pháp, dịch câu ví dụ, giải đáp thắc mắc về từ vựng hoặc bài học.',
      'Trả lời ngắn gọn, rõ ràng, ưu tiên tiếng Việt; có thể kèm giải thích bằng tiếng Nhật khi cần.',
      lessonContext
        ? `Context bài học người dùng đang xem:\n${lessonContext}\nDựa vào context này để đưa ra giải thích chính xác nhất.`
        : 'Người dùng chưa chọn bài học cụ thể; vẫn trả lời hữu ích dựa trên kiến thức JLPT N5–N2.',
    ].join('\n');

    let content: string;

    if (GEMINI_API_KEY) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemContent }] },
            contents: [{ parts: [{ text: message }] }],
            generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
          }),
        }
      );
      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json(
          { error: 'Gemini request failed', detail: errText.slice(0, 400) },
          { status: 502 }
        );
      }
      const data = (await res.json()) as {
        candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
      };
      content = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? 'Xin lỗi, tôi không thể trả lời ngay.';
    } else {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: [
            { role: 'system', content: systemContent },
            { role: 'user', content: message },
          ],
          max_tokens: 1024,
          temperature: 0.4,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json(
          { error: 'OpenAI request failed', detail: errText.slice(0, 500) },
          { status: 502 }
        );
      }

      const data = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      content = data?.choices?.[0]?.message?.content ?? 'Xin lỗi, tôi không thể trả lời ngay.';
    }

    return NextResponse.json({ content });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
