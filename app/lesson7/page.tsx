'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { Sidebar } from '@/components/Sidebar';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { lesson7 } from '@/data/lessons/lesson7';

import { speakJapaneseNow } from '@/lib/speakJapanese';

const vocabQuizItems = [
  {
    id: 1,
    vi: 'quà tặng',
    options: ['プレゼント', '花', '本'],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'địa chỉ',
    options: ['住所', '電話番号', 'メール'],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'thầy, cô',
    options: ['友達', '父', '先生'],
    correctIndex: 2,
  },
] as const;

const particleQuizItems = [
  {
    id: 1,
    jp: 'わたしは友達（　　）本をあげます。',
    vi: 'Tôi tặng sách cho bạn.',
    options: ['に', 'から', 'を'],
    correctIndex: 0,
  },
  {
    id: 2,
    jp: 'わたしは先生（　　）日本語をならいます。',
    vi: 'Tôi học tiếng Nhật từ thầy/cô.',
    options: ['に', 'から', 'を'],
    correctIndex: 1,
  },
  {
    id: 3,
    jp: '友達（　　）プレゼントをもらいました。',
    vi: 'Tôi đã nhận được quà từ bạn.',
    options: ['に', 'から', 'を'],
    correctIndex: 1,
  },
] as const;

const builderItems = [
  {
    id: 1,
    vi: 'Tôi tặng quà cho bạn.',
    hint: 'N1 は N2 に N3 を あげます。',
    tokens: ['わたしは', '友達に', 'プレゼントを', 'あげます。'],
  },
  {
    id: 2,
    vi: 'Tôi nhận email từ thầy.',
    hint: 'N1 は N2 から N3 を もらいます。',
    tokens: ['わたしは', '先生から', 'メールを', 'もらいました。'],
  },
  {
    id: 3,
    vi: 'Tôi học tiếng Nhật từ cô giáo.',
    hint: 'N1 は N2 から N3 を ならいます。',
    tokens: ['わたしは', '先生から', '日本語を', 'ならいます。'],
  },
] as const;

