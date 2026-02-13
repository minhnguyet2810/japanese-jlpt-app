'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGame } from '@/components/SpeakingGame';
import ListeningDictation from '@/components/ListeningDictation';
import { LessonNav } from '@/components/LessonNav';
import { useUserState } from '@/store/useUserState';
import {
  lesson12,
  lesson12VocabQuizItems,
  lesson12GrammarQuizItems,
  lesson12BuilderItems,
  lesson12DialogueQuizItems,
} from '@/data/lessons/lesson12';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson12Page() {
  const isLocked = false; // Bài 12 luôn mở cho tất cả
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  const adjI = lesson12.words.filter((w) => w.category === 'adjI');
  const adjNa = lesson12.words.filter((w) => w.category === 'adjNa');
  const nouns = lesson12.words.filter((w) => w.category === 'noun');
  const seasons = lesson12.words.filter((w) => w.category === 'season');
  const weather = lesson12.words.filter((w) => w.category === 'weather');
  const places = lesson12.words.filter((w) => w.category === 'place');
  const food = lesson12.words.filter((w) => w.category === 'food');
  const expressions = lesson12.words.filter((w) => w.category === 'expression');
  const phrases = lesson12.words.filter((w) => w.category === 'phrase');
  const landmarks = lesson12.words.filter((w) => w.category === 'landmark');

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
  const [speakingCompleted, setSpeakingCompleted] = useState(0);

  const currentVocab = lesson12VocabQuizItems[vocabIndex];
  const currentGrammar = lesson12GrammarQuizItems[grammarIndex];
  const currentBuilder = lesson12BuilderItems[builderIndex];
  const currentDialogue = lesson12DialogueQuizItems[dialogueIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson12" />
        </div>
      </header>

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 12 dành cho thành viên VIP. Nâng cấp để mở khóa toàn bộ bài học N5–N2.
            </p>
            <button type="button" onClick={() => setOpenVipModal(true)} className="vip-cta" style={{ maxWidth: '280px' }}>
              Nâng cấp VIP — 199k
            </button>
          </div>
        </main>
      ) : (
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson12.title}</h1>
          <p className="lesson-subtitle">{lesson12.description}</p>
        </section>

        {/* Từ vựng: Tính từ đuôi な */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ đuôi な</h2>
            <p className="section-caption">簡単［な］ = đơn giản, dễ. Dùng với です／でした.</p>
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
          </div>
        </section>

        {/* Tính từ đuôi い */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ đuôi い（近い・遠い・速い・遅い・多い・少ない・暖かい・涼しい・甘い・辛い・重い・軽い・いい）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
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

        {/* Mùa & thời tiết */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Mùa & thời tiết（季節・春・夏・秋・冬・天気・雨・雪・曇り）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {seasons.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {weather.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Địa điểm & danh từ */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Địa điểm & danh từ（ホテル・空港・海・世界・パーティー・まつり・試験・いけばな・もみじ）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {places.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {nouns.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Món ăn */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Món ăn（すきやき・さしみ・すし・てんぷら）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
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

        {/* So sánh & hội thoại */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>So sánh & câu hội thoại（どちら・どちらも・ずっと・はじめて・ただいま・お帰りなさい・すごいですね・でも・疲れました）</h2>
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
          </div>
        </section>

        {/* Lễ hội & địa danh */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Lễ hội & địa danh（祇園祭・金閣寺・姫路城・富士山・東照宮・皇居）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {landmarks.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* IV. Giải thích ngữ pháp */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson12.grammarSummary}</p>
            <div className="grammar-detail">
              {lesson12.grammarPoints.map((point) => (
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
                {lesson12.sentences.map((s) => (
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

        {/* Hội thoại */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại（会話）</h2>
            <p className="section-caption">Lễ hội thế nào? – Miller về nhà, quà Kyoto, Gion, chụp ảnh, mệt.</p>
          </div>
          <div className="card-body practice-body">
            {lesson12.dialogue.map((turn) => (
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

        {/* Game luyện tập */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/4</p>
            <p className="section-caption">Nhiều câu hơn, có giải thích tiếng Việt khi chọn đáp án.</p>
          </div>
        </section>

        {/* Mini game 1: Hiểu hội thoại Bài 12 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Hiểu hội thoại Bài 12</h2>
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
            {dialogueSelected != null && 'explanationVi' in currentDialogue && currentDialogue.explanationVi && (
              <div className="grammar-note" style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#f0f9ff', borderRadius: '6px', borderLeft: '3px solid #0ea5e9' }}>
                <strong>Giải thích:</strong> {currentDialogue.explanationVi}
              </div>
            )}
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setDialogueSelected(null); setDialogueIndex((prev) => (prev + 1) % lesson12DialogueQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game 2: Từ vựng Bài 12 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Từ vựng Bài 12（10 câu）</h2>
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
              <button type="button" className="secondary-button" onClick={() => { setVocabSelected(null); setVocabIndex((prev) => (prev + 1) % lesson12VocabQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game 3: Ngữ pháp Bài 12（10 câu） */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 3: Ngữ pháp Bài 12（より・どちら・いちばん・quá khứ）（10 câu）</h2>
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
              <button type="button" className="secondary-button" onClick={() => { setGrammarSelected(null); setGrammarIndex((prev) => (prev + 1) % lesson12GrammarQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game 4: Ghép câu Bài 12（5 câu） */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 4: Ghép câu Bài 12（5 câu）</h2>
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
                  <button className="secondary-button" type="button" onClick={() => { setBuilderIndex((prev) => (prev + 1) % lesson12BuilderItems.length); setBuilderTokens([]); setBuilderChecked(false); }}>Câu khác →</button>
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

        {lesson12.sentences[0] && (
          <SpeakingGame target={lesson12.sentences[0]} progressTotal={1} progressCompleted={speakingCompleted} onAttemptComplete={() => setSpeakingCompleted(1)} />
        )}

        <ListeningDictation
          items={lesson12.sentences.slice(0, 5).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 12"
          sectionCaption="Viết 3–5 câu: quá khứ (でした／かったです), so sánh hơn (N1は N2より), so sánh hai (どちらが), so sánh nhất (いちばん)."
          tips={
            <ul className="grammar-list">
              <li>Ít nhất 1 câu quá khứ: きのうは雨でした。 hoặc 楽しかったです。</li>
              <li>Ít nhất 1 câu so sánh hơn: N1は N2より Adj です.</li>
              <li>Thử 1 câu どちらが hoặc いちばん.</li>
            </ul>
          }
          placeholder={`きのうは寒かったです。\n北海道は九州より大きいです。\n日本料理でてんぷらがいちばんおいしいです。`}
          rows={4}
          lessonId="B12"
          grammarContext="N/な-adj でした・じゃありませんでした, い-adj かったです・くなかったです, N1は N2より Adj, どちらが/のほうが, いちばん"
        />
      </main>
      )}
    </>
  );
}
