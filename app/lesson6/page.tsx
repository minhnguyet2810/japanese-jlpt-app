'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { Sidebar } from '@/components/Sidebar';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import { lesson6 } from '@/data/lessons/lesson6';
import { speakJapaneseNow } from '@/lib/speakJapanese';

const vocabQuizItems = [
  {
    id: 1,
    vi: 'bánh mì',
    options: ['パン', 'ごはん', '肉'],
    correctIndex: 0,
  },
  {
    id: 2,
    vi: 'bia',
    options: ['水', 'ビール', 'ジュース'],
    correctIndex: 1,
  },
  {
    id: 3,
    vi: 'ngắm hoa anh đào',
    options: ['サッカー', '［お］はなみ', 'テニス'],
    correctIndex: 1,
  },
] as const;

const particleQuizItems = [
  {
    id: 1,
    jp: 'ジュース（　　）飲みます。',
    vi: 'Tôi uống nước hoa quả.',
    options: ['を', 'で', 'に'],
    correctIndex: 0,
  },
  {
    id: 2,
    jp: '駅（　　）新聞を買います。',
    vi: 'Tôi mua báo ở ga.',
    options: ['を', 'で', 'に'],
    correctIndex: 1,
  },
  {
    id: 3,
    jp: '公園（　　）サッカーをします。',
    vi: 'Tôi chơi bóng đá ở công viên.',
    options: ['を', 'で', 'に'],
    correctIndex: 1,
  },
] as const;

const builderItems = [
  {
    id: 1,
    vi: 'Tôi uống nước hoa quả.',
    hint: 'N を 飲みます。',
    tokens: ['ジュースを', '飲みます。'],
  },
  {
    id: 2,
    vi: 'Tôi ăn cơm tối ở nhà.',
    hint: 'Danh từ（địa điểm）で N を 食べます。',
    tokens: ['うちで', '晩ごはんを', '食べます。'],
  },
  {
    id: 3,
    vi: 'Chúng ta cùng xem phim nhé.',
    hint: 'いっしょに N を 見ましょう。',
    tokens: ['いっしょに', '映画を', '見ましょう。'],
  },
] as const;

