'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { JLPT_LEVELS } from '@/lib/levels';

const TOTAL_N5_LESSONS = 25;

// QUICK_LINKS removed

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const accessDenied = searchParams.get('access') === 'denied';
  const [progressCount, setProgressCount] = useState<number | null>(null);
  const [streak, setStreak] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch('/api/progress', { credentials: 'include' }).then((r) => (r.ok ? r.json() : { progress: [] })),
      fetch('/api/streak', { credentials: 'include' }).then((r) => (r.ok ? r.json() : { streak: 0 })),
    ])
      .then(([progressRes, streakRes]) => {
        if (cancelled) return;
        const completed = Array.isArray(progressRes?.progress)
          ? progressRes.progress.filter((p: { lesson_completed?: boolean }) => p.lesson_completed === true).length
          : 0;
        setProgressCount(completed);
        setStreak(typeof streakRes?.streak === 'number' ? streakRes.streak : 0);
      })
      .catch(() => {
        if (!cancelled) setError('Không tải được dữ liệu');
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
      <div className="sb-layout">
        <Sidebar />
        <div className="sb-content">
          <main className="dashboard-page dashboard-page--new">
            <div className="dashboard-loading">
              <div className="loading-spinner" style={{ width: 32, height: 32, border: '3px solid #e5e7eb', borderTopColor: '#0d9488', borderRadius: '50%' }} />
              <span>Đang tải...</span>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const completed = progressCount ?? 0;
  const percent = Math.min(100, Math.round((completed / TOTAL_N5_LESSONS) * 100));
  const streakNum = streak ?? 0;

  return (
    <div className="sb-layout">
      <Sidebar />
      <div className="sb-content">
        <main className="dashboard-page dashboard-page--new">
          <header className="dashboard-hero dashboard-hero--new">
            <h1 className="dashboard-hero-title dashboard-hero-title--new">Bảng điều khiển</h1>
            <p className="dashboard-hero-sub dashboard-hero-sub--new">Tiến độ N5 và đường dẫn nhanh</p>
          </header>

          {/* Thanh chọn cấp độ: N5 / N4 N3 N2 sắp ra mắt */}
          <section className="dashboard-level-bar" aria-label="Chọn cấp độ JLPT">
            <h2 className="dashboard-level-bar-title">Vào bài học – Chọn cấp độ</h2>
            <div className="dashboard-level-bar-inner">
              {JLPT_LEVELS.map((level) =>
                level.available ? (
                  <Link
                    key={level.id}
                    href={level.startPath}
                    className="dashboard-level-item dashboard-level-item--active"
                  >
                    <span className="dashboard-level-label">{level.label}</span>
                    {level.description && (
                      <span className="dashboard-level-desc">{level.description}</span>
                    )}
                  </Link>
                ) : (
                  <span
                    key={level.id}
                    className="dashboard-level-item dashboard-level-item--soon"
                    aria-disabled
                  >
                    <span className="dashboard-level-label">{level.label}</span>
                    <span className="dashboard-level-desc">Sắp ra mắt</span>
                  </span>
                )
              )}
            </div>
          </section>

          {accessDenied && (
            <div className="dashboard-error dashboard-error--new" role="alert">
              Bạn chỉ được học 12 bài đầu và không được làm Mock test. Để học bài 13 trở đi và làm Mock test, vui lòng đóng phí và chờ admin xác nhận.
            </div>
          )}
          {error && (
            <div className="dashboard-error" role="alert">{error}</div>
          )}

          <section className="dashboard-card dashboard-card--new">
            <h2 className="dashboard-card-title dashboard-card-title--new">
              <span className="dashboard-card-title-icon">📈</span>
              Tiến độ N5
            </h2>
            <p className="dashboard-progress-text">
              Bạn đã hoàn thành <strong>{completed}</strong> / {TOTAL_N5_LESSONS} bài N5.
            </p>
            <div className="dashboard-progress-wrap">
              <div className="dashboard-progress-bar dashboard-progress-bar--new">
                <div
                  className="dashboard-progress-fill"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </section>

          <section className="dashboard-card dashboard-card--new">
            <h2 className="dashboard-card-title dashboard-card-title--new">
              <span className="dashboard-card-title-icon">🔥</span>
              Streak
            </h2>
            <p style={{ margin: 0 }}>
              <span className="dashboard-streak-num dashboard-streak-num--new">{streakNum}</span>
              <span> ngày học liên tục</span>
            </p>
            <p className="dashboard-streak-hint">
              Học hoặc hoàn thành game mỗi ngày để giữ streak.
            </p>
          </section>

          {/* Đi nhanh section removed */}
        </main>
      </div>
    </div>
  );
}
