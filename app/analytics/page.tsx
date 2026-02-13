'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

type AnalyticsData = {
  heatmapData: Array<{ date: string; count: number }>;
  byLesson: Array<{ lesson_slug: string; lesson_completed: boolean; games: Record<string, boolean> }>;
  bySkill: { vocab: number; grammar: number; dialogue: number; builder: number; total: number };
  completedLessons: string[];
  weakLessons: Array<{ lesson_slug: string; gamesDone: number }>;
};

const SKILL_LABELS: Record<string, string> = {
  vocab: 'Từ vựng',
  grammar: 'Ngữ pháp',
  dialogue: 'Hội thoại',
  builder: 'Ghép câu',
};

function heatmapLevel(count: number, max: number): number {
  if (max <= 0) return 0;
  if (count <= 0) return 0;
  if (count >= max) return 4;
  const ratio = count / max;
  if (ratio >= 0.75) return 4;
  if (ratio >= 0.5) return 3;
  if (ratio >= 0.25) return 2;
  return 1;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/analytics')
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 401 ? 'Vui lòng đăng nhập.' : 'Lỗi tải dữ liệu');
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main className="analytics-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Đang tải dữ liệu...</p>
      </main>
    );
  }
  if (error || !data) {
    return (
      <main className="analytics-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#b91c1c' }}>{error || 'Không có dữ liệu'}</p>
        <Link href="/dashboard" style={{ marginTop: '1rem', display: 'inline-block' }}>
          ← Về Dashboard
        </Link>
      </main>
    );
  }

  const maxHeat = Math.max(1, ...data.heatmapData.map((d) => d.count));
  const dateMap = new Map(data.heatmapData.map((d) => [d.date, d.count]));

  // Lưới 12 tuần gần nhất (7 cột ngày, ~12 hàng tuần)
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - 12 * 7);
  const days: Array<{ date: string; count: number; level: number }> = [];
  for (let i = 0; i < 12 * 7; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().slice(0, 10);
    const count = dateMap.get(dateStr) ?? 0;
    days.push({ date: dateStr, count, level: heatmapLevel(count, maxHeat) });
  }

  const barData = [
    { name: SKILL_LABELS.vocab, value: data.bySkill.vocab, fill: '#16a34a' },
    { name: SKILL_LABELS.grammar, value: data.bySkill.grammar, fill: '#15803d' },
    { name: SKILL_LABELS.dialogue, value: data.bySkill.dialogue, fill: '#166534' },
    { name: SKILL_LABELS.builder, value: data.bySkill.builder, fill: '#14532d' },
  ];

  const weakLabel = (slug: string) => {
    const n = slug.replace('lesson', '');
    return `Bài ${n}`;
  };

  return (
    <main className="analytics-page" style={{ padding: '2rem', maxWidth: 720, margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/dashboard" style={{ color: '#166534', fontWeight: 600 }}>
          ← Dashboard
        </Link>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Phân tích học tập</h1>
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Hoạt động theo ngày</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
          Giống GitHub: ô càng đậm = càng nhiều hoạt động trong ngày.
        </p>
        <div
          className="analytics-heatmap"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 4,
            width: '100%',
            maxWidth: 320,
          }}
        >
          {days.map((day) => (
            <div
              key={day.date}
              title={`${day.date}: ${day.count} hoạt động`}
              style={{
                width: '100%',
                aspectRatio: 1,
                borderRadius: 4,
                backgroundColor:
                  day.level === 0
                    ? '#f3f4f6'
                    : day.level === 1
                      ? '#bbf7d0'
                      : day.level === 2
                        ? '#86efac'
                        : day.level === 3
                          ? '#4ade80'
                          : '#22c55e',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b7280' }}>
          <span>Ít</span>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: '#f3f4f6' }} />
          <span style={{ width: 12, height: 12, borderRadius: 4, background: '#bbf7d0' }} />
          <span style={{ width: 12, height: 12, borderRadius: 4, background: '#86efac' }} />
          <span style={{ width: 12, height: 12, borderRadius: 4, background: '#4ade80' }} />
          <span style={{ width: 12, height: 12, borderRadius: 4, background: '#22c55e' }} />
          <span>Nhiều</span>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Số lần hoàn thành theo kỹ năng</h2>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Điểm mạnh</h2>
        {data.completedLessons.length > 0 ? (
          <p style={{ marginBottom: '0.5rem' }}>
            Bạn đã hoàn thành các bài: {data.completedLessons.map(weakLabel).join(', ')}.
          </p>
        ) : null}
        {data.bySkill.total > 0 ? (
          <p style={{ color: '#166534', margin: 0 }}>
            Bạn làm tốt phần <strong>{barData.sort((a, b) => b.value - a.value)[0]?.name ?? '—'}</strong> (nhiều lần hoàn thành game nhất).
          </p>
        ) : (
          <p style={{ color: '#6b7280' }}>Chưa đủ dữ liệu. Hãy học và hoàn thành các game để xem phân tích.</p>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Cần cải thiện</h2>
        {data.weakLessons.length > 0 ? (
          <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
            {data.weakLessons.map((w) => (
              <li key={w.lesson_slug} style={{ marginBottom: '0.35rem' }}>
                <Link href={`/${w.lesson_slug}`} style={{ color: '#15803d', fontWeight: 500 }}>
                  {weakLabel(w.lesson_slug)}
                </Link>
                : mới hoàn thành {w.gamesDone}/4 game — nên ôn thêm.
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#6b7280' }}>
            Không có bài nào đang dở dang hoặc bạn chưa có tiến độ.
          </p>
        )}
      </section>
    </main>
  );
}
