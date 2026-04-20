'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { Sidebar } from '@/components/Sidebar';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { lesson4 } from '@/data/lessons/lesson4';
import { speakJapaneseNow } from '@/lib/speakJapanese';

const timeQuizItems = [
  {
    id: 1,
    vi: 'Bây giờ là 7 giờ.',
    jp: '今は７時です。',
    options: ['いまはしちじです。', 'いまはななじです。'],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'Giờ học từ 9 giờ đến 12 giờ.',
    jp: '授業は９時から１２時までです。',
    options: ['じゅぎょうはくじからじゅうにじまでです。', 'じゅぎょうはじゅうにじからくじまでです。'],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Tôi dậy lúc 6 giờ rưỡi mỗi sáng.',
    jp: 'わたしは毎朝６時半に起きます。',
    options: ['わたしはまいあさろくじはんにおきます。', 'わたしはまいあさろくじにおきます。'],
    correctIndex: 0,
  },
] as const;

const timetableRows = [
  {
    jp: 'わたしは毎朝６時半に起きます。',
    romaji: 'Watashi wa maiasa roku-ji han ni okimasu.',
    vi: 'Tôi dậy lúc 6 giờ rưỡi mỗi sáng.',
    clock: '06:30',
  },
  {
    jp: '７時に朝ごはんを食べます。',
    romaji: 'Shichi-ji ni asagohan o tabemasu.',
    vi: 'Tôi ăn sáng lúc 7 giờ.',
    clock: '07:00',
  },
  {
    jp: '８時にうちを出ます。',
    romaji: 'Hachi-ji ni uchi o demasu.',
    vi: 'Tôi ra khỏi nhà lúc 8 giờ.',
    clock: '08:00',
  },
  {
    jp: '９時から５時まで働きます。',
    romaji: 'Ku-ji kara go-ji made hatarakimasu.',
    vi: 'Tôi làm việc từ 9 giờ đến 5 giờ.',
    clock: '09:00-17:00',
  },
  {
    jp: '１１時半に寝ます。',
    romaji: 'Jū-ichi-ji han ni nemasu.',
    vi: 'Tôi đi ngủ lúc 11 giờ rưỡi.',
    clock: '23:30',
  },
] as const;

const qaTimeItems = [
  {
    id: 1,
    question: '今は何時ですか。',
    viClock: 'Bây giờ là 7 giờ.',
    answers: ['今は７時です。', '今は８時です。'],
    correctIndex: 0,
  },
  {
    id: 2,
    question: '今は何時ですか。',
    viClock: 'Bây giờ là 3 giờ rưỡi.',
    answers: ['今は３時半です。', '今は３時です。'],
    correctIndex: 0,
  },
  {
    id: 3,
    question: '今は何時ですか。',
    viClock: 'Bây giờ là 10 giờ 10 phút.',
    answers: ['今は１０時１０分です。', '今は１０時です。'],
    correctIndex: 0,
  },
] as const;

const timeBuildItems = [
  {
    id: 1,
    clock: '7:15',
    answer: '７時１５分',
    tokens: ['７時', '１５分'],
  },
  {
    id: 2,
    clock: '9:30',
    answer: '９時半',
    tokens: ['９時', '半'],
  },
  {
    id: 3,
    clock: '3:05',
    answer: '３時５分',
    tokens: ['３時', '５分'],
  },
] as const;

const minuteRows = [
  { num: 1, jp: '１分', romaji: 'ippun' },
  { num: 2, jp: '２分', romaji: 'nifun' },
  { num: 3, jp: '３分', romaji: 'sanpun' },
  { num: 4, jp: '４分', romaji: 'yonpun' },
  { num: 5, jp: '５分', romaji: 'gofun' },
  { num: 6, jp: '６分', romaji: 'roppun' },
  { num: 7, jp: '７分', romaji: 'nanafun' },
  { num: 8, jp: '８分', romaji: 'happun' },
  { num: 9, jp: '９分', romaji: 'kyūfun' },
  { num: 10, jp: '１０分', romaji: 'juppun / jippun' },
  { num: 11, jp: '１１分', romaji: 'jūippun' },
  { num: 12, jp: '１２分', romaji: 'jūnifun' },
  { num: 13, jp: '１３分', romaji: 'jūsanpun' },
  { num: 14, jp: '１４分', romaji: 'jūyonpun' },
  { num: 15, jp: '１５分', romaji: 'jūgofun' },
  { num: 16, jp: '１６分', romaji: 'jūroppun' },
  { num: 17, jp: '１７分', romaji: 'jūnanafun' },
  { num: 18, jp: '１８分', romaji: 'jūhappun' },
  { num: 19, jp: '１９分', romaji: 'jūkyūfun' },
  { num: 20, jp: '２０分', romaji: 'nijuppun' },
  { num: 21, jp: '２１分', romaji: 'nijūippun' },
  { num: 22, jp: '２２分', romaji: 'nijūnifun' },
  { num: 23, jp: '２３分', romaji: 'nijūsanpun' },
  { num: 24, jp: '２４分', romaji: 'nijūyonpun' },
  { num: 25, jp: '２５分', romaji: 'nijūgofun' },
  { num: 26, jp: '２６分', romaji: 'nijūroppun' },
  { num: 27, jp: '２７分', romaji: 'nijūnanafun' },
  { num: 28, jp: '２８分', romaji: 'nijūhappun' },
  { num: 29, jp: '２９分', romaji: 'nijūkyūfun' },
  { num: 30, jp: '３０分', romaji: 'sanjuppun' },
  { num: 31, jp: '３１分', romaji: 'san-jūippun' },
  { num: 32, jp: '３２分', romaji: 'san-jūnifun' },
  { num: 33, jp: '３３分', romaji: 'san-jūsanpun' },
  { num: 34, jp: '３４分', romaji: 'san-jūyonpun' },
  { num: 35, jp: '３５分', romaji: 'san-jūgofun' },
  { num: 36, jp: '３６分', romaji: 'san-jūroppun' },
  { num: 37, jp: '３７分', romaji: 'san-jūnanafun' },
  { num: 38, jp: '３８分', romaji: 'san-jūhappun' },
  { num: 39, jp: '３９分', romaji: 'san-jūkyūfun' },
  { num: 40, jp: '４０分', romaji: 'yonjuppun' },
  { num: 41, jp: '４１分', romaji: 'yon-jūippun' },
  { num: 42, jp: '４２分', romaji: 'yon-jūnifun' },
  { num: 43, jp: '４３分', romaji: 'yon-jūsanpun' },
  { num: 44, jp: '４４分', romaji: 'yon-jūyonpun' },
  { num: 45, jp: '４５分', romaji: 'yon-jūgofun' },
  { num: 46, jp: '４６分', romaji: 'yon-jūroppun' },
  { num: 47, jp: '４７分', romaji: 'yon-jūnanafun' },
  { num: 48, jp: '４８分', romaji: 'yon-jūhappun' },
  { num: 49, jp: '４９分', romaji: 'yon-jūkyūfun' },
  { num: 50, jp: '５０分', romaji: 'gojuppun' },
  { num: 51, jp: '５１分', romaji: 'go-jūippun' },
  { num: 52, jp: '５２分', romaji: 'go-jūnifun' },
  { num: 53, jp: '５３分', romaji: 'go-jūsanpun' },
  { num: 54, jp: '５４分', romaji: 'go-jūyonpun' },
  { num: 55, jp: '５５分', romaji: 'go-jūgofun' },
  { num: 56, jp: '５６分', romaji: 'go-jūroppun' },
  { num: 57, jp: '５７分', romaji: 'go-jūnanafun' },
  { num: 58, jp: '５８分', romaji: 'go-jūhappun' },
  { num: 59, jp: '５９分', romaji: 'go-jūkyūfun' },
  { num: 60, jp: '６０分', romaji: 'roppun (＝１時間)' },
] as const;

const listenClockItems = [
  {
    id: 1,
    jp: '７時１５分です。',
    displayJa: '７時１５分',
    options: ['7:15', '7:05', '7:30'],
    correctIndex: 0,
  },
  {
    id: 2,
    jp: '９時半です。',
    displayJa: '９時半',
    options: ['9:15', '9:30', '9:45'],
    correctIndex: 1,
  },
  {
    id: 3,
    jp: '３時５分です。',
    displayJa: '３時５分',
    options: ['3:05', '3:50', '3:15'],
    correctIndex: 0,
  },
] as const;

export default function Lesson4Page() {
  const coreWords = lesson4.words.filter((w) => w.category === 'timeCore' || w.category === 'question');
  const dayPartWords = lesson4.words.filter((w) => w.category === 'dayPart');
  const weekdayWords = lesson4.words.filter((w) => w.category === 'weekday');
  const frequencyWords = lesson4.words.filter((w) => w.category === 'frequency');

  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const [timeBuildIndex, setTimeBuildIndex] = useState(0);
  const [timeTokens, setTimeTokens] = useState<string[]>([]);
  const [timeChecked, setTimeChecked] = useState(false);

  const [qaIndex, setQaIndex] = useState(0);
  const [qaSelected, setQaSelected] = useState<number | null>(null);

  const [speakingList] = useState(() => getSpeakingSentences(lesson4.sentences, 10));

  const [listenIndex, setListenIndex] = useState(0);
  const [listenSelected, setListenSelected] = useState<number | null>(null);

  const [minuteExpanded, setMinuteExpanded] = useState(false);

  const timeInputItems = [
    { clock: '7:45', answer: '７時４５分' },
    { clock: '10:20', answer: '１０時２０分' },
  ] as const;
  const [timeInputs, setTimeInputs] = useState<string[]>(
    () => new Array(timeInputItems.length).fill('')
  );
  const [timeCheckedArr, setTimeCheckedArr] = useState<boolean[]>(
    () => new Array(timeInputItems.length).fill(false)
  );

  const currentQuiz = timeQuizItems[quizIndex];
  const currentBuild = timeBuildItems[timeBuildIndex];
  const currentQa = qaTimeItems[qaIndex];
  const buildText = timeTokens.join('');
  const isBuildCorrect =
    timeTokens.length === currentBuild.tokens.length &&
    timeTokens.join('') === currentBuild.tokens.join('');

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson4" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson4.title}</h1>
          <p className="lesson-subtitle">{lesson4.description}</p>
        </section>

        {/* Vocab – từ vựng lõi về giờ/phút */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Từ vựng: giờ, phút, câu hỏi thời gian</h2>
            <p className="section-caption">
              Nhóm từ để nói &quot;giờ, phút, rưỡi, mấy giờ, mấy phút&quot; – nền tảng cho mọi câu hỏi
              về thời gian.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {coreWords.map((w) => (
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

        {/* Vocab – buổi trong ngày */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Các buổi trong ngày</h2>
            <p className="section-caption">
              Phân biệt sáng / trưa / tối, AM (午前) và PM (午後) để nói giờ chính xác.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {dayPartWords.map((w) => (
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

        {/* Vocab – ngày trong tuần & tần suất */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Ngày trong tuần &amp; tần suất</h2>
            <p className="section-caption">
              Từ vựng để nói &quot;thứ mấy&quot; và &quot;mỗi ngày, mỗi sáng, mỗi tối&quot; khi mô tả lịch
              sinh hoạt.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {weekdayWords.concat(frequencyWords).map((w) => (
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
            <h2>Ngữ pháp: hỏi &amp; nói giờ giấc</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson4.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Hỏi giờ – 今は何時ですか。</h3>
              <p className="grammar-note">
                Khi muốn hỏi giờ hiện tại, dùng mẫu: <strong>今は何時ですか。</strong> – &quot;Bây giờ là mấy
                giờ?&quot; Trả lời: <strong>今は～時です。</strong>
              </p>

              <h3 className="grammar-subtitle">2. Nói giờ &quot;đúng giờ&quot; và &quot;giờ rưỡi&quot;</h3>
              <ul className="grammar-list">
                <li>
                  <strong>～時</strong>: &quot;~ giờ&quot;. Ví dụ: ７時（しちじ）: 7 giờ, ９時（くじ）: 9 giờ.
                </li>
                <li>
                  <strong>～時半</strong>: &quot;~ giờ rưỡi&quot;. Ví dụ: ６時半: 6 giờ rưỡi, １１時半: 11 giờ rưỡi.
                </li>
              </ul>

              <h3 className="grammar-subtitle">3. Nói giờ + phút – ～時～分</h3>
              <p className="grammar-note">
                Khi cần nói thêm phút, dùng <strong>～時～分</strong>. Ví dụ: ３時５分, １０時１０分. Lưu ý một số
                cách đọc phút đặc biệt (giống trong sách):
              </p>
              <ul className="grammar-list">
                <li>
                  １分: <strong>いっぷん</strong> (không đọc &quot;いちふん&quot;)
                </li>
                <li>
                  ３分: <strong>さんぷん</strong>, ４分: <strong>よんぷん</strong>, ６分: <strong>ろっぷん</strong>
                </li>
                <li>
                  ８分: <strong>はっぷん</strong>, １０分: <strong>じゅっぷん／じっぷん</strong>
                </li>
                <li>Các số còn lại thường đọc ～ふん (２分 にふん, ５分 ごふん, ７分 ななふん, ９分 きゅうふん)</li>
              </ul>

              <h3 className="grammar-subtitle">4. Buổi sáng / chiều – 午前・午後</h3>
              <p className="grammar-note">
                Để phân biệt giờ buổi sáng hay chiều, đặt <strong>午前／午後</strong> trước giờ:
              </p>
              <ul className="grammar-list">
                <li>
                  午前７時: 7 giờ sáng (trước 12 giờ trưa) – &quot;7 giờ sáng&quot;.
                </li>
                <li>
                  午後３時: 3 giờ chiều (sau 12 giờ trưa) – &quot;3 giờ chiều&quot;.
                </li>
              </ul>

              <h3 className="grammar-subtitle">5. Thời gian kéo dài – ～から～まで</h3>
              <p className="grammar-note">
                Mẫu <strong>～時から～時までです</strong> dùng để nói khoảng thời gian diễn ra (từ mấy giờ đến
                mấy giờ):
              </p>
              <ul className="grammar-list">
                <li>
                  授業は９時から１２時までです。→ Giờ học từ 9 giờ đến 12 giờ.
                </li>
                <li>
                  会社は９時から５時までです。→ Công ty làm việc từ 9 giờ đến 5 giờ.
                </li>
              </ul>

              <h3 className="grammar-subtitle">6. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson4.sentences.map((s) => (
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

        {/* Mini game: chọn câu trả lời đúng cho thời gian */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Thời gian &amp; lịch sinh hoạt</h2>
            <p className="section-caption">
              Đọc câu tiếng Việt, chọn câu tiếng Nhật phù hợp. Bấm vào câu để nghe phát âm.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">{currentQuiz.vi}</p>
              <div className="jp">{currentQuiz.jp}</div>
            </div>
            <div className="practice-options">
              {currentQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentQuiz.correctIndex;
                const className =
                  'practice-option' +
                  (selected != null
                    ? selected === idx && isCorrect
                      ? ' correct'
                      : selected === idx && !isCorrect
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      setSelected(idx);
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
                  setSelected(null);
                  setQuizIndex((prev) => (prev + 1) % timeQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Bảng tra cứu: cách đọc 1–60 phút */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Bảng tra cứu: cách đọc 1–60 phút</h2>
            <p className="section-caption">
              Tra nhanh cách đọc từng phút trong tiếng Nhật – rất hữu ích khi nói giờ chi tiết.
            </p>
          </div>
          <div className="card-body">
            <div className="grammar-detail">
              <div className="grammar-table">
                <div className="grammar-table-header">
                  <span>Phút</span>
                  <span>Tiếng Nhật</span>
                  <span>Romaji</span>
                </div>
                {(minuteExpanded ? minuteRows : minuteRows.slice(0, 10)).map((m) => (
                  <div key={m.num} className="grammar-table-row">
                    <span className="grammar-tag">{m.num}</span>
                    <div className="jp">{m.jp}</div>
                    <div className="romaji">{m.romaji}</div>
                  </div>
                ))}
              </div>
              <div className="practice-actions" style={{ marginTop: '0.75rem' }}>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setMinuteExpanded((prev) => !prev)}
                >
                  {minuteExpanded ? 'Thu gọn bảng phút' : 'Xem đầy đủ 1–60 phút'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Thời khóa biểu mẫu */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Thời khóa biểu mẫu: một ngày của tôi</h2>
            <p className="section-caption">
              Bảng thời gian dậy / ăn / đi làm / ngủ – giống phần bảng giờ trong sách.
            </p>
          </div>
          <div className="card-body">
            <div className="grammar-detail">
              <div className="grammar-table">
                <div className="grammar-table-header">
                  <span>⏰ Giờ</span>
                  <span>Câu tiếng Nhật</span>
                  <span>Tiếng Việt</span>
                </div>
                {timetableRows.map((row) => (
                  <div key={row.jp} className="grammar-table-row">
                    <span className="grammar-tag">{row.clock}</span>
                    <div>
                      <div className="jp">{row.jp}</div>
                      <div className="romaji">{row.romaji}</div>
                    </div>
                    <div className="vi">{row.vi}</div>
                    <button
                      type="button"
                      className="listen-button"
                      onClick={() => speakJapaneseNow(row.jp)}
                    >
                      🔊
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mini game: ghép giờ từ số → tiếng Nhật */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Ghép giờ (số → tiếng Nhật)</h2>
            <p className="section-caption">
              Nhìn đồng hồ dạng số (7:15, 9:30, …), ghép các mảnh tiếng Nhật lại cho đúng.
            </p>
          </div>
          <div className="card-body practice-body builder-body">
            <div className="builder-left">
              <p className="builder-vi-quiz">
                Giờ: <strong>{currentBuild.clock}</strong>
              </p>
              <p className="builder-hint">Hãy bấm các mảnh để tạo câu giờ tiếng Nhật.</p>
              <div className="builder-answer">
                {timeTokens.length === 0 ? (
                  <span className="builder-placeholder">Chưa chọn mảnh nào…</span>
                ) : (
                  <span className="jp">{buildText}</span>
                )}
              </div>
              {timeChecked && (
                <p className={`builder-feedback ${isBuildCorrect ? 'correct-text' : 'wrong-text'}`}>
                  {isBuildCorrect ? 'Đúng rồi! 🎉' : `Sai rồi, đáp án đúng: ${currentBuild.answer}`}
                </p>
              )}
            </div>
            <div className="builder-right">
              <p className="builder-hint">Các mảnh để ghép:</p>
              <div className="builder-tokens">
                {currentBuild.tokens.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="builder-token"
                    onClick={() => {
                      if (timeChecked) return;
                      setTimeTokens((prev) => [...prev, t]);
                      speakJapaneseNow(t);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setTimeTokens([]);
                    setTimeChecked(false);
                  }}
                >
                  Xoá lựa chọn
                </button>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setTimeChecked(true)}
                >
                  Kiểm tra
                </button>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setTimeTokens([]);
                    setTimeChecked(false);
                    setTimeBuildIndex((prev) => (prev + 1) % timeBuildItems.length);
                  }}
                >
                  Câu giờ khác →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mini game: Hỏi – đáp 今は何時ですか。 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Hỏi – đáp &quot;Bây giờ là mấy giờ?&quot;</h2>
            <p className="section-caption">
              Đọc tiếng Việt, hiểu câu hỏi <strong>今は何時ですか。</strong> và chọn câu trả lời giờ cho đúng.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Tiếng Việt: <strong>{currentQa.viClock}</strong>
              </p>
              <div className="jp">
                Hỏi: <strong>{currentQa.question}</strong>
              </div>
            </div>
            <div className="practice-options">
              {currentQa.answers.map((ans, idx) => {
                const isCorrect = idx === currentQa.correctIndex;
                const className =
                  'practice-option' +
                  (qaSelected != null
                    ? qaSelected === idx && isCorrect
                      ? ' correct'
                      : qaSelected === idx && !isCorrect
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={ans}
                    type="button"
                    className={className}
                    onClick={() => {
                      setQaSelected(idx);
                      speakJapaneseNow(ans);
                    }}
                  >
                    {ans}
                  </button>
                );
              })}
            </div>
            <div className="practice-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setQaSelected(null);
                  setQaIndex((prev) => (prev + 1) % qaTimeItems.length);
                }}
              >
                Câu hỏi khác →
              </button>
            </div>
          </div>
        </section>

        {/* Bài tập nhỏ: Tự gõ giờ bằng tiếng Nhật */}
        <section className="card">
          <div className="card-header">
            <h2>Bài tập nhỏ: Tự gõ giờ</h2>
            <p className="section-caption">
              Nhìn giờ dạng số (7:45, 10:20…), tự gõ lại bằng tiếng Nhật (～時～分). Cách chấm giống
              bài điền chỗ trống ở Bài 1.
            </p>
          </div>
          <div className="card-body cloze-list">
            {timeInputItems.map((item, idx) => {
              const value = timeInputs[idx] ?? '';
              const checked = timeCheckedArr[idx] ?? false;
              const correct = value.trim() === item.answer;
              return (
                <div key={item.clock} className="cloze-item">
                  <div className="cloze-main">
                    <div className="vi">Giờ: {item.clock}</div>
                    <div className="jp">Hãy gõ: ～時～分 (ví dụ: ７時４５分)</div>
                  </div>
                  <div className="cloze-input-row">
                    <span className="cloze-label">Nhập tiếng Nhật:</span>
                    <input
                      type="text"
                      className="cloze-input"
                      value={value}
                      onChange={(e) => {
                        const nextValues = [...timeInputs];
                        nextValues[idx] = e.target.value;
                        setTimeInputs(nextValues);
                        const nextChecked = [...timeCheckedArr];
                        nextChecked[idx] = false;
                        setTimeCheckedArr(nextChecked);
                      }}
                      placeholder="Ví dụ: ７時４５分"
                    />
                  </div>
                  <div className="cloze-actions">
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() => {
                        const nextChecked = [...timeCheckedArr];
                        nextChecked[idx] = true;
                        setTimeCheckedArr(nextChecked);
                      }}
                    >
                      Chấm câu này
                    </button>
                  </div>
                  {checked && (
                    <div className="cloze-answer">
                      <span className="label">{correct ? 'Đúng rồi!' : 'Chưa đúng:'}</span>
                      {!correct && (
                        <>
                          <span className="value">{value || '（trống）'}</span>
                          <span className="hint">
                            &nbsp;→ đáp án chuẩn là <strong>{item.answer}</strong>
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Mini game: Nghe giờ → chọn đồng hồ đúng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Nghe giờ và chọn đồng hồ</h2>
            <p className="section-caption">
              Nghe câu giờ tiếng Nhật, sau đó chọn đúng đồng hồ dạng số (7:15, 9:30, …).
            </p>
          </div>
          <div className="card-body practice-body">
            {(() => {
              const item = listenClockItems[listenIndex];
              return (
                <>
                  <div className="practice-prompt">
                    <p className="practice-question">
                      Bấm nút &quot;Nghe giờ&quot;, rồi chọn đồng hồ đúng.
                    </p>
                    <button
                      type="button"
                      className="listen-button"
                      onClick={() => speakJapaneseNow(item.jp)}
                    >
                      🔊 Nghe giờ tiếng Nhật
                    </button>
                    <div className="jp">Câu giờ: {item.displayJa}</div>
                  </div>
                  <div className="practice-options">
                    {item.options.map((opt, idx) => {
                      const isCorrect = idx === item.correctIndex;
                      const selected = listenSelected === idx;
                      const className =
                        'practice-option' +
                        (listenSelected != null
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
                          onClick={() => setListenSelected(idx)}
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
                        setListenSelected(null);
                        setListenIndex((prev) => (prev + 1) % listenClockItems.length);
                      }}
                    >
                      Câu giờ khác →
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game 0/4</p>
          </div>
        </section>
        <SpeakingGameMulti sentences={speakingList} />
        <ListeningDictation items={lesson4.sentences.slice(0, 5).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }))} onSpeak={speakJapaneseNow} title="Luyện nghe – Chép chính tả" />

        <WritingChallenge
          title="Viết lịch sinh hoạt của bạn"
          sectionCaption="Dùng mẫu đã học để tự viết vài câu về giờ dậy, đi làm / đi học, ăn tối và giờ ngủ. Bấm «Chấm bài bằng AI» để nhận điểm và gợi ý sửa."
          tips={
            <ul className="grammar-list">
              <li>Giờ dậy (ví dụ: Tôi dậy lúc 6 giờ rưỡi.)</li>
              <li>Giờ đi làm / đi học</li>
              <li>Giờ ăn tối</li>
              <li>Giờ đi ngủ</li>
            </ul>
          }
          placeholder={`Ví dụ:\nわたしは毎朝６時半に起きます。\n７時に朝ごはんを食べます。\n...`}
          rows={4}
          lessonId="B4"
          grammarContext="Giờ với に, 起きます・寝ます・食べます・行きます, 毎朝・毎日"
        />
      </main>
    </div>
    </div>
  );
}