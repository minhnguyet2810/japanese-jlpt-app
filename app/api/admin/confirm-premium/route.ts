/**
 * POST /api/admin/confirm-premium — Xác nhận đã đóng tiền: set is_premium = true cho user theo email.
 * Header: x-admin-secret: <ADMIN_SECRET>
 * Body: { email: string }
 */
import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

const ADMIN_SECRET = process.env.ADMIN_SECRET;

export async function POST(request: Request) {
  const secret = request.headers.get('x-admin-secret');
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    if (!email) {
      return NextResponse.json({ error: 'Thiếu email' }, { status: 400 });
    }

    const supabase = createSupabaseAdminClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Database type chưa khai báo profiles đủ
    const { data, error } = await (supabase as any)
      .from('profiles')
      .update({ is_premium: true, updated_at: new Date().toISOString() })
      .eq('email', email)
      .select('id, email, is_premium')
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    if (!data) {
      return NextResponse.json(
        { error: 'Không tìm thấy profile với email này. User cần đăng ký/đăng nhập ít nhất một lần để có bản ghi profiles.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Đã xác nhận VIP cho ${data.email}. User có thể học bài 13 trở đi và làm Mock test.`,
      profile: { id: data.id, email: data.email, is_premium: data.is_premium },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
