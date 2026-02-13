'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { SpeakingGame } from '@/components/SpeakingGame';
import ListeningDictation from '@/components/ListeningDictation';
import { LessonNav } from '@/components/LessonNav';
import { useUserState } from '@/store/useUserState';
import {
  lesson11,
  lesson11VocabQuizItems,
  lesson11GrammarQuizItems,
  lesson11BuilderItems,
  lesson11DialogueQuizItems,
} from '@/data/lessons/lesson11';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson11Page() {
  const isLocked = false; // Bài 11 luôn mở cho tất cả
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  const verbs = lesson11.words.filter((w) => w.category === 'verb');
  const counters = lesson11.words.filter((w) => w.category === 'counter');
  const counterPeople = lesson11.words.filter((w) => w.category === 'counterPeople');
  const counterUnit = lesson11.words.filter((w) => w.category === 'counterUnit');
  const nouns = lesson11.words.filter((w) => w.category === 'noun');
  const family = lesson11.words.filter((w) => w.category === 'family');
  const time = lesson11.words.filter((w) => w.category === 'time');
  const expressions = lesson11.words.filter((w) => w.category === 'expression');
  const phrases = lesson11.words.filter((w) => w.category === 'phrase');

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

  const currentVocab = lesson11VocabQuizItems[vocabIndex];
  const currentGrammar = lesson11GrammarQuizItems[grammarIndex];
  const currentBuilder = lesson11BuilderItems[builderIndex];
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
          <LessonNav currentLessonId="lesson11" />
        </div>
      </header>

      {isLocked ? (
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Bài 11 trở đi dành cho thành viên VIP. Nâng cấp để mở khóa toàn bộ bài học N5–N2.
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
          <h1 className="lesson-title">{lesson11.title}</h1>
          <p className="lesson-subtitle">{lesson11.description}</p>
        </section>

        {/* Từ vựng: Động từ */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ</h2>
            <p className="section-caption">
              います（こどもが～／日本に～）、かかります、やすみます（会社を～）
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {verbs.map((w) => (
              <button
                key={`${w.japanese}-${w.vietnamese}`}
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

        {/* Đếm đồ vật ひとつ～とお */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đếm đồ vật: ひとつ～とお・いくつ</h2>
            <p className="section-caption">Từ 11 trở lên chỉ dùng số.</p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {counters.map((w) => (
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

        {/* Đếm người */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đếm người: ひとり・ふたり・～にん</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {counterPeople.map((w) => (
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

        {/* Hậu tố đơn vị 台・枚・回・分・時間・日・週間・か月・年 */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Hậu tố chỉ đơn vị（～台・～枚・～回・～分・～時間・～日・～週間・～か月・～年）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {counterUnit.map((w) => (
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

        {/* Danh từ: đồ ăn, bưu chính */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Danh từ（りんご・みかん・切手・はがき・封筒・速達・書留・航空便・船便・外国）</h2>
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

        {/* Gia đình: tự xưng / gọi người khác */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Gia đình（両親・兄弟・兄/お兄さん・姉/お姉さん・弟/弟さん・妹/妹さん）</h2>
            <p className="section-caption">Tự xưng (兄・姉・弟・妹) vs gọi người khác (お兄さん・お姉さん・弟さん・妹さん)</p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {family.map((w) => (
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

        {/* Thời gian & lượng: 一時間・一週間・一か月・一年・ぐらい・どのくらい・全部で・みんな・だけ */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Thời gian & lượng（一時間・一週間・一か月・一年・～ぐらい・どのくらい・全部で・みんな・～だけ）</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {time.map((w) => (
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

        {/* Câu chào & hội thoại */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Câu chào & hội thoại（いらっしゃいませ・いい天気ですね・お出かけですか・ちょっと～まで・行っていらっしゃい・行ってまいります・それから・オーストラリア）</h2>
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

        {/* IV. Giải thích ngữ pháp – bám sát sách tr.92–93 */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson11.grammarSummary}</p>
            <div className="grammar-detail">
              {lesson11.grammarPoints.map((point) => (
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
                {lesson11.sentences.map((s) => (
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

        {/* Hội thoại – Người quản lý & Wang / Wang & Nhân viên bưu điện */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại（会話）</h2>
            <p className="section-caption">Trời đẹp nhỉ – Đi bưu điện / Gửi nhanh – Úc – Đường biển – Khoảng 1 tháng</p>
          </div>
          <div className="card-body practice-body">
            {lesson11.dialogue.map((turn) => (
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

        {/* Mini game 1: Hiểu hội thoại Bài 11 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Hiểu hội thoại Bài 11</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Câu hỏi: <strong>{lesson11DialogueQuizItems[dialogueIndex].questionVi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {lesson11DialogueQuizItems[dialogueIndex].options.map((opt, i) => {
                const isCorrect = i === lesson11DialogueQuizItems[dialogueIndex].correctIndex;
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
                      if (i === lesson11DialogueQuizItems[dialogueIndex].correctIndex) {
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
                  setDialogueIndex((prev) => (prev + 1) % lesson11DialogueQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 2: Từ vựng Bài 11 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Từ vựng Bài 11</h2>
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
                  setVocabIndex((prev) => (prev + 1) % lesson11VocabQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 3: Ngữ pháp Bài 11（いくつ・なん＋counter・どのくらい・ぐらい・だけ・に） */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 3: Ngữ pháp Bài 11（いくつ・なん＋counter・どのくらい・ぐらい・だけ・に）</h2>
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
                  setGrammarIndex((prev) => (prev + 1) % lesson11GrammarQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 4: Ghép câu Bài 11 */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 4: Ghép câu Bài 11</h2>
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
                      setBuilderIndex((prev) => (prev + 1) % lesson11BuilderItems.length);
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

        {/* Luyện nói */}
        {lesson11.sentences[0] && (
          <SpeakingGame
            target={lesson11.sentences[0]}
            progressTotal={1}
            progressCompleted={speakingCompleted}
            onAttemptComplete={() => setSpeakingCompleted(1)}
          />
        )}

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson11.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        {/* Writing Challenge – Bài 11 */}
        <WritingChallenge
          title="Writing Challenge – Bài 11"
          sectionCaption="Viết 3–5 câu về số lượng (đồ vật ひとつ～とお, người 人), thời gian (どのくらい, ～ぐらい), hoặc tần suất (1か月に2回)."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu đếm đồ vật (りんごを4つ買いました) hoặc người (学生が2人います).</li>
              <li>Dùng 1 câu hỏi/trả lời với いくつ hoặc 何人／何時間.</li>
              <li>Thử 1 câu với どのくらい hoặc ～ぐらい.</li>
              <li>Thử 1 câu với だけ hoặc 1か月に2回.</li>
            </ul>
          }
          placeholder={`Ví dụ:\nりんごを4つ買いました。\n外国人の学生が2人います。\n1か月に2回映画を見ます。\n休みは日曜日だけです。`}
          rows={4}
          lessonId="B11"
          grammarContext="ひとつ～とお, 人/台/枚/回, いくつ/なん＋counter, どのくらい, ～ぐらい, ～だけ, 量詞(時間)にV"
        />
      </main>
      )}
    </>
  );
}
