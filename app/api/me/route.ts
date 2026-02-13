/**
 * GET /api/me — User hiện tại + profile (is_premium). Dùng để sync trạng thái VIP phía client.
 */
import { NextResponse } from 'next/server';
import { getCurrentUserAndProfile } from '@/lib/supabase/server';

export async function GET() {
  try {
    const user = await getCurrentUserAndProfile();
    if (!user) {
      return NextResponse.json({ user: null, profile: null }, { status: 200 });
    }
    return NextResponse.json({
      user: { id: user.id, email: user.email },
      profile: { is_premium: user.is_premium },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
