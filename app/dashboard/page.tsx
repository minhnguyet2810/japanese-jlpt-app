'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LevelSelector } from '@/components/LevelSelector';

const TOTAL_N5_LESSONS = 50;

const QUICK_LINKS = [
  { href: '/', label: 'Trang chủ', icon: '🏠' },
  { href: '/lesson0', label: 'Bắt đầu học (Bài 0)', icon: '📖' },
  { href: '/lesson/lesson13', label: 'Bài 13 (từ CMS)', icon: '📚' },
  { href: '/kanji-radicals', label: 'Kanji – Bộ thủ & Phân rã', icon: '✒️' },
  { href: '/pronunciation', label: 'Quy tắc Phát âm', icon: '🎤' },
  { href: '/analytics', label: 'Phân tích học tập', icon: '📊' },
] as const;

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
      <main className="dashboard-page">
        <div className="dashboard-loading">
          <div className="loading-spinner" style={{ width: 32, height: 32, border: '3px solid #e5e7eb', borderTopColor: '#0d9488', borderRadius: '50%' }} />
          <span>Đang tải...</span>
        </div>
      </main>
    );
  }

  const completed = progressCount ?? 0;
  const percent = Math.min(100, Math.round((completed / TOTAL_N5_LESSONS) * 100));
  const streakNum = streak ?? 0;

  return (
    <main className="dashboard-page">
      <header className="dashboard-hero">
        <h1 className="dashboard-hero-title">Dashboard</h1>
        <p className="dashboard-hero-sub">Theo dõi tiến độ và bắt đầu học tiếng Nhật</p>
      </header>

      {accessDenied && (
        <div className="dashboard-error" role="alert" style={{ background: '#fef2f2', borderColor: '#fecaca', color: '#b91c1c' }}>
          Bạn chỉ được học 12 bài đầu và không được làm Mock test. Để học bài 13 trở đi và làm Mock test, vui lòng đóng phí và chờ admin xác nhận (sau khi xác nhận tài khoản sẽ được mở khóa).
        </div>
      )}
      {error && (
        <div className="dashboard-error" role="alert">
          {error}
        </div>
      )}

      <section className="dashboard-card">
        <h2 className="dashboard-card-title">
          <span className="dashboard-card-title-icon">📂</span>
          Chọn cấp độ để học (VIP)
        </h2>
        <LevelSelector
          variant="cards"
          title=""
          showDescription
        />
        <p className="dashboard-level-note">
          N5 đang mở; N4, N3, N2 sẽ ra mắt sau.
        </p>
      </section>

      <section className="dashboard-card">
        <h2 className="dashboard-card-title">
          <span className="dashboard-card-title-icon">📈</span>
          Tiến độ N5
        </h2>
        <p className="dashboard-progress-text">
          Bạn đã hoàn thành <strong>{completed}</strong> / {TOTAL_N5_LESSONS} bài N5.
        </p>
        <div className="dashboard-progress-wrap">
          <div className="dashboard-progress-bar">
            <div
              className="dashboard-progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </section>

      <section className="dashboard-card">
        <h2 className="dashboard-card-title">
          <span className="dashboard-card-title-icon">🔥</span>
          Streak
        </h2>
        <p style={{ margin: 0 }}>
          <span className="dashboard-streak-num">{streakNum}</span>
          <span> ngày học liên tục</span>
        </p>
        <p className="dashboard-streak-hint">
          Học hoặc hoàn thành game mỗi ngày để giữ streak.
        </p>
      </section>

      <section className="dashboard-card">
        <h2 className="dashboard-card-title">
          <span className="dashboard-card-title-icon">🔗</span>
          Đi tới
        </h2>
        <div className="dashboard-links-grid">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="dashboard-link-card"
            >
              <span className="dashboard-link-card-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
