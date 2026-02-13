'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { LessonNav } from '@/components/LessonNav';
import { SpeakingGame } from '@/components/SpeakingGame';
import ListeningDictation from '@/components/ListeningDictation';
import { lesson3 } from '@/data/lessons/lesson3';
import { speakJapaneseNow } from '@/lib/speakJapanese';

const whereQuizItems = [
  {
    id: 1,
    vi: 'Nhà vệ sinh ở đằng kia.',
    answer: 'トイレはあそこです。',
    tokens: ['トイレは', 'あそこ', 'です。'],
  },
  {
    id: 2,
    vi: 'Văn phòng ở tầng 3.',
    answer: '事務所は３階です。',
    tokens: ['事務所は', '３階', 'です。'],
  },
  {
    id: 3,
    vi: 'Quầy giày ở tầng 1.',
    answer: 'くつうりばは１階です。',
    tokens: ['くつうりばは', '１階', 'です。'],
  },
] as const;

export default function Lesson3Page() {
  const placePronouns = lesson3.words.filter((w) => w.category === 'placePronoun');
  const places = lesson3.words.filter((w) => w.category === 'place');
  const floors = lesson3.words.filter((w) => w.category === 'floor');
  const others = lesson3.words.filter((w) => w.category === 'other');

  const [whereIndex, setWhereIndex] = useState(0);
  const [whereTokens, setWhereTokens] = useState<string[]>([]);
  const [whereChecked, setWhereChecked] = useState(false);

  const currentWhereQuiz = whereQuizItems[whereIndex];
  const whereText = whereTokens.join(' ');
  const isWhereCorrect =
    whereTokens.length === currentWhereQuiz.tokens.length &&
    whereTokens.join('') === currentWhereQuiz.tokens.join('');

  const whereOptions = [...currentWhereQuiz.tokens].sort();

  const clearWhere = () => {
    setWhereTokens([]);
    setWhereChecked(false);
  };

  const goNextWhere = () => {
    setWhereIndex((prev) => (prev + 1) % whereQuizItems.length);
    clearWhere();
  };

  const addWhereToken = (t: string) => {
    setWhereTokens((prev) => [...prev, t]);
  };

  // Hội thoại ở cửa hàng bách hoá (Maria hỏi mua rượu vang)
  const mariaDialog = [
    {
      speaker: 'Maria',
      jp: 'すみません。ワインうりばはどこですか。',
      romaji: 'Sumimasen. Wain uriba wa doko desu ka.',
      vi: 'Xin lỗi, quầy rượu vang ở đâu ạ?',
    },
    {
      speaker: 'Nhân viên',
      jp: 'ワインうりばは地下一階です。',
      romaji: 'Wain uriba wa chika ikkai desu.',
      vi: 'Quầy rượu vang ở tầng hầm thứ nhất.',
    },
    {
      speaker: 'Maria',
      jp: 'このワインはフランスのワインですか。',
      romaji: 'Kono wain wa Furansu no wain desu ka.',
      vi: 'Chai rượu này là rượu vang Pháp phải không?',
    },
    {
      speaker: 'Nhân viên',
      jp: 'いいえ、イタリアのワインです。',
      romaji: 'Īe, Itaria no wain desu.',
      vi: 'Không, là rượu vang Ý ạ.',
    },
    {
      speaker: 'Maria',
      jp: 'いくらですか。',
      romaji: 'Ikura desu ka.',
      vi: 'Bao nhiêu tiền vậy?',
    },
    {
      speaker: 'Nhân viên',
      jp: '２５００円です。',
      romaji: 'Ni-sen go-hyaku en desu.',
      vi: '2.500 yên ạ.',
    },
  ] as const;

  const mariaQuizItems = [
    {
      id: 1,
      questionVi: 'Maria hỏi quầy rượu vang ở đâu.',
      questionJa: 'ワインうりばはどこですか。',
      options: ['ワインうりばは地下一階です。', 'トイレはあそこです。'],
      correctIndex: 0,
    },
    {
      id: 2,
      questionVi: 'Maria hỏi: &quot;Bao nhiêu tiền vậy?&quot;',
      questionJa: 'いくらですか。',
      options: ['２５００円です。', '３階です。'],
      correctIndex: 0,
    },
  ] as const;

  const [mariaIndex, setMariaIndex] = useState(0);
  const [mariaSelected, setMariaSelected] = useState<number | null>(null);

  const currentMariaQuiz = mariaQuizItems[mariaIndex];

  // Tiến độ hoàn thành mini game trong Bài 3
  const TOTAL_STEPS = 2;
  const [whereCompleted, setWhereCompleted] = useState(false);
  const [mariaCompleted, setMariaCompleted] = useState(false);
  const completedCount = (whereCompleted ? 1 : 0) + (mariaCompleted ? 1 : 0);
  const [speakingCompleted, setSpeakingCompleted] = useState(0);

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson3" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson3.title}</h1>
          <p className="lesson-subtitle">{lesson3.description}</p>
          <div className="lesson-progress-chip">
            Tiến độ game: {completedCount}/{TOTAL_STEPS}
          </div>
        </section>

        {/* Vocab – đại từ chỉ nơi ここ／そこ／あそこ／どこ／こちら… */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đại từ chỉ nơi: ここ・そこ・あそこ・どこ</h2>
            <p className="section-caption">
              Nhóm từ hỏi &quot;ở đâu?&quot; và chỉ vị trí người nói / người nghe / chỗ xa cả hai.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {placePronouns.map((w) => (
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

        {/* Vocab – các nơi trong trường học, công ty, cửa hàng */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Địa điểm trong trường học / công ty / cửa hàng</h2>
            <p className="section-caption">
              Ôn nhanh tên các nơi như lớp học, phòng họp, tiếp tân, cầu thang, thang máy, quầy bán...
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {places.map((w) => (
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

        {/* Vocab – tầng, tiền, いくら */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tầng lầu &amp; giá tiền</h2>
            <p className="section-caption">
              Từ để nói tầng mấy và hỏi &quot;Bao nhiêu tiền?&quot; – dùng trong hội thoại ở cửa hàng
              bách hoá.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {floors.concat(others.filter((w) => w.japanese === 'えん' || w.japanese === 'いくら')).map(
              (w) => (
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
              )
            )}
          </div>
        </section>

        {/* Grammar card: ここ／そこ／あそこ・どこ／どちら + Danh từ は Danh từ（địa điểm）です */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Ngữ pháp: ここ・そこ・あそこ／どこ・どちら</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson3.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Vị trí ここ・そこ・あそこ・どこ</h3>
              <div className="grammar-table">
                <div className="grammar-table-row">
                  <span className="grammar-tag">ここ</span>
                  <span className="grammar-text">
                    &quot;chỗ này&quot; – nơi <strong>người nói</strong> đang ở (đây).
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">そこ</span>
                  <span className="grammar-text">
                    &quot;chỗ đó&quot; – nơi <strong>gần người nghe</strong> (đó).
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">あそこ</span>
                  <span className="grammar-text">
                    &quot;chỗ kia&quot; – <strong>xa cả hai</strong> (kia, đằng kia).
                  </span>
                </div>
                <div className="grammar-table-row">
                  <span className="grammar-tag">どこ</span>
                  <span className="grammar-text">&quot;ở đâu&quot; – dùng để hỏi vị trí.</span>
                </div>
              </div>

              <h3 className="grammar-subtitle">2. Cách nói lịch sự: こちら・そちら・あちら・どちら</h3>
              <p className="grammar-note">
                Khi nói lịch sự (trong công ty, cửa hàng bách hoá...), dùng bộ <strong>こちら／そちら／あちら／どちら</strong>{' '}
                tương đương ここ／そこ／あそこ／どこ.
              </p>

              <h3 className="grammar-subtitle">3. Mẫu: Danh từ は Danh từ（địa điểm）です</h3>
              <p className="grammar-note">
                Mẫu câu cơ bản: <strong>N1 は N2（địa điểm）です。</strong> → &quot;N1 ở N2&quot;.
              </p>
              <ul className="grammar-list">
                <li>トイレはあそこです。→ Nhà vệ sinh ở đằng kia.</li>
                <li>受付は１階です。→ Quầy tiếp tân ở tầng 1.</li>
                <li>事務所は３階です。→ Văn phòng ở tầng 3.</li>
              </ul>

              <h3 className="grammar-subtitle">4. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson3.sentences.map((s) => (
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

        {/* Game luyện tập – Hoàn thành 0/2 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {completedCount}/{TOTAL_STEPS}</p>
            <p className="section-caption">
              Hoàn thành: Hiểu hội thoại ở quầy rượu, Ghép câu N1 は N2（địa điểm）です.
            </p>
          </div>
        </section>

        {/* Hội thoại: mua rượu vang ở cửa hàng bách hoá */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại: Mua rượu vang ở cửa hàng bách hoá</h2>
            <p className="section-caption">
              Đoạn hội thoại mẫu giữa Maria và nhân viên bán hàng: hỏi quầy rượu vang ở đâu, rượu gì,
              bao nhiêu tiền.
            </p>
          </div>
          <div className="card-body practice-body">
            {mariaDialog.map((turn) => (
              <div key={turn.jp} className="grammar-example-row">
                <div>
                  <div className="jp">
                    [{turn.speaker}] {turn.jp}
                  </div>
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

        {/* Mini game: hiểu hội thoại cửa hàng – chọn câu trả lời đúng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Hiểu hội thoại ở quầy rượu</h2>
            <p className="section-caption">
              Nhìn câu hỏi tiếng Nhật, chọn câu trả lời phù hợp trong hội thoại Maria – nhân viên.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Câu hỏi: <span className="jp">{currentMariaQuiz.questionJa}</span>
              </p>
              <div className="vi">{currentMariaQuiz.questionVi}</div>
            </div>
            <div className="practice-options">
              {currentMariaQuiz.options.map((opt, idx) => {
                const isCorrect = idx === currentMariaQuiz.correctIndex;
                const selected = mariaSelected === idx;
                const className =
                  'practice-option' +
                  (mariaSelected != null
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
                      setMariaSelected(idx);
                      if (isCorrect && !mariaCompleted) {
                        setMariaCompleted(true);
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
                  setMariaSelected(null);
                  setMariaIndex((prev) => (prev + 1) % mariaQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: ghép câu &quot;ở đâu&quot; */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: N1 は N2（địa điểm）です</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, ghép lại câu &quot;ở đâu&quot; bằng tiếng Nhật với ここ／そこ／あそこ và
              tầng lầu.
            </p>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentWhereQuiz.vi}</div>
              <button
                className="listen-button"
                type="button"
                onClick={() => speakJapaneseNow(currentWhereQuiz.answer)}
              >
                🔊 Nghe đáp án mẫu
              </button>
            </div>

            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{whereText || '・・・'}</div>
                {whereChecked && (
                  <div className="builder-feedback">
                    {isWhereCorrect ? (
                      <span className="correct-text">✅ Chính xác!</span>
                    ) : (
                      <span className="wrong-text">
                        ❌ Chưa đúng. Đáp án: {currentWhereQuiz.tokens.join(' ')}
                      </span>
                    )}
                  </div>
                )}
                <div className="builder-actions">
                  <button
                    className="primary-button"
                    type="button"
                    disabled={!whereTokens.length}
                    onClick={() => {
                      if (!whereTokens.length) return;
                      setWhereChecked(true);
                      if (isWhereCorrect) {
                        if (!whereCompleted) {
                          setWhereCompleted(true);
                        }
                        speakJapaneseNow(whereTokens.join(''));
                      }
                    }}
                  >
                    Kiểm tra câu
                  </button>
                  <button className="secondary-button" type="button" onClick={clearWhere}>
                    Xoá câu
                  </button>
                  <button className="secondary-button" type="button" onClick={goNextWhere}>
                    Câu khác →
                  </button>
                </div>
              </div>

              <div className="builder-tokens">
                {whereOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="token-chip"
                    onClick={() => addWhereToken(t)}
                  >
                    <span className="token-jp">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luyện nói – Hoàn thành 0/1 */}
        {lesson3.sentences[0] && (
          <SpeakingGame
            target={lesson3.sentences[0]}
            progressTotal={1}
            progressCompleted={speakingCompleted}
            onAttemptComplete={() => setSpeakingCompleted(1)}
          />
        )}

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson3.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 3"
          sectionCaption="Viết 3–5 câu mô tả vị trí các nơi (lớp học, quầy bán, nhà vệ sinh, quầy rượu…) bằng mẫu 「N1 は N2（địa điểm）です」 với ここ／そこ／あそこ／どこ."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 2 câu &quot;N1 は N2 です&quot; để nói &quot;ở đâu&quot;.</li>
              <li>Thử dùng ここ／そこ／あそこ trong vai trò N2.</li>
              <li>Có thể thêm 1 câu hỏi どこですか。 nếu muốn.</li>
            </ul>
          }
          placeholder={`Ví dụ:\nトイレはあそこです。\n受付は１階です。\nワインうりばは地下一階です。`}
          rows={4}
          lessonId="B3"
          grammarContext="N1 は N2 です, ここ・そこ・あそこ・どこ, địa điểm (階)"
        />
      </main>
    </>
  );
}

