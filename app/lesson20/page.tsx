'use client';

import { useEffect, useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import AdvancedSkillPractice from '@/components/AdvancedSkillPractice';
import { LessonNav } from '@/components/LessonNav';
import { useUserState } from '@/store/useUserState';
import {
  lesson20,
  lesson20VocabQuizItems,
  lesson20GrammarQuizItems,
} from '@/data/lessons/lesson20';

import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson20Page() {
  const isLocked = useUserState((s) => s.isLessonLockedForUser('lesson20'));
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  const [mounted, setMounted] = useState(false);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [speakingList] = useState(() => getSpeakingSentences(lesson20.sentences, 10));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const verbs = lesson20.words.filter((w) => w.category === 'verb');
  const nouns = lesson20.words.filter((w) => w.category === 'noun');
  const pronouns = lesson20.words.filter((w) => w.category === 'pronoun');
  const expressions = lesson20.words.filter((w) => w.category === 'expression');
  const currentVocab = lesson20VocabQuizItems[vocabIndex];
  const currentGrammar = lesson20GrammarQuizItems[grammarIndex];

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson20" />
        </div>
      </header>

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 20 thuộc nhóm VIP (từ Bài 13 trở đi). Nâng cấp để mở khóa toàn bộ bài học N5–N2.
            </p>
            <button
              type="button"
              onClick={() => setOpenVipModal(true)}
              className="vip-cta"
              style={{ maxWidth: '280px' }}
            >
              Nâng cấp VIP — 199k
            </button>
          </div>
        </main>
      ) : (
        <main className="lesson-page">
          <section className="lesson-hero">
            <h1 className="lesson-title">{lesson20.title}</h1>
            <p className="lesson-subtitle">{lesson20.description}</p>
          </section>

          <section className="card vocab-card">
            <div className="card-header">
              <h2>I. Từ vựng chính Bài 20</h2>
            </div>
            <div className="vocab-grid triple-vocab-grid">
              {[...verbs, ...nouns, ...pronouns, ...expressions].map((w) => (
                <button
                  key={w.japanese}
                  type="button"
                  className="vocab-item vocab-flashcard triple-vocab-card"
                  onClick={() => speakJapaneseNow(w.japanese)}
                >
                  <div className="triple-main">{w.japanese}</div>
                  <div className="triple-kana">{w.kana}</div>
                  <div className="triple-romaji">{w.romaji}</div>
                  <span className="vocab-vi">{w.vietnamese}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="card grammar-card">
            <div className="card-header">
              <h2>IV. Giải thích ngữ pháp – Bài 20</h2>
            </div>
            <div className="card-body">
              <p className="grammar-pattern">📘 {lesson20.grammarSummary}</p>
              <div className="grammar-detail">
                {lesson20.grammarPoints.map((point) => (
                  <div key={point.title}>
                    <h3 className="grammar-subtitle">{point.title}</h3>
                    <p className="grammar-note">{point.body}</p>
                    {point.examples.length > 0 && (
                      <ul className="grammar-list">
                        {point.examples.map((ex) => (
                          <li key={ex}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <h3 className="grammar-subtitle">Mẫu câu theo sách</h3>
                <div className="grammar-examples">
                  {lesson20.sentences.map((s) => (
                    <div key={s.japanese} className="grammar-example-row">
                      <div>
                        <div className="jp">{s.japanese}</div>
                        <div className="romaji">{s.romaji}</div>
                        <div className="vi">{s.vietnamese}</div>
                      </div>
                      <button
                        className="listen-button"
                        type="button"
                        onClick={() => speakJapaneseNow(s.japanese)}
                      >
                        🔊 Nghe
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="card practice-card">
            <div className="card-header">
              <h2>Hội thoại: Nghỉ hè cậu làm gì?</h2>
            </div>
            <div className="card-body practice-body">
              {lesson20.dialogue.map((turn, idx) => (
                <div key={`${turn.speaker}-${idx}`} className="grammar-example-row">
                  <div>
                    <div className="grammar-subtitle" style={{ marginBottom: '0.25rem' }}>
                      {turn.speaker}
                    </div>
                    <div className="jp">{turn.japanese}</div>
                    <div className="romaji">{turn.romaji}</div>
                    <div className="vi">{turn.vietnamese}</div>
                  </div>
                  <button className="listen-button" type="button" onClick={() => speakJapaneseNow(turn.japanese)}>
                    🔊 Nghe
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="card practice-card">
            <div className="card-header">
              <h2>Mini game 1: Từ vựng Bài 20</h2>
            </div>
            <div className="card-body practice-body">
              <div className="practice-prompt">
                <p className="practice-question">
                  Nghĩa tiếng Việt: <strong>{currentVocab.vi}</strong>
                </p>
              </div>
              <div className="practice-options">
                {currentVocab.options.map((opt, idx) => {
                  const isCorrect = idx === currentVocab.correctIndex;
                  const selectedNow = vocabSelected === idx;
                  const className =
                    'practice-option' +
                    (vocabSelected != null
                      ? selectedNow && isCorrect
                        ? ' correct'
                        : selectedNow && !isCorrect
                        ? ' wrong'
                        : ''
                      : '');
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={className}
                      onClick={() => {
                        setVocabSelected(idx);
                        speakJapaneseNow(opt);
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setVocabSelected(null);
                    setVocabIndex((prev) => (prev + 1) % lesson20VocabQuizItems.length);
                  }}
                >
                  Câu khác →
                </button>
              </div>
            </div>
          </section>

          <section className="card practice-card">
            <div className="card-header">
              <h2>Mini game 2: Ngữ pháp Bài 20</h2>
            </div>
            <div className="card-body practice-body">
              <div className="practice-prompt">
                <p className="practice-question">
                  Tiếng Việt: <strong>{currentGrammar.vi}</strong>
                </p>
              </div>
              <div className="practice-options">
                {currentGrammar.options.map((opt, idx) => {
                  const isCorrect = idx === currentGrammar.correctIndex;
                  const selectedNow = grammarSelected === idx;
                  const className =
                    'practice-option' +
                    (grammarSelected != null
                      ? selectedNow && isCorrect
                        ? ' correct'
                        : selectedNow && !isCorrect
                        ? ' wrong'
                        : ''
                      : '');
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={className}
                      onClick={() => setGrammarSelected(idx)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {grammarSelected != null && currentGrammar.explanationVi && (
                <div
                  className="grammar-note"
                  style={{
                    marginTop: '0.75rem',
                    padding: '0.5rem 0.75rem',
                    background: '#f0f9ff',
                    borderRadius: '6px',
                    borderLeft: '3px solid #0ea5e9',
                  }}
                >
                  <strong>Giải thích:</strong> {currentGrammar.explanationVi}
                </div>
              )}
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setGrammarSelected(null);
                    setGrammarIndex((prev) => (prev + 1) % lesson20GrammarQuizItems.length);
                  }}
                >
                  Câu khác →
                </button>
              </div>
            </div>
          </section>

          <SpeakingGameMulti sentences={speakingList} />

          <ListeningDictation
            items={lesson20.sentences.slice(0, 5).map((s) => ({
              japanese: s.japanese,
              romaji: s.romaji,
              vietnamese: s.vietnamese,
            }))}
            onSpeak={speakJapaneseNow}
            title="Luyện nghe – Bài 20"
          />

          <WritingChallenge
            title="Writing Challenge – Bài 20"
            sectionCaption="Viết 4–6 câu hội thoại thân mật về kế hoạch cuối tuần hoặc kỳ nghỉ."
            tips={
              <ul className="grammar-list">
                <li>Dùng ít nhất 2 câu ở kiểu thông thường (plain form).</li>
                <li>Dùng 1 câu có けど để nối ý.</li>
                <li>Dùng 1 câu rút gọn 〜てる trong hội thoại.</li>
              </ul>
            }
            placeholder={`A: 週末、どこか行く？\nB: うん、富士山に行きたいけど、まだ調べてない。\nA: じゃ、今晩調べて、あとで電話するよ。`}
            rows={4}
            lessonId="B20"
            grammarContext="kiểu thông thường, câu hỏi thân mật, lược trợ từ, 〜てる, けど"
          />

          <AdvancedSkillPractice
            lessonCode="B20"
            lesson={lesson20}
            topicVi="hội thoại thân mật và kiểu thông thường"
            grammarFocus={['kiểu thông thường', 'lược trợ từ', '〜てる', 'けど']}
            onSpeak={speakJapaneseNow}
          />
        </main>
      )}
    </>
  );
}

