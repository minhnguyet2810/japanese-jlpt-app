'use client';

import { useState, useEffect } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { Sidebar } from '@/components/Sidebar';
import { useUserState } from '@/store/useUserState';
import {
  lesson14,
  lesson14VocabQuizItems,
  lesson14GrammarQuizItems,
} from '@/data/lessons/lesson14';

import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson14Page() {
  // Bài 14 là bài VIP (13+), dùng state VIP để khóa
  const isLocked = useUserState((s) => s.isLessonLockedForUser('lesson14'));
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  // Tránh mismatch SSR/CSR do Zustand rehydrate isVip khác nhau
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [speakingList] = useState(() => getSpeakingSentences(lesson14.sentences, 10));

  if (!mounted) return null;

  const verbs = lesson14.words.filter((w) => w.category === 'verb');
  const places = lesson14.words.filter((w) => w.category === 'place');
  const expressions = lesson14.words.filter((w) => w.category === 'expression');
  const phrases = lesson14.words.filter((w) => w.category === 'phrase');

  const currentVocab = lesson14VocabQuizItems[vocabIndex];
  const currentGrammar = lesson14GrammarQuizItems[grammarIndex];

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson14" />
      <div className="sb-content">

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 14 thuộc nhóm VIP (từ Bài 13 trở đi). Nâng cấp để mở khóa toàn bộ bài học N5–N2.
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
          <h1 className="lesson-title">{lesson14.title}</h1>
          <p className="lesson-subtitle">{lesson14.description}</p>
        </section>

        {/* Động từ thao tác */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ thao tác（つけます・消します・開けます・閉めます・急ぎます・待ちます・止めます…）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {verbs.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.kana)}
              >
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Từ vựng quanh nhà ga */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Quanh nhà ga（駅・切符売り場・改札口・出口・入口・東口・西口・北口・南口・中央口）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {places.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.kana)}
              >
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Biểu hiện & câu cảm thán */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Biểu hiện & câu cảm thán（ゆっくり・すぐ・もう少し・もう・いいですよ・さあ・あれ？）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {expressions.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.kana)}
              >
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {phrases.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.kana)}
              >
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Ngữ pháp & câu mẫu */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp – Bài 14</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson14.grammarSummary}</p>
            <div className="grammar-detail">
              {lesson14.grammarPoints.map((point) => (
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
                {lesson14.sentences.map((s) => (
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

        {/* Hội thoại */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại：タクシーで梅田へ（Cho tôi đến Umeda）</h2>
          </div>
          <div className="card-body practice-body">
            {lesson14.dialogue.map((turn, idx) => (
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

        {/* Mini game: từ vựng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Từ vựng Bài 14</h2>
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
                  setVocabIndex((prev) => (prev + 1) % lesson14VocabQuizItems.length);
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
            <h2>Mini game 2: Ngữ pháp Bài 14（Vてください・Vています・Vましょうか・NがV）</h2>
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
                  setGrammarIndex((prev) => (prev + 1) % lesson14GrammarQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        <SpeakingGameMulti sentences={speakingList} />

        <ListeningDictation
          items={lesson14.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Bài 14 (Vてください・Vています)"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 14"
          sectionCaption="Viết 3–5 câu dùng Vてください, Vています, Vましょうか, NがV."
          tips={
            <ul className="grammar-list">
              <li>Ít nhất 1 câu nhờ vả: ～てください。</li>
              <li>Ít nhất 1 câu “đang ~”: ～ています。</li>
              <li>Thử 1 câu đề nghị giúp: ～ましょうか。</li>
            </ul>
          }
          placeholder={`ちょっと待ってください。\\nミラーさんは今電話をかけています。\\n荷物を持ちましょうか。`}
          rows={4}
          lessonId="B14"
          grammarContext="Vてください, Vています, Vましょうか, NがV"
        />
      </main>
      )}
    </div>
    </div>
  );
}