'use client';

import { useMemo, useState } from 'react';
import type { KanaCard } from '../data/lessons/lesson0';

interface KanaQuizGameProps {
  cards: KanaCard[];
}

type QuestionType = 'hiragana' | 'katakana';

export function KanaQuizGame({ cards }: KanaQuizGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionType, setQuestionType] = useState<QuestionType>('hiragana');
  const [selectedRomaji, setSelectedRomaji] = useState<string | null>(null);

  const safeCards = cards.length > 0 ? cards : [];
  const card = safeCards[currentIndex % safeCards.length];

  // Tạo đáp án cố định, không dùng Math.random trong render để tránh lỗi hydration
  const options = useMemo(() => {
    if (!card) return [];
    const others = safeCards
      .filter((c) => c.romaji !== card.romaji)
      .map((c) => c.romaji);
    const picked = others.slice(0, 2);
    const all = [card.romaji, ...picked];
    return Array.from(new Set(all)).sort(); // bỏ trùng + sắp xếp để ổn định
  }, [safeCards, card]);

  const isCorrect = card && selectedRomaji === card.romaji;

  const shownChar = questionType === 'hiragana' ? card?.hiragana : card?.katakana;
  const shownLabel = questionType === 'hiragana' ? 'Hiragana' : 'Katakana';

  const goNext = () => {
    setSelectedRomaji(null);
    // Random chọn chữ tiếp theo (chỉ chạy sau khi client đã hydrate, không gây lỗi hydration)
    if (safeCards.length > 0) {
      const next = Math.floor(Math.random() * safeCards.length);
      setCurrentIndex(next);
    }
    setQuestionType(Math.random() < 0.5 ? 'hiragana' : 'katakana');
  };

  return (
    <section className="card kana-quiz-card">
      <div className="card-header">
        <h2>Mini game: chọn romaji đúng</h2>
        <p className="section-caption">
          Hệ thống sẽ hiển thị ngẫu nhiên chữ hiragana hoặc katakana, bạn chọn romaji tương ứng.
        </p>
      </div>

      <div className="card-body kana-quiz-body">
        <div className="kana-quiz-question">
          <div className="kana-label">{shownLabel}</div>
          <div className="kana-char jp">{shownChar}</div>
        </div>

        <div className="kana-quiz-options">
          {options.map((opt) => {
            const isSelected = selectedRomaji === opt;
            const isOptCorrect = opt === card.romaji;
            return (
              <button
                key={opt}
                type="button"
                className={[
                  'kana-quiz-option',
                  isSelected && isOptCorrect && 'correct',
                  isSelected && !isOptCorrect && 'wrong',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setSelectedRomaji(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="kana-quiz-feedback">
          {selectedRomaji === null
            ? 'Chọn romaji bạn nghĩ là đúng.'
            : isCorrect
            ? 'Chuẩn rồi! Tiếp tục sang chữ tiếp theo.'
            : `Chưa đúng, đáp án đúng là "${card.romaji}".`}
        </div>

      {card && selectedRomaji !== null && (
        <div className="kana-quiz-answer">
          Đáp án: <span className="jp">{card.hiragana}</span> /{' '}
          <span className="jp">{card.katakana}</span> – <strong>{card.romaji}</strong>
        </div>
      )}

        <div className="kana-quiz-actions">
          <button
            type="button"
            className="primary-button"
            onClick={goNext}
            disabled={selectedRomaji === null}
          >
            Chữ tiếp theo →
          </button>
        </div>
      </div>
    </section>
  );
}

