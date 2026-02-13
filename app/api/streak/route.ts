/**
 * GET /api/streak — Số ngày học liên tục (streak) tính từ backend.
 * Dựa trên bảng user_study_days: đếm số ngày liên tiếp kết thúc bằng hôm nay.
 */
import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Vui lòng đăng nhập.' },
        { status: 401 }
      );
    }

    const { data: rows, error } = await supabase
      .from('user_study_days')
      .select('study_date')
      .eq('user_id', user.id)
      .order('study_date', { ascending: false });

    if (error) {
      // Bảng có thể chưa tạo → trả về streak 0 thay vì 500
      return NextResponse.json({ streak: 0, todayStudied: false });
    }

    const dates = new Set((rows ?? []).map((r: { study_date: string }) => r.study_date));
    const today = new Date().toISOString().slice(0, 10);

    if (!dates.has(today)) {
      return NextResponse.json({ streak: 0, todayStudied: false });
    }

    let streak = 0;
    const d = new Date(today);
    while (true) {
      const key = d.toISOString().slice(0, 10);
      if (!dates.has(key)) break;
      streak++;
      d.setUTCDate(d.getUTCDate() - 1);
    }

    return NextResponse.json({ streak, todayStudied: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
