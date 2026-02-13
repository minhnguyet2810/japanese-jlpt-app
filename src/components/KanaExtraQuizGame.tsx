'use client';

import { useMemo, useState } from 'react';
import type { ExtraKana } from '../data/lessons/lesson0';

interface KanaExtraQuizGameProps {
  rows: ExtraKana[];
}

export function KanaExtraQuizGame({ rows }: KanaExtraQuizGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const safeRows = rows.length > 0 ? rows : [];
  const row = safeRows[index % safeRows.length];

  const options = useMemo(() => {
    if (!row) return [];
    const others = safeRows
      .filter((r) => r.romaji !== row.romaji)
      .map((r) => r.romaji);
    const picked = others.slice(0, 2);
    const all = [row.romaji, ...picked];
    return Array.from(new Set(all)).sort();
  }, [safeRows, row]);

  const isCorrect = row && selected === row.romaji;

  const goNext = () => {
    setSelected(null);
    if (safeRows.length > 0) {
      const next = Math.floor(Math.random() * safeRows.length);
      setIndex(next);
    }
  };

  if (!row) return null;

  return (
    <section className="card kana-extra-card">
      <div className="card-header">
        <h2>Game: âm đục & âm ghép</h2>
        <p className="section-caption">
          Nhìn dãy kana (hiragana + katakana) và chọn nhóm romaji phù hợp (ga gi gu…, kya kyu…).
        </p>
      </div>
      <div className="card-body kana-extra-quiz-body">
        <div className="kana-extra-quiz-question">
          <div className="kana-extra-label">{row.label}</div>
          <div className="kana-extra-jp jp">{row.hiragana}</div>
          <div className="kana-extra-jp jp">{row.katakana}</div>
        </div>

        <div className="kana-extra-quiz-options">
          {options.map((opt) => {
            const isSelected = selected === opt;
            const correctOpt = opt === row.romaji;
            return (
              <button
                key={opt}
                type="button"
                className={[
                  'kana-quiz-option',
                  isSelected && correctOpt && 'correct',
                  isSelected && !correctOpt && 'wrong',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="kana-quiz-feedback">
          {selected === null
            ? 'Chọn nhóm romaji tương ứng với các âm trên.'
            : isCorrect
            ? 'Đúng rồi! Bạn đã nắm được nhóm âm này.'
            : `Chưa đúng, đáp án là: ${row.romaji}.`}
        </div>

        <div className="kana-quiz-actions">
          <button
            type="button"
            className="primary-button"
            disabled={selected === null}
            onClick={goNext}
          >
            Nhóm tiếp theo →
          </button>
        </div>
      </div>
    </section>
  );
}

