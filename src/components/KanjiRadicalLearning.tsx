'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { RADICALS_214, getRadicalByChar } from '@/data/radicals214';
import {
  KANJI_DECOMPOSITIONS,
  KANJI_MINNA_13_15,
  getDecomposition,
} from '@/data/kanjiDecomposition';

type TabId = 'radicals' | 'decompose' | 'chinese' | 'flashcard' | 'canvas';
type FlashcardMode = 'flashcard' | 'game';
type CanvasMode = 'practice' | 'game';

const TABS: { id: TabId; label: string }[] = [
  { id: 'radicals', label: '214 Bộ thủ' },
  { id: 'decompose', label: 'Phân rã chữ' },
  { id: 'chinese', label: 'Kanji – Hán' },
  { id: 'flashcard', label: 'Flashcard B13–15' },
  { id: 'canvas', label: 'Tập viết' },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function KanjiRadicalLearning() {
  const [activeTab, setActiveTab] = useState<TabId>('radicals');
  const [radicalSearch, setRadicalSearch] = useState('');
  const [selectedKanji, setSelectedKanji] = useState<string>(KANJI_DECOMPOSITIONS[0]?.kanji ?? '字');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [flashcardMode, setFlashcardMode] = useState<FlashcardMode>('flashcard');
  const [gameScore, setGameScore] = useState({ correct: 0, total: 0 });
  const [gameAnswered, setGameAnswered] = useState<string | null>(null);
  const [gameOrder, setGameOrder] = useState<number[]>([]);
  const [canvasMode, setCanvasMode] = useState<CanvasMode>('practice');
  const [drawGameRadical, setDrawGameRadical] = useState<{ char: string; meaningVi: string } | null>(null);
  const [drawGradeResult, setDrawGradeResult] = useState<{ score: number; feedback: string } | null>(null);
  const [drawGradeLoading, setDrawGradeLoading] = useState(false);
  const [drawGradeError, setDrawGradeError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);

  const filteredRadicals = radicalSearch.trim()
    ? RADICALS_214.filter(
        (r) =>
          r.char.includes(radicalSearch) ||
          r.meaningVi.toLowerCase().includes(radicalSearch.toLowerCase()) ||
          r.onyomi?.toLowerCase().includes(radicalSearch.toLowerCase()) ||
          r.kunyomi?.toLowerCase().includes(radicalSearch.toLowerCase())
      )
    : RADICALS_214;

  const decomp = getDecomposition(selectedKanji);
  const totalFlash = Math.max(1, KANJI_MINNA_13_15.length);
  const flashcardItem = flashcardMode === 'game' && gameOrder.length > 0
    ? KANJI_MINNA_13_15[gameOrder[flashcardIndex % gameOrder.length]]
    : KANJI_MINNA_13_15[flashcardIndex % totalFlash];

  const startFlashcardGame = useCallback(() => {
    setFlashcardMode('game');
    setGameOrder(shuffle(KANJI_MINNA_13_15.map((_, i) => i)));
    setFlashcardIndex(0);
    setGameScore({ correct: 0, total: 0 });
    setGameAnswered(null);
  }, []);

  const gameChoices = (() => {
    if (!flashcardItem || flashcardMode !== 'game') return [];
    const others = KANJI_MINNA_13_15.filter((k) => k.kanji !== flashcardItem.kanji);
    const wrong = shuffle(others).slice(0, 3).map((k) => k.kanji);
    return shuffle([flashcardItem.kanji, ...wrong]);
  })();

  const handleGameAnswer = useCallback((kanji: string) => {
    if (gameAnswered !== null) return;
    setGameAnswered(kanji);
    setGameScore((s) => ({ ...s, total: s.total + 1, correct: s.correct + (kanji === flashcardItem?.kanji ? 1 : 0) }));
  }, [flashcardItem?.kanji, gameAnswered]);

  const nextGameQuestion = useCallback(() => {
    setFlashcardIndex((i) => i + 1);
    setGameAnswered(null);
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawGame = useCallback(() => {
    const r = RADICALS_214[Math.floor(Math.random() * RADICALS_214.length)];
    setDrawGameRadical({ char: r.char, meaningVi: r.meaningVi });
    setDrawGradeResult(null);
    setDrawGradeError(null);
    setTimeout(clearCanvas, 50);
  }, [clearCanvas]);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || activeTab !== 'canvas') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#0f766e';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
  }, [activeTab]);

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawingRef.current = true;
    const x = 'touches' in e ? e.touches[0].clientX - canvas.getBoundingClientRect().left : e.nativeEvent.offsetX;
    const y = 'touches' in e ? e.touches[0].clientY - canvas.getBoundingClientRect().top : e.nativeEvent.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const moveDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const x = 'touches' in e ? e.touches[0].clientX - canvas.getBoundingClientRect().left : e.nativeEvent.offsetX;
    const y = 'touches' in e ? e.touches[0].clientY - canvas.getBoundingClientRect().top : e.nativeEvent.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    drawingRef.current = false;
  };

  const submitDrawing = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const expected = canvasMode === 'game' && drawGameRadical ? drawGameRadical.char : selectedKanji;
    const promptVi = canvasMode === 'game' && drawGameRadical ? drawGameRadical.meaningVi : undefined;
    const base64 = canvas.toDataURL('image/png');
    setDrawGradeError(null);
    setDrawGradeResult(null);
    setDrawGradeLoading(true);
    try {
      const res = await fetch('/api/grade-drawing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, expectedChar: expected, promptVi }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Chấm bài thất bại');
      setDrawGradeResult({ score: data.score ?? 0, feedback: data.feedback ?? '' });
    } catch (e) {
      setDrawGradeError(e instanceof Error ? e.message : 'Lỗi chấm bài');
    } finally {
      setDrawGradeLoading(false);
    }
  }, [canvasMode, drawGameRadical, selectedKanji]);

  return (
    <div className="kanji-radical-module">
      <div className="kanji-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={'kanji-tab' + (activeTab === tab.id ? ' active' : '')}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'radicals' && (
        <section className="kanji-section">
          <h2 className="kanji-section-title">214 Bộ thủ Kangxi</h2>
          <p className="kanji-section-desc">
            Bảng tra cứu bộ thủ cơ bản: ý nghĩa Hán-Việt, âm Nhật (onyomi/kunyomi).
          </p>
          <input
            type="text"
            placeholder="Tìm theo chữ, nghĩa, âm..."
            className="kanji-search"
            value={radicalSearch}
            onChange={(e) => setRadicalSearch(e.target.value)}
          />
          <div className="radicals-grid">
            {filteredRadicals.map((r) => (
              <div key={r.id} className="radical-card">
                <div className="radical-char jp">{r.char}</div>
                <div className="radical-meta">
                  <span className="radical-strokes">{r.strokes} nét</span>
                  <span className="radical-meta-sep"> · </span>
                  <span className="radical-meaning">{r.meaningVi}</span>
                </div>
                {(r.onyomi || r.kunyomi) && (
                  <div className="radical-readings">
                    {r.onyomi && <span>{r.onyomi}</span>}
                    {r.kunyomi && <span>{r.kunyomi}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'decompose' && (
        <section className="kanji-section">
          <h2 className="kanji-section-title">Phân rã chữ Hán</h2>
          <p className="kanji-section-desc">
            Chọn một chữ Kanji để xem các bộ thủ cấu thành và ý nghĩa từng phần.
          </p>
          <select
            className="kanji-select"
            value={selectedKanji}
            onChange={(e) => setSelectedKanji(e.target.value)}
          >
            {KANJI_DECOMPOSITIONS.map((k) => (
              <option key={k.kanji} value={k.kanji}>
                {k.kanji} – {k.meaningVi}
              </option>
            ))}
          </select>
          {decomp && (
            <div className="decompose-result">
              <div className="decompose-main">
                <span className="decompose-kanji jp">{decomp.kanji}</span>
                <span className="decompose-meaning">{decomp.meaningVi}</span>
                {(decomp.onyomi || decomp.kunyomi) && (
                  <span className="decompose-readings">
                    {decomp.onyomi} {decomp.kunyomi}
                  </span>
                )}
              </div>
              <div className="decompose-radicals">
                <div className="decompose-label">Bộ thủ cấu thành:</div>
                <div className="decompose-parts">
                  {decomp.radicals.map((radChar, i) => {
                    const rad = getRadicalByChar(radChar);
                    return (
                      <div key={`${radChar}-${i}`} className="decompose-part">
                        <span className="jp">{radChar}</span>
                        <span className="meaning">
                          {decomp.radicalMeanings?.[i] ?? rad?.meaningVi ?? '—'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'chinese' && (
        <section className="kanji-section">
          <h2 className="kanji-section-title">Kanji – Hán (Phồn thể / Giản thể)</h2>
          <p className="kanji-section-desc">
            Liên kết giữa chữ Kanji (Nhật) và chữ Hán tương ứng (Trung).
          </p>
          <select
            className="kanji-select"
            value={selectedKanji}
            onChange={(e) => setSelectedKanji(e.target.value)}
          >
            {KANJI_DECOMPOSITIONS.map((k) => (
              <option key={k.kanji} value={k.kanji}>
                {k.kanji} – {k.meaningVi}
              </option>
            ))}
          </select>
          {decomp && (
            <div className="chinese-link">
              <div className="chinese-row">
                <span className="chinese-label">Kanji (Nhật)</span>
                <span className="jp chinese-char">{decomp.kanji}</span>
              </div>
              <div className="chinese-row">
                <span className="chinese-label">Phồn thể (Traditional)</span>
                <span className="jp chinese-char">{decomp.traditional ?? decomp.kanji}</span>
              </div>
              <div className="chinese-row">
                <span className="chinese-label">Giản thể (Simplified)</span>
                <span className="jp chinese-char">{decomp.simplified ?? decomp.kanji}</span>
              </div>
              <p className="chinese-note">
                Nhiều chữ Kanji giống hoặc gần với chữ Hán; học bộ thủ giúp nhớ cả hai ngôn ngữ.
              </p>
            </div>
          )}
        </section>
      )}

      {activeTab === 'flashcard' && (
        <section className="kanji-section">
          <h2 className="kanji-section-title">Flashcard Kanji – Minna Bài 13–15</h2>
          <p className="kanji-section-desc">
            Xem thẻ xếp chồng, lật thẻ để xem chữ & nghĩa. Hoặc chơi game: chọn đúng chữ theo nghĩa.
          </p>
          <div className="flashcard-mode-toggle">
            <button
              type="button"
              className={flashcardMode === 'flashcard' ? 'active' : ''}
              onClick={() => { setFlashcardMode('flashcard'); setGameAnswered(null); }}
            >
              Xem thẻ
            </button>
            <button
              type="button"
              className={flashcardMode === 'game' ? 'active' : ''}
              onClick={startFlashcardGame}
            >
              Game chọn chữ
            </button>
          </div>

          {flashcardMode === 'flashcard' && flashcardItem && (
            <>
              <div className="flashcard-stack-wrap">
                {[2, 1, 0].map((offset) => {
                  const idx = (flashcardIndex + offset) % totalFlash;
                  const item = KANJI_MINNA_13_15[idx];
                  if (!item) return null;
                  const isFront = offset === 0;
                  const flipped = isFront && flashcardFlipped;
                  return (
                    <div
                      key={`${idx}-${offset}`}
                      className={`flashcard-stack-card ${offset === 0 ? 'stack-front' : offset === 1 ? 'stack-back' : 'stack-back-2'}`}
                      style={{ top: offset * 8 }}
                      onClick={() => isFront && setFlashcardFlipped((f) => !f)}
                      role={isFront ? 'button' : undefined}
                      tabIndex={isFront ? 0 : undefined}
                      onKeyDown={isFront ? (e) => e.key === 'Enter' && setFlashcardFlipped((f) => !f) : undefined}
                    >
                      <div className={'flashcard-inner' + (flipped ? ' flipped' : '')} style={{ height: '100%', width: '100%' }}>
                        <div className="flashcard-front" style={{ position: 'absolute', inset: 0 }}>
                          <div className="flashcard-radicals">
                            {item.radicals.map((r, i) => (
                              <span key={i} className="jp flashcard-radical-char">{r}</span>
                            ))}
                          </div>
                          <p className="flashcard-hint">Bấm để lật xem chữ & nghĩa</p>
                        </div>
                        <div className="flashcard-back" style={{ position: 'absolute', inset: 0 }}>
                          <span className="jp flashcard-kanji">{item.kanji}</span>
                          <span className="flashcard-meaning">{item.meaningVi}</span>
                          {(item.onyomi || item.kunyomi) && (
                            <span className="flashcard-readings">{item.onyomi} {item.kunyomi}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flashcard-nav">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => { setFlashcardFlipped(false); setFlashcardIndex((i) => Math.max(0, i - 1)); }}
                >
                  ← Trước
                </button>
                <span className="flashcard-counter">{flashcardIndex + 1} / {totalFlash}</span>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => { setFlashcardFlipped(false); setFlashcardIndex((i) => i + 1); }}
                >
                  Sau →
                </button>
              </div>
            </>
          )}

          {flashcardMode === 'game' && flashcardItem && (
            <>
              <p className="kanji-game-question">Chữ nào có nghĩa: &quot;{flashcardItem.meaningVi}&quot;?</p>
              <div className="kanji-game-choices">
                {gameChoices.map((kanji) => (
                  <button
                    key={kanji}
                    type="button"
                    className={`kanji-game-choice ${
                      gameAnswered !== null
                        ? kanji === flashcardItem.kanji
                          ? 'correct'
                          : kanji === gameAnswered
                            ? 'wrong'
                            : 'disabled'
                        : ''
                    }`}
                    onClick={() => handleGameAnswer(kanji)}
                    disabled={gameAnswered !== null}
                  >
                    {kanji}
                  </button>
                ))}
              </div>
              {gameAnswered !== null && (
                <>
                  <p className={`kanji-game-result ${gameAnswered === flashcardItem.kanji ? 'correct' : 'wrong'}`}>
                    {gameAnswered === flashcardItem.kanji ? '✓ Đúng!' : '✗ Sai. Đáp án: ' + flashcardItem.kanji}
                  </p>
                  <p className="kanji-game-score">Điểm: {gameScore.correct}/{gameScore.total}</p>
                  <button type="button" className="primary-button" onClick={nextGameQuestion}>
                    Tiếp →
                  </button>
                </>
              )}
            </>
          )}
        </section>
      )}

      {activeTab === 'canvas' && (
        <section className="kanji-section">
          <h2 className="kanji-section-title">Tập viết (Canvas)</h2>
          <p className="kanji-section-desc">
            Tập viết rồi gửi AI chấm nét chữ. Hoặc chơi game: xem nghĩa tiếng Việt, vẽ đúng bộ thủ bằng tiếng Nhật.
          </p>
          <div className="flashcard-mode-toggle">
            <button
              type="button"
              className={canvasMode === 'practice' ? 'active' : ''}
              onClick={() => { setCanvasMode('practice'); setDrawGameRadical(null); setDrawGradeResult(null); setDrawGradeError(null); }}
            >
              Tập viết + Chấm điểm
            </button>
            <button
              type="button"
              className={canvasMode === 'game' ? 'active' : ''}
              onClick={() => { setCanvasMode('game'); startDrawGame(); }}
            >
              Game vẽ bộ thủ
            </button>
          </div>

          {canvasMode === 'practice' && (
            <>
              <select
                className="kanji-select"
                value={selectedKanji}
                onChange={(e) => setSelectedKanji(e.target.value)}
              >
                {KANJI_MINNA_13_15.map((k) => (
                  <option key={k.kanji} value={k.kanji}>{k.kanji} – {k.meaningVi}</option>
                ))}
              </select>
              <div className="canvas-reference jp">{selectedKanji}</div>
              <div className="canvas-wrap">
                <canvas
                  ref={canvasRef}
                  className="kanji-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={moveDraw}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={startDraw}
                  onTouchMove={moveDraw}
                  onTouchEnd={endDraw}
                  style={{ width: '100%', height: 280, touchAction: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                <button type="button" className="secondary-button" onClick={clearCanvas}>Xóa nét</button>
                <button type="button" className="primary-button" onClick={submitDrawing} disabled={drawGradeLoading}>
                  {drawGradeLoading ? 'Đang chấm...' : 'Chấm điểm (AI)'}
                </button>
              </div>
            </>
          )}

          {canvasMode === 'game' && (
            <>
              {drawGameRadical ? (
                <p className="draw-game-prompt">
                  Bộ thủ có nghĩa &quot;{drawGameRadical.meaningVi}&quot; — vẽ chữ đó vào ô dưới (bằng tiếng Nhật/Hán)
                </p>
              ) : (
                <p className="draw-game-prompt">Bấm &quot;Bắt đầu&quot; để nhận câu hỏi bộ thủ.</p>
              )}
              <div className="canvas-wrap">
                <canvas
                  ref={canvasRef}
                  className="kanji-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={moveDraw}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={startDraw}
                  onTouchMove={moveDraw}
                  onTouchEnd={endDraw}
                  style={{ width: '100%', height: 280, touchAction: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                <button type="button" className="secondary-button" onClick={clearCanvas}>Xóa nét</button>
                <button type="button" className="secondary-button" onClick={startDrawGame}>{drawGameRadical ? 'Câu khác' : 'Bắt đầu'}</button>
                <button type="button" className="primary-button" onClick={submitDrawing} disabled={drawGradeLoading || !drawGameRadical}>
                  {drawGradeLoading ? 'Đang chấm...' : 'Nộp bài (AI chấm)'}
                </button>
              </div>
            </>
          )}

          {drawGradeLoading && <p className="canvas-grade-loading">Đang chấm nét chữ...</p>}
          {drawGradeError && <p className="canvas-grade-error">{drawGradeError}</p>}
          {drawGradeResult && (
            <div className="canvas-grade-result">
              <p className="score">Điểm: {drawGradeResult.score}/10</p>
              <p className="feedback">{drawGradeResult.feedback}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
