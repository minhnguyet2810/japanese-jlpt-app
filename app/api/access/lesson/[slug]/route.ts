/**
 * GET /api/access/lesson/[slug] — Kiểm tra quyền truy cập bài (server-side).
 * Trả về { allowed: boolean, reason?: string }.
 * Dùng khi front-end chỉ cần biết có được vào bài hay không (không cần nội dung).
 */
import { NextResponse } from 'next/server';
import { getCurrentUserAndProfile } from '@/lib/supabase/server';
import { isLessonFree } from '@/lib/paywall';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!slug) {
    return NextResponse.json({ allowed: false, reason: 'missing_slug' }, { status: 400 });
  }

  try {
    if (isLessonFree(slug)) {
      return NextResponse.json({ allowed: true });
    }

    const user = await getCurrentUserAndProfile();
    const isPremium = user?.is_premium === true;

    if (!isPremium) {
      return NextResponse.json(
        {
          allowed: false,
          reason: 'premium_required',
          message: 'Nội dung này dành cho thành viên VIP. Vui lòng nâng cấp tài khoản.',
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ allowed: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message, allowed: false }, { status });
  }
}
