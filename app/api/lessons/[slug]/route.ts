/**
 * GET /api/lessons/[slug] — Lấy nội dung bài học từ Database.
 * Server-side check: lesson11 trở đi yêu cầu user có is_premium trong DB;
 * nếu không đủ quyền → 403 + message nâng cấp VIP.
 */
import { NextResponse } from 'next/server';
import { createSupabaseServerClient, getCurrentUserAndProfile } from '@/lib/supabase/server';
import { isLessonFree } from '@/lib/paywall';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data: lesson, error: lessonError } = await supabase
      .from('lessons')
      .select('*')
      .eq('slug', slug)
      .single();

    if (lessonError || !lesson) {
      return NextResponse.json(
        { error: lessonError?.message ?? 'Lesson not found' },
        { status: 404 }
      );
    }

    // Bài premium (lesson11, lesson12, ...): kiểm tra is_premium trong DB
    if (!isLessonFree(slug)) {
      const user = await getCurrentUserAndProfile();
      const isPremium = user?.is_premium === true;

      if (!isPremium) {
        return NextResponse.json(
          {
            error: 'premium_required',
            message: 'Nội dung này dành cho thành viên VIP. Vui lòng nâng cấp tài khoản để truy cập.',
            code: 'UPGRADE_VIP',
          },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(lesson);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
