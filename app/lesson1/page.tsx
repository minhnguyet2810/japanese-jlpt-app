'use client';

import { useState, useEffect } from 'react';
import {
  basicNumbers,
  classroomPhrases,
  greetingPhrases,
  lesson1,
  countryInfos,
  patternExamples,
  noPatternExamples,
  lesson1TripleVocab,
  lesson1PronounVocab,
  familyVocab,
} from '@/data/lessons/lesson1';
import WritingChallenge from '@/components/WritingChallenge';
import { PracticeWord } from '@/components/PracticeWord';
import { Sidebar } from '@/components/Sidebar';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson1Page() {
  // Interactive Sentence Builder: ghép câu từ tiếng Việt -> tiếng Nhật
  const builderQuestions = [
    {
      id: 1,
      vietnamese: 'Tôi là sinh viên.',
      hint: 'N1 は N2 です。',
      tokens: ['私は', '学生', 'です。'],
      romaji: 'Watashi wa gakusei desu.',
    },
    {
      id: 2,
      vietnamese: 'Tôi là nhân viên công ty.',
      hint: 'N1 は N2 です。',
      tokens: ['私は', '会社員', 'です。'],
      romaji: 'Watashi wa kaishain desu.',
    },
    {
      id: 3,
      vietnamese: 'Tôi là bác sĩ.',
      hint: 'N1 は N2 です。',
      tokens: ['私は', '医者', 'です。'],
      romaji: 'Watashi wa isha desu.',
    },
    {
      id: 4,
      vietnamese: 'Bạn là giáo viên à?',
      hint: 'N1 は N2 ですか。',
      tokens: ['あなたは', '先生', 'ですか。'],
      romaji: 'Anata wa sensei desu ka.',
    },
    {
      id: 5,
      vietnamese: 'Tôi là người Việt Nam.',
      hint: 'N1 は N2 です。',
      tokens: ['私は', 'ベトナム人', 'です。'],
      romaji: 'Watashi wa Betonamu-jin desu.',
    },
  ] as const;

  const [builderQuestionIndex, setBuilderQuestionIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);

  const currentQuestion = builderQuestions[builderQuestionIndex];

  const builderText = builderTokens.join(' ');

  const clearBuilder = () => {
    setBuilderTokens([]);
    setBuilderChecked(false);
  };

  const addToken = (token: string) => {
    setBuilderTokens((prev) => [...prev, token]);
  };

  const isCurrentCorrect =
    builderTokens.length === currentQuestion.tokens.length &&
    builderTokens.join('') === currentQuestion.tokens.join('');

  const goNextQuestion = () => {
    setBuilderQuestionIndex((prev) => (prev + 1) % builderQuestions.length);
    setBuilderTokens([]);
    setBuilderChecked(false);
  };

  const occupationWords = lesson1.words.filter((w) => w.type === 'occupation');
  // Dùng cho thẻ luyện từ & PracticeWord: chỉ giữ nghề nghiệp + quốc tịch để tránh lặp lại đại từ
  const practiceWords = lesson1.words.filter(
    (w) => w.type === 'occupation' || w.type === 'country'
  );
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const activeWord = practiceWords[activeWordIndex] ?? practiceWords[0];
  const [speakingList] = useState(() => getSpeakingSentences(lesson1.sentences, 10));

  // Bài tập điền chỗ trống nhỏ cho ngữ pháp
  const grammarDrills = [
    {
      jp: '（　　）は学生です。',
      answer: '私は',
      romaji: '(        ) wa gakusei desu.',
      vi: 'Tôi là sinh viên.',
    },
    {
      jp: 'リンさん（　　）デザイナーです。',
      answer: 'は',
      romaji: 'Rin-san (    ) dezainā desu.',
      vi: 'Chị Linh là nhà thiết kế.',
    },
    {
      jp: 'ナムさんは学生（　　）ありません。',
      answer: 'では',
      romaji: 'Namu-san wa gakusei (    ) arimasen.',
      vi: 'Anh Nam không phải là sinh viên.',
    },
    {
      jp: '（　　）はベトナム人ですか。',
      answer: 'あなた',
      romaji: '(Anata) wa Betonamu-jin desu ka.',
      vi: 'Bạn là người Việt Nam phải không?',
    },
  ];
  const [drillInputs, setDrillInputs] = useState<string[]>(
    () => new Array(grammarDrills.length).fill('')
  );
  const [drillChecked, setDrillChecked] = useState<boolean[]>(
    () => new Array(grammarDrills.length).fill(false)
  );

  // Tokens cho interactive builder (sử dụng token của câu hiện tại, sắp xếp cố định để tránh random)
  const builderOptions = [...currentQuestion.tokens].sort();

  // Mini game 1: Vocab multiple choice (nghề nghiệp & quốc tịch)
  const vocabQuizItems = [
    {
      id: 1,
      vi: 'giáo viên',
      options: ['学生', '先生', '会社員'],
      correctIndex: 1,
    },
    {
      id: 2,
      vi: 'nhân viên công ty',
      options: ['会社員', '医者', 'エンジニア'],
      correctIndex: 0,
    },
    {
      id: 3,
      vi: 'người Việt Nam',
      options: ['アメリカ人', 'ベトナム人', '日本人'],
      correctIndex: 1,
    },
  ] as const;
  const [vocabQuizIndex, setVocabQuizIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const currentVocabQuiz = vocabQuizItems[vocabQuizIndex];

  // Mini game 2: Grammar multiple choice (chọn câu đúng)
  const grammarQuizItems = [
    {
      id: 1,
      vi: 'Tôi là sinh viên.',
      options: ['私は学生です。', '私は学生じゃありません。', 'あなたは学生です。'],
      correctIndex: 0,
    },
    {
      id: 2,
      vi: 'Anh Nam không phải là bác sĩ.',
      options: ['ナムさんは医者です。', 'ナムさんは医者ではありません。', 'ナムさんは学生ではありません。'],
      correctIndex: 1,
    },
    {
      id: 3,
      vi: 'Bạn là người Nhật phải không?',
      options: ['あなたは日本人ですか。', 'あなたは日本人です。', 'あなたは日本人ではありません。'],
      correctIndex: 0,
    },
  ] as const;
  const [grammarQuizIndex, setGrammarQuizIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const currentGrammarQuiz = grammarQuizItems[grammarQuizIndex];

  // Tiến độ: game 0/4, luyện nói 0/1
  const [gameCompleted, setGameCompleted] = useState({
    vocab: false,
    grammar: false,
    builder: false,
    drill: false,
  });
  const gamesDone =
    (gameCompleted.vocab ? 1 : 0) +
    (gameCompleted.grammar ? 1 : 0) +
    (gameCompleted.builder ? 1 : 0) +
    (gameCompleted.drill ? 1 : 0);

  useEffect(() => {
    const allDrillCorrect =
      grammarDrills.length > 0 &&
      grammarDrills.every((q, i) => drillChecked[i] && drillInputs[i].trim() === q.answer);
    if (allDrillCorrect) {
      setGameCompleted((prev) => ({ ...prev, drill: true }));
    }
  }, [drillChecked, drillInputs, grammarDrills]);

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson1" />
      <div className="sb-content">
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Bài 1: Giới thiệu bản thân</h1>
          <p className="lesson-subtitle">
            Mẫu câu cơ bản với 「{lesson1.grammarPattern}」 để nói &quot;Tôi là ...&quot;
          </p>
        </section>

        {/* Grammar card – giải thích chi tiết như sách */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>{lesson1.grammarTitle}</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson1.grammarPattern}</p>
            <p className="grammar-explain">{lesson1.grammarExplanation}</p>

            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Cấu trúc câu</h3>
              <div className="grammar-table">
                <div className="grammar-table-row">
                  <span className="grammar-tag">N1</span>
                  <span className="grammar-text">Chủ thể: 私, あなた, ミラーさん, サントスさん…</span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">は</span>
                  <span className="grammar-text">
                    Trợ từ chủ đề (đọc là <strong>wa</strong>): nhấn mạnh &quot;về N1 thì…&quot;
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">N2</span>
                  <span className="grammar-text">
                    Nghề nghiệp / quốc tịch / thân phận: 学生, 会社員, 医者, ベトナム人…
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">です</span>
                  <span className="grammar-text">Động từ &quot;là&quot; lịch sự, đặt cuối câu.</span>
                </div>
              </div>

              <h3 className="grammar-subtitle">2. Mẫu câu cơ bản</h3>
              <p className="grammar-note">
                <strong>Khẳng định:</strong> N1 は N2 です。 &nbsp;→ &nbsp;私 は 学生 です。 (Tôi là sinh viên.)
                <br />
                <strong>Phủ định (lịch sự):</strong> N1 は N2 ではありません。
                <br />
                <strong>Nghi vấn:</strong> N1 は N2 ですか。 &nbsp;→ &nbsp;Giọng lên ở cuối &quot;か&quot;.
              </p>

              <h3 className="grammar-subtitle">3. Ví dụ mẫu</h3>
              <div className="grammar-examples">
                {lesson1.sentences.map((s) => (
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

              <h3 className="grammar-subtitle">4. Lưu ý nhỏ</h3>
              <ul className="grammar-list">
                <li>
                  Trong hội thoại thường lược bỏ chủ ngữ nếu đã hiểu ngữ cảnh:
                  <em> （私は）学生です。</em>
                </li>
                <li>
                  &quot;は&quot; viết là &quot;ha&quot; nhưng đọc là <strong>wa</strong> khi là trợ từ.
                </li>
                <li>
                  &quot;です&quot; thường đọc nhẹ là &quot;des&quot; (không kéo &quot;u&quot; quá rõ).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mini game 4: Điền chỗ trống */}
        <section className="card">
          <div className="card-header">
            <h2>Mini game 4: Điền trợ từ &amp; chủ ngữ</h2>
            <p className="section-caption">
              Luyện nhanh các mẫu câu giới thiệu cơ bản trong Bài 1:
              <strong> N1 は N2 です／N1 は N2 ではありません／N1 は N2 ですか／N1 の N2</strong>.
            </p>
          </div>
          <div className="card-body">
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Mẫu khẳng định – N1 は N2 です</h3>
              <ul className="grammar-list">
                <li>Dùng để nói &quot;N1 là N2&quot;: 私は学生です。→ Tôi là học sinh / sinh viên.</li>
                <li>Trợ từ は đứng sau chủ ngữ (N1): 私<strong>は</strong>、田中<strong>さんは</strong>…</li>
              </ul>

              <h3 className="grammar-subtitle">2. Mẫu phủ định – N1 は N2 ではありません</h3>
              <p className="grammar-note">
                Dùng để nói &quot;N1 không phải là N2&quot;. Ví dụ: 私は学生<strong>ではありません</strong>。→
                Tôi không phải là học sinh.
              </p>

              <h3 className="grammar-subtitle">3. Mẫu câu hỏi – N1 は N2 ですか</h3>
              <ul className="grammar-list">
                <li>
                  Đổi です thành <strong>ですか</strong> để hỏi: &quot;N1 có phải là N2 không?&quot;
                </li>
                <li>
                  Cách trả lời: はい、そうです。／いいえ、そうではありません。 (Vâng, đúng vậy. / Không, không phải.)
                </li>
              </ul>

              <h3 className="grammar-subtitle">4. Mẫu Danh từ の Danh từ (N1 の N2)</h3>
              <p className="grammar-note">
                Dùng để thể hiện sở hữu / quan hệ: &quot;N2 của N1&quot;. Ví dụ: わたし<strong>の</strong>会社 (công
                ty của tôi), さくら大学<strong>の</strong>学生 (sinh viên của Đại học Sakura).
              </p>
            </div>

            <div className="cloze-list">
              {grammarDrills.map((q, idx) => (
                <div key={q.jp} className="cloze-item">
                  <div className="cloze-main">
                    <div className="jp">{q.jp}</div>
                    <div className="romaji">{q.romaji}</div>
                    <div className="vi">{q.vi}</div>
                  </div>
                  <div className="cloze-input-row">
                    <span className="cloze-label">Điền vào （　　）:</span>
                    <input
                      type="text"
                      className="cloze-input"
                      value={drillInputs[idx]}
                      onChange={(e) => {
                        const next = [...drillInputs];
                        next[idx] = e.target.value;
                        setDrillInputs(next);
                        // khi người dùng sửa thì coi như chưa chấm lại
                        setDrillChecked((prev) => {
                          const arr = [...prev];
                          arr[idx] = false;
                          return arr;
                        });
                      }}
                      placeholder="Nhập bằng tiếng Nhật cho chỗ trống (ví dụ: chủ ngữ, trợ từ...)"
                    />
                  </div>
                  <div className="cloze-actions">
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() =>
                        setDrillChecked((prev) => {
                          const next = [...prev];
                          next[idx] = true;
                          return next;
                        })
                      }
                    >
                      Chấm câu này
                    </button>
                    <button
                      type="button"
                      className="listen-button"
                      onClick={() => speakJapaneseNow(q.jp.replace('（　　）', q.answer))}
                    >
                      🔊 Nghe câu đầy đủ
                    </button>
                  </div>
                  {drillChecked[idx] && (
                    <div className="cloze-answer">
                      <span className="label">
                        {drillInputs[idx].trim() === q.answer ? 'Đúng rồi!' : 'Chưa đúng:'}
                      </span>
                      {drillInputs[idx].trim() !== q.answer && (
                        <>
                          <span className="value">{drillInputs[idx] || '（trống）'}</span>
                          <span className="hint">
                            &nbsp;→ đáp án chuẩn là <strong>{q.answer}</strong>
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flashcard 3 kiểu chữ: các nghề nghiệp tiếng Nhật */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Các nghề nghiệp tiếng Nhật</h2>
            <p className="section-caption">
              Mỗi thẻ là một nghề nghiệp với 3 dạng chữ: Kanji/Katakana, かな và romaji. Bấm vào thẻ để
              nghe phát âm.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {lesson1TripleVocab.map((v) => (
              <button
                key={v.main}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(v.main)}
              >
                <div className="triple-main">{v.main}</div>
                <div className="triple-kana">{v.kana}</div>
                <div className="triple-romaji">{v.romaji}</div>
                <div className="vocab-actions">
                  <span className="vocab-vi">{v.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Flashcard: đại từ nhân xưng & tính từ sở hữu */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đại từ nhân xưng &amp; tính từ sở hữu</h2>
            <p className="section-caption">
              I / you / we / they / he / she và dạng &quot;của tôi, của bạn, của anh ấy, ...&quot; để
              sau này ghép câu giới thiệu bản thân và gia đình.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {lesson1PronounVocab.map((v) => (
              <button
                key={v.main}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(v.main)}
              >
                <div className="triple-main">{v.main}</div>
                <div className="triple-kana">{v.kana}</div>
                <div className="triple-romaji">{v.romaji}</div>
                <div className="vocab-actions">
                  <span className="vocab-vi">{v.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Flashcard: Từ vựng gia đình cơ bản */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Từ vựng gia đình (Bài 1)</h2>
            <p className="section-caption">
              Một vài cách gọi bố mẹ, anh chị em quen dùng khi tự giới thiệu về gia đình.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {familyVocab.map((v) => (
              <button
                key={v.main}
                type="button"
                className="vocab-item vocab-flashcard triple-vocab-card"
                onClick={() => speakJapaneseNow(v.main)}
              >
                <div className="triple-main">{v.main}</div>
                <div className="triple-kana">{v.kana}</div>
                <div className="triple-romaji">{v.romaji}</div>
                <div className="vocab-actions">
                  <span className="vocab-vi">{v.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Flashcard: Nước, người & ngôn ngữ */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Flashcard: Nước ・ Người ・ Ngôn ngữ</h2>
            <p className="section-caption">
              Học theo cụm: &quot;nước + người + ngôn ngữ&quot; giống bảng trong sách. Bấm vào thẻ để
              nghe phát âm.
            </p>
          </div>
          <div className="vocab-grid">
            {countryInfos.map((c) => (
              <button
                key={c.countryJa}
                type="button"
                className="vocab-item vocab-flashcard"
                onClick={() => speakJapaneseNow(`${c.countryJa}、${c.personJa}、${c.languageJa}`)}
              >
                <div className="vocab-jp">
                  {c.countryJa} ／ {c.personJa} ／ {c.languageJa}
                </div>
                <div className="vocab-romaji">
                  {c.countryRomaji} / {c.personRomaji} / {c.languageRomaji}
                </div>
                <div className="vocab-actions">
                  <span className="vocab-vi">
                    {c.countryVi} – {c.personVi} – {c.languageVi}
                  </span>
                  <span className="listen-inline">🔊 nghe cụm</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Game luyện tập – tiến độ 0/4 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/4</p>
            <p className="section-caption">
              Hoàn thành từng game bên dưới: từ vựng, ngữ pháp, ghép câu, điền chỗ trống.
            </p>
          </div>
        </section>

        {/* Mini game: Từ vựng Bài 1 (nghề & quốc tịch) */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 1: Từ vựng nghề nghiệp &amp; quốc tịch</h2>
            <p className="section-caption">
              Đọc nghĩa tiếng Việt, chọn đúng từ tiếng Nhật. Game này xoáy vào nghề nghiệp và quốc tịch trong Bài 1.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Nghĩa tiếng Việt: <strong>{currentVocabQuiz.vi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {currentVocabQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentVocabQuiz.correctIndex;
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
                      if (idx === currentVocabQuiz.correctIndex) {
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
                  setVocabQuizIndex((prev) => (prev + 1) % vocabQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Ngữ pháp Bài 1 – chọn câu đúng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game 2: Ngữ pháp Bài 1</h2>
            <p className="section-caption">
              Đọc câu tiếng Việt, chọn câu tiếng Nhật dùng mẫu 「N1 は N2 です／ではありません／ですか」 cho đúng.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Tiếng Việt: <strong>{currentGrammarQuiz.vi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {currentGrammarQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentGrammarQuiz.correctIndex;
                const selected = grammarSelected === idx;
                const className =
                  'practice-option' +
                  (grammarSelected != null
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
                      setGrammarSelected(idx);
                      if (idx === currentGrammarQuiz.correctIndex) {
                        setGameCompleted((prev) => ({ ...prev, grammar: true }));
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
                  setGrammarSelected(null);
                  setGrammarQuizIndex((prev) => (prev + 1) % grammarQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game 3: Ghép câu */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game 3: Ghép câu (Sentence Builder)</h2>
            <p className="section-caption">
              Xem câu tiếng Việt rồi ghép lại câu tiếng Nhật đúng trật tự. Tập trung vào mẫu:
              <strong> N1 は N2 です ／ N1 は N2 ですか。</strong>
            </p>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentQuestion.vietnamese}</div>
              <div className="builder-hint">Gợi ý cấu trúc: {currentQuestion.hint}</div>
              <div className="builder-romaji">{currentQuestion.romaji}</div>
              <button
                className="listen-button"
                type="button"
                onClick={() => speakJapaneseNow(currentQuestion.tokens.join(''))}
              >
                🔊 Nghe câu mẫu
              </button>
            </div>

            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{builderText || '・・・'}</div>
                {builderChecked && (
                  <div className="builder-feedback">
                    {isCurrentCorrect ? (
                      <span className="correct-text">
                        ✅ Đúng rồi! Câu bạn ghép hoàn toàn chính xác.
                      </span>
                    ) : (
                      <span className="wrong-text">
                        ❌ Chưa đúng. Đáp án chuẩn: {currentQuestion.tokens.join(' ')}
                      </span>
                    )}
                  </div>
                )}
                <div className="builder-actions">
                  <button
                    className="primary-button"
                    type="button"
                    onClick={() => {
                      if (!builderTokens.length) return;
                      setBuilderChecked(true);
                      if (isCurrentCorrect) {
                        setGameCompleted((prev) => ({ ...prev, builder: true }));
                        speakJapaneseNow(builderTokens.join(''));
                      }
                    }}
                    disabled={!builderTokens.length}
                  >
                    Kiểm tra câu
                  </button>
                  <button className="secondary-button" type="button" onClick={clearBuilder}>
                    Xoá câu
                  </button>
                  <button className="secondary-button" type="button" onClick={goNextQuestion}>
                    Câu khác →
                  </button>
                </div>
              </div>

              <div className="builder-tokens">
                {builderOptions.map((token) => (
                  <button
                    key={token}
                    type="button"
                    className="token-chip"
                    onClick={() => addToken(token)}
                  >
                    <span className="token-jp">{token}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practice each word */}
        {activeWord && (
          <section className="practice-section">
            <div className="practice-word-switcher">
              {practiceWords.map((w, idx) => (
                <button
                  key={w.japanese}
                  type="button"
                  className={
                    'practice-word-tab' + (idx === activeWordIndex ? ' active' : '')
                  }
                  onClick={() => setActiveWordIndex(idx)}
                >
                  <span className="jp">{w.japanese}</span>
                </button>
              ))}
            </div>
            <PracticeWord
              word={activeWord}
              allWords={practiceWords}
              onNext={() =>
                setActiveWordIndex((prev) => (prev + 1) % Math.max(practiceWords.length, 1))
              }
            />
          </section>
        )}

        {/* Luyện nói – ~10 câu (trộn trường âm, âm đục, âm ngắt, âm ghép) */}
        <SpeakingGameMulti sentences={speakingList} />

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson1.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        {/* Classroom phrases */}
        <section className="card">
          <div className="card-header">
            <h2>Câu thường dùng trong lớp học</h2>
            <p className="section-caption">
              Một số câu thầy cô và học viên hay dùng trong lớp. Nghe và lặp lại để quen phản xạ.
            </p>
          </div>
          <div className="card-body">
            {classroomPhrases.map((p) => (
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

        {/* Greetings */}
        <section className="card">
          <div className="card-header">
            <h2>Chào hỏi hằng ngày</h2>
            <p className="section-caption">
              Những câu chào cơ bản bạn sẽ gặp mỗi ngày khi nói tiếng Nhật.
            </p>
          </div>
          <div className="card-body">
            {greetingPhrases.map((p) => (
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

        {/* Numbers */}
        <section className="card">
          <div className="card-header">
            <h2>Chữ số cơ bản (0–10)</h2>
            <p className="section-caption">
              Làm quen cách đọc số; sau này sẽ dùng để nói tuổi, giờ, ngày tháng, số điện thoại...
            </p>
          </div>
          <div className="card-body">
            <div className="numbers-grid">
              {basicNumbers.map((n) => (
                <div key={n.value} className="number-item">
                  <div className="number-header">
                    <div className="number-value">{n.value}</div>
                    <button
                      type="button"
                      className="listen-button small"
                      onClick={() => speakJapaneseNow(n.japanese.replace(/（.*?）/g, ''))}
                    >
                      🔊
                    </button>
                  </div>
                  <div className="jp">{n.japanese}</div>
                  <div className="number-romaji">{n.romaji}</div>
                  <div className="number-vi">{n.vietnamese}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WritingChallenge
          title="Writing Challenge – Bài 1"
          sectionCaption="Viết 3–5 câu tự giới thiệu bản thân: tên, quốc tịch, nghề nghiệp, công ty (dùng mẫu N1 は N2 です／N1 は N2 ではありません／N1 は N2 ですか／N1 の N2)."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 2 câu khẳng định: N1 は N2 です。</li>
              <li>Thử dùng 1 câu phủ định hoặc câu hỏi: N1 は N2 ではありません／ですか。</li>
              <li>Dùng 1 câu với N1 の N2 (ví dụ: 私の会社, サクラ大学の学生).</li>
            </ul>
          }
          placeholder={`Ví dụ:\nわたしはリンです。\nベトナム人です。\nグリーンテックのデザイナーです。`}
          rows={4}
          lessonId="B1"
          grammarContext="N1 は N2 です, ではありません, ですか, N1 の N2"
        />
      </main>
    </div>
    </div>
  );
}