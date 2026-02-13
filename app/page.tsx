'use client';

import Link from 'next/link';
import { LevelSelector } from '@/components/LevelSelector';

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-inner">
        <div className="welcome-hero">
          <p className="welcome-jp">ようこそ</p>
          <p className="welcome-romaji">Yōkoso</p>
          <h1 className="welcome-title">Xin chào! Chào mừng bạn đến với hành trình học tiếng Nhật</h1>
        </div>

        <div className="welcome-intro">
          <p>
            Tiếng Nhật là ngôn ngữ tuyệt đẹp với ba bảng chữ: <strong className="jp">ひらがな</strong> (Hiragana),{' '}
            <strong className="jp">カタカナ</strong> (Katakana) và <strong className="jp">漢字</strong> (Kanji).
            Học tiếng Nhật mở ra cánh cửa đến văn hóa, công việc và con người Nhật Bản.
          </p>
          <p>
            Ứng dụng này đồng hành cùng bạn từ cơ bản <strong>JLPT N5</strong> đến nâng cao, với từ vựng, ngữ pháp,
            luyện nghe, nói và làm bài kiểm tra mô phỏng.
          </p>
        </div>

        <div className="welcome-features">
          <div className="welcome-feature">
            <span className="welcome-feature-icon">📚</span>
            <span>Bài học theo sách Minna no Nihongo</span>
          </div>
          <div className="welcome-feature">
            <span className="welcome-feature-icon">🎧</span>
            <span>Phát âm mẫu, luyện nghe & nói</span>
          </div>
          <div className="welcome-feature">
            <span className="welcome-feature-icon">✍️</span>
            <span>Bắt đầu bài học từ Bài 0, Mock test N5 sau mỗi nhóm bài</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <Link href="/lesson0" className="welcome-cta">
            Bắt đầu bài học →
          </Link>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <Link href="/kanji-radicals" className="welcome-cta secondary">
            Kanji – Bộ thủ &amp; Phân rã
          </Link>
          <Link href="/pronunciation" className="welcome-cta secondary">
            Quy tắc Phát âm
          </Link>
        </div>

        <section className="mt-8 pt-6 border-t border-teal-900/10">
          <p className="text-center text-gray-600 text-[0.95rem] mb-4">
            Sau khi mua gói VIP, bạn chọn cấp độ để học:
          </p>
          <LevelSelector
            variant="bar"
            title="Chọn cấp độ JLPT (N5 → N2)"
            showDescription
          />
        </section>
      </div>
    </main>
  );
}
