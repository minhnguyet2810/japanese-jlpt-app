'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { LessonNav } from '@/components/LessonNav';
import { SpeakingGame } from '@/components/SpeakingGame';
import ListeningDictation from '@/components/ListeningDictation';
import { lesson5 } from '@/data/lessons/lesson5';
import { speakJapaneseNow } from '@/lib/speakJapanese';

const builderItems = [
  {
    id: 1,
    vi: 'Tôi đi Kyoto.',
    hint: 'N（địa điểm）へ 行きます。',
    tokens: ['京都へ', '行きます。'],
  },
  {
    id: 2,
    vi: 'Tôi đi đến công ty bằng tàu điện.',
    hint: 'N（địa điểm）へ N（phương tiện）で 行きます。',
    tokens: ['会社へ', '電車で', '行きます。'],
  },
  {
    id: 3,
    vi: 'Tôi đi Osaka với bạn.',
    hint: 'N（người）と N（địa điểm）へ 行きます。',
    tokens: ['友達と', '大阪へ', '行きます。'],
  },
] as const;

const particleQuizItems = [
  {
    id: 1,
    jp: '京都（　　）行きます。',
    vi: 'Tôi đi Kyoto.',
    options: ['へ', 'で', 'と'],
    correctIndex: 0,
  },
  {
    id: 2,
    jp: '電車（　　）会社へ行きます。',
    vi: 'Tôi đi đến công ty bằng tàu điện.',
    options: ['へ', 'で', 'と'],
    correctIndex: 1,
  },
  {
    id: 3,
    jp: '家族（　　）日本へ来ました。',
    vi: 'Tôi đã đến Nhật cùng với gia đình.',
    options: ['へ', 'で', 'と'],
    correctIndex: 2,
  },
] as const;

const vocabQuizItems = [
  {
    id: 1,
    vi: 'siêu thị',
    options: ['学校', 'スーパー', '駅'],
    correctIndex: 1,
  },
  {
    id: 2,
    vi: 'tàu Shinkansen (tàu điện siêu tốc)',
    options: ['地下鉄', '新幹線', 'バス'],
    correctIndex: 1,
  },
  {
    id: 3,
    vi: 'đi bộ',
    options: ['電車', '自転車', '歩いて'],
    correctIndex: 2,
  },
] as const;

export default function Lesson5Page() {
  const moveVerbs = lesson5.words.filter((w) => w.category === 'verbMove');
  const places = lesson5.words.filter((w) => w.category === 'place');
  const transports = lesson5.words.filter((w) => w.category === 'transport');
  const personTimes = lesson5.words.filter((w) => w.category === 'personTime');
  const dateWords = lesson5.words.filter((w) => w.category === 'date');

  const [builderIndex, setBuilderIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);

  const currentBuilder = builderItems[builderIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  const [particleIndex, setParticleIndex] = useState(0);
  const [particleSelected, setParticleSelected] = useState<number | null>(null);
  const currentParticle = particleQuizItems[particleIndex];

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [speakingCompleted, setSpeakingCompleted] = useState(0);
  const currentVocab = vocabQuizItems[vocabIndex];

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson5" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson5.title}</h1>
          <p className="lesson-subtitle">{lesson5.description}</p>
        </section>

        {/* Vocab – Động từ đi / đến / về */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ: đi / đến / về</h2>
            <p className="section-caption">
              Ba động từ chính trong Bài 5: 行きます (đi), 来ます (đến), 帰ります (về).
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {moveVerbs.map((w) => (
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

        {/* Vocab – Địa điểm đến / về */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Địa điểm: đi đâu / đến đâu / về đâu</h2>
            <p className="section-caption">
              Trường học, siêu thị, công ty, nhà, ga... dùng với trợ từ へ trong mẫu N へ 行きます.
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

        {/* Vocab – Phương tiện giao thông */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Phương tiện giao thông</h2>
            <p className="section-caption">
              Học cách nói &quot;đi bằng ...&quot; với trợ từ で: 電車で行きます, バスで来ます, 歩いて帰ります...
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {transports.map((w) => (
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

        {/* Vocab – Người đi cùng & thời gian */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đi với ai? Khi nào?</h2>
            <p className="section-caption">
              Người đi cùng (～と) và các từ chỉ tuần / tháng / năm (先週・今週・来週…), dùng để nói lịch
              đi lại.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {personTimes.map((w) => (
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

        {/* Vocab – Ngày trong tháng (một phần) */}
        {dateWords.length > 0 && (
          <section className="card vocab-card">
            <div className="card-header">
              <h2>Ngày trong tháng (Bài 5)</h2>
              <p className="section-caption">
                Một số cách đọc đặc biệt cho ngày trong tháng: １日・２日・３日…, １４日, ２０日, ２４日, 何日.
              </p>
            </div>
            <div className="vocab-grid triple-vocab-grid">
              {dateWords.map((w) => (
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
        )}

        {/* Grammar card */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Ngữ pháp: đi đâu, bằng gì, với ai, khi nào?</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson5.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Danh từ（địa điểm）へ 行きます／来ます／帰ります</h3>
              <p className="grammar-note">
                Trợ từ <strong>へ</strong> (đọc là &quot;e&quot;) chỉ hướng đi: &quot;đi đến ~&quot;, &quot;đến
                ~&quot;, &quot;về ~&quot;.
              </p>
              <ul className="grammar-list">
                <li>京都へ行きます。→ Tôi đi Kyoto.</li>
                <li>日本へ来ました。→ Tôi đã đến Nhật Bản.</li>
                <li>うちへ帰ります。→ Tôi về nhà.</li>
              </ul>

              <h3 className="grammar-subtitle">2. Danh từ（phương tiện）で 行きます</h3>
              <p className="grammar-note">
                Trợ từ <strong>で</strong> sau danh từ phương tiện: &quot;đi bằng (phương tiện)&quot;.
              </p>
              <ul className="grammar-list">
                <li>電車で行きます。→ Tôi đi bằng tàu điện.</li>
                <li>バスで来ます。→ Tôi đến bằng xe buýt.</li>
                <li>歩いて帰ります。→ Tôi đi bộ về.</li>
              </ul>

              <h3 className="grammar-subtitle">3. Danh từ（người）と 行きます</h3>
              <p className="grammar-note">
                Trợ từ <strong>と</strong> sau người đi cùng: &quot;đi với ai&quot;.
              </p>
              <ul className="grammar-list">
                <li>友達と大阪へ行きます。→ Tôi đi Osaka với bạn.</li>
                <li>家族と日本へ来ました。→ Tôi đã đến Nhật cùng với gia đình.</li>
                <li>一人で東京へ行きます。→ Tôi đi Tokyo một mình. (không dùng と)</li>
              </ul>

              <h3 className="grammar-subtitle">4. いつ：&quot;khi nào&quot;</h3>
              <p className="grammar-note">
                Dùng <strong>いつ</strong> để hỏi thời điểm, và trả lời bằng 先週・今週・来週、先月・今月・来月… kèm
                trợ từ <strong>に</strong> nếu cần.
              </p>

              <h3 className="grammar-subtitle">5. Hỏi ngày tháng: なんがつ・なんにち</h3>
              <ul className="grammar-list">
                <li>～がつ: tháng ~. Ví dụ: １月 (いちがつ) – tháng 1, ２月 (にがつ) – tháng 2.</li>
                <li>なんがつですか。→ Tháng mấy?</li>
                <li>
                  なんにちですか。→ Ngày mấy? / ngày bao nhiêu? (trả lời bằng １日・２日・３日… trong bảng ở
                  trên).
                </li>
              </ul>

              <h3 className="grammar-subtitle">6. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson5.sentences.map((s) => (
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

        {/* Mini game: Từ vựng Bài 5 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Từ vựng Bài 5</h2>
            <p className="section-caption">
              Đọc nghĩa tiếng Việt, chọn đúng từ tiếng Nhật (địa điểm, phương tiện) cho phù hợp.
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

        {/* Mini game: Chọn trợ từ へ／で／と */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Trợ từ へ・で・と</h2>
            <p className="section-caption">
              Chọn đúng trợ từ để đi với địa điểm (へ), phương tiện (で) hoặc người đi cùng (と).
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
                    onClick={() => setParticleSelected(idx)}
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

        {/* Mini game: Ghép câu đi đâu, bằng gì, với ai */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: Ghép câu &quot;đi đâu, bằng gì, với ai&quot;</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, ghép lại câu tiếng Nhật với へ・で・と đúng trật tự. Khi đúng sẽ tự đọc
              lại câu.
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

        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game 0/4</p>
          </div>
        </section>
        {lesson5.sentences[0] && (
          <SpeakingGame target={lesson5.sentences[0]} progressTotal={1} progressCompleted={speakingCompleted} onAttemptComplete={() => setSpeakingCompleted(1)} />
        )}
        <ListeningDictation items={lesson5.sentences.slice(0, 5).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }))} onSpeak={speakJapaneseNow} title="Luyện nghe – Chép chính tả" />

        <WritingChallenge
          title="Writing Challenge – Bài 5"
          sectionCaption="Viết 3–5 câu về kế hoạch đi lại: đi đâu, bằng gì, với ai, khi nào (dùng 行きます・来ます・帰ります、へ・で・と・いつ)."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu với N（địa điểm）へ 行きます／来ます／帰ります。</li>
              <li>Dùng 1 câu có phương tiện với で (電車で, バスで…).</li>
              <li>Thử dùng 1 câu với ～と (友達と, 家族と…).</li>
              <li>Nhắc đến thời gian bằng 先週・来週・来月… hoặc いつ.</li>
            </ul>
          }
          placeholder={`Ví dụ:\n来週、友達と京都へ行きます。電車で行きます。\n夏休みに家族と日本へ来ます。`}
          rows={4}
          lessonId="B5"
          grammarContext="N へ 行きます・来ます・帰ります, で (phương tiện), と (cùng với), いつ"
        />
      </main>
    </>
  );
}

