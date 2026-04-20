'use client';

import { useState, useMemo } from 'react';
import { Sidebar } from '@/components/Sidebar';
import {
  n5MockTestQuestions,
  type N5TestQuestion,
  N5_VOCAB_POOL,
} from '@/data/mockVocab';

import { speakJapaneseNow } from '@/lib/speakJapanese';
import { MicroPermissionPrompt } from '@/components/MicroPermissionPrompt';

// Listening – Bài 21–25 (đề khó, giống tốt nghiệp N5)
const listeningQuestionsAfter25: Array<{
  jp: string;
  vi: string;
  options: string[];
  correctIndex: number;
}> = [
  {
    jp: '日本は物価が高いと思います。',
    vi: 'Tôi nghĩ giá cả ở Nhật đắt đỏ.',
    options: [
      'Tôi nghĩ giá cả ở Nhật đắt đỏ.',
      'Tôi nghĩ giá cả ở Nhật rẻ.',
      'Tôi không nghĩ Nhật đắt.',
    ],
    correctIndex: 0,
  },
  {
    jp: '首相は来月アメリカへ行くと言いました。',
    vi: 'Thủ tướng nói là tháng sau sẽ đi Mỹ.',
    options: [
      'Thủ tướng đã đi Mỹ.',
      'Thủ tướng nói là tháng sau sẽ đi Mỹ.',
      'Thủ tướng không đi Mỹ.',
    ],
    correctIndex: 1,
  },
  {
    jp: 'わたしは友達と映画を見る約束があります。',
    vi: 'Tôi có hẹn đi xem phim với bạn.',
    options: [
      'Tôi có hẹn đi xem phim với bạn.',
      'Tôi đi xem phim một mình.',
      'Tôi không có hẹn.',
    ],
    correctIndex: 0,
  },
  {
    jp: '10時になったら、出かけましょう。',
    vi: 'Khi 10 giờ thì chúng ta đi nhé.',
    options: [
      'Bây giờ đi.',
      'Khi 10 giờ thì chúng ta đi nhé.',
      '10 giờ tôi về nhà.',
    ],
    correctIndex: 1,
  },
  {
    jp: '公園を散歩します。',
    vi: 'Tôi đi dạo ở công viên.',
    options: [
      'Tôi đi công viên bằng xe.',
      'Tôi đi dạo ở công viên.',
      'Tôi không đi công viên.',
    ],
    correctIndex: 1,
  },
  {
    jp: 'わたしは山田さんに図書館の電話番号を教えてもらいました。',
    vi: 'Tôi được anh Yamada cho biết số điện thoại thư viện.',
    options: [
      'Tôi cho anh Yamada biết số điện thoại.',
      'Tôi được anh Yamada cho biết số điện thoại thư viện.',
      'Anh Yamada không biết số điện thoại.',
    ],
    correctIndex: 1,
  },
  {
    jp: '母はセーターを送ってくれました。',
    vi: 'Mẹ gửi cho tôi áo len.',
    options: [
      'Tôi gửi áo len cho mẹ.',
      'Mẹ gửi cho tôi áo len.',
      'Mẹ không gửi gì.',
    ],
    correctIndex: 1,
  },
  {
    jp: '雨が降っても、洗濯します。',
    vi: 'Cho dù trời mưa tôi cũng giặt quần áo.',
    options: [
      'Trời mưa thì tôi không giặt.',
      'Cho dù trời mưa tôi cũng giặt quần áo.',
      'Tôi giặt khi trời nắng.',
    ],
    correctIndex: 1,
  },
  {
    jp: 'もし1億円あったら、いろいろな国を旅行したいです。',
    vi: 'Nếu có 100 triệu yên thì tôi muốn đi du lịch khắp các nước.',
    options: [
      'Tôi đã đi nhiều nước.',
      'Nếu có 100 triệu yên thì tôi muốn đi du lịch khắp các nước.',
      'Tôi không thích du lịch.',
    ],
    correctIndex: 1,
  },
  {
    jp: '友達が約束の時間に来なかったら、どうしますか。',
    vi: 'Nếu bạn không đến đúng giờ hẹn thì anh/chị sẽ làm gì?',
    options: [
      'Bạn đến đúng giờ.',
      'Nếu bạn không đến đúng giờ hẹn thì anh/chị sẽ làm gì?',
      'Tôi không có bạn.',
    ],
    correctIndex: 1,
  },
];

const SPEAKING_ITEMS_21_25: Array<{ jp: string; romaji: string; vi: string }> = [
  {
    jp: '日本は物価が高いと思います。',
    romaji: 'Nihon wa bukka ga takai to omoimasu.',
    vi: 'Tôi nghĩ giá cả ở Nhật đắt đỏ.',
  },
  {
    jp: '新しい空港についてどう思いますか。',
    romaji: 'Atarashii kuukou ni tsuite dou omoimasu ka.',
    vi: 'Anh/chị nghĩ thế nào về sân bay mới?',
  },
  {
    jp: 'わたしは朝ごはんを食べる時間がありません。',
    romaji: 'Watashi wa asagohan o taberu jikan ga arimasen.',
    vi: 'Tôi không có thời gian để ăn sáng.',
  },
  {
    jp: '10時になったら、出かけましょう。',
    romaji: 'Juuji ni nattara, dekakemashou.',
    vi: 'Khi 10 giờ thì chúng ta đi nhé.',
  },
  {
    jp: 'わたしは木村さんに本を貸してあげました。',
    romaji: 'Watashi wa Kimura-san ni hon o kashite agemashita.',
    vi: 'Tôi cho chị Kimura mượn sách.',
  },
  {
    jp: 'いくら考えても、わかりません。',
    romaji: 'Ikura kangaetemo, wakarimasen.',
    vi: 'Dù có nghĩ thế nào đi nữa thì tôi cũng không hiểu được.',
  },
];

function getQuestionLabel(q: N5TestQuestion): string {
  switch (q.type) {
    case 'vocab-meaning':
      return 'Từ vựng – chọn nghĩa';
    case 'vocab-reading':
      return 'Từ vựng – cách đọc hiragana';
    case 'grammar-particle':
      return 'Ngữ pháp – trợ từ';
    case 'grammar-sentence':
      return 'Ngữ pháp – chọn câu đúng';
    case 'sentence-order':
      return 'Sắp xếp câu (trật tự từ)';
    default:
      return '';
  }
}

function createRandomVocabQuestionsB21_25(count: number): N5TestQuestion[] {
  const pool = N5_VOCAB_POOL.filter((v) => v.lesson >= 21 && v.lesson <= 25);
  if (pool.length === 0) return [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  return selected.map<N5TestQuestion>((item) => {
    const others = pool.filter((v) => v.id !== item.id);
    const distractors = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [item.vietnamese, ...distractors.map((d) => d.vietnamese)];
    const shuffledOpts = [...options].sort(() => Math.random() - 0.5);
    const correctIndex = shuffledOpts.indexOf(item.vietnamese);
    return {
      id: `rand-21-25-${item.id}-${Math.random().toString(36).slice(2, 7)}`,
      type: 'vocab-meaning',
      lessonScope: 'B21-25',
      promptVi: `Chọn nghĩa đúng cho từ: ${item.japanese}`,
      options: shuffledOpts,
      correctIndex,
    };
  });
}

export default function N5Test2125Page() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [orderTokens, setOrderTokens] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [listeningSelections, setListeningSelections] = useState<(number | null)[]>(
    () => new Array(listeningQuestionsAfter25.length).fill(null)
  );
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [speakingRecognized, setSpeakingRecognized] = useState('');
  const [speakingScore, setSpeakingScore] = useState<number | null>(null);
  const [speakingComment, setSpeakingComment] = useState<string | null>(null);
  const [speakingLoading, setSpeakingLoading] = useState(false);

  const questions = useMemo(() => {
    const base = n5MockTestQuestions.filter((q) => q.lessonScope === 'B21-25');
    const extra = createRandomVocabQuestionsB21_25(60);
    return [...base, ...extra];
  }, []);

  const total = questions.length;
  const current = questions[index];
  const isSentenceOrder = current?.type === 'sentence-order';

  const isCorrect = (() => {
    if (!current) return false;
    if (isSentenceOrder) {
      if (!orderTokens.length) return false;
      return orderTokens.join('') === current.options.join('');
    }
    if (selected == null) return false;
    return selected === current.correctIndex;
  })();

  const handleCheck = () => {
    if (checked) return;
    if (isCorrect) setScore((s) => s + 1);
    setChecked(true);
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setOrderTokens([]);
    setChecked(false);
  };

  function normalizeJapanese(s: string): string {
    return s
      .replace(/\s+/g, '')
      .replace(/[　\u3000]/g, '')
      .replace(/。|、|！|？/g, '')
      .trim()
      .toLowerCase();
  }

  function similarityPercent(a: string, b: string): number {
    const na = normalizeJapanese(a);
    const nb = normalizeJapanese(b);
    if (na.length === 0) return nb.length === 0 ? 100 : 0;
    let matches = 0;
    for (let i = 0; i < Math.min(na.length, nb.length); i++) {
      if (na[i] === nb[i]) matches++;
    }
    const maxLen = Math.max(na.length, nb.length);
    return Math.round((matches / maxLen) * 100);
  }

  function handleStartSpeaking(item: { jp: string; vi: string }) {
    if (typeof window === 'undefined') return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeakingComment('Trình duyệt không hỗ trợ nhận diện giọng nói. Thử Chrome.');
      return;
    }
    setSpeakingLoading(true);
    setSpeakingRecognized('');
    setSpeakingScore(null);
    setSpeakingComment(null);
    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = true;
    recognition.interimResults = true;
    let transcript = '';
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript || '';
      }
    };
    recognition.onend = () => {
      setSpeakingLoading(false);
      const final = transcript.trim() || '';
      setSpeakingRecognized(final || '(không nghe được)');
      if (final) {
        const score = similarityPercent(final, item.jp);
        setSpeakingScore(score);
        if (score >= 80) setSpeakingComment('Rất tốt! Bạn nói gần đúng câu mẫu.');
        else if (score >= 50) setSpeakingComment('Khá ổn. Luyện thêm để cải thiện.');
        else setSpeakingComment('Thử nghe câu mẫu và nói lại.');
      } else {
        setSpeakingComment('Không nhận diện được. Thử nói rõ hơn hoặc bật microphone.');
      }
    };
    recognition.onerror = () => {
      setSpeakingLoading(false);
      setSpeakingComment('Lỗi nhận diện giọng nói. Kiểm tra microphone.');
    };
    recognition.start();
    setTimeout(() => {
      try {
        recognition.stop();
      } catch {
        /* ignore */
      }
    }, 15000);
  }

  const progressText = `${index + 1} / ${total}`;
  const item = SPEAKING_ITEMS_21_25[speakingIndex % SPEAKING_ITEMS_21_25.length];

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="n5-test-21-25" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Mock Test N5 – Bài 21–25 (Đề tốt nghiệp N5)</h1>
          <p className="lesson-subtitle">
            Đề khó: từ vựng, cách đọc kanji, ngữ pháp と思います・と言います・でしょう？・とき・たら・をV・てあげる/てもらう/てくれる・ても・もし～たら・いくら～ても. Nghe – Trắc nghiệm – Nói.
          </p>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Câu hỏi {progressText}</h2>
            <p className="section-caption">
              {getQuestionLabel(current)} ・ Phạm vi: B21-25
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                <strong>{current.promptVi}</strong>
              </p>
              {current.promptJp && <div className="jp">{current.promptJp}</div>}
            </div>

            {!isSentenceOrder && (
              <div className="practice-options">
                {current.options.map((opt, idx) => {
                  const selectedNow = selected === idx;
                  const isOptionCorrect = idx === current.correctIndex;
                  const className =
                    'practice-option' +
                    (checked
                      ? selectedNow && isOptionCorrect
                        ? ' correct'
                        : selectedNow && !isOptionCorrect
                        ? ' wrong'
                        : ''
                      : '');
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={className}
                      onClick={() => {
                        if (checked) return;
                        setSelected(idx);
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {isSentenceOrder && (
              <div className="builder-body">
                <div className="builder-output" style={{ marginBottom: '1rem' }}>
                  <div className="builder-label">Câu bạn ghép</div>
                  <div className="builder-jp">
                    {orderTokens.length ? orderTokens.join(' ') : '・・・'}
                  </div>
                </div>
                <div className="builder-tokens">
                  {current.options.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="token-chip"
                      onClick={() => {
                        if (checked) return;
                        setOrderTokens((prev) => [...prev, t]);
                      }}
                    >
                      <span className="token-jp">{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {checked && (
              <div className="builder-feedback" style={{ marginTop: '1rem' }}>
                {isCorrect ? (
                  <span className="correct-text">✅ Chính xác!</span>
                ) : (
                  <span className="wrong-text">
                    ❌ Chưa đúng.
                    {current.explanationVi ? ` ${current.explanationVi}` : ''}
                  </span>
                )}
              </div>
            )}

            <div className="practice-actions" style={{ marginTop: '1.5rem' }}>
              <button
                type="button"
                className="primary-button"
                onClick={handleCheck}
                disabled={checked || (!isSentenceOrder && selected == null)}
              >
                Kiểm tra
              </button>
              <button
                type="button"
                className="secondary-button"
                onClick={handleNext}
                disabled={!checked}
              >
                {index + 1 >= total ? 'Xem kết quả' : 'Câu tiếp →'}
              </button>
              {isSentenceOrder && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    if (checked) return;
                    setOrderTokens([]);
                  }}
                >
                  Xoá câu
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Speaking – Bài 21–25 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock 21–25 – Speaking</h2>
            <p className="section-caption">
              Bấm &quot;Nhấn để nói&quot;, bạn có 15 giây để nói câu tiếng Nhật. Máy sẽ nhận diện và so sánh với câu mẫu.
            </p>
          </div>
          <div className="card-body practice-body">
            <MicroPermissionPrompt />
            {item && (
              <>
                <div className="practice-prompt">
                  <p className="practice-question">Hãy nói bằng tiếng Nhật câu sau:</p>
                  <p className="vi">
                    <strong>{item.vi}</strong>
                  </p>
                </div>
                <div className="practice-actions" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => handleStartSpeaking(item)}
                    disabled={speakingLoading}
                  >
                    {speakingLoading ? 'Đang nghe… (15s)' : 'Nhấn để nói (15s)'}
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => speakJapaneseNow(item.jp)}
                  >
                    🔊 Nghe câu mẫu
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => {
                      setSpeakingRecognized('');
                      setSpeakingScore(null);
                      setSpeakingComment(null);
                      setSpeakingIndex((i) => i + 1);
                    }}
                  >
                    Câu khác →
                  </button>
                </div>
                {speakingRecognized && (
                  <div className="writing-feedback writing-result" style={{ marginTop: '1rem' }}>
                    <p className="section-caption">Máy nghe được:</p>
                    <p className="jp" style={{ marginBottom: '0.25rem' }}>
                      {speakingRecognized}
                    </p>
                    {speakingScore != null && (
                      <p className="writing-score">
                        Độ giống với câu mẫu: <strong>{speakingScore}%</strong>
                      </p>
                    )}
                    {speakingComment && (
                      <p className="writing-overview">{speakingComment}</p>
                    )}
                    <hr style={{ margin: '0.75rem 0' }} />
                    <p className="section-caption">Câu mẫu chuẩn:</p>
                    <div className="jp">{item.jp}</div>
                    <div className="romaji">{item.romaji}</div>
                    <div className="vi">{item.vi}</div>
                  </div>
                )}
                {!speakingRecognized && speakingComment && (
                  <div className="writing-feedback writing-error" style={{ marginTop: '1rem' }}>
                    {speakingComment}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Listening – Bài 21–25 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock 21–25 – Listening</h2>
            <p className="section-caption">
              Nghe câu (không xem chữ), chọn nghĩa đúng. Đề khó – câu dài, ngữ pháp Bài 21–25.
            </p>
          </div>
          <div className="card-body practice-body">
            <p className="practice-question" style={{ marginBottom: '0.5rem' }}>
              <strong>Câu {listeningIndex + 1} / {listeningQuestionsAfter25.length}</strong>
            </p>
            <div className="practice-prompt">
              <button
                type="button"
                className="secondary-button"
                onClick={() => speakJapaneseNow(listeningQuestionsAfter25[listeningIndex].jp)}
              >
                🔊 Nghe câu
              </button>
              <p className="practice-question" style={{ marginTop: '0.75rem' }}>
                Chọn nghĩa tiếng Việt đúng:
              </p>
            </div>
            <div className="practice-options">
              {listeningQuestionsAfter25[listeningIndex].options.map((opt, idx) => {
                const selectedNow = listeningSelections[listeningIndex] === idx;
                const isCorrectOption = idx === listeningQuestionsAfter25[listeningIndex].correctIndex;
                const hasAnswered = listeningSelections[listeningIndex] != null;
                const className =
                  'practice-option' +
                  (hasAnswered
                    ? selectedNow && isCorrectOption
                      ? ' correct'
                      : selectedNow && !isCorrectOption
                      ? ' wrong'
                      : ''
                    : '');
                return (
                  <button
                    key={opt}
                    type="button"
                    className={className}
                    onClick={() => {
                      if (listeningSelections[listeningIndex] != null) return;
                      setListeningSelections((prev) => {
                        const next = [...prev];
                        next[listeningIndex] = idx;
                        return next;
                      });
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {listeningSelections[listeningIndex] != null && (
              <div className="writing-feedback writing-result" style={{ marginTop: '1rem' }}>
                <div className="writing-score">
                  {listeningSelections[listeningIndex] ===
                  listeningQuestionsAfter25[listeningIndex].correctIndex
                    ? '✅ Đúng'
                    : '❌ Chưa đúng'}
                </div>
                <p className="writing-overview">
                  <strong>Nghĩa:</strong> {listeningQuestionsAfter25[listeningIndex].vi}
                </p>
                <p className="practice-question" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <span className="jp">{listeningQuestionsAfter25[listeningIndex].jp}</span>
                </p>
              </div>
            )}
            <div className="practice-actions" style={{ marginTop: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button
                type="button"
                className="secondary-button"
                disabled={listeningIndex === 0}
                onClick={() => setListeningIndex((i) => i - 1)}
              >
                ← Câu trước
              </button>
              <button
                type="button"
                className="secondary-button"
                disabled={listeningIndex >= listeningQuestionsAfter25.length - 1}
                onClick={() => setListeningIndex((i) => i + 1)}
              >
                Câu sau →
              </button>
            </div>
          </div>
        </section>

        {finished && (
          <section className="card">
            <div className="card-header">
              <h2>Kết quả Mock Test N5 – Bài 21–25</h2>
            </div>
            <div className="card-body">
              <p className="lesson-subtitle">
                Bạn đúng <strong>{score}</strong> / <strong>{total}</strong> câu trắc nghiệm.
              </p>
              <p className="section-caption">
                Đề tốt nghiệp N5 thường có mức độ tương đương. Nếu điểm chưa cao, hãy ôn lại Bài 21–25 (と思います・と言います・とき・たら・Vてあげる/もらう/くれる・Vても・もし～たら・いくら～ても) và làm lại.
              </p>
              <div className="practice-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setIndex(0);
                    setSelected(null);
                    setOrderTokens([]);
                    setChecked(false);
                    setScore(0);
                    setFinished(false);
                  }}
                >
                  Làm lại từ đầu
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
    </div>
  );
}