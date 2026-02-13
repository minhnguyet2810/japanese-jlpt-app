/**
 * GET /api/progress — Lấy toàn bộ tiến độ của user (cho Dashboard & Analytics).
 * POST /api/progress — Cập nhật tiến độ bài học.
 */
import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import type { GamesCompleted } from '@/lib/supabase/types';
import type { SupabaseClient } from '@supabase/supabase-js';

function toDateOnly(iso: string): string {
  return iso.slice(0, 10);
}

async function recordStudyDay(supabase: SupabaseClient, userId: string): Promise<void> {
  try {
    const today = toDateOnly(new Date().toISOString());
    await supabase.from('user_study_days').upsert(
      { user_id: userId, study_date: today },
      { onConflict: 'user_id,study_date' }
    );
  } catch {
    // Bảng user_study_days có thể chưa tạo; vẫn lưu progress bình thường
  }
}

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
    const { data, error } = await supabase
      .from('user_progress')
      .select('lesson_slug, games_completed, lesson_completed, completed_at, updated_at, created_at')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ progress: data ?? [] });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Vui lòng đăng nhập để lưu tiến độ.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const lesson_slug = body?.lesson_slug as string | undefined;
    const games_completed = body?.games_completed as GamesCompleted | undefined;
    const lesson_completed = body?.lesson_completed as boolean | undefined;

    if (!lesson_slug || typeof lesson_slug !== 'string') {
      return NextResponse.json(
        { error: 'Bad request', message: 'Thiếu lesson_slug.' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const completed_at = lesson_completed === true ? now : null;

    const { data: existingData } = await supabase
      .from('user_progress')
      .select('id, games_completed, lesson_completed, completed_at')
      .eq('user_id', user.id)
      .eq('lesson_slug', lesson_slug)
      .single();
    const existing = existingData as { id: string; games_completed: unknown; lesson_completed: boolean; completed_at: string | null } | null;

    if (existing) {
      const mergedGames: GamesCompleted = {
        ...(existing.games_completed as GamesCompleted),
        ...(games_completed ?? {}),
      };
      // cast supabase sang any để tránh lỗi type infer cho update()
      const { data: updated, error } = await (supabase as any)
        .from('user_progress')
        .update({
          games_completed: mergedGames,
          lesson_completed: lesson_completed ?? existing.lesson_completed,
          completed_at: completed_at ?? existing.completed_at,
          updated_at: now,
        })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      await recordStudyDay(supabase, user.id);
      return NextResponse.json(updated);
    }

    // insert cũng không cần type chính xác → cast any
    const { data: inserted, error } = await (supabase as any)
      .from('user_progress')
      .insert({
        user_id: user.id,
        lesson_slug,
        games_completed: games_completed ?? {},
        lesson_completed: lesson_completed ?? false,
        completed_at,
        updated_at: now,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    await recordStudyDay(supabase, user.id);
    return NextResponse.json(inserted);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
