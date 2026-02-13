'use client';

import { useState, useCallback } from 'react';
import { SpeakingGame } from './SpeakingGame';
import type { SpeakingSentence } from '@/data/speakingPool';

export interface SpeakingGameMultiProps {
  /** Khoảng 10 câu (đã trộn bài học + trường âm, âm đục, âm ngắt, âm ghép) */
  sentences: SpeakingSentence[];
  /** Gọi khi user hoàn thành một lần thử (tùy chọn) */
  onProgress?: (completed: number, total: number) => void;
}

export function SpeakingGameMulti({ sentences, onProgress }: SpeakingGameMultiProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attemptedSet, setAttemptedSet] = useState<Set<number>>(new Set());

  const total = sentences.length;
  const current = sentences[currentIndex];
  const completedCount = attemptedSet.size;

  const handleAttemptComplete = useCallback(() => {
    setAttemptedSet((prev) => {
      const next = new Set(prev);
      next.add(currentIndex);
      onProgress?.(next.size, total);
      return next;
    });
  }, [currentIndex, total, onProgress]);

  if (!current || total === 0) return null;

  return (
    <div className="speaking-multi">
      <SpeakingGame
        key={currentIndex}
        target={current}
        progressTotal={total}
        progressCompleted={completedCount}
        onAttemptComplete={handleAttemptComplete}
      />
      <div className="speaking-multi-nav">
        <span className="speaking-multi-counter">
          Câu {currentIndex + 1}/{total}
        </span>
        {currentIndex < total - 1 ? (
          <button
            type="button"
            className="primary-button speaking-multi-next"
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Câu tiếp theo →
          </button>
        ) : (
          <span className="speaking-multi-done">Đã xem hết {total} câu. Bạn có thể quay lại câu trước để luyện thêm.</span>
        )}
        {currentIndex > 0 && (
          <button
            type="button"
            className="secondary-button"
            onClick={() => setCurrentIndex((i) => i - 1)}
            style={{ marginLeft: '0.5rem' }}
          >
            ← Câu trước
          </button>
        )}
      </div>
    </div>
  );
}
