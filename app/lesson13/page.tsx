'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { Sidebar } from '@/components/Sidebar';
import { useUserState } from '@/store/useUserState';
import {
  lesson13,
  lesson13VocabQuizItems,
  lesson13GrammarQuizItems,
  lesson13BuilderItems,
  lesson13DialogueQuizItems,
} from '@/data/lessons/lesson13';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson13Page() {
  const isLocked = useUserState((s) => s.isLessonLockedForUser('lesson13'));
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  const verbs = lesson13.words.filter((w) => w.category === 'verb');
  const adjI = lesson13.words.filter((w) => w.category === 'adjI');
  const adjNa = lesson13.words.filter((w) => w.category === 'adjNa');
  const nouns = lesson13.words.filter((w) => w.category === 'noun');
  const places = lesson13.words.filter((w) => w.category === 'place');
  const expressions = lesson13.words.filter((w) => w.category === 'expression');
  const phrases = lesson13.words.filter((w) => w.category === 'phrase');
  const food = lesson13.words.filter((w) => w.category === 'food');

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [builderIndex, setBuilderIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueSelected, setDialogueSelected] = useState<number | null>(null);

  const [gameCompleted, setGameCompleted] = useState({
    dialogue: false,
    vocab: false,
    grammar: false,
    builder: false,
  });
  const gamesDone =
    (gameCompleted.dialogue ? 1 : 0) +
    (gameCompleted.vocab ? 1 : 0) +
    (gameCompleted.grammar ? 1 : 0) +
    (gameCompleted.builder ? 1 : 0);
  const [speakingList] = useState(() => getSpeakingSentences(lesson13.sentences, 10));

  const currentVocab = lesson13VocabQuizItems[vocabIndex];
  const currentGrammar = lesson13GrammarQuizItems[grammarIndex];
  const currentBuilder = lesson13BuilderItems[builderIndex];
  const currentDialogue = lesson13DialogueQuizItems[dialogueIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson13" />
      <div className="sb-content">

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 13 trở đi dành cho thành viên VIP. Nâng cấp để mở khóa toàn bộ bài học N5–N2.
            </p>
            <button type="button" onClick={() => setOpenVipModal(true)} className="vip-cta" style={{ maxWidth: '280px' }}>
              Nâng cấp VIP — 199k
            </button>
          </div>
        </main>
      ) : (
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson13.title}</h1>
          <p className="lesson-subtitle">{lesson13.description}</p>
        </section>

        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ（遊びます・泳ぎます・迎えます・疲れます・出します・入ります・出ます・結婚します・買い物します・食事します・散歩します）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {verbs.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ（大変［な］・欲しい・寂しい・広い・狭い）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {adjNa.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {adjI.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="card vocab-card">
          <div className="card-header">
            <h2>Danh từ & địa điểm（市役所・プール・川・経済・美術・釣り・スキー・会議・登録・週末・喫茶店・コンビニ・スーパー・デパート・大使館・博物館・美術館・公園）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {nouns.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {places.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="card vocab-card">
          <div className="card-header">
            <h2>Cụm & hội thoại（～ごろ・なにか・どこか・おなかがすきました・そうですね・そうしましょう・ご注文は・定食・牛どん・別々に・お待ちください）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {expressions.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {phrases.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {food.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
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
            <h2>IV. Giải thích ngữ pháp</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson13.grammarSummary}</p>
            <div className="grammar-detail">
              {lesson13.grammarPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="grammar-subtitle">{point.title}</h3>
                  <p className="grammar-note">{point.body}</p>
                  {point.note != null && point.note !== '' && (
                    <p className="grammar-note" style={{ fontStyle: 'italic', marginTop: '0.25rem' }}>Chú ý: {point.note}</p>
                  )}
                  {point.examples.length > 0 && (
                    <ul className="grammar-list">
                      {point.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <h3 className="grammar-subtitle">Ví dụ &amp; mẫu câu</h3>
              <div className="grammar-examples">
                {lesson13.sentences.map((s) => (
                  <div key={s.japanese} className="grammar-example-row">
                    <div>
                      <div className="jp">{s.japanese}</div>
                      <div className="romaji">{s.romaji}</div>
                      <div className="vi">{s.vietnamese}</div>
                    </div>
                    <button className="listen-button" type="button" onClick={() => speakJapaneseNow(s.japanese)}>🔊 Nghe</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại（会話）</h2>
            <p className="section-caption">Chị tính riêng ra cho ạ – Yamada, Miller đi ăn trưa, Tsuru-ya, Tempura &amp; 牛どん, thanh toán riêng.</p>
          </div>
          <div className="card-body practice-body">
            {lesson13.dialogue.map((turn) => (
              <div key={turn.japanese} className="grammar-example-row">
                <div>
                  <div className="grammar-subtitle" style={{ marginBottom: '0.25rem' }}>{turn.speaker}</div>
                  <div className="jp">{turn.japanese}</div>
                  <div className="romaji">{turn.romaji}</div>
                  <div className="vi">{turn.vietnamese}</div>
                </div>
                <button className="listen-button" type="button" onClick={() => speakJapaneseNow(turn.japanese)}>🔊 Nghe</button>
              </div>
            ))}
          </div>
        </section>

        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/4</p>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Hiểu hội thoại Bài 13</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Câu hỏi: <strong>{currentDialogue.questionVi}</strong></p>
            </div>
            <div className="practice-options">
              {currentDialogue.options.map((opt, i) => {
                const isCorrect = i === currentDialogue.correctIndex;
                const selectedNow = dialogueSelected === i;
                const className = 'practice-option' + (dialogueSelected != null ? selectedNow && isCorrect ? ' correct' : selectedNow && !isCorrect ? ' wrong' : '' : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setDialogueSelected(i);
                      if (i === currentDialogue.correctIndex) setGameCompleted((prev) => ({ ...prev, dialogue: true }));
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {dialogueSelected != null && currentDialogue.explanationVi && (
              <div className="grammar-note" style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#f0f9ff', borderRadius: '6px', borderLeft: '3px solid #0ea5e9' }}>
                <strong>Giải thích:</strong> {currentDialogue.explanationVi}
              </div>
            )}
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setDialogueSelected(null); setDialogueIndex((prev) => (prev + 1) % lesson13DialogueQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Từ vựng Bài 13（10 câu）</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Nghĩa: <strong>{currentVocab.vi}</strong></p>
            </div>
            <div className="practice-options">
              {currentVocab.options.map((opt, idx) => {
                const isCorrect = idx === currentVocab.correctIndex;
                const selectedNow = vocabSelected === idx;
                const className = 'practice-option' + (vocabSelected != null ? selectedNow && isCorrect ? ' correct' : selectedNow && !isCorrect ? ' wrong' : '' : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setVocabSelected(idx);
                      if (idx === currentVocab.correctIndex) setGameCompleted((prev) => ({ ...prev, vocab: true }));
                      speakJapaneseNow(opt);
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {vocabSelected != null && currentVocab.explanationVi && (
              <div className="grammar-note" style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#f0f9ff', borderRadius: '6px', borderLeft: '3px solid #0ea5e9' }}>
                <strong>Giải thích:</strong> {currentVocab.explanationVi}
              </div>
            )}
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setVocabSelected(null); setVocabIndex((prev) => (prev + 1) % lesson13VocabQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 3: Ngữ pháp Bài 13（10 câu）</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Tiếng Việt: <strong>{currentGrammar.vi}</strong></p>
            </div>
            <div className="practice-options">
              {currentGrammar.options.map((opt, idx) => {
                const isCorrect = idx === currentGrammar.correctIndex;
                const selectedNow = grammarSelected === idx;
                const className = 'practice-option' + (grammarSelected != null ? selectedNow && isCorrect ? ' correct' : selectedNow && !isCorrect ? ' wrong' : '' : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setGrammarSelected(idx);
                      if (idx === currentGrammar.correctIndex) setGameCompleted((prev) => ({ ...prev, grammar: true }));
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {grammarSelected != null && currentGrammar.explanationVi && (
              <div className="grammar-note" style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#f0f9ff', borderRadius: '6px', borderLeft: '3px solid #0ea5e9' }}>
                <strong>Giải thích:</strong> {currentGrammar.explanationVi}
              </div>
            )}
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setGrammarSelected(null); setGrammarIndex((prev) => (prev + 1) % lesson13GrammarQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 4: Ghép câu Bài 13（5 câu）</h2>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentBuilder.vi}</div>
              <div className="builder-hint">Gợi ý: {currentBuilder.hint}</div>
              <button className="listen-button" type="button" onClick={() => speakJapaneseNow(currentBuilder.tokens.join(''))}>🔊 Nghe đáp án mẫu</button>
            </div>
            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{builderText || '・・・'}</div>
                {builderChecked && (
                  <div className="builder-feedback">
                    {isBuilderCorrect ? <span className="correct-text">✅ Chính xác!</span> : <span className="wrong-text">❌ Chưa đúng. Đáp án: {currentBuilder.tokens.join(' ')}</span>}
                  </div>
                )}
                <div className="builder-actions">
                  <button className="primary-button" type="button" disabled={!builderTokens.length} onClick={() => { if (!builderTokens.length) return; setBuilderChecked(true); if (isBuilderCorrect) { setGameCompleted((prev) => ({ ...prev, builder: true })); speakJapaneseNow(builderTokens.join('')); } }}>Kiểm tra câu</button>
                  <button className="secondary-button" type="button" onClick={() => { setBuilderTokens([]); setBuilderChecked(false); }}>Xoá câu</button>
                  <button className="secondary-button" type="button" onClick={() => { setBuilderIndex((prev) => (prev + 1) % lesson13BuilderItems.length); setBuilderTokens([]); setBuilderChecked(false); }}>Câu khác →</button>
                </div>
              </div>
              <div className="builder-tokens">
                {builderOptions.map((t) => (
                  <button key={t} type="button" className="token-chip" onClick={() => { if (!builderChecked) setBuilderTokens((prev) => [...prev, t]); }}>
                    <span className="token-jp">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SpeakingGameMulti sentences={speakingList} />

        <ListeningDictation
          items={lesson13.sentences.slice(0, 5).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 13"
          sectionCaption="Viết 3–5 câu: N が 欲しいです, Vたいです, N へ Vに 行きます, どこか／なにか."
          tips={
            <ul className="grammar-list">
              <li>Muốn có: わたしは〇〇が欲しいです。</li>
              <li>Muốn làm: 〇〇へ行きたいです。／〇〇を食べたいです。</li>
              <li>Mục đích: 神戸へ買い物に行きます。</li>
            </ul>
          }
          placeholder={`わたしはパソコンが欲しいです。\n夏休みは沖縄へ行きたいです。\nのどがかわきましたから、何か飲みたいです。`}
          rows={4}
          lessonId="B13"
          grammarContext="N が 欲しいです, Vます たいです, N へ Vに 行きます, に 入ります／を 出ます, どこか／なにか"
        />
      </main>
      )}
    </div>
    </div>
  );
}