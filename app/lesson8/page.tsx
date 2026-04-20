'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { Sidebar } from '@/components/Sidebar';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import { getSpeakingSentences } from '@/data/speakingPool';
import ListeningDictation from '@/components/ListeningDictation';
import {
  lesson8,
  lesson8VocabQuizItems,
  lesson8GrammarQuizItems,
  lesson8TotemoAmariItems,
  lesson8BuilderItems,
  lesson8DialogueQuizItems,
} from '@/data/lessons/lesson8';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson8Page() {
  const naAdjs = lesson8.words.filter((w) => w.category === 'naAdj');
  const iAdjs = lesson8.words.filter((w) => w.category === 'iAdj');
  const nouns = lesson8.words.filter((w) => w.category === 'noun');
  const expressions = lesson8.words.filter((w) => w.category === 'expression');
  const phrases = lesson8.words.filter((w) => w.category === 'phrase');
  const properNouns = lesson8.words.filter((w) => w.category === 'proper');

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [totemoIndex, setTotemoIndex] = useState(0);
  const [totemoSelected, setTotemoSelected] = useState<number | null>(null);
  const [builderIndex, setBuilderIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueSelected, setDialogueSelected] = useState<number | null>(null);
  const [colorsOpen, setColorsOpen] = useState(false);

  const [gamesDone, setGamesDone] = useState(0);
  const GAMES_TOTAL = 6;
  const [speakingList] = useState(() => getSpeakingSentences(lesson8.sentences, 10));

  const currentVocab = lesson8VocabQuizItems[vocabIndex];
  const currentGrammar = lesson8GrammarQuizItems[grammarIndex];
  const currentTotemo = lesson8TotemoAmariItems[totemoIndex];
  const currentBuilder = lesson8BuilderItems[builderIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  return (
    <div className="sb-layout">
      <Sidebar currentLessonId="lesson8" />
      <div className="sb-content">

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson8.title}</h1>
          <p className="lesson-subtitle">{lesson8.description}</p>
        </section>

        {/* Từ vựng: Tính từ đuôi な [な] */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ đuôi な [な]</h2>
            <p className="section-caption">
              Đứng trước danh từ thì thêm な. Cuối câu: ～です / ～じゃありません.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {naAdjs.map((w) => (
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

        {/* Từ vựng: Tính từ đuôi い */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ đuôi い</h2>
            <p className="section-caption">
              Phủ định: ～い → ～くないです. Đặc biệt: いいです → よくないです.
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {iAdjs.map((w) => (
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

        {/* Danh từ & từ liên quan */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Danh từ &amp; từ liên quan</h2>
            <p className="section-caption">
              町・食べ物・車・所・寮・勉強・生活・お仕事・どう・どんな〜・どれ・とても・あまり・そして・〜が、〜
            </p>
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
                <div className="vocab-actions">
                  <span className="vocab-vi">{w.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
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
                <div className="vocab-actions">
                  <span className="vocab-vi">{w.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Cụm hội thoại */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Cụm dùng trong hội thoại</h2>
            <p className="section-caption">
              お元気ですか。そうですね。日本の生活に慣れましたか。もう一杯いかがですか。いいえ、けっこうです。そろそろ失礼します。またいらっしゃってください。
            </p>
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
                <div className="vocab-actions">
                  <span className="vocab-vi">{w.vietnamese}</span>
                  <span className="listen-inline">🔊 nghe</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Tên riêng & thông tin tham khảo */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tên riêng &amp; thông tin tham khảo</h2>
            <p className="section-caption">
              富士山・琵琶湖・シャンハイ・「七人の侍」・金閣寺
            </p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {properNouns.map((w) => (
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

        {/* Màu & Vị – bảng tham khảo */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>III. Từ và thông tin tham khảo: 色・味（Màu &amp; Vị）</h2>
            <p className="section-caption">
              Danh từ / tính từ màu sắc; tính từ vị giác. Bấm để mở rộng bảng màu.
            </p>
          </div>
          <div className="card-body">
            <button
              type="button"
              className="secondary-button"
              onClick={() => setColorsOpen((prev) => !prev)}
            >
              {colorsOpen ? 'Thu gọn bảng màu' : 'Mở bảng màu (danh từ / tính từ)'}
            </button>
            {colorsOpen && (
              <div className="grammar-detail" style={{ marginTop: '1rem' }}>
                <h3 className="grammar-subtitle">Màu (色)</h3>
                <div className="vocab-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
                  {lesson8.colors.map((c) => (
                    <div key={c.nounJp} className="triple-vocab-card" style={{ padding: '0.5rem' }}>
                      <div className="triple-main">{c.nounJp}（{c.nounKana}）</div>
                      {c.adjJp && (
                        <div className="triple-kana">{c.adjJp}（{c.adjKana}）</div>
                      )}
                      <div className="vocab-vi">{c.vietnamese}</div>
                    </div>
                  ))}
                </div>
                <h3 className="grammar-subtitle">Vị（味）</h3>
                <div className="vocab-grid triple-vocab-grid">
                  {lesson8.tastes.map((t) => (
                    <button
                      key={t.japanese}
                      type="button"
                      className="vocab-item vocab-flashcard triple-vocab-card"
                      onClick={() => speakJapaneseNow(t.kana)}
                    >
                      <div className="triple-main">{t.japanese}</div>
                      <div className="triple-kana">{t.kana}</div>
                      <div className="triple-romaji">{t.romaji}</div>
                      <span className="vocab-vi">{t.vietnamese}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Ngữ pháp chi tiết Bài 8 */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp – Bài 8</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson8.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Tính từ（形容詞）</h3>
              <p className="grammar-note">
                Tính từ có hai chức năng: làm vị ngữ và bổ nghĩa cho danh từ. Trong tiếng Nhật tính từ biến đổi theo đặc trưng câu（thể, thời）. Dựa vào cách biến đổi chia thành hai nhóm: <strong>tính từ đuôi い</strong> và <strong>tính từ đuôi な</strong>.
              </p>

              <h3 className="grammar-subtitle">2. N は な-adj です / N は い-adj です</h3>
              <p className="grammar-note">
                Dùng です ở cuối câu tính từ để thể hiện lịch sự. Với tính từ đuôi な, bỏ な trước です. Với tính từ đuôi い, giữ nguyên ～い.
              </p>
              <ul className="grammar-list">
                <li>① ワット先生は親切です。→ Thầy Watt tốt bụng.</li>
                <li>② 富士山は高いです。→ Núi Phú Sĩ cao.</li>
              </ul>

              <h3 className="grammar-subtitle">3. Phủ định: な-adj じゃありません / い-adj ～くないです</h3>
              <p className="grammar-note">
                Phủ định của な-adj です là な-adj じゃありません. Phủ định của い-adj です là đổi い thành くないです. <strong>Thể phủ định của 「いいです」 là 「よくないです」.</strong>
              </p>
              <ul className="grammar-list">
                <li>③ あそこは静かじゃありません。→ Chỗ kia không yên tĩnh.</li>
                <li>④ この本はおもしろくないです。→ Quyển sách này không hay.</li>
              </ul>

              <h3 className="grammar-subtitle">4. Thể nghi vấn câu tính từ</h3>
              <p className="grammar-note">
                Cách tạo thể nghi vấn giống câu danh từ và động từ. Khi trả lời thì lặp lại tính từ trong câu hỏi. <strong>Không dùng 「そうです」 và 「そうじゃありません」 để trả lời.</strong>
              </p>
              <ul className="grammar-list">
                <li>⑤ ペキンは寒いですか。…はい、寒いです。</li>
                <li>⑥ 琵琶湖の水はきれいですか。…いいえ、きれいじゃありません。</li>
              </ul>

              <h3 className="grammar-subtitle">5. Tính từ bổ nghĩa danh từ: な-adj な N / い-adj N</h3>
              <p className="grammar-note">
                Tính từ đặt trước danh từ để bổ nghĩa. Với tính từ đuôi な thì dùng dạng có 「な」 trước danh từ.
              </p>
              <ul className="grammar-list">
                <li>⑦ ワット先生は親切な先生です。→ Thầy Watt là thầy giáo tốt bụng.</li>
                <li>⑧ 富士山は高い山です。→ Núi Phú Sĩ là núi cao.</li>
              </ul>

              <h3 className="grammar-subtitle">6. とても / あまり</h3>
              <p className="grammar-note">
                「とても」 và 「あまり」 là phó từ chỉ mức độ, đặt trước tính từ. 「とても」 = “rất”, dùng trong câu khẳng định. 「あまり」 dùng trong câu phủ định, nghĩa “không ～ lắm”.
              </p>
              <ul className="grammar-list">
                <li>⑨ ペキンはとても寒いです。→ Bắc Kinh rất lạnh.</li>
                <li>⑩ これはとても有名な映画です。→ Đây là bộ phim rất nổi tiếng.</li>
                <li>⑪ シャンハイはあまり寒くないです。→ Thượng Hải không lạnh lắm.</li>
                <li>⑫ さくら大学はあまり有名じゃないです。→ Trường Đại học Sakura không nổi tiếng lắm.</li>
              </ul>

              <h3 className="grammar-subtitle">7. N は どうですか</h3>
              <p className="grammar-note">
                Mẫu câu hỏi về ấn tượng, ý kiến hoặc cảm tưởng về việc đã làm, địa điểm đã đến, người đã gặp.
              </p>
              <ul className="grammar-list">
                <li>⑬ 日本の生活はどうですか。…楽しいです。</li>
              </ul>

              <h3 className="grammar-subtitle">8. N₁ は どんな N₂ ですか</h3>
              <p className="grammar-note">
                Dùng khi người nói muốn người nghe mô tả hoặc giải thích về đối tượng trong N₁. N₂ chỉ phạm trù mà N₁ thuộc về. 「どんな」 luôn đặt trước danh từ.
              </p>
              <ul className="grammar-list">
                <li>⑭ 奈良はどんな町ですか。…古い町です。</li>
              </ul>

              <h3 className="grammar-subtitle">9. Câu₁ が、Câu₂</h3>
              <p className="grammar-note">
                「が」 là trợ từ nối tiếp, nghĩa “nhưng”. Dùng が nối hai câu (mệnh đề) thành một câu.
              </p>
              <ul className="grammar-list">
                <li>⑮ 日本の食べ物はおいしいですが、高いです。→ Món ăn Nhật ngon nhưng đắt.</li>
              </ul>

              <h3 className="grammar-subtitle">10. どれ</h3>
              <p className="grammar-note">
                Dùng khi người nói muốn người nghe xác định một vật trong nhóm từ hai vật trở lên.
              </p>
              <ul className="grammar-list">
                <li>⑯ ミラーさんの傘はどれですか。…あの青い傘です。</li>
              </ul>

              <h3 className="grammar-subtitle">Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson8.sentences.slice(0, 10).map((s) => (
                  <div key={s.japanese} className="grammar-example-row">
                    <div>
                      <div className="jp">{s.japanese}</div>
                      <div className="romaji">{s.romaji}</div>
                      <div className="vi">{s.vietnamese}</div>
                    </div>
                    <button className="listen-button" type="button" onClick={() => speakJapaneseNow(s.japanese)}>
                      🔊 Nghe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Game luyện tập – Hoàn thành 0/6 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/{GAMES_TOTAL}</p>
            <p className="section-caption">
              Hoàn thành từng game: hội thoại, từ vựng, ngữ pháp, とても・あまり, ghép câu.
            </p>
          </div>
        </section>

        {/* Hội thoại: Đã đến lúc tôi phải về */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại: Đã đến lúc tôi phải về</h2>
            <p className="section-caption">
              Yamada – Maria – Hose. 日本の生活に慣れましたか。お仕事はどうですか。もう一杯いかがですか。そろそろ失礼します。
            </p>
          </div>
          <div className="card-body practice-body">
            {lesson8.dialogue.map((turn) => (
              <div key={turn.japanese} className="grammar-example-row">
                <div>
                  <div className="grammar-subtitle" style={{ marginBottom: '0.25rem' }}>{turn.speaker}</div>
                  <div className="jp">{turn.japanese}</div>
                  <div className="romaji">{turn.romaji}</div>
                  <div className="vi">{turn.vietnamese}</div>
                </div>
                <button className="listen-button" type="button" onClick={() => speakJapaneseNow(turn.japanese)}>
                  🔊 Nghe
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mini game: Hiểu hội thoại */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Hiểu hội thoại Bài 8</h2>
            <p className="section-caption">
              Đọc hội thoại &quot;Đã đến lúc tôi phải về&quot;, chọn đáp án đúng.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Câu hỏi: <strong>{lesson8DialogueQuizItems[dialogueIndex].questionVi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {lesson8DialogueQuizItems[dialogueIndex].options.map((opt, i) => {
                const isCorrect = i === lesson8DialogueQuizItems[dialogueIndex].correctIndex;
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
                    onClick={() => setDialogueSelected(i)}
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
                  setDialogueIndex((prev) => (prev + 1) % lesson8DialogueQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Từ vựng Bài 8 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Từ vựng Bài 8</h2>
            <p className="section-caption">
              Đọc nghĩa tiếng Việt, chọn đúng từ tiếng Nhật（tính từ / danh từ）.
            </p>
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
                  setVocabIndex((prev) => (prev + 1) % lesson8VocabQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Ngữ pháp – chọn câu đúng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Ngữ pháp Bài 8</h2>
            <p className="section-caption">
              Đọc câu tiếng Việt, chọn câu tiếng Nhật đúng（どう・どんな・どれ・が）.
            </p>
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
                    onClick={() => setGrammarSelected(idx)}
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
                  setGrammarIndex((prev) => (prev + 1) % lesson8GrammarQuizItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: とても / あまり */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: とても / あまり</h2>
            <p className="section-caption">
              Chọn câu tiếng Nhật đúng với nghĩa tiếng Việt（rất / không ～ lắm）.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">
                Tiếng Việt: <strong>{currentTotemo.vi}</strong>
              </p>
            </div>
            <div className="practice-options">
              {currentTotemo.options.map((opt, idx) => {
                const isCorrect = idx === currentTotemo.correctIndex;
                const selected = totemoSelected === idx;
                const className =
                  'practice-option' +
                  (totemoSelected != null
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
                    onClick={() => setTotemoSelected(idx)}
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
                  setTotemoSelected(null);
                  setTotemoIndex((prev) => (prev + 1) % lesson8TotemoAmariItems.length);
                }}
              >
                Câu khác →
              </button>
            </div>
          </div>
        </section>

        {/* Mini game: Ghép câu tính từ / どう / どんな */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: Ghép câu Bài 8</h2>
            <p className="section-caption">
              Nhìn câu tiếng Việt, ghép đúng các token tiếng Nhật.
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
                      if (isBuilderCorrect) speakJapaneseNow(builderTokens.join(''));
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
                      setBuilderIndex((prev) => (prev + 1) % lesson8BuilderItems.length);
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
          items={lesson8.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />

        <WritingChallenge
          title="Writing Challenge – Bài 8"
          sectionCaption="Viết 3–5 câu mô tả người / nơi / đồ vật bằng tính từ đuôi い và な. Dùng とても・あまり, どうですか, どんな N ですか, hoặc が để nối hai ý."
          tips={
            <ul className="grammar-list">
              <li>Dùng ít nhất 1 câu &quot;N は い-adj / な-adj です。&quot;</li>
              <li>Dùng 1 câu có とても hoặc あまり.</li>
              <li>Thử 1 câu &quot;N₁ は い-adj／な-adj ですが、～です。&quot; (が = nhưng).</li>
            </ul>
          }
          placeholder={`Ví dụ:\n富士山は高いです。\n日本の生活はとても楽しいです。\nこの本はおもしろいですが、難しいです。`}
          rows={4}
          lessonId="B8"
          grammarContext="N は い-adj/な-adj です, とても・あまり, どうですか, どんな N ですか, N は い-adj ですが～です"
        />

        {/* Mock Test N5 sau Bài 8 */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock Test N5 – Ôn tập B0–B8</h2>
            <p className="section-caption">
              Làm bài test tổng hợp (từ vựng + ngữ pháp) giống đề N5, dùng những gì bạn đã học từ Bài 0 đến Bài 8.
            </p>
          </div>
          <div className="card-body practice-body">
            <p className="practice-question">
              Khi sẵn sàng, bấm nút bên dưới để bắt đầu làm test.
            </p>
            <div className="practice-actions">
              <a href="/n5-test?mode=after8" className="primary-button">
                Bắt đầu Mock Test N5 →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}