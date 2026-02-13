import { useMemo, useState } from 'react';
import type { LessonWord } from '../data/lessons/lesson1';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export interface PracticeWordProps {
  word: LessonWord;
  allWords: LessonWord[];
  onNext: () => void;
  /** Nếu có, hiện nút nghe phát âm (mặc định dùng speakJapaneseNow) */
  onSpeak?: (text: string) => void;
}

type Step = 'intro' | 'meaningChoice' | 'japaneseChoice' | 'done';

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

const defaultSpeak = (text: string) => speakJapaneseNow(text);

export function PracticeWord({ word, allWords, onNext, onSpeak = defaultSpeak }: PracticeWordProps) {
  const [step, setStep] = useState<Step>('intro');
  const [meaningAnswer, setMeaningAnswer] = useState<string | null>(null);
  const [japaneseAnswer, setJapaneseAnswer] = useState<string | null>(null);

  const meaningOptions = useMemo(() => {
    const otherMeanings = allWords
      .filter((w) => w.japanese !== word.japanese)
      .map((w) => w.vietnamese);
    const candidates = shuffle(otherMeanings).slice(0, 2);
    return shuffle([word.vietnamese, ...candidates]);
  }, [allWords, word.japanese, word.vietnamese]);

  const japaneseOptions = useMemo(() => {
    const others = allWords.filter((w) => w.japanese !== word.japanese);
    const candidates = shuffle(others).slice(0, 2).map((w) => w.japanese);
    return shuffle([word.japanese, ...candidates]);
  }, [allWords, word.japanese]);

  const isMeaningCorrect = meaningAnswer === word.vietnamese;
  const isJapaneseCorrect = japaneseAnswer === word.japanese;

  return (
    <div className="card practice-card">
      <div className="card-header">
        <h2>Luyện từ: {word.japanese}</h2>
        <p className="section-caption">
          Học từng bước: hiểu nghĩa → chọn đáp án đúng → củng cố nhớ lâu hơn.
        </p>
      </div>

      {step === 'intro' && (
        <div className="card-body">
          <div className="practice-intro-jp jp">{word.japanese}</div>
          <div className="practice-intro-romaji">{word.romaji}</div>
          <div className="practice-intro-vi">{word.vietnamese}</div>
          <button
            type="button"
            className="listen-button"
            onClick={() => onSpeak(word.japanese)}
            title="Nghe phát âm"
          >
            🔊 Nghe phát âm
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => setStep('meaningChoice')}
          >
            Bắt đầu làm bài
          </button>
        </div>
      )}

      {step === 'meaningChoice' && (
        <div className="card-body practice-body">
          <p className="practice-question">
            <span className="jp">{word.japanese}</span>
            <button type="button" className="listen-button small" onClick={() => onSpeak(word.japanese)} title="Nghe">🔊</button>
            {' '}có nghĩa là gì?
          </p>
          <div className="practice-options">
            {meaningOptions.map((opt) => {
              const isSelected = meaningAnswer === opt;
              const isCorrectOpt = opt === word.vietnamese;
              return (
                <button
                  key={opt}
                  type="button"
                  className={[
                    'practice-option',
                    isSelected && isCorrectOpt && 'correct',
                    isSelected && !isCorrectOpt && 'wrong',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setMeaningAnswer(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {meaningAnswer && (
            <div className="practice-feedback">
              {isMeaningCorrect ? 'Chuẩn rồi! Tiếp tục thử thách tiếp theo.' : 'Chưa đúng, thử lại nhé.'}
            </div>
          )}
          <div className="practice-actions">
            <button
              type="button"
              className="primary-button"
              disabled={!isMeaningCorrect}
              onClick={() => setStep('japaneseChoice')}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}

      {step === 'japaneseChoice' && (
        <div className="card-body practice-body">
          <p className="practice-question">
            Từ tiếng Nhật nào có nghĩa là: <strong>{word.vietnamese}</strong>?
          </p>
          <div className="practice-options">
            {japaneseOptions.map((opt) => {
              const isSelected = japaneseAnswer === opt;
              const isCorrectOpt = opt === word.japanese;
              return (
                <button
                  key={opt}
                  type="button"
                  className={[
                    'practice-option',
                    isSelected && isCorrectOpt && 'correct',
                    isSelected && !isCorrectOpt && 'wrong',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setJapaneseAnswer(opt)}
                >
                  <span className="jp">{opt}</span>
                  <span
                    className="listen-inline"
                    role="button"
                    tabIndex={0}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      ev.preventDefault();
                      onSpeak(opt);
                    }}
                    onKeyDown={(ev) => {
                      if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        ev.stopPropagation();
                        onSpeak(opt);
                      }
                    }}
                    title="Nghe phát âm"
                  >
                    {' '}🔊
                  </span>
                </button>
              );
            })}
          </div>
          {japaneseAnswer && (
            <div className="practice-feedback">
              {isJapaneseCorrect
                ? 'Tuyệt vời! Bạn đã nắm được từ này.'
                : 'Còn nhầm một chút, thử lại nhé.'}
            </div>
          )}
          <div className="practice-actions">
            <button
              type="button"
              className="primary-button"
              disabled={!isJapaneseCorrect}
              onClick={() => {
                setMeaningAnswer(null);
                setJapaneseAnswer(null);
                setStep('intro');
                onNext();
              }}
            >
              Sang từ tiếp theo →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

