'use client';

import { LessonNav } from '@/components/LessonNav';
import { KanjiRadicalLearning } from '@/components/KanjiRadicalLearning';

export default function KanjiRadicalsPage() {
  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="kanji-radicals" />
        </div>
      </header>
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Học Kanji – Bộ thủ &amp; Phân rã</h1>
          <p className="lesson-subtitle">
            214 bộ thủ, phân rã chữ Hán, liên kết Kanji–Hán, flashcard Minna 13–15 và tập viết.
          </p>
        </section>
        <KanjiRadicalLearning />
      </main>
    </>
  );
}
