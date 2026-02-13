'use client';

import { LessonNav } from '@/components/LessonNav';
import { PronunciationDeepDive } from '@/components/PronunciationDeepDive';

export default function PronunciationPage() {
  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="pronunciation" />
        </div>
      </header>
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Chuyên sâu Quy tắc Phát âm</h1>
          <p className="lesson-subtitle">
            Âm ngắt (促音) &amp; Trường âm (長音): quy tắc, ngoại lệ, so sánh trực quan, nhịp điệu và kiểm tra phát âm bằng AI.
          </p>
        </section>
        <PronunciationDeepDive />
      </main>
    </>
  );
}
