'use client';

import { useState } from 'react';
import WritingChallenge from '@/components/WritingChallenge';
import { LessonNav } from '@/components/LessonNav';
import { SpeakingGameMulti } from '@/components/SpeakingGameMulti';
import ListeningDictation from '@/components/ListeningDictation';
import { getSpeakingSentences } from '@/data/speakingPool';
import {
  lesson9,
  lesson9VocabQuizItems,
  lesson9GrammarQuizItems,
  lesson9BuilderItems,
  lesson9DialogueQuizItems,
} from '@/data/lessons/lesson9';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson9Page() {
  const verbs = lesson9.words.filter((w) => w.category === 'verb');
  const naAdjs = lesson9.words.filter((w) => w.category === 'naAdj');
  const nouns = lesson9.words.filter((w) => w.category === 'noun');
  const family = lesson9.words.filter((w) => w.category === 'family');
  const adverbs = lesson9.words.filter((w) => w.category === 'adverb');
  const expressions = lesson9.words.filter((w) => w.category === 'expression');
  const phrases = lesson9.words.filter((w) => w.category === 'phrase');

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelected, setVocabSelected] = useState<number | null>(null);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarSelected, setGrammarSelected] = useState<number | null>(null);
  const [builderIndex, setBuilderIndex] = useState(0);
  const [builderTokens, setBuilderTokens] = useState<string[]>([]);
  const [builderChecked, setBuilderChecked] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueSelected, setDialogueSelected] = useState<number | null>(null);

  const currentVocab = lesson9VocabQuizItems[vocabIndex];
  const currentGrammar = lesson9GrammarQuizItems[grammarIndex];
  const currentBuilder = lesson9BuilderItems[builderIndex];
  const builderText = builderTokens.join(' ');
  const isBuilderCorrect =
    builderTokens.length === currentBuilder.tokens.length &&
    builderTokens.join('') === currentBuilder.tokens.join('');
  const builderOptions = [...currentBuilder.tokens].sort();

  const [gamesDone, setGamesDone] = useState(0);
  const GAMES_TOTAL = 5;
  const [speakingList] = useState(() => getSpeakingSentences(lesson9.sentences, 10));

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson9" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">{lesson9.title}</h1>
          <p className="lesson-subtitle">{lesson9.description}</p>
        </section>

        {/* Từ vựng: Động từ わかります・あります */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Động từ: わかります・あります</h2>
            <p className="section-caption">Dùng với trợ từ が: N が わかります／あります</p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {verbs.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
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

        {/* Tính từ đuôi な: 好き・嫌い・上手・下手 */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Tính từ đuôi な: 好き・嫌い・上手・下手</h2>
            <p className="section-caption">N が 好きです／嫌いです／上手です／下手です</p>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {naAdjs.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
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

        {/* Danh từ: sở thích, âm nhạc, thể thao, chữ, vé, thời gian */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Danh từ: 料理・スポーツ・音楽・字・チケット・用事・約束</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {nouns.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Gia đình */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Gia đình: ご主人・奥さん・子供</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {family.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Phó từ mức độ & biểu hiện & cụm hội thoại */}
        <section className="card vocab-card">
          <div className="card-header">
            <h2>Phó từ mức độ ・ から／どうして ・ Cụm hội thoại</h2>
          </div>
          <div className="vocab-grid triple-vocab-grid">
            {adverbs.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {expressions.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
            {phrases.map((w) => (
              <button key={w.japanese} type="button" className="vocab-item vocab-flashcard triple-vocab-card" onClick={() => speakJapaneseNow(w.kana)}>
                <div className="triple-main">{w.japanese}</div>
                <div className="triple-kana">{w.kana}</div>
                <div className="triple-romaji">{w.romaji}</div>
                <span className="vocab-vi">{w.vietnamese}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Ngữ pháp chi tiết Bài 9 (IV. Giải thích ngữ pháp) */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>IV. Giải thích ngữ pháp – Bài 9</h2>
          </div>
          <div className="card-body">
            <p className="grammar-pattern">📘 {lesson9.grammarSummary}</p>
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. N が わかります／あります &amp; N が 好きです／嫌いです／上手です／下手です</h3>
              <p className="grammar-note">
                Trợ từ 「が」 chỉ đối tượng (hoặc chủ thể) với わかります・あります, và với tính từ đuôi な chỉ sở thích/khả năng: 好き・嫌い・上手・下手.
              </p>
              <ul className="grammar-list">
                <li>① わたしはイタリア料理が好きです。→ Tôi thích món ăn Ý.</li>
                <li>② わたしは日本語がわかります。→ Tôi hiểu tiếng Nhật.</li>
                <li>③ わたしは車があります。→ Tôi có xe hơi.</li>
              </ul>

              <h3 className="grammar-subtitle">2. どんな N（Bài 8）</h3>
              <p className="grammar-note">Dùng để hỏi loại / thể loại của danh từ.</p>
              <ul className="grammar-list">
                <li>④ どんなスポーツが好きですか。…サッカーが好きです。</li>
              </ul>

              <h3 className="grammar-subtitle">3. よく／だいたい／たくさん／少し／あまり／全然</h3>
              <p className="grammar-note">
                Phó từ mức độ đặt trước động từ. あまり・全然 thường đi với phủ định.
              </p>
              <ul className="grammar-list">
                <li>⑤ 英語がよくわかります。⑥ 英語が少しわかります。⑦ 英語があまりわかりません。</li>
                <li>⑧ お金がたくさんあります。⑨ お金が全然ありません。</li>
                <li>Chú ý: 少し・全然 cũng bổ nghĩa cho tính từ（少し寒い、全然おもしろくない）.</li>
              </ul>

              <h3 className="grammar-subtitle">4. Câu₁ から、Câu₂（vì ～ nên ～）</h3>
              <p className="grammar-note">「から」 nối hai câu: Câu₁ là lý do của Câu₂. Có thể đặt Câu₁ から sau.</p>
              <ul className="grammar-list">
                <li>⑩ 時間がありませんから、新聞を読みません。</li>
                <li>⑪ …いいえ、読みません。時間がありませんから。</li>
              </ul>

              <h3 className="grammar-subtitle">5. どうして（tại sao）</h3>
              <p className="grammar-note">Hỏi lý do. Khi trả lời thêm から ở cuối. Có thể dùng どうしてですか khi nghe đối phương nói trước.</p>
              <ul className="grammar-list">
                <li>⑫ どうして朝新聞を読みませんか。…時間がありませんから。</li>
                <li>⑬ きょうは早く帰ります。…どうしてですか。…子どもの誕生日ですから。</li>
              </ul>

              <h3 className="grammar-subtitle">Ví dụ tổng hợp</h3>
              <div className="grammar-examples">
                {lesson9.sentences.map((s) => (
                  <div key={s.japanese} className="grammar-example-row">
                    <div>
                      <div className="jp">{s.japanese}</div>
                      <div className="romaji">{s.romaji}</div>
                      <div className="vi">{s.vietnamese}</div>
                    </div>
                    <button className="listen-button" type="button" onClick={() => speakJapaneseNow(s.japanese)}>🔊 Nghe</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Game luyện tập – Hoàn thành 0/5 */}
        <section className="card" style={{ background: 'linear-gradient(135deg, #ecfdf3 0%, #f0fdf4 100%)' }}>
          <div className="card-header">
            <h2>Game luyện tập</h2>
            <p className="progress-badge">Hoàn thành game {gamesDone}/{GAMES_TOTAL}</p>
            <p className="section-caption">
              Hoàn thành từng game: hội thoại, từ vựng, ngữ pháp, ghép câu.
            </p>
          </div>
        </section>

        {/* Hội thoại: Miller – Kimura（コンサート・いっしょにいかがですか） */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Hội thoại: Mời đi nghe nhạc（Miller – Kimura）</h2>
            <p className="section-caption">もしもし ・ いっしょにいかがですか ・ ちょっと… ・ また今度お願いします</p>
          </div>
          <div className="card-body practice-body">
            {lesson9.dialogue.map((turn) => (
              <div key={turn.japanese} className="grammar-example-row">
                <div>
                  <div className="grammar-subtitle" style={{ marginBottom: '0.25rem' }}>{turn.speaker}</div>
                  <div className="jp">{turn.japanese}</div>
                  <div className="romaji">{turn.romaji}</div>
                  <div className="vi">{turn.vietnamese}</div>
                </div>
                <button className="listen-button" type="button" onClick={() => speakJapaneseNow(turn.japanese)}>🔊 Nghe</button>
              </div>
            ))}
          </div>
        </section>

        {/* Mini game: Hiểu hội thoại */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Hiểu hội thoại Bài 9</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Câu hỏi: <strong>{lesson9DialogueQuizItems[dialogueIndex].questionVi}</strong></p>
            </div>
            <div className="practice-options">
              {lesson9DialogueQuizItems[dialogueIndex].options.map((opt, i) => {
                const isCorrect = i === lesson9DialogueQuizItems[dialogueIndex].correctIndex;
                const selected = dialogueSelected === i;
                const className = 'practice-option' + (dialogueSelected != null ? (selected && isCorrect ? ' correct' : selected && !isCorrect ? ' wrong' : '') : '');
                return <button key={opt} type="button" className={className} onClick={() => setDialogueSelected(i)}>{opt}</button>;
              })}
            </div>
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setDialogueSelected(null); setDialogueIndex((prev) => (prev + 1) % lesson9DialogueQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game: Từ vựng */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Từ vựng Bài 9</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Nghĩa: <strong>{currentVocab.vi}</strong></p>
            </div>
            <div className="practice-options">
              {currentVocab.options.map((opt, idx) => {
                const isCorrect = idx === currentVocab.correctIndex;
                const selected = vocabSelected === idx;
                const className = 'practice-option' + (vocabSelected != null ? (selected && isCorrect ? ' correct' : selected && !isCorrect ? ' wrong' : '') : '');
                return (
                  <button key={opt} type="button" className={className} onClick={() => { setVocabSelected(idx); speakJapaneseNow(opt); }}>{opt}</button>
                );
              })}
            </div>
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setVocabSelected(null); setVocabIndex((prev) => (prev + 1) % lesson9VocabQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game: Ngữ pháp N が 好き／わかります／から */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mini game: Ngữ pháp Bài 9（が 好き／わかります／から／どうして）</h2>
          </div>
          <div className="card-body practice-body">
            <div className="practice-prompt">
              <p className="practice-question">Tiếng Việt: <strong>{currentGrammar.vi}</strong></p>
            </div>
            <div className="practice-options">
              {currentGrammar.options.map((opt, idx) => {
                const isCorrect = idx === currentGrammar.correctIndex;
                const selected = grammarSelected === idx;
                const className = 'practice-option' + (grammarSelected != null ? (selected && isCorrect ? ' correct' : selected && !isCorrect ? ' wrong' : '') : '');
                return <button key={opt} type="button" className={className} onClick={() => setGrammarSelected(idx)}>{opt}</button>;
              })}
            </div>
            <div className="practice-actions">
              <button type="button" className="secondary-button" onClick={() => { setGrammarSelected(null); setGrammarIndex((prev) => (prev + 1) % lesson9GrammarQuizItems.length); }}>Câu khác →</button>
            </div>
          </div>
        </section>

        {/* Mini game: Ghép câu */}
        <section className="card builder-card">
          <div className="card-header">
            <h2>Mini game: Ghép câu Bài 9</h2>
          </div>
          <div className="card-body builder-body">
            <div className="builder-left">
              <div className="builder-label">Câu tiếng Việt</div>
              <div className="builder-vi-quiz">{currentBuilder.vi}</div>
              <div className="builder-hint">Gợi ý: {currentBuilder.hint}</div>
              <button className="listen-button" type="button" onClick={() => speakJapaneseNow(currentBuilder.tokens.join(''))}>🔊 Nghe đáp án mẫu</button>
            </div>
            <div className="builder-right">
              <div className="builder-output">
                <div className="builder-label">Câu tiếng Nhật bạn ghép</div>
                <div className="builder-jp">{builderText || '・・・'}</div>
                {builderChecked && (
                  <div className="builder-feedback">
                    {isBuilderCorrect ? <span className="correct-text">✅ Chính xác!</span> : <span className="wrong-text">❌ Chưa đúng. Đáp án: {currentBuilder.tokens.join(' ')}</span>}
                  </div>
                )}
                <div className="builder-actions">
                  <button className="primary-button" type="button" disabled={!builderTokens.length} onClick={() => { if (!builderTokens.length) return; setBuilderChecked(true); if (isBuilderCorrect) speakJapaneseNow(builderTokens.join('')); }}>Kiểm tra câu</button>
                  <button className="secondary-button" type="button" onClick={() => { setBuilderTokens([]); setBuilderChecked(false); }}>Xoá câu</button>
                  <button className="secondary-button" type="button" onClick={() => { setBuilderIndex((prev) => (prev + 1) % lesson9BuilderItems.length); setBuilderTokens([]); setBuilderChecked(false); }}>Câu khác →</button>
                </div>
              </div>
              <div className="builder-tokens">
                {builderOptions.map((t) => (
                  <button key={t} type="button" className="token-chip" onClick={() => { if (builderChecked) return; setBuilderTokens((prev) => [...prev, t]); }}>
                    <span className="token-jp">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luyện nói – 10 câu (trộn bài học + trường âm, âm đục, âm ngắt, âm ghép) */}
        <SpeakingGameMulti sentences={speakingList} />

        {/* Luyện nghe – Chép chính tả */}
        <ListeningDictation
          items={lesson9.sentences.slice(0, 5).map((s) => ({
            japanese: s.japanese,
            romaji: s.romaji,
            vietnamese: s.vietnamese,
          }))}
          onSpeak={speakJapaneseNow}
          title="Luyện nghe – Chép chính tả"
        />
        <WritingChallenge
          title="Writing Challenge – Bài 9"
          sectionCaption="Viết 3–5 câu về sở thích và lý do: dùng N が 好きです／わかります／あります, よく／少し／あまり／全然, và ～から（vì ～ nên ～）, どうして."
          tips={
            <ul className="grammar-list">
              <li>Ít nhất 1 câu: 「N が 好きです。」 hoặc 「N が わかります。」</li>
              <li>Ít nhất 1 câu có phó từ: よく／たくさん／少し／あまり／全然.</li>
              <li>Thử 1 câu lý do: 「～から、～。」 hoặc trả lời 「どうして ～ か。」「～から。」</li>
            </ul>
          }
          placeholder={`Ví dụ:\nわたしはサッカーが好きです。\n日本語が少しわかります。\n時間がありませんから、テレビをあまり見ません。`}
          rows={4}
          lessonId="B9"
          grammarContext="N が わかります／あります, N が 好きです／嫌いです／上手です／下手です, どんな N, よく／たくさん／少し／あまり／全然, Câu₁ から Câu₂, どうして"
        />

        {/* Link Mock Test – chú trọng B9, vẫn có bài trước */}
        <section className="card practice-card">
          <div className="card-header">
            <h2>Mock Test N5 – Ôn B7, B8, B9</h2>
            <p className="section-caption">
              Nên làm khi đã học ít nhất 3 bài (ví dụ B7→B9). Nội dung thiên về Bài 9, kèm câu ôn các bài trước.
            </p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-actions">
              <a href="/n5-test?mode=after9" className="primary-button">Bắt đầu Mock Test N5 →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
