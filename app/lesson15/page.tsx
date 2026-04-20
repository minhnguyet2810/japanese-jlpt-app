'use client';

import { useState, useEffect } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import AdvancedSkillPractice from '@/components/AdvancedSkillPractice';
import { Sidebar } from '@/components/Sidebar';
import { useUserState } from '@/store/useUserState';
import {
  lesson15,
  lesson15VocabQuizItems,
  lesson15GrammarQuizItems,
} from '@/data/lessons/lesson15';

import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson15Page() {
  const isLocked = useUserState((s) => s.isLessonLockedForUser('lesson15'));
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  // Tránh mismatch SSR/CSR do Zustand rehydrate isVip khác nhau
  const [mounted, setMounted] = useState(false);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [speakingList] = useState(() => getSpeakingSentences(lesson15.sentences, 10));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const jobs = lesson15.words.filter((w) => w.category === 'job');
  const family = lesson15.words.filter((w) => w.category === 'family');
  const verbs = lesson15.words.filter((w) => w.category === 'verb');
  const expressions = lesson15.words.filter((w) => w.category === 'expression');

  const currentVocab = lesson15VocabQuizItems[vocabIndex];
  const currentGrammar = lesson15GrammarQuizItems[grammarIndex];

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson15" />
      <div className="sb-content">

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 15 thuộc nhóm VIP (từ Bài 13 trở đi). Nâng cấp để mở khóa toàn bộ bài học N5–N2.
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
            <h1 className="lesson-title">{lesson15.title}</h1>
            <p className="lesson-subtitle">{lesson15.description}</p>
          </section>

          {/* Nghề nghiệp */}
          <section className="card vocab-card">
            <div className="card-header">
              <h2>Nghề nghiệp</h2>
              <p className="section-caption">
                Bám sát trang 「職業（Nghề nghiệp）」 trong Minna – dùng để luyện mẫu câu Vています.
              </p>
            </div>
            <div className="vocab-grid triple-vocab-grid">
              {jobs.map((w) => (
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

          {/* Gia đình */}
          <section className="card vocab-card">
            <div className="card-header">
              <h2>Từ vựng về gia đình</h2>
            </div>
            <div className="vocab-grid triple-vocab-grid">
              {family.map((w) => (
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

          {/* Động từ & biểu hiện cho Vて */}
          <section className="card vocab-card">
            <div className="card-header">
              <h2>Động từ &amp; biểu hiện dùng với Vて</h2>
            </div>
            <div className="vocab-grid triple-vocab-grid">
              {verbs.map((w) => (
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
              {expressions.map((w) => (
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

          {/* Ngữ pháp */}
          <section className="card grammar-card">
            <div className="card-header">
              <h2>IV. Giải thích ngữ pháp – Bài 15</h2>
            </div>
            <div className="card-body">
              <p className="grammar-pattern">📘 {lesson15.grammarSummary}</p>
              <div className="grammar-detail">
                {lesson15.grammarPoints.map((point) => (
                  <div key={point.title}>
                    <h3 className="grammar-subtitle">{point.title}</h3>
                    <p className="grammar-note">{point.body}</p>
                    {point.note && (
                      <p
                        className="grammar-note"
                        style={{ fontStyle: 'italic', marginTop: '0.25rem' }}
                      >
                        Chú ý: {point.note}
                      </p>
                    )}
                    {point.examples.length > 0 && (
                      <ul className="grammar-list">
                        {point.examples.map((ex) => (
                          <li key={ex}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <h3 className="grammar-subtitle">Ví dụ &amp; mẫu câu</h3>
                <div className="grammar-examples">
                  {lesson15.sentences.map((s) => (
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

          {/* Hội thoại Gia đình anh thế nào? */}
          <section className="card practice-card">
            <div className="card-header">
              <h2>Hội thoại：Gia đình anh thế nào？</h2>
            </div>
            <div className="card-body practice-body">
              {lesson15.dialogue.map((turn, idx) => (
                <div key={`${turn.speaker}-${idx}`} className="grammar-example-row">
                  <div>
                    <div className="grammar-subtitle" style={{ marginBottom: '0.25rem' }}>
                      {turn.speaker}
                    </div>
                    <div className="jp">{turn.japanese}</div>
                    <div className="romaji">{turn.romaji}</div>
                    <div className="vi">{turn.vietnamese}</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow(turn.japanese)}
                  >
                    🔊 Nghe
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Mini game: từ vựng nghề nghiệp & gia đình */}
          <section className="card practice-card">
            <div className="card-header">
              <h2>Mini game 1: Từ vựng Bài 15（Nghề nghiệp &amp; gia đình）</h2>
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
              {vocabSelected != null && currentVocab.explanationVi && (
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
                  <strong>Giải thích:</strong> {currentVocab.explanationVi}
                </div>
              )}
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setVocabSelected(null);
                    setVocabIndex((prev) => (prev + 1) % lesson15VocabQuizItems.length);
                  }}
                >
                  Câu khác →
                </button>
              </div>
            </div>
          </section>

          {/* Mini game: ngữ pháp */}
          <section className="card practice-card">
            <div className="card-header">
              <h2>Mini game 2: Ngữ pháp Bài 15（Vてもいいです・Vてはいけません・Vています）</h2>
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
                      onClick={() => {
                        setGrammarSelected(idx);
                      }}
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
                    setGrammarIndex((prev) => (prev + 1) % lesson15GrammarQuizItems.length);
                  }}
                >
                  Câu khác →
                </button>
              </div>
            </div>
          </section>

          {/* Speaking & Listening */}
          <SpeakingGameMulti sentences={speakingList} />

          <ListeningDictation
            items={lesson15.sentences.slice(0, 5).map((s) => ({
              japanese: s.japanese,
              romaji: s.romaji,
              vietnamese: s.vietnamese,
            }))}
            onSpeak={speakJapaneseNow}
            title="Luyện nghe – Bài 15（Vてもいいです／Vてはいけません／Vています）"
          />

          <WritingChallenge
            title="Writing Challenge – Bài 15"
            sectionCaption="Viết 3–5 câu giới thiệu về gia đình mình, dùng Vてもいいです／Vてはいけません／Vています."
            tips={
              <ul className="grammar-list">
                <li>Ít nhất 1 câu xin phép/cho phép: ～てもいいです。</li>
                <li>Ít nhất 1 câu cấm đoán: ～てはいけません。</li>
                <li>Ít nhất 1 câu giới thiệu nghề nghiệp hoặc nơi ở với Vています.</li>
              </ul>
            }
            placeholder={`ここで写真を撮ってもいいですか。\\n弟は大学で経済を勉強しています。\\n父は会社員で、大阪に住んでいます。`}
            rows={4}
            lessonId="B15"
            grammarContext="Vてもいいです, Vてはいけません, Vています（nghề nghiệp・gia đình）"
          />

          <AdvancedSkillPractice
            lessonCode="B15"
            lesson={lesson15}
            topicVi="gia đình, nghề nghiệp và phép lịch sự"
            grammarFocus={['Vてもいいです', 'Vてはいけません', 'Vています']}
            onSpeak={speakJapaneseNow}
          />
        </main>
      )}
    </div>
    </div>
  );
}