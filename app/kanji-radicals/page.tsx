'use client';

import { Sidebar } from '@/components/Sidebar';
import { KanjiRadicalLearning } from '@/components/KanjiRadicalLearning';

export default function KanjiRadicalsPage() {
  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="kanji-radicals" />
      <div className="sb-content">
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Học Kanji – Bộ thủ &amp; Phân rã</h1>
          <p className="lesson-subtitle">
            214 bộ thủ, phân rã chữ Hán, liên kết Kanji–Hán, flashcard Minna 13–15 và tập viết.
          </p>
        </section>
        <KanjiRadicalLearning />
      </main>
    </div>
    </div>
  );
}