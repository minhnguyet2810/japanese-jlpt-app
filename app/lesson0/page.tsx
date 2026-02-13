'use client';

import { comboKana, lesson0, voicedKana } from '@/data/lessons/lesson0';
import { KanaFlashcards } from '@/components/KanaFlashcards';
import { LessonNav } from '@/components/LessonNav';
import { KanaQuizGame } from '@/components/KanaQuizGame';
import { KanaExtraQuizGame } from '@/components/KanaExtraQuizGame';
import { speakJapaneseNow } from '@/lib/speakJapanese';

export default function Lesson0Page() {
  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="lesson0" />
        </div>
      </header>
      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Bài 0: Bảng chữ cái</h1>
          <p className="lesson-subtitle">
            Học hiragana và katakana bằng flashcard, mini game chọn romaji và danh sách âm đục / âm
            ghép.
          </p>
        </section>

        <KanaFlashcards data={lesson0} />
        <KanaQuizGame cards={lesson0.cards} />

        <section className="card kana-extra-card">
          <div className="card-header">
            <h2>Âm đục (が・ざ・だ・ば・ぱ)</h2>
            <p className="section-caption">
              Các âm g, z, d, b, p được tạo bằng cách thêm dấu dakuten (゛) hoặc handakuten (゜).
            </p>
          </div>
          <div className="card-body kana-extra-body">
            {voicedKana.map((row) => (
              <div key={row.label} className="kana-extra-row">
                <div className="kana-extra-label">{row.label}</div>
                <div className="kana-extra-jp jp">{row.hiragana}</div>
                <div className="kana-extra-jp jp">{row.katakana}</div>
                <div className="kana-extra-romaji">{row.romaji}</div>
                <button
                  type="button"
                  className="listen-button small"
                  onClick={() => speakJapaneseNow(row.hiragana)}
                >
                  🔊
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="card kana-extra-card">
          <div className="card-header">
            <h2>Âm ghép (きゃ・しゃ・ちゃ・…)</h2>
            <p className="section-caption">
              Các âm kết hợp với ゃ・ゅ・ょ để tạo ra kya, sha, cha, nya, ryo...
            </p>
          </div>
          <div className="card-body kana-extra-body">
            {comboKana.map((row) => (
              <div key={row.label} className="kana-extra-row">
                <div className="kana-extra-label">{row.label}</div>
                <div className="kana-extra-jp jp">{row.hiragana}</div>
                <div className="kana-extra-jp jp">{row.katakana}</div>
                <div className="kana-extra-romaji">{row.romaji}</div>
                <button
                  type="button"
                  className="listen-button small"
                  onClick={() => speakJapaneseNow(row.hiragana)}
                >
                  🔊
                </button>
              </div>
            ))}
          </div>
        </section>

        <KanaExtraQuizGame rows={[...voicedKana, ...comboKana]} />

        {/* Giải thích: trường âm & âm ngắt */}
        <section className="card grammar-card">
          <div className="card-header">
            <h2>Quy tắc đọc: trường âm &amp; âm ngắt</h2>
          </div>
          <div className="card-body">
            <div className="grammar-detail">
              <h3 className="grammar-subtitle">1. Trường âm（長音）</h3>
              <p className="grammar-note">
                Tiếng Nhật kéo dài nguyên âm bằng cách viết thêm một kana: ví dụ お + う → おう. Khi đọc
                nhớ kéo dài nguyên âm, không tách làm hai tiếng.
              </p>
              <div className="grammar-examples">
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">おばさん（obasan）</div>
                    <div className="romaji">obasan</div>
                    <div className="vi">cô / bác gái (tầm trung niên)</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('おばさん')}
                  >
                    🔊 Nghe
                  </button>
                </div>
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">おばあさん（obāsan）</div>
                    <div className="romaji">obāsan</div>
                    <div className="vi">bà (người lớn tuổi – &quot;baa&quot; là trường âm)</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('おばあさん')}
                  >
                    🔊 Nghe
                  </button>
                </div>
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">こうこう</div>
                    <div className="romaji">kōkō</div>
                    <div className="vi">trường cấp 3 (kéo dài &quot;ō&quot; ở cả hai âm)</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('こうこう')}
                  >
                    🔊 Nghe
                  </button>
                </div>
              </div>

              <h3 className="grammar-subtitle">2. Âm ngắt（促音）– っ nhỏ</h3>
              <p className="grammar-note">
                っ nhỏ cho biết phải &quot;ngắt&quot; một nhịp, làm phụ âm đứng sau mạnh hơn. Trong romaji
                thường viết bằng cách nhân đôi phụ âm (tt, kk, pp...).
              </p>
              <div className="grammar-examples">
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">きって</div>
                    <div className="romaji">kitte</div>
                    <div className="vi">tem (ngắt nhẹ trước &quot;t&quot;)</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('きって')}
                  >
                    🔊 Nghe
                  </button>
                </div>
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">がっこう</div>
                    <div className="romaji">gakkō</div>
                    <div className="vi">trường học (ngắt trước &quot;k&quot; rồi kéo dài &quot;ō&quot;)</div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('がっこう')}
                  >
                    🔊 Nghe
                  </button>
                </div>
                <div className="grammar-example-row">
                  <div>
                    <div className="jp">コーヒー</div>
                    <div className="romaji">kōhī</div>
                    <div className="vi">
                      cà phê (trong katakana dùng dấu &quot;ー&quot; để kéo dài âm &quot;ō&quot; và &quot;ī&quot;)
                    </div>
                  </div>
                  <button
                    className="listen-button"
                    type="button"
                    onClick={() => speakJapaneseNow('コーヒー')}
                  >
                    🔊 Nghe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}




