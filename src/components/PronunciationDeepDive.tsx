'use client';

import { useState, useRef, useEffect } from 'react';
import { speakJapaneseNow } from '@/lib/speakJapanese';
import {
  CHOON_COLUMN_RULES,
  CHOON_EXCEPTIONS,
  CHOON_COMPARISON_PAIRS,
  SOKUON_EXPLANATION,
  SOKUON_CONSONANT_GROUPS,
  SOKUON_COMPARISON_PAIRS,
  ROMAJI_VARIANTS,
  MINNA_PRONUNCIATION_WORDS,
  BEAT_PATTERNS,
} from '@/data/pronunciationRules';

type TabId = 'chouon' | 'sokuon' | 'waveform' | 'ai-check' | 'minna' | 'romaji';

const TABS: { id: TabId; label: string }[] = [
  { id: 'chouon', label: 'Trường âm (長音)' },
  { id: 'sokuon', label: 'Âm ngắt (促音)' },
  { id: 'waveform', label: 'Nhịp điệu' },
  { id: 'ai-check', label: 'Kiểm tra phát âm' },
  { id: 'minna', label: 'Bài tập Minna 1–15' },
  { id: 'romaji', label: 'Romaji chuẩn' },
];

export function PronunciationDeepDive() {
  const [activeTab, setActiveTab] = useState<TabId>('chouon');
  const [pronunciationExpected, setPronunciationExpected] = useState('おばあさん');
  const [pronunciationLoading, setPronunciationLoading] = useState(false);
  const [pronunciationResult, setPronunciationResult] = useState<{
    score: number;
    feedback: string;
    longVowelOk?: boolean;
    sokuonOk?: boolean;
  } | null>(null);
  const [pronunciationError, setPronunciationError] = useState<string | null>(null);
  const recognitionRef = useRef<unknown>(null);

  const startPronunciationCheck = () => {
    if (typeof window === 'undefined') return;
    const SR = (window as Window & { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown }).SpeechRecognition
      || (window as Window & { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;
    if (!SR) {
      setPronunciationError('Trình duyệt không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome.');
      return;
    }
    setPronunciationError(null);
    setPronunciationResult(null);
    setPronunciationLoading(true);

    const recognition = new (SR as new () => { lang: string; continuous: boolean; interimResults: boolean; onresult: (e: { results: Array<Array<{ transcript: string }> > }) => void; onerror: () => void; onend: () => void; start: () => void; stop: () => void })();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;
    let transcript = '';

    recognition.onresult = (e: { results: Array<Array<{ transcript: string }>> }) => {
      transcript = e.results?.[0]?.[0]?.transcript ?? '';
    };
    recognition.onerror = () => {
      setPronunciationLoading(false);
      setPronunciationError('Lỗi microphone hoặc nhận diện. Thử lại.');
    };
    recognition.onend = () => {
      setPronunciationLoading(false);
      recognitionRef.current = null;
      if (!transcript.trim()) {
        setPronunciationResult({
          score: 0,
          feedback: 'Không nghe rõ. Hãy nói rõ và thử lại.',
        });
        return;
      }
      fetch('/api/grade-pronunciation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          expectedText: pronunciationExpected,
          userTranscription: transcript.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          setPronunciationResult({
            score: data.score ?? 0,
            feedback: data.feedback ?? '',
            longVowelOk: data.longVowelOk,
            sokuonOk: data.sokuonOk,
          });
        })
        .catch((e) => {
          setPronunciationError(e instanceof Error ? e.message : 'Lỗi chấm phát âm.');
        });
    };
    recognitionRef.current = recognition;
    recognition.start();
    setTimeout(() => {
      try {
        (recognition as { stop?: () => void }).stop?.();
      } catch {
        // ignore
      }
    }, 8000);
  };

  const [beatIndex, setBeatIndex] = useState(0);
  const beat = BEAT_PATTERNS[beatIndex % BEAT_PATTERNS.length];

  return (
    <div className="pronunciation-module">
      <div className="pronunciation-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={'pronunciation-tab' + (activeTab === tab.id ? ' active' : '')}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'chouon' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">Quy tắc kéo dài theo từng cột</h3>
          <p className="pronunciation-note">
            Cột A thêm あ, cột I/E thêm い, cột U/O thêm う. Khi đọc, kéo dài nguyên âm một phách, không tách hai tiếng.
          </p>
          <ul className="pronunciation-rules-list">
            {CHOON_COLUMN_RULES.map((r) => (
              <li key={r.column} className="pronunciation-rule-item">
                <strong>{r.column}</strong>: thêm <span className="jp">{r.addKana}</span>
                <div className="pronunciation-example-row">
                  <span className="jp">{r.example}</span>
                  <span className="romaji">({r.exampleRomaji})</span>
                  <span className="vi">— {r.exampleMeaning}</span>
                  <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(r.example)} title="Nghe">🔊</button>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="pronunciation-heading">Ngoại lệ kinh điển</h3>
          <div className="pronunciation-exceptions">
            {CHOON_EXCEPTIONS.map((ex) => (
              <div key={ex.japanese} className="pronunciation-exception-card">
                <div className="jp">{ex.japanese}</div>
                <div className="romaji">Macron: {ex.romajiMacron} · Hepburn: {ex.romajiHepburn}</div>
                <div className="vi">{ex.meaning}</div>
                <p className="pronunciation-tip">{ex.note}</p>
                <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(ex.japanese)}>🔊</button>
              </div>
            ))}
          </div>

          <h3 className="pronunciation-heading">So sánh trực quan: cặp từ dễ nhầm</h3>
          <div className="pronunciation-pairs">
            {CHOON_COMPARISON_PAIRS.map((pair, i) => (
              <div key={i} className="pronunciation-pair-card">
                <div className="pair-row">
                  <div>
                    <span className="pair-label">Ngắn</span>
                    <div className="jp">{pair.short.japanese}</div>
                    <div className="romaji">{pair.short.romaji}</div>
                    <div className="vi">{pair.short.meaning}</div>
                  </div>
                  <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(pair.short.japanese)}>🔊</button>
                </div>
                <div className="pair-row">
                  <div>
                    <span className="pair-label">Dài (trường âm)</span>
                    <div className="jp">{pair.long.japanese}</div>
                    <div className="romaji">{pair.long.romaji}</div>
                    <div className="vi">{pair.long.meaning}</div>
                  </div>
                  <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(pair.long.japanese)}>🔊</button>
                </div>
                <p className="pronunciation-tip">{pair.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'sokuon' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">{SOKUON_EXPLANATION.title}</h3>
          <ul className="pronunciation-bullets">
            {SOKUON_EXPLANATION.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h3 className="pronunciation-heading">Nhóm phụ âm thường đi kèm âm ngắt (K, S, T, P)</h3>
          <div className="sokuon-groups">
            {SOKUON_CONSONANT_GROUPS.map((g) => (
              <div key={g.consonant} className="sokuon-group-card">
                <span className="sokuon-consonant">{g.consonant}</span>
                <div className="jp">{g.example}</div>
                <div className="romaji">{g.romaji}</div>
                <div className="vi">{g.meaning}</div>
                <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(g.example)}>🔊</button>
              </div>
            ))}
          </div>

          <h3 className="pronunciation-heading">Luyện nghe: phân biệt có/không âm ngắt</h3>
          <div className="pronunciation-pairs">
            {SOKUON_COMPARISON_PAIRS.map((pair, i) => (
              <div key={i} className="pronunciation-pair-card">
                <div className="pair-row">
                  <div>
                    <span className="pair-label">Không ngắt</span>
                    <div className="jp">{pair.noSokuon.japanese}</div>
                    <div className="romaji">{pair.noSokuon.romaji}</div>
                    <div className="vi">{pair.noSokuon.meaning}</div>
                  </div>
                  <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(pair.noSokuon.japanese)}>🔊</button>
                </div>
                <div className="pair-row">
                  <div>
                    <span className="pair-label">Có âm ngắt っ</span>
                    <div className="jp">{pair.withSokuon.japanese}</div>
                    <div className="romaji">{pair.withSokuon.romaji}</div>
                    <div className="vi">{pair.withSokuon.meaning}</div>
                  </div>
                  <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(pair.withSokuon.japanese)}>🔊</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'waveform' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">Nhịp điệu (phách): so sánh âm thường / trường âm / âm ngắt</h3>
          <p className="pronunciation-note">
            Mỗi ô đại diện 1 phách (mora). Ô rộng = kéo dài; ô có gạch = khoảng lặng (âm ngắt).
          </p>
          <div className="waveform-select">
            {BEAT_PATTERNS.map((b, i) => (
              <button
                key={i}
                type="button"
                className={'waveform-option' + (beatIndex % BEAT_PATTERNS.length === i ? ' active' : '')}
                onClick={() => setBeatIndex(i)}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="waveform-current">
            <div className="jp">{beat.japanese}</div>
            <div className="romaji">{beat.romaji}</div>
            <div className="waveform-bars">
              {beat.beats.map((b, i) => (
                <div
                  key={i}
                  className={
                    'waveform-bar ' +
                    (b === 'long' ? 'long' : b === 'pause' ? 'pause' : 'short')
                  }
                  title={b === 'long' ? 'Trường âm (2 phách)' : b === 'pause' ? 'Âm ngắt (1 phách lặng)' : '1 phách'}
                />
              ))}
            </div>
            <p className="pronunciation-tip">{beat.description}</p>
            <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(beat.japanese)}>🔊 Nghe</button>
          </div>
        </div>
      )}

      {activeTab === 'ai-check' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">AI Kiểm tra phát âm</h3>
          <p className="pronunciation-note">
            Chọn câu/từ mẫu, nhấn &quot;Bắt đầu nói&quot;, đọc to bằng tiếng Nhật. Hệ thống sẽ nhận diện giọng nói và AI chấm xem bạn có ngắt/trường âm đúng phách hay chưa.
          </p>
          <div className="ai-check-controls">
            <label>
              Câu/từ mẫu:
              <select
                value={pronunciationExpected}
                onChange={(e) => setPronunciationExpected(e.target.value)}
                className="pronunciation-select"
              >
                {CHOON_COMPARISON_PAIRS.flatMap((p) => [p.short.japanese, p.long.japanese]).map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
                {SOKUON_COMPARISON_PAIRS.flatMap((p) => [p.noSokuon.japanese, p.withSokuon.japanese]).map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
                <option value="がっこう">がっこう</option>
                <option value="きって">きって</option>
              </select>
            </label>
            <button
              type="button"
              className="primary-button"
              onClick={startPronunciationCheck}
              disabled={pronunciationLoading}
            >
              {pronunciationLoading ? 'Đang nghe… (nói trong 8 giây)' : '🎤 Bắt đầu nói'}
            </button>
          </div>
          {pronunciationError && <p className="pronunciation-error">{pronunciationError}</p>}
          {pronunciationResult && (
            <div className="pronunciation-result-card">
              <p className="pronunciation-score">Điểm: {pronunciationResult.score}/10</p>
              <p className="pronunciation-feedback">{pronunciationResult.feedback}</p>
              {(pronunciationResult.longVowelOk !== undefined || pronunciationResult.sokuonOk !== undefined) && (
                <p className="pronunciation-ok">
                  {pronunciationResult.longVowelOk !== undefined && `Trường âm: ${pronunciationResult.longVowelOk ? '✓' : 'Cần cải thiện'}`}
                  {pronunciationResult.sokuonOk !== undefined && ` · Âm ngắt: ${pronunciationResult.sokuonOk ? '✓' : 'Cần cải thiện'}`}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'minna' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">Từ có trường âm / âm ngắt — Minna no Nihongo Bài 1–15</h3>
          <p className="pronunciation-note">
            Ôn tập tập trung các từ có 長音 hoặc 促音 trong giáo trình.
          </p>
          <div className="minna-word-list">
            {MINNA_PRONUNCIATION_WORDS.map((w, i) => (
              <div key={i} className="minna-word-card">
                <div className="jp">{w.japanese}</div>
                <div className="romaji">Macron: {w.romajiMacron} · Hepburn: {w.romajiHepburn}</div>
                <div className="vi">{w.vietnamese}</div>
                <span className="minna-lesson">Bài {w.lesson}</span>
                <span className={'minna-type ' + w.type}>{w.type === 'long' ? '長音' : w.type === 'sokuon' ? '促音' : 'Cả hai'}</span>
                <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(w.kana || w.japanese)}>🔊</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'romaji' && (
        <div className="pronunciation-panel">
          <h3 className="pronunciation-heading">Hệ thống Romaji chuẩn</h3>
          <p className="pronunciation-note">
            Trường âm có thể viết bằng dấu macron (ō, ā, ī, ū, ē) hoặc Hepburn mở rộng (ou, aa, ii, uu, ei/ee). Gõ bàn phím thường dùng ou, aa…; sách có thể dùng ō, ā…
          </p>
          <div className="romaji-table">
            {ROMAJI_VARIANTS.map((r, i) => (
              <div key={i} className="romaji-row">
                <span className="jp">{r.japanese}</span>
                <span className="romaji">Macron: {r.macron}</span>
                <span className="romaji">Hepburn: {r.hepburn}</span>
                <span className="vi">{r.note}</span>
                <button type="button" className="listen-btn-small" onClick={() => speakJapaneseNow(r.japanese)}>🔊</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