export default function Lesson6Page() {
  const verbs = lesson6.words.filter((w) => w.category === 'verb');
  const meals = lesson6.words.filter((w) => w.category === 'meal');
  const foods = lesson6.words.filter((w) => w.category === 'food');
  const drinks = lesson6.words.filter((w) => w.category === 'drink');
  const objects = lesson6.words.filter((w) => w.category === 'object');
  const expressions = lesson6.words.filter((w) => w.category === 'expression');

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const currentVocab = vocabQuizItems[vocabIndex];

  const [particleIndex, setParticleIndex] = useState(0);
  const [particleSelected, setParticleSelected] = useState<number | null>(null);
  const [speakingList] = useState(() => getSpeakingSentences(lesson6.sentences, 10));
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

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson6" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson6.title}</h1>
          <p className="lesson-subtitle">{lesson6.description}</p>
        </section>

        {/* Vocab – Động từ Bài 6 */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ: ăn, uống, xem, nghe, đọc, viết…</h2>
            <p className="section-caption">
              Các động từ chính dùng với 「N を V」 trong Bài 6 (食べます・飲みます・見ます・聞きます・読みます…).
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

        {/* Vocab – Bữa ăn & đồ ăn */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Bữa ăn &amp; đồ ăn</h2>
            <p className="section-caption">
              Từ vựng về bữa sáng/trưa/tối và một số món ăn cơ bản (bánh mì, trứng, thịt, cá, rau, hoa
              quả).
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {meals.concat(foods).map((w) => (
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

        {/* Vocab – Đồ uống */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đồ uống</h2>
            <p className="section-caption">
              Nước, trà, trà đen, sữa bò, nước trái cây, bia, rượu… dùng với mẫu 「N を 飲みます」.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {drinks.map((w) => (
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

        {/* Vocab – Đồ vật & hoạt động */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Đồ vật &amp; hoạt động</h2>
            <p className="section-caption">
              Những danh từ đi với します: bài tập về nhà, tennis, bóng đá, ngắm hoa anh đào…, và vật
              như phim, thư, ảnh, cửa hàng, v.v.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {objects.map((w) => (
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

        {/* Vocab – Câu cảm thán & từ nối */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Câu cảm thán &amp; từ nối trong hội thoại</h2>
            <p className="section-caption">
              Các từ như いっしょに, ちょっと, いつも, ときどき, それから, いいですね, わかりました… dùng rất
              nhiều trong hội thoại Bài 6.
            </p>
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
            <h2>Ngữ pháp: N を V / N を します / ませんか・ましょう</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson6.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Danh từ を Động từ (ngoại động từ)</h3>
              <p className="grammar-note">
                Trợ từ <strong>を</strong> đánh dấu <strong>tân ngữ trực tiếp</strong> của động từ.
              </p>
              <ul className="grammar-list">
                <li>パンを食べます。→ Tôi ăn bánh mì.</li>
                <li>お茶を飲みます。→ Tôi uống trà.</li>
                <li>新聞を読みます。→ Tôi đọc báo.</li>
              </ul>

              <h3 className="grammar-subtitle">2. Danh từ を します</h3>
              <p className="grammar-note">
                Một số danh từ chỉ hoạt động đi với <strong>します</strong>: サッカーをします、宿題をします….
              </p>
              <ul className="grammar-list">
                <li>サッカーをします。→ Tôi chơi bóng đá.</li>
                <li>宿題をします。→ Tôi làm bài tập về nhà.</li>
              </ul>

              <h3 className="grammar-subtitle">3. 何をしますか – Hỏi &quot;làm gì&quot;</h3>
              <ul className="grammar-list">
                <li>日曜日、何をしますか。→ Chủ nhật anh/chị làm gì?</li>
                <li>映画を見ます。→ (Tôi) xem phim.</li>
              </ul>

              <h3 className="grammar-subtitle">4. Danh từ（địa điểm）で V</h3>
              <p className="grammar-note">
                Trợ từ <strong>で</strong> sau địa điểm để chỉ nơi xảy ra hành động.
              </p>
              <ul className="grammar-list">
                <li>うちで晩ごはんを食べます。→ Tôi ăn cơm tối ở nhà.</li>
                <li>レストランで昼ごはんを食べます。→ Tôi ăn trưa ở nhà hàng.</li>
                <li>公園でサッカーをします。→ Tôi chơi bóng đá ở công viên.</li>
              </ul>

              <h3 className="grammar-subtitle">5. Mời rủ: Vませんか・Vましょう</h3>
              <ul className="grammar-list">
                <li>
                  Vませんか: &quot;Anh/chị có ~ không?&quot; (lời mời lịch sự). Ví dụ: 一緒にビールを飲みませんか。
                </li>
                <li>
                  Vましょう: &quot;Chúng ta hãy ~ nhé.&quot; Ví dụ: 公園でサッカーをしましょう。
                </li>
              </ul>

              <h3 className="grammar-subtitle">6. Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson6.sentences.map((s) => (
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

        {/* Mini game: Từ vựng Bài 6 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Từ vựng Bài 6</h2>
            <p className="section-caption">
              Đọc nghĩa tiếng Việt, chọn đúng từ tiếng Nhật (đồ ăn, đồ uống, hoạt động) cho phù hợp.
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

        {/* Mini game: Trợ từ を・で・に */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Trợ từ を・で・に</h2>
            <p className="section-caption">
              Chọn đúng trợ từ để đi với tân ngữ (を) hay địa điểm (で) trong các câu ăn uống / hoạt
              động.
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

        {/* Mini game: Ghép câu N を V / Vましょう */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: Ghép câu ăn uống &amp; mời rủ</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, ghép lại câu tiếng Nhật với 「N を V」, 「～で V」 và 「Vましょう」. Khi đúng
              sẽ tự đọc lại câu.
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
        <SpeakingGameMulti sentences={speakingList} />
        <ListeningDictation items={lesson6.sentences.slice(0, 5).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }))} onSpeak={speakJapaneseNow} title="Luyện nghe – Chép chính tả" />

        <WritingChallenge
          title="Writing Challenge – Bài 6"
          sectionCaption="Viết 3–5 câu về thói quen ăn uống và hoạt động giải trí của bạn (ăn gì, uống gì, xem gì, mời rủ bạn bè làm gì) dùng mẫu 「N を V」、「N（địa điểm）で V」、「Vませんか／Vましょう」."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 2 câu &quot;N を V&quot; (ăn/uống/xem/đọc…).</li>
              <li>Dùng 1 câu với N（địa điểm）で V (うちで, レストランで, 公園で…).</li>
              <li>Thử 1 câu mời rủ bằng ませんか hoặc ましょう.</li>
            </ul>
          }
          placeholder={`Ví dụ:\n毎朝パンと卵を食べます。コーヒーを飲みます。\n夜、うちでテレビを見ます。\n週末、友達と映画を見ませんか。`}
          rows={4}
          lessonId="B6"
          grammarContext="N を V, N（địa điểm）で V, Vませんか, Vましょう"
        />
      </main>
    </div>
    </div>
  );
}