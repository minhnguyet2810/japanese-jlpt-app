'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { LessonNav } from '@/components/LessonNav';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import {
  lesson2,
  choiceExamples,
  noNoExamples,
  soDesuExamples,
} from '@/data/lessons/lesson2';
import { speakJapaneseNow } from '@/lib/speakJapanese';

const quizItems = [
  {
    id: 1,
    vi: 'Đây là cuốn sách.',
    answer: 'これは本です。',
    tokens: ['これは', '本', 'です。'],
  },
  {
    id: 2,
    vi: 'Đó là cái cặp của anh Nam.',
    answer: 'それはナムさんのかばんです。',
    tokens: ['それは', 'ナムさんの', 'かばん', 'です。'],
  },
  {
    id: 3,
    vi: 'Cái máy tính kia đắt.',
    answer: 'あのパソコンは高いです。',
    tokens: ['あの', 'パソコンは', '高い', 'です。'],
  },
] as const;

export default function Lesson2Page() {
  const demonstrativeWords = lesson2.words.filter((w) => w.category === 'demonstrative');
  const objectWords = lesson2.words.filter((w) => w.category === 'object');
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizTokens, setQuizTokens] = useState<string[]>([]);
  const [quizChecked, setQuizChecked] = useState(false);

  const currentQuiz = quizItems[currentQuizIndex];

  const quizText = quizTokens.join(' ');
  const isQuizCorrect =
    quizTokens.length === currentQuiz.tokens.length &&
    quizTokens.join('') === currentQuiz.tokens.join('');

  const clearQuiz = () => {
    setQuizTokens([]);
    setQuizChecked(false);
  };

  const goNextQuiz = () => {
    setCurrentQuizIndex((prev) => (prev + 1) % quizItems.length);
    clearQuiz();
  };

  const addQuizToken = (token: string) => {
    setQuizTokens((prev) => [...prev, token]);
  };

  const quizOptions = [...currentQuiz.tokens].sort();

  // Mini game: chọn phản hồi đúng cho そうです／そうじゃありません
  const soQuizItems = [
    {
      id: 1,
      vi: 'Đây là điện thoại phải không?',
      questionJa: 'これはスマホですか。',
      options: ['はい、そうです。', 'いいえ、そうじゃありません。これはカメラです。'],
      correctIndex: 0,
    },
    {
      id: 2,
      vi: 'Đây có phải là máy ảnh không? (thực ra là máy ảnh)',
      questionJa: 'これはカメラですか。',
      options: ['はい、そうです。', 'いいえ、そうじゃありません。これはカメラです。'],
      correctIndex: 0,
    },
    {
      id: 3,
      vi: 'Đây có phải là thẻ điện thoại không? (thực ra là thẻ điện thoại)',
      questionJa: 'これはテレホンカードですか。',
      options: ['はい、そうです。', 'いいえ、そうじゃありません。これはテレホンカードです。'],
      correctIndex: 0,
    },
  ] as const;

  const [soIndex, setSoIndex] = useState(0);
  const [soSelected, setSoSelected] = useState<number | null>(null);

  const currentSoQuiz = soQuizItems[soIndex];

  // Mini game: chọn đúng mẫu Danh từ の Danh từ
  const noNoQuizItems = [
    {
      id: 1,
      vi: 'Đây là quyển sách của tôi.',
      options: ['これはわたしの本です。', 'これは本のわたしです。'],
      correctIndex: 0,
    },
    {
      id: 2,
      vi: 'Đó là máy tính của công ty Sakura.',
      options: ['それはさくら会社のパソコンです。', 'それはパソコンのさくら会社です。'],
      correctIndex: 0,
    },
    {
      id: 3,
      vi: 'Cái kia không phải là chìa khoá của tôi.',
      options: ['あのかぎはわたしのかぎじゃありません。', 'あのわたしはかぎのかぎじゃありません。'],
      correctIndex: 0,
    },
  ] as const;

  const [noNoIndex, setNoNoIndex] = useState(0);
  const [noNoSelected, setNoNoSelected] = useState<number | null>(null);

  const currentNoNoQuiz = noNoQuizItems[noNoIndex];

  const [gameCompleted, setGameCompleted] = useState({ so: false, noNo: false, builder: false });
  const gamesDone =
    (gameCompleted.so ? 1 : 0) + (gameCompleted.noNo ? 1 : 0) + (gameCompleted.builder ? 1 : 0);
  const [speakingList] = useState(() => getSpeakingSentences(lesson2.sentences, 10));

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson2" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson2.title}</h1>
          <p className="lesson-subtitle">{lesson2.description}</p>
        </section>

        {/* Vật dụng xung quanh lớp học / văn phòng – học trước */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Vật dụng xung quanh lớp học / văn phòng</h2>
            <p className="section-caption">
              Học tên đồ vật trước, lát nữa ghép vào mẫu これは N です ／ この N は～です。
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {objectWords.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.japanese)}
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

        {/* Vocab: chỉ thị これ・それ・あれ ／ この・その・あの */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Từ vựng: これ・それ・あれ</h2>
            <p className="section-caption">
              Nhóm từ để chỉ &quot;cái này / cái đó / cái kia&quot; và dạng đứng trước danh từ.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {demonstrativeWords.map((w) => (
              <button
                key={w.japanese}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(w.japanese)}
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

        {/* Grammar card */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Ngữ pháp: これ・それ・あれ / この・その・あの</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson2.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. &quot;Cái này / cái đó / cái kia&quot; – これ・それ・あれ</h3>
              <div className="grammar-table">
                <div className="grammar-table-row">
                  <span className="grammar-tag">これ</span>
                  <span className="grammar-text">
                    &quot;cái này&quot; – <strong>gần người nói</strong>.
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">それ</span>
                  <span className="grammar-text">
                    &quot;cái đó&quot; – <strong>gần người nghe</strong>.
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">あれ</span>
                  <span className="grammar-text">
                    &quot;cái kia&quot; – <strong>xa cả hai</strong>.
                  </span>
                </div>
              </div>
              <p className="grammar-note">
                Ba từ này <strong>đứng một mình</strong>, không đi kèm danh từ phía sau. Ví dụ: これは本です。
                (Đây là cuốn sách.)
              </p>

              <h3 className="grammar-subtitle">2. &quot;N này / N đó / N kia&quot; – この・その・あの + Danh từ</h3>
              <p className="grammar-note">
                <strong>この／その／あの</strong> luôn đứng <strong>TRƯỚC danh từ</strong>:
              </p>
              <ul className="grammar-list">
                <li>この本: cuốn sách này.</li>
                <li>そのかばん: cái cặp đó (gần người nghe).</li>
                <li>あのパソコン: cái máy tính kia (xa cả hai).</li>
              </ul>

              <h3 className="grammar-subtitle">3. Mẫu câu cơ bản với これ・それ・あれ</h3>
              <ul className="grammar-list">
                <li>
                  これは N です。→ &quot;Đây là N.&quot;
                </li>
                <li>
                  それは N ですか。→ &quot;Đó là N à?&quot; (câu hỏi).
                </li>
                <li>
                  これは ～の N です。→ &quot;Đây là N của ~&quot; (kết hợp với mẫu Danh từ の Danh từ ở dưới).
                </li>
              </ul>

              <h3 className="grammar-subtitle">4. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson2.sentences.map((s) => (
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

        {/* Mẫu câu: そうです／そうじゃありません */}
        <section className="card">
          <div className="card-header">
            <h2>Mẫu câu: そうです ・ そうじゃありません</h2>
            <p className="section-caption">
              Dùng để xác nhận / phủ định lại thông tin về một đồ vật: &quot;Đúng vậy&quot; hoặc
              &quot;Không, không phải&quot;.
            </p>
          </div>
          <div className="card-body">
            {soDesuExamples.map((p) => (
              <div key={p.japanese} className="grammar-example-row">
                <div>
                  <div className="jp">{p.japanese}</div>
                  <div className="romaji">{p.romaji}</div>
                  <div className="vi">{p.vietnamese}</div>
                </div>
                <button
                  className="listen-button"
                  type="button"
                  onClick={() => speakJapaneseNow(p.japanese)}
                >
                  🔊 Nghe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mẫu câu lựa chọn ～か～か */}
        <section className="card">
          <div className="card-header">
            <h2>Mẫu câu lựa chọn: ～か ～か</h2>
            <p className="section-caption">
              Hỏi để người nghe chọn giữa 2 khả năng: &quot;Đây là A hay B?&quot;
            </p>
          </div>
          <div className="card-body">
            {choiceExamples.map((p) => (
              <div key={p.japanese} className="grammar-example-row">
                <div>
                  <div className="jp">{p.japanese}</div>
                  <div className="romaji">{p.romaji}</div>
                  <div className="vi">{p.vietnamese}</div>
                </div>
                <button
                  className="listen-button"
                  type="button"
                  onClick={() => speakJapaneseNow(p.japanese)}
                >
                  🔊 Nghe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mẫu Danh từ の Danh từ */}
        <section className="card">
          <div className="card-header">
            <h2>Mẫu câu: Danh từ の Danh từ</h2>
            <p className="section-caption">
              N1 の N2 thể hiện quan hệ sở hữu / thuộc về: &quot;quyển sách của tôi&quot;,
              &quot;máy tính của công ty Sakura&quot;...
            </p>
          </div>
          <div className="card-body">
            {noNoExamples.map((p) => (
              <div key={p.japanese} className="grammar-example-row">
                <div>
                  <div className="jp">{p.japanese}</div>
                  <div className="romaji">{p.romaji}</div>
                  <div className="vi">{p.vietnamese}</div>
                </div>
                <button
                  className="listen-button"
                  type="button"
                  onClick={() => speakJapaneseNow(p.japanese)}
                >
                  🔊 Nghe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Game luyện tập – Hoàn thành 0/3 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/3</p>
            <p className="section-caption">
              Hoàn thành từng game: そうです／そうじゃありません, Danh từ の Danh từ, Ghép câu.
            </p>
          </div>
        </section>

        {/* Mini game 1: chọn phản hồi そうです／そうじゃありません */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: そうです／そうじゃありません</h2>
            <p className="section-caption">
              Đọc câu hỏi tiếng Nhật, chọn câu trả lời phù hợp bằng そうです hoặc そうじゃありません.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <div className="jp">{currentSoQuiz.questionJa}</div>
              <div className="vi">{currentSoQuiz.vi}</div>
            </div>
            <div className="practice-options">
              {currentSoQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentSoQuiz.correctIndex;
                const selected = soSelected === idx;
                const className =
                  'practice-option' +
                  (soSelected != null
                    ? selected && isCorrect
                      ? ' correct'
                      : selected && !isCorrect
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setSoSelected(idx);
                      if (idx === currentSoQuiz.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, so: true }));
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
                  setSoSelected(null);
                  setSoIndex((prev) => (prev + 1) % soQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 2: Danh từ の Danh từ */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Danh từ の Danh từ</h2>
            <p className="section-caption">
              Chọn câu tiếng Nhật đúng diễn tả ý tiếng Việt (luyện trật tự N1 の N2).
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <div className="vi">{currentNoNoQuiz.vi}</div>
            </div>
            <div className="practice-options">
              {currentNoNoQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentNoNoQuiz.correctIndex;
                const selected = noNoSelected === idx;
                const className =
                  'practice-option' +
                  (noNoSelected != null
                    ? selected && isCorrect
                      ? ' correct'
                      : selected && !isCorrect
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setNoNoSelected(idx);
                      if (idx === currentNoNoQuiz.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, noNo: true }));
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
                  setNoNoSelected(null);
                  setNoNoIndex((prev) => (prev + 1) % noNoQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>
        {/* Mini game 3: Ghép câu với これ／それ／あれ */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 3: Ghép câu với これ／それ／あれ</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, chọn thứ tự thẻ tiếng Nhật đúng. Khi đúng sẽ tự đọc lại câu.
            </p>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentQuiz.vi}</div>
              <button
                className="listen-button"
                type="button"
                onClick={() => speakJapaneseNow(currentQuiz.tokens.join(''))}
              >
                🔊 Nghe đáp án mẫu
              </button>
            </div>

            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{quizText || '・・・'}</div>
                {quizChecked && (
                  <div className="builder-feedback">
                    {isQuizCorrect ? (
                      <span className="correct-text">✅ Chính xác!</span>
                    ) : (
                      <span className="wrong-text">
                        ❌ Chưa đúng. Đáp án: {currentQuiz.tokens.join(' ')}
                      </span>
                    )}
                  </div>
                )}
                <div className="builder-actions">
                  <button
                    className="primary-button"
                    type="button"
                    disabled={!quizTokens.length}
                    onClick={() => {
                      if (!quizTokens.length) return;
                      setQuizChecked(true);
                      if (isQuizCorrect) {
                        setGameCompleted((prev) => ({ ...prev, builder: true }));
                        speakJapaneseNow(quizTokens.join(''));
                      }
                    }}
                  >
                    Kiểm tra câu
                  </button>
                  <button className="secondary-button" type="button" onClick={clearQuiz}>
                    Xoá câu
                  </button>
                  <button className="secondary-button" type="button" onClick={goNextQuiz}>
                    Câu khác →
                  </button>
                </div>
              </div>

              <div className="builder-tokens">
                {quizOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="token-chip"
                    onClick={() => addQuizToken(t)}
                  >
                    <span className="token-jp">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luyện nói – ~10 câu */}
        <SpeakingGameMulti sentences={speakingList} />

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson2.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 2"
          sectionCaption="Viết 3–5 câu giới thiệu đồ vật quanh bạn: đây/đó/kia là cái gì, của ai (dùng これ・それ・あれ／この・その・あの và Danh từ の Danh từ)."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu với これは N です／それは N です。</li>
              <li>Thử 1–2 câu với この N／その N／あの N.</li>
              <li>Dùng 1 câu có N1 の N2 (ví dụ: これはわたしの本です。).</li>
            </ul>
          }
          placeholder={`Ví dụ:\nこれはわたしのほんです。\nそのかばんはミラーさんのかばんです。\nあれはコンピューターです。`}
          rows={4}
          lessonId="B2"
          grammarContext="これ・それ・あれ, この・その・あの N, N1 の N2"
        />
      </main>
    </>
  );
}

