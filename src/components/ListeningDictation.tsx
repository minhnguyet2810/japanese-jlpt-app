'use client';

import { useState } from 'react';

export interface DictationItem {
  japanese: string;
  romaji?: string;
  vietnamese?: string;
}

export interface ListeningDictationProps {
  items: DictationItem[];
  onSpeak: (text: string) => void;
  title?: string;
}

function normalizeForCompare(s: string): string {
  return s.replace(/[。、.,!?！？\s]/g, '').trim();
}

export default function ListeningDictation({
  items,
  onSpeak,
  title = 'Luyện nghe – Chép chính tả',
}: ListeningDictationProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const total = items.length;
  const current = items[index];
  const isCorrect =
    checked && normalizeForCompare(input) === normalizeForCompare(current.japanese);

  const handleCheck = () => {
    if (!current) return;
    setChecked(true);
    if (normalizeForCompare(input) === normalizeForCompare(current.japanese)) {
      setCompletedCount((c) => Math.min(c + 1, total));
    }
  };

  const handleNext = () => {
    setIndex((i) => (i + 1) % total);
    setInput('');
    setChecked(false);
  };

  const handlePlay = () => {
    if (current) onSpeak(current.japanese);
  };

  if (!current) return null;

  return (
    <section className="card practice-card">
      <div className="card-header">
        <h2>{title}</h2>
        <p className="section-caption">
          Nghe câu tiếng Nhật (bấm 🔊), chép lại vào ô bên dưới rồi bấm Kiểm tra. Luyện phản xạ nghe
          – viết.
        </p>
        <p className="progress-badge">
          Hoàn thành {completedCount}/{total}
        </p>
      </div>
      <div className="card-body practice-body">
        <div className="dictation-controls">
          <button type="button" className="primary-button listen-button" onClick={handlePlay}>
            🔊 Nghe câu {index + 1}/{total}
          </button>
        </div>
        <div className="dictation-input-row">
          <label htmlFor="dictation-input" className="dictation-label">
            Chép lại (tiếng Nhật):
          </label>
          <input
            id="dictation-input"
            type="text"
            className="dictation-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setChecked(false);
            }}
            placeholder="Gõ hoặc dán câu bạn nghe được..."
            disabled={checked && isCorrect}
          />
        </div>
        <div className="dictation-actions">
          <button
            type="button"
            className="primary-button"
            onClick={handleCheck}
            disabled={!input.trim()}
          >
            Kiểm tra
          </button>
          <button type="button" className="secondary-button" onClick={handleNext}>
            Câu tiếp →
          </button>
        </div>
        {checked && (
          <div className={`dictation-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
            {isCorrect ? (
              <>✅ Đúng rồi!</>
            ) : (
              <>
                ❌ Chưa đúng. Đáp án: <span className="jp">{current.japanese}</span>
                {current.romaji && (
                  <span className="dictation-romaji"> ({current.romaji})</span>
                )}
              </>
            )}
          </div>
        )}
        {current.romaji && !checked && (
          <p className="dictation-hint">Gợi ý romaji: {current.romaji}</p>
        )}
      </div>
    </section>
  );
}
