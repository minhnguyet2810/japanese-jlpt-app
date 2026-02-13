'use client';

import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-inner">
        <div className="welcome-hero">
          <p className="welcome-jp">ようこそ</p>
          <p className="welcome-romaji">Yōkoso</p>
          <h1 className="welcome-title">Học tiếng Nhật N5 từ đầu</h1>
        </div>

        <div className="welcome-intro">
          <p>
            Từ vựng, ngữ pháp Minna no Nihongo, luyện nghe – nói, Kanji và Mock test. Đăng nhập để lưu tiến độ và mở khóa đầy đủ bài học.
          </p>
        </div>

        <div className="welcome-cta-wrap">
          <Link href="/lesson0" className="welcome-cta">
            Bắt đầu bài học
          </Link>
          <p className="welcome-cta-hint">Đăng ký hoặc đăng nhập để vào bài học</p>
        </div>
      </div>
    </main>
  );
}
