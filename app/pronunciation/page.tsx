'use client';

import { Sidebar } from '@/components/Sidebar';
import { PronunciationDeepDive } from '@/components/PronunciationDeepDive';

export default function PronunciationPage() {
  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="pronunciation" />
      <div className="sb-content">
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Chuyên sâu Quy tắc Phát âm</h1>
          <p className="lesson-subtitle">
            Trường âm (長音), âm ngắt (促音), cao độ (高低): quy tắc, ví dụ từ đọc giống nhau khác nghĩa, nhịp điệu và kiểm tra phát âm bằng AI.
          </p>
        </section>
        <PronunciationDeepDive />
      </main>
    </div>
    </div>
  );
}