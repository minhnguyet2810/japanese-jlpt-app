import { useEffect, useRef, useState } from 'react';
import type { LessonSentence } from '../data/lessons/lesson1';
import { MicroPermissionPrompt } from './MicroPermissionPrompt';

export interface SpeakingGameProps {
  target: LessonSentence;
  /** Optional: show progress "Hoàn thành X/Y" in header */
  progressCompleted?: number;
  progressTotal?: number;
  /** Called when user finishes one speaking attempt (score is set) */
  onAttemptComplete?: () => void;
}

type Status = 'idle' | 'listening' | 'processing' | 'done' | 'unsupported' | 'error';

function normalizeText(text: string): string {
  return text.replace(/[。、.,!?！？\s]/g, '').toLowerCase();
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function calcSimilarityPercent(expected: string, actual: string): number {
  const normExpected = normalizeText(expected);
  const normActual = normalizeText(actual);
  if (!normExpected || !normActual) return 0;
  const dist = levenshtein(normExpected, normActual);
  const maxLen = Math.max(normExpected.length, normActual.length);
  const similarity = 1 - dist / maxLen;
  return Math.max(0, Math.min(1, similarity)) * 100;
}

export function SpeakingGame({
  target,
  progressCompleted,
  progressTotal,
  onAttemptComplete,
}: SpeakingGameProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [recognized, setRecognized] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any | null>(null);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setSupported(false);
      setStatus('unsupported');
    } else {
      setSupported(true);
    }
  }, []);

  const handleStart = () => {
    if (!supported || typeof window === 'undefined') {
      setStatus('unsupported');
      return;
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setStatus('unsupported');
      return;
    }

    setError(null);
    setRecognized('');
    setScore(null);

    const recognition = new SR();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setStatus('listening');
    };

    recognition.onerror = (event: any) => {
      setStatus('error');
      setError(event.error || 'Không ghi âm được, thử lại sau.');
    };

    recognition.onresult = (event: any) => {
      setStatus('processing');
      const transcript = event.results[0][0].transcript as string;
      setRecognized(transcript);
      const pct = calcSimilarityPercent(target.japanese, transcript);
      setScore(Math.round(pct));
      setStatus('done');
      onAttemptComplete?.();
    };

    recognition.onend = () => {
      if (status === 'listening') {
        setStatus('idle');
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleStop = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setStatus('idle');
  };

  const scoreLabel =
    score == null
      ? ''
      : score >= 90
      ? 'Phát âm rất tốt! 🌟'
      : score >= 70
      ? 'Khá tốt, chỉ cần mượt hơn một chút.'
      : 'Cần luyện thêm, nói lại chậm và rõ hơn nhé.';

  return (
    <div className="card speaking-card">
      <div className="card-header">
        <h2>Luyện nói (Speaking)</h2>
        <p className="section-caption">
          Nhấn 🎤, đọc câu tiếng Nhật theo mẫu bên dưới. Hệ thống sẽ chấm điểm % độ giống.
        </p>
        {progressTotal != null && progressTotal > 0 && (
          <p className="progress-badge">
            Hoàn thành {progressCompleted ?? 0}/{progressTotal}
          </p>
        )}
      </div>

      <div className="card-body speaking-body">
        <MicroPermissionPrompt description="Chấm điểm nói cần quyền micro. Bấm &quot;Bật micro&quot; rồi chọn Cho phép khi trình duyệt hỏi." />
        <div className="speaking-target">
          <div className="label">Câu mục tiêu</div>
          <div className="jp speaking-jp">{target.japanese}</div>
          <div className="speaking-romaji">{target.romaji}</div>
          <div className="speaking-vi">{target.vietnamese}</div>
        </div>

        {!supported && (
          <p className="speaking-warning">
            Trình duyệt hiện tại không hỗ trợ Web Speech API cho tiếng Nhật. Bạn có thể dùng
            Chrome trên máy tính để thử tính năng này.
          </p>
        )}

        <div className="speaking-controls">
          {status === 'listening' ? (
            <button
              type="button"
              className="primary-button speaking-mic speaking-mic-active"
              onClick={handleStop}
            >
              ⏹ Dừng ghi
            </button>
          ) : (
            <button
              type="button"
              className="primary-button speaking-mic"
              onClick={handleStart}
              disabled={!supported}
            >
              🎤 Bắt đầu nói
            </button>
          )}
          <div className="speaking-status">
            {status === 'idle' && 'Sẵn sàng. Nhấn 🎤 để bắt đầu.'}
            {status === 'listening' && 'Đang nghe... hãy nói rõ ràng câu trên.'}
            {status === 'processing' && 'Đang chấm điểm...'}
            {status === 'done' && score != null && `Kết quả: ${score}% - ${scoreLabel}`}
            {status === 'unsupported' &&
              'Trình duyệt không hỗ trợ nhận dạng giọng nói tiếng Nhật (SpeechRecognition).'}
            {status === 'error' && (error || 'Có lỗi xảy ra khi ghi âm.')}
          </div>
        </div>

        {recognized && (
          <div className="speaking-result">
            <div className="label">Hệ thống nghe được</div>
            <div className="jp">{recognized}</div>
          </div>
        )}
      </div>
    </div>
  );
}