export default function Lesson7Page() {
  const verbs = lesson7.words.filter((w) => w.category === 'verbGive');
  const people = lesson7.words.filter((w) => w.category === 'person');
  const things = lesson7.words.filter((w) => w.category === 'thing');

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const currentVocab = vocabQuizItems[vocabIndex];

  const [particleIndex, setParticleIndex] = useState(0);
  const [particleSelected, setParticleSelected] = useState<number | null>(null);
  const currentParticle = particleQuizItems[particleIndex];

  const [builderIndex, setBuilderIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);
  const currentBuilder = builderItems[builderIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  // Mini game: hiểu hội thoại
  const dialogueQuizItems = [
    {
      questionVi: 'Sato nhận được gì từ bạn?',
      options: ['Quà lưu niệm từ Nhật', 'Hoa', 'Sách'],
      correctIndex: 0,
    },
    {
      questionVi: 'Hai người rủ nhau làm gì?',
      options: ['Đi uống bia', 'Đi xem phim', 'Đi mua sắm'],
      correctIndex: 1,
    },
  ] as const;
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueSelected, setDialogueSelected] = useState<number | null>(null);

  const [gameCompleted, setGameCompleted] = useState({
    dialogue: false,
    vocab: false,
    particle: false,
    builder: false,
  });
  const gamesDone =
    (gameCompleted.dialogue ? 1 : 0) +
    (gameCompleted.vocab ? 1 : 0) +
    (gameCompleted.particle ? 1 : 0) +
    (gameCompleted.builder ? 1 : 0);
  const [speakingList] = useState(() => getSpeakingSentences(lesson7.sentences, 10));

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson7" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson7.title}</h1>
          <p className="lesson-subtitle">{lesson7.description}</p>
        </section>

        {/* Vocab – Động từ cho / nhận / mượn */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ: cho – nhận – cho mượn – mượn – dạy – học</h2>
            <p className="section-caption">
              Nhóm động từ chính của Bài 7: あげます・もらいます・かします・かります・おしえます・ならいます.
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

        {/* Vocab – Người: ai cho / ai nhận */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Người: ai cho / ai nhận</h2>
            <p className="section-caption">
              Một vài &quot;vai diễn&quot; thường dùng trong mẫu: 先生, 友達, 父, 母, 彼, 彼女.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {people.map((w) => (
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

        {/* Vocab – Đồ vật & quà */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đồ vật &amp; quà tặng</h2>
            <p className="section-caption">
              Một số món quà, đồ dùng hay được tặng/nhận: プレゼント, 花, 本, ノート, ペン, メール, 住所, 電話番号...
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {things.map((w) => (
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

        {/* Grammar card */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Ngữ pháp: Cho – nhận &amp; mượn – cho mượn</h2>
          </div>
          <div className="card-body">
            <p className="grammar-note" style={{ marginBottom: '0.6rem' }}>
              <strong>Lưu ý ký hiệu:</strong> Trong phần ngữ pháp, <strong>V</strong> nghĩa là{' '}
              <strong>động từ</strong> (Verb). Ví dụ: Vます, Vません.
            </p>
            <p className="grammar-pattern">📘 {lesson7.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. N1 は N2 に N3 を あげます・かします・おしえます</h3>
              <p className="grammar-note">
                Mẫu câu &quot;N1 cho N2 N3&quot; hoặc &quot;N1 cho N2 mượn N3 / dạy N3 cho N2&quot;.
              </p>
              <ul className="grammar-list">
                <li>わたしは友達にプレゼントをあげます。→ Tôi tặng quà cho bạn.</li>
                <li>わたしは友達に本をかします。→ Tôi cho bạn mượn sách.</li>
                <li>先生はわたしたちに日本語をおしえます。→ Thầy dạy tiếng Nhật cho chúng tôi.</li>
              </ul>

              <h3 className="grammar-subtitle">2. N1 は N2 から N3 を もらいます・かります・ならいます</h3>
              <p className="grammar-note">
                Mẫu câu &quot;N1 nhận N3 từ N2&quot; hoặc &quot;N1 mượn N3 từ N2 / học N3 từ N2&quot;.
              </p>
              <ul className="grammar-list">
                <li>わたしは友達からプレゼントをもらいました。→ Tôi nhận quà từ bạn.</li>
                <li>わたしは友達から本をかりました。→ Tôi mượn sách từ bạn.</li>
                <li>わたしは先生から日本語をならいます。→ Tôi học tiếng Nhật từ thầy/cô.</li>
              </ul>

              <h3 className="grammar-subtitle">3. だれに／だれから／何を</h3>
              <ul className="grammar-list">
                <li>だれに N を あげますか。→ Bạn tặng N cho ai?</li>
                <li>だれから N を もらいましたか。→ Bạn nhận N từ ai?</li>
                <li>何をもらいましたか。→ Bạn nhận được cái gì?</li>
              </ul>

              <h3 className="grammar-subtitle">4. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson7.sentences.map((s) => (
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

        {/* Game luyện tập – Hoàn thành 0/4 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/4</p>
            <p className="section-caption">
              Hoàn thành: Hiểu hội thoại, Từ vựng, Trợ từ に・から・を, Ghép câu.
            </p>
          </div>
        </section>

        {/* Hội thoại: tặng quà & rủ nhau đi chơi */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại: Tặng quà &amp; rủ bạn đi chơi</h2>
            <p className="section-caption">
              Đoạn hội thoại ngắn dùng mẫu あげます・もらいます・ませんか (rủ rê lịch sự) giống Sato–Miller trong sách.
            </p>
          </div>
          <div className="card-body practice-body">
            {[
              {
                jp: 'サトウさん、これ、どうぞ。',
                romaji: 'Satō-san, kore, dōzo.',
                vi: 'Anh/chị Sato, cái này, mời anh/chị.',
              },
              {
                jp: 'ありがとうございます。何ですか。',
                romaji: 'Arigatō gozaimasu. Nan desu ka.',
                vi: 'Cảm ơn anh/chị. Cái gì vậy ạ?',
              },
              {
                jp: '日本のおみやげです。',
                romaji: 'Nihon no omiyage desu.',
                vi: 'Quà lưu niệm từ Nhật ạ.',
              },
              {
                jp: '明日、いっしょに映画を見ませんか。',
                romaji: 'Ashita, issho ni eiga o mimasen ka.',
                vi: 'Ngày mai, chúng ta cùng xem phim nhé?',
              },
              {
                jp: 'ええ、いいですね。',
                romaji: 'Ee, ii desu ne.',
                vi: 'Vâng, hay quá.',
              },
            ].map((turn) => (
              <div key={turn.jp} className="grammar-example-row">
                <div>
                  <div className="jp">{turn.jp}</div>
                  <div className="romaji">{turn.romaji}</div>
                  <div className="vi">{turn.vi}</div>
                </div>
                <button
                  className="listen-button"
                  type="button"
                  onClick={() => speakJapaneseNow(turn.jp)}
                >
                  🔊 Nghe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mini game: Hiểu hội thoại – chọn đáp án đúng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Hiểu hội thoại tặng quà</h2>
            <p className="section-caption">
              Đọc (hoặc nghe lại) hội thoại ở trên, rồi chọn câu trả lời đúng cho câu hỏi bằng tiếng
              Việt.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Câu hỏi: <strong>{dialogueQuizItems[dialogueIndex].questionVi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {dialogueQuizItems[dialogueIndex].options.map((opt, i) => {
                const isCorrect = i === dialogueQuizItems[dialogueIndex].correctIndex;
                const selected = dialogueSelected === i;
                const className =
                  'practice-option' +
                  (dialogueSelected != null
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
                    setDialogueSelected(i);
                    if (i === dialogueQuizItems[dialogueIndex].correctIndex) {
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
                  setDialogueIndex((prev) => (prev + 1) % dialogueQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Từ vựng Bài 7 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Từ vựng Bài 7</h2>
            <p className="section-caption">
              Đọc nghĩa tiếng Việt, chọn đúng từ tiếng Nhật (người, đồ vật, quà tặng) cho phù hợp.
            </p>
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
                const selected = vocabSelected === idx;
                const className =
                  'practice-option' +
                  (vocabSelected != null
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
                  setVocabIndex((prev) => (prev + 1) % vocabQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Trợ từ に・から・を */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Trợ từ に・から・を</h2>
            <p className="section-caption">
              Chọn đúng trợ từ để đi với người nhận (に), người cho (から) và tân ngữ (を) trong các
              câu cho – nhận.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Tiếng Việt: <strong>{currentParticle.vi}</strong>
              </p>
              <div className="jp">{currentParticle.jp}</div>
            </div>
            <div className="practice-options">
              {currentParticle.options.map((opt, idx) => {
                const isCorrect = idx === currentParticle.correctIndex;
                const selected = particleSelected === idx;
                const className =
                  'practice-option' +
                  (particleSelected != null
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
                      setParticleSelected(idx);
                      if (idx === currentParticle.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, particle: true }));
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
                  setParticleSelected(null);
                  setParticleIndex((prev) => (prev + 1) % particleQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Ghép câu cho – nhận */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: Ghép câu cho – nhận</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, ghép lại câu tiếng Nhật với に・から・を đúng trật tự. Khi đúng sẽ tự
              đọc lại câu.
            </p>
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
                      setBuilderIndex((prev) => (prev + 1) % builderItems.length);
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

        {/* Luyện nói – ~10 câu */}
        <SpeakingGameMulti sentences={speakingList} />

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson7.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 7"
          sectionCaption="Viết 3–5 câu kể về việc tặng quà, nhận quà, mượn – cho mượn, học được gì từ ai (dùng mẫu N1 は N2 に／から N3 を あげます・もらいます・かします・かります・おしえます・ならいます)."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu &quot;N1 は N2 に N3 を あげます。&quot;</li>
              <li>Dùng 1 câu &quot;N1 は N2 から N3 を もらいました。&quot;</li>
              <li>Cố gắng thêm 1 câu &quot;N1 は N2 から N3 を ならいます。&quot; nếu được.</li>
            </ul>
          }
          placeholder={`Ví dụ:\nわたしは友達にプレゼントをあげます。\n友達からきれいなはなをもらいました。\nわたしは先生から日本語をならいます。`}
          rows={4}
          lessonId="B7"
          grammarContext="N1 は N2 に N3 を あげます, N1 は N2 から N3 を もらいます・かします・かります・おしえます・ならいます"
        />
      </main>
    </div>
    </div>
  );
}