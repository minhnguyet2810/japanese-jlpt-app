'use client';

import { useState } from 'react';
import type { Lesson0Data } from '../data/lessons/lesson0';

interface KanaFlashcardsProps {
  data: Lesson0Data;
}

import { speakJapaneseNow } from '@/lib/speakJapanese';

export function KanaFlashcards({ data }: KanaFlashcardsProps) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const card = data.cards[index];

  const goNext = () => {
    setShowBack(false);
    setIndex((prev) => (prev + 1) % data.cards.length);
  };

  const goPrev = () => {
    setShowBack(false);
    setIndex((prev) => (prev - 1 + data.cards.length) % data.cards.length);
  };

  return (
    <section className="card kana-card">
      <div className="card-header">
        <h2>{data.title}</h2>
        <p className="section-caption">{data.description}</p>
      </div>

      <div className="card-body kana-body">
        <div className="kana-main">
          <div className="kana-char-wrapper" onClick={() => setShowBack((s) => !s)}>
            {!showBack ? (
              <div className="kana-front">
                <div className="kana-label">Hiragana</div>
                <div className="kana-char jp">{card.hiragana}</div>
              </div>
            ) : (
              <div className="kana-back">
                <div className="kana-back-row">
                  <span className="kana-label">Katakana</span>
                  <span className="kana-char-small jp">{card.katakana}</span>
                </div>
                <div className="kana-back-row">
                  <span className="kana-label">Romaji</span>
                  <span className="kana-romaji">{card.romaji}</span>
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            className="listen-button"
            onClick={() => speakJapaneseNow(card.hiragana)}
          >
            🔊 Nghe âm {card.romaji}
          </button>
        </div>

        <div className="kana-example">
          <div className="kana-example-label">Ví dụ</div>
          <div className="jp kana-example-jp">{card.exampleJa}</div>
          <div className="kana-example-vi">{card.exampleVi}</div>
        </div>

        <div className="kana-controls">
          <button type="button" className="secondary-button" onClick={goPrev}>
            ← Trước
          </button>
          <div className="kana-progress">
            Thẻ {index + 1}/{data.cards.length}
          </div>
          <button type="button" className="primary-button" onClick={goNext}>
            Tiếp →
          </button>
        </div>
      </div>
    </section>
  );
}

