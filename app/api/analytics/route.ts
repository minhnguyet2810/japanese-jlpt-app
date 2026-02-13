/**
 * GET /api/analytics — Dữ liệu cho trang User Analytics: heatmap (ngày học) + điểm mạnh/yếu.
 * Dựa trên user_progress (updated_at = ngày có hoạt động; games_completed = từng kỹ năng).
 */
import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import type { GamesCompleted } from '@/lib/supabase/types';

type HeatmapDay = { date: string; count: number };
type ByLesson = { lesson_slug: string; lesson_completed: boolean; games: GamesCompleted };
type BySkill = { vocab: number; grammar: number; dialogue: number; builder: number; total: number };

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
      .from('user_progress')
      .select('lesson_slug, games_completed, lesson_completed, updated_at, created_at')
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const list = (rows ?? []) as Array<{
      lesson_slug: string;
      games_completed: GamesCompleted;
      lesson_completed: boolean;
      updated_at: string;
      created_at: string;
    }>;

    // Heatmap: đếm số "event" mỗi ngày (mỗi bản ghi updated_at = 1 ngày có học)
    const dateCount: Record<string, number> = {};
    for (const r of list) {
      const d = r.updated_at?.slice(0, 10) || r.created_at?.slice(0, 10);
      if (d) dateCount[d] = (dateCount[d] ?? 0) + 1;
    }
    const heatmapData: HeatmapDay[] = Object.entries(dateCount).map(([date, count]) => ({
      date,
      count,
    }));

    // By lesson (cho phân tích từng bài)
    const byLesson: ByLesson[] = list.map((r) => ({
      lesson_slug: r.lesson_slug,
      lesson_completed: r.lesson_completed ?? false,
      games: r.games_completed ?? {},
    }));

    // By skill: đếm số lần hoàn thành từng game (vocab, grammar, dialogue, builder)
    const skillCount: BySkill = { vocab: 0, grammar: 0, dialogue: 0, builder: 0, total: 0 };
    for (const r of list) {
      const g = r.games_completed ?? {};
      if (g.vocab) skillCount.vocab++;
      if (g.grammar) skillCount.grammar++;
      if (g.dialogue) skillCount.dialogue++;
      if (g.builder) skillCount.builder++;
    }
    skillCount.total =
      skillCount.vocab + skillCount.grammar + skillCount.dialogue + skillCount.builder;

    // Điểm yếu: bài có ít game hoàn thành hoặc chưa completed; điểm mạnh: bài đã completed hoặc nhiều game
    const completedLessons = list.filter((r) => r.lesson_completed).map((r) => r.lesson_slug);
    const weakLessons = list
      .filter((r) => !r.lesson_completed)
      .map((r) => {
        const g = r.games_completed ?? {};
        const done = [g.vocab, g.grammar, g.dialogue, g.builder].filter(Boolean).length;
        return { lesson_slug: r.lesson_slug, gamesDone: done };
      })
      .sort((a, b) => a.gamesDone - b.gamesDone)
      .slice(0, 5);

    return NextResponse.json({
      heatmapData,
      byLesson,
      bySkill: skillCount,
      completedLessons,
      weakLessons: weakLessons.map((w) => ({ lesson_slug: w.lesson_slug, gamesDone: w.gamesDone })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('chưa cấu hình') ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
