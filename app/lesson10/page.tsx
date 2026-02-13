'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { LessonNav } from '@/components/LessonNav';
import { SpeakingGame } from '@/components/SpeakingGame';
import ListeningDictation from '@/components/ListeningDictation';
import {
  lesson10,
  lesson10VocabQuizItems,
  lesson10GrammarQuizItems,
  lesson10BuilderItems,
  lesson10DialogueQuizItems,
} from '@/data/lessons/lesson10';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson10Page() {
  const verbs = lesson10.words.filter((w) => w.category === 'verb');
  const nouns = lesson10.words.filter((w) => w.category === 'noun');
  const places = lesson10.words.filter((w) => w.category === 'place');
  const positions = lesson10.words.filter((w) => w.category === 'position');
  const expressions = lesson10.words.filter((w) => w.category === 'expression');
  const rooms = lesson10.words.filter((w) => w.category === 'room');
  const phrases = lesson10.words.filter((w) => w.category === 'phrase');

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

  const currentVocab = lesson10VocabQuizItems[vocabIndex];
  const currentGrammar = lesson10GrammarQuizItems[grammarIndex];
  const currentBuilder = lesson10BuilderItems[builderIndex];
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
          <LessonNav currentLessonId="lesson10" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson10.title}</h1>
          <p className="lesson-subtitle">{lesson10.description}</p>
        </section>

        {/* Từ vựng: います・あります */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ: います・あります</h2>
            <p className="section-caption">
              います: có/ở (người, động vật). あります: có/ở (đồ vật, cây cối). Dùng với trợ từ が.
            </p>
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
                <div className="vocab-actions">
                  <span className="vocab-vi">{w.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Từ vựng: người, con vật, đồ vật */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Người, con vật & đồ vật</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {nouns.map((w) => (
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

        {/* Từ vựng: nơi chốn & bến xe */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Nơi chốn & cửa hàng</h2>
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

        {/* Từ vựng: vị trí うえ・した・まえ… */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Từ chỉ vị trí</h2>
            <p className="section-caption">
              Dùng với mẫu N は N の うえ／した／まえ／うしろ／みぎ／ひだり／なか／そと／となり／ちかく／あいだ です。
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {positions.map((w) => (
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

        {/* Biểu hiện や ～など・いちばん～・～だんめ */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Biểu hiện Bài 10</h2>
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
          </div>
        </section>

        {/* III. Trong nhà（うちの中）– sách tr.85 */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>III. Trong nhà（うちの中）</h2>
            <p className="section-caption">
              玄関・トイレ・風呂場・洗面所・台所・食堂・居間・寝室・廊下・ベランダ
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {rooms.map((w) => (
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

        {/* Từ hội thoại & địa danh */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Từ hội thoại & địa danh</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
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

        {/* Minh hoạ trong nhà – うちの中 */}
        {/* IV. Giải thích ngữ pháp – bám sát sách tr.86–87 */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson10.grammarSummary}</p>
            <div className="grammar-detail">
              {lesson10.grammarPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="grammar-subtitle">{point.title}</h3>
                  <p className="grammar-note">{point.body}</p>
                  {point.note != null && point.note !== '' && (
                    <p className="grammar-note" style={{ fontStyle: 'italic', marginTop: '0.25rem' }}>
                      Chú ý: {point.note}
                    </p>
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
              <h3 className="grammar-subtitle">Ví dụ &amp; mẫu câu tổng hợp</h3>
              <div className="grammar-examples">
                {lesson10.sentences.map((s) => (
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

        {/* Hội thoại – Cách hỏi “ở đâu có tương ớt?” */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại（会話）</h2>
            <p className="section-caption">Tương ớt ở đâu? / Siêu thị Yunyu-ya ở đâu?</p>
          </div>
          <div className="card-body practice-body">
            {lesson10.dialogue.map((turn) => (
              <div key={turn.japanese} className="grammar-example-row">
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

        {/* Game luyện tập – tiến độ 0/4 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/4</p>
            <p className="section-caption">
              Hoàn thành từng game: hội thoại, từ vựng, ngữ pháp, ghép câu.
            </p>
          </div>
        </section>

        {/* Mini game: hiểu hội thoại */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Hiểu hội thoại Bài 10</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Câu hỏi: <strong>{lesson10DialogueQuizItems[dialogueIndex].questionVi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {lesson10DialogueQuizItems[dialogueIndex].options.map((opt, i) => {
                const isCorrect = i === lesson10DialogueQuizItems[dialogueIndex].correctIndex;
                const selectedNow = dialogueSelected === i;
                const className =
                  'practice-option' +
                  (dialogueSelected != null
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
                    setDialogueSelected(i);
                    if (i === lesson10DialogueQuizItems[dialogueIndex].correctIndex) {
                      setGameCompleted((prev) => ({ ...prev, dialogue: true }));
                    }
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
                  setDialogueSelected(null);
                  setDialogueIndex((prev) => (prev + 1) % lesson10DialogueQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: từ vựng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Từ vựng Bài 10</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Nghĩa: <strong>{currentVocab.vi}</strong>
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
                      if (idx === currentVocab.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, vocab: true }));
                      }
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
                  setVocabIndex((prev) => (prev + 1) % lesson10VocabQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Ngữ pháp N が います／あります, vị trí */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 3: Ngữ pháp Bài 10（います・あります・vị trí）</h2>
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
                      if (idx === currentGrammar.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, grammar: true }));
                      }
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
                  setGrammarSelected(null);
                  setGrammarIndex((prev) => (prev + 1) % lesson10GrammarQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 4: Ghép câu Bài 10 */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 4: Ghép câu Bài 10</h2>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentBuilder.vi}</div>
              <div className="builder-hint">Gợi ý: {currentBuilder.hint}</div>
              <button
                className="listen-button"
                type="button"
                onClick={() => speakJapaneseNow(currentBuilder.tokens.join(''))}
              >
                🔊 Nghe đáp án mẫu
              </button>
            </div>
            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{builderText || '・・・'}</div>
                {builderChecked && (
                  <div className="builder-feedback">
                    {isBuilderCorrect ? (
                      <span className="correct-text">✅ Chính xác!</span>
                    ) : (
                      <span className="wrong-text">
                        ❌ Chưa đúng. Đáp án: {currentBuilder.tokens.join(' ')}
                      </span>
                    )}
                  </div>
                )}
                <div className="builder-actions">
                  <button
                    className="primary-button"
                    type="button"
                    disabled={!builderTokens.length}
                    onClick={() => {
                      if (!builderTokens.length) return;
                      setBuilderChecked(true);
                      if (isBuilderCorrect) {
                        setGameCompleted((prev) => ({ ...prev, builder: true }));
                        speakJapaneseNow(builderTokens.join(''));
                      }
                    }}
                  >
                    Kiểm tra câu
                  </button>
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => {
                      setBuilderTokens([]);
                      setBuilderChecked(false);
                    }}
                  >
                    Xoá câu
                  </button>
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => {
                      setBuilderIndex((prev) => (prev + 1) % lesson10BuilderItems.length);
                      setBuilderTokens([]);
                      setBuilderChecked(false);
                    }}
                  >
                    Câu khác →
                  </button>
                </div>
              </div>
              <div className="builder-tokens">
                {builderOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="token-chip"
                    onClick={() => {
                      if (builderChecked) return;
                      setBuilderTokens((prev) => [...prev, t]);
                    }}
                  >
                    <span className="token-jp">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luyện nói – Hoàn thành 0/1 */}
        {lesson10.sentences[0] && (
          <SpeakingGame
            target={lesson10.sentences[0]}
            progressTotal={1}
            progressCompleted={speakingCompleted}
            onAttemptComplete={() => setSpeakingCompleted(1)}
          />
        )}

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson10.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        {/* Writing Challenge – Bài 10 */}
        <WritingChallenge
          title="Writing Challenge – Bài 10"
          sectionCaption="Viết 3–5 câu tả vị trí đồ vật/người trong nhà hoặc ngoài đường: dùng います／あります và mẫu N は N の うえ／した／まえ／ちかく です."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu với N が います／あります。</li>
              <li>Dùng 1–2 câu vị trí với N の うえ／した／まえ／うしろ／となり／ちかく。</li>
              <li>Thử 1 câu có や～など để liệt kê vài đồ vật.</li>
            </ul>
          }
          placeholder={`Ví dụ:\n庭に犬がいます。\n部屋に机といすがあります。\n箱の中にフィルムや電池などがあります。`}
          rows={4}
          lessonId="B10"
          grammarContext="N が います／あります, N は N の うえ／した／まえ／うしろ／なか／そと／となり／ちかく／あいだ です, や～など"
        />
      </main>
    </>
  );
}

