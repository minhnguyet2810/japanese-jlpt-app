'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { LessonNav } from '@/components/LessonNav';
import { useUserState } from '@/store/useUserState';
import { lesson15, lesson15GrammarQuizItems } from '@/data/lessons/lesson15';
import { lesson16, lesson16GrammarQuizItems } from '@/data/lessons/lesson16';
import { lesson17, lesson17GrammarQuizItems } from '@/data/lessons/lesson17';
import { lesson18, lesson18GrammarQuizItems } from '@/data/lessons/lesson18';
import { lesson19, lesson19GrammarQuizItems } from '@/data/lessons/lesson19';
import { lesson20, lesson20GrammarQuizItems } from '@/data/lessons/lesson20';
import type { StaticLessonData } from '@/data/lessons/lessonTypes';

type ClusterId = 'cluster15_17' | 'cluster18_20';

type McqQuestion = {
  id: string;
  promptVi: string;
  options: string[];
  correctIndex: number;
  explanationVi?: string;
};

type ListeningQuestion = {
  id: string;
  japanese: string;
  romaji: string;
  options: string[];
  correctIndex: number;
  answerVi: string;
  explanationVi: string;
};

type SpeakingPrompt = {
  id: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
  focus: string;
};

interface WritingGradeResult {
  score: number;
  feedback: string;
  suggestions: string[];
}

import { speakJapaneseNow } from '@/lib/speakJapanese';
import { MicroPermissionPrompt } from '@/components/MicroPermissionPrompt';

function normalizeJapanese(s: string): string {
  return s.replace(/[。、.,!?！？\s]/g, '').trim().toLowerCase();
}

function similarityPercent(expected: string, actual: string): number {
  const e = normalizeJapanese(expected);
  const a = normalizeJapanese(actual);
  if (!e || !a) return 0;

  const m = e.length;
  const n = a.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = e[i - 1] === a[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  const dist = dp[m][n];
  const maxLen = Math.max(m, n);
  return Math.round((1 - dist / maxLen) * 100);
}

function buildListeningFromLessons(lessons: StaticLessonData[], prefix: string): ListeningQuestion[] {
  const picked = lessons.flatMap((l, idx) =>
    l.sentences.slice(0, 2).map((s, sentenceIdx) => ({
      id: `${prefix}-${idx}-${sentenceIdx}`,
      japanese: s.japanese,
      romaji: s.romaji,
      vi: s.vietnamese,
    }))
  );

  return picked.map((item, index) => {
    const distractors = picked
      .filter((x) => x.id !== item.id)
      .map((x) => x.vi)
      .slice(index % 2, (index % 2) + 2);
    while (distractors.length < 2) {
      distractors.push('Nội dung không đúng với câu nghe.');
    }
    return {
      id: item.id,
      japanese: item.japanese,
      romaji: item.romaji,
      options: [item.vi, distractors[0], distractors[1]],
      correctIndex: 0,
      answerVi: item.vi,
      explanationVi:
        'Đáp án đúng là câu có đủ chủ thể + hành động chính đúng ngữ cảnh. Nên nghe từ khóa ngữ pháp trước khi chọn.',
    };
  });
}

function commentByScore(score: number): string {
  if (score >= 90) return 'Rất tốt: phát âm và nhịp câu gần chuẩn.';
  if (score >= 75) return 'Khá tốt: đúng ý chính, cần mượt ngữ điệu hơn.';
  if (score >= 60) return 'Trung bình: đúng một phần, cần luyện âm cuối và trợ từ.';
  return 'Cần luyện thêm: nên nghe mẫu chậm rồi đọc lại từng cụm.';
}

export default function N5AdvancedClusterTestPage() {
  const isLocked = useUserState((s) => s.isLessonLockedForUser('n5-advanced-test'));
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  const [cluster, setCluster] = useState<ClusterId>('cluster15_17');

  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [listenAnswers, setListenAnswers] = useState<Record<string, number>>({});

  const [speakingRecognized, setSpeakingRecognized] = useState<Record<string, string>>({});
  const [speakingScores, setSpeakingScores] = useState<Record<string, number>>({});
  const [speakingComment, setSpeakingComment] = useState<string>('');
  const [speakingLoadingId, setSpeakingLoadingId] = useState<string | null>(null);

  const [writingText, setWritingText] = useState('');
  const [writingLoading, setWritingLoading] = useState(false);
  const [writingResult, setWritingResult] = useState<WritingGradeResult | null>(null);
  const [writingError, setWritingError] = useState<string | null>(null);

  const clusterConfig = useMemo(() => {
    if (cluster === 'cluster15_17') {
      const lessons = [lesson15, lesson16, lesson17];
      const grammarQuestions: McqQuestion[] = [
        ...lesson15GrammarQuizItems,
        ...lesson16GrammarQuizItems,
        ...lesson17GrammarQuizItems,
      ].slice(0, 12).map((q, idx) => ({
        id: `g-1517-${idx}`,
        promptVi: q.vi,
        options: [...q.options],
        correctIndex: q.correctIndex,
        explanationVi: q.explanationVi ?? 'Xem lại mẫu ngữ pháp trọng tâm của cụm 15–17.',
      }));
      return {
        label: 'Đề tổng hợp cụm 15-17',
        subtitle:
          'Tập trung Vてもいいです / Vてはいけません / Vています / Vて nối câu / Vないでください / Vなければなりません.',
        lessons,
        grammarQuestions,
        listeningQuestions: buildListeningFromLessons(lessons, 'l-1517'),
        speakingPrompts: [
          {
            id: 's-1517-1',
            japanese: 'ここで写真を撮ってもいいですか。',
            romaji: 'Koko de shashin o totte mo ii desu ka.',
            vietnamese: 'Tôi chụp ảnh ở đây được không?',
            focus: 'Xin phép với Vてもいいですか',
          },
          {
            id: 's-1517-2',
            japanese: '薬を飲まなければなりません。',
            romaji: 'Kusuri o nomanakereba narimasen.',
            vietnamese: 'Tôi phải uống thuốc.',
            focus: 'Nghĩa vụ với Vなければなりません',
          },
          {
            id: 's-1517-3',
            japanese: 'ミラーさんは銀行で働いています。',
            romaji: 'Miraa-san wa ginkou de hataraite imasu.',
            vietnamese: 'Anh Miller đang làm việc ở ngân hàng.',
            focus: 'Trạng thái/nghề nghiệp với Vています',
          },
        ] as SpeakingPrompt[],
        writingPrompt:
          'Viết đoạn 6-8 câu về nội quy lớp học và sức khỏe. Bắt buộc dùng ít nhất 1 câu xin phép, 1 câu cấm đoán, 1 câu nghĩa vụ.',
        writingContext:
          'Cụm 15-17: Vてもいいです, Vてはいけません, Vています, Vないでください, Vなければなりません, Vなくてもいいです',
      };
    }

    const lessons = [lesson18, lesson19, lesson20];
    const grammarQuestions: McqQuestion[] = [
      ...lesson18GrammarQuizItems,
      ...lesson19GrammarQuizItems,
      ...lesson20GrammarQuizItems,
    ].slice(0, 12).map((q, idx) => ({
      id: `g-1820-${idx}`,
      promptVi: q.vi,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanationVi: q.explanationVi ?? 'Xem lại mẫu ngữ pháp trọng tâm của cụm 18–20.',
    }));

    return {
      label: 'Đề tổng hợp cụm 18-20',
      subtitle:
        'Tập trung thể nguyên dạng, khả năng, kinh nghiệm, liệt kê hành động, thay đổi trạng thái và hội thoại kiểu thông thường.',
      lessons,
      grammarQuestions,
      listeningQuestions: buildListeningFromLessons(lessons, 'l-1820'),
      speakingPrompts: [
        {
          id: 's-1820-1',
          japanese: 'わたしの趣味は古い切手を集めることです。',
          romaji: 'Watashi no shumi wa furui kitte o atsumeru koto desu.',
          vietnamese: 'Sở thích của tôi là sưu tầm tem cũ.',
          focus: 'Sở thích với Vることです',
        },
        {
          id: 's-1820-2',
          japanese: '休みの日はゴルフをしたり、映画を見たりします。',
          romaji: 'Yasumi no hi wa gorufu o shitari, eiga o mitari shimasu.',
          vietnamese: 'Ngày nghỉ tôi chơi golf, xem phim v.v.',
          focus: 'Liệt kê hành động với VたりVたりします',
        },
        {
          id: 's-1820-3',
          japanese: '夏休み、国へ帰るの？',
          romaji: 'Natsuyasumi, kuni e kaeru no?',
          vietnamese: 'Nghỉ hè cậu có về nước không?',
          focus: 'Hội thoại thân mật kiểu thông thường',
        },
      ] as SpeakingPrompt[],
      writingPrompt:
        'Viết đoạn 6-8 câu về kế hoạch cuối tuần và trải nghiệm trước đây. Bắt buộc dùng ít nhất 1 câu với ことができます, 1 câu với たことがあります, 1 câu kiểu thông thường.',
      writingContext:
        'Cụm 18-20: Vることができます, 趣味はVることです, Vる前に, Vたことがあります, VたりVたりします, 普通形, 〜てる, けど',
    };
  }, [cluster]);

  const grammarScore = useMemo(() => {
    const total = clusterConfig.grammarQuestions.length;
    const correct = clusterConfig.grammarQuestions.filter((q) => mcqAnswers[q.id] === q.correctIndex).length;
    return { correct, total, percent: total ? Math.round((correct / total) * 100) : 0 };
  }, [clusterConfig, mcqAnswers]);

  const listeningScore = useMemo(() => {
    const total = clusterConfig.listeningQuestions.length;
    const correct = clusterConfig.listeningQuestions.filter((q) => listenAnswers[q.id] === q.correctIndex).length;
    return { correct, total, percent: total ? Math.round((correct / total) * 100) : 0 };
  }, [clusterConfig, listenAnswers]);

  const speakingSummary = useMemo(() => {
    const total = clusterConfig.speakingPrompts.length;
    const scores = clusterConfig.speakingPrompts.map((p) => speakingScores[p.id]).filter((x): x is number => typeof x === 'number');
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    return { attempted: scores.length, total, avg };
  }, [clusterConfig, speakingScores]);

  const overall = useMemo(() => {
    const writingPercent = writingResult ? Math.round((writingResult.score / 10) * 100) : 0;
    const ready = writingResult && speakingSummary.attempted > 0;
    if (!ready) return null;
    const total = Math.round(
      grammarScore.percent * 0.3 +
        listeningScore.percent * 0.25 +
        speakingSummary.avg * 0.25 +
        writingPercent * 0.2
    );
    return { total, writingPercent };
  }, [grammarScore.percent, listeningScore.percent, speakingSummary, writingResult]);

  const handleClusterChange = (next: ClusterId) => {
    setCluster(next);
    setMcqAnswers({});
    setListenAnswers({});
    setSpeakingRecognized({});
    setSpeakingScores({});
    setSpeakingComment('');
    setWritingText('');
    setWritingResult(null);
    setWritingError(null);
  };

  const startSpeaking = (prompt: SpeakingPrompt) => {
    if (typeof window === 'undefined') return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setSpeakingComment('Trình duyệt không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome.');
      return;
    }
    setSpeakingLoadingId(prompt.id);
    setSpeakingComment('');

    const recognition = new SR();
    recognition.lang = 'ja-JP';
    recognition.continuous = false;
    recognition.interimResults = false;
    let transcript = '';

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      transcript = e.results?.[0]?.[0]?.transcript || '';
    };
    recognition.onerror = () => {
      setSpeakingLoadingId(null);
      setSpeakingComment('Có lỗi microphone/nhận diện. Vui lòng thử lại.');
    };
    recognition.onend = () => {
      setSpeakingLoadingId(null);
      const finalText = transcript.trim();
      setSpeakingRecognized((prev) => ({ ...prev, [prompt.id]: finalText || '(không nhận được)' }));
      const score = similarityPercent(prompt.japanese, finalText);
      setSpeakingScores((prev) => ({ ...prev, [prompt.id]: score }));
      setSpeakingComment(commentByScore(score));
    };
    recognition.start();
    setTimeout(() => {
      try {
        recognition.stop();
      } catch {
        // ignore
      }
    }, 12000);
  };

  const handleGradeWriting = async () => {
    setWritingError(null);
    if (!writingText.trim()) {
      setWritingError('Bạn chưa nhập bài viết.');
      return;
    }
    setWritingLoading(true);
    try {
      const res = await fetch('/api/grade-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: writingText,
          lessonId: cluster === 'cluster15_17' ? 'CLUSTER-15-17' : 'CLUSTER-18-20',
          context: clusterConfig.writingContext,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Không thể chấm bài.');
      }
      setWritingResult({
        score: Number(data.score) || 0,
        feedback: String(data.feedback || ''),
        suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Lỗi không xác định';
      setWritingError(message);
    } finally {
      setWritingLoading(false);
    }
  };

  if (isLocked) {
    return (
      <>
        <header className="app-header">
          <div className="app-header-inner">
            <span className="app-logo">日本語</span>
            <LessonNav currentLessonId="n5-advanced-test" />
          </div>
        </header>
        <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Mock 15-20 bị khóa</h2>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
              Nâng cấp VIP để mở Mock 15-20 (cụm bài 15–17 và 18–20) với chấm điểm chi tiết theo kỹ năng.
            </p>
            <button
              type="button"
              onClick={() => setOpenVipModal(true)}
              className="vip-cta"
              style={{ maxWidth: '300px' }}
            >
              Nâng cấp VIP — 199k
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <LessonNav currentLessonId="n5-advanced-test" />
        </div>
      </header>

      <main className="lesson-page">
        <section className="lesson-hero">
          <h1 className="lesson-title">Mock 15-20 – Đề tổng hợp (Bài 15-20)</h1>
          <p className="lesson-subtitle">
            {clusterConfig.label} - Chấm điểm tự động theo từng kỹ năng: Ngữ pháp, Listening, Speaking, Writing.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/n5-test-21-25" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#0f766e', color: '#fff', borderRadius: 8, fontWeight: 600, textDecoration: 'none' }}>
              → Mock Test Bài 21–25 (đề tốt nghiệp N5)
            </Link>
          </p>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>Chọn cụm đề</h2>
            <p className="section-caption">{clusterConfig.subtitle}</p>
          </div>
          <div className="card-body practice-body">
            <div className="practice-actions">
              <button
                type="button"
                className={`secondary-button ${cluster === 'cluster15_17' ? 'primary-button' : ''}`}
                onClick={() => handleClusterChange('cluster15_17')}
              >
                Cụm 15-17
              </button>
              <button
                type="button"
                className={`secondary-button ${cluster === 'cluster18_20' ? 'primary-button' : ''}`}
                onClick={() => handleClusterChange('cluster18_20')}
              >
                Cụm 18-20
              </button>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>1) Trắc nghiệm ngữ pháp tổng hợp</h2>
            <p className="section-caption">
              Chọn đáp án cho từng câu. Hệ thống chấm tự động ngay khi bạn chọn.
            </p>
          </div>
          <div className="card-body practice-body">
            {clusterConfig.grammarQuestions.map((q, idx) => {
              const selected = mcqAnswers[q.id];
              return (
                <div key={q.id} style={{ marginBottom: '1rem' }}>
                  <p className="practice-question">
                    <strong>Câu {idx + 1}:</strong> {q.promptVi}
                  </p>
                  <div className="practice-options">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctIndex;
                      const isSelected = selected === optIdx;
                      const className =
                        'practice-option' +
                        (selected != null
                          ? isSelected && isCorrect
                            ? ' correct'
                            : isSelected && !isCorrect
                            ? ' wrong'
                            : ''
                          : '');
                      return (
                        <button
                          key={`${q.id}-${opt}`}
                          type="button"
                          className={className}
                          onClick={() => setMcqAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {selected != null && (
                    <p className="grammar-note">
                      <strong>Giải thích:</strong> {q.explanationVi}
                    </p>
                  )}
                </div>
              );
            })}
            <div className="writing-feedback writing-result">
              <p className="writing-score">
                Điểm ngữ pháp: <strong>{grammarScore.correct}/{grammarScore.total}</strong> ({grammarScore.percent}%)
              </p>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>2) Listening tổng hợp</h2>
            <p className="section-caption">Nghe câu, chọn nghĩa đúng, nhận phản hồi chi tiết.</p>
          </div>
          <div className="card-body practice-body">
            {clusterConfig.listeningQuestions.map((q, idx) => {
              const selected = listenAnswers[q.id];
              return (
                <div key={q.id} style={{ marginBottom: '1rem' }}>
                  <p className="practice-question">
                    <strong>Câu nghe {idx + 1}</strong>
                  </p>
                  <div className="practice-actions" style={{ justifyContent: 'flex-start' }}>
                    <button type="button" className="listen-button" onClick={() => speakJapaneseNow(q.japanese)}>
                      🔊 Nghe câu
                    </button>
                  </div>
                  <p className="romaji">Gợi ý đọc: {q.romaji}</p>
                  <div className="practice-options">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctIndex;
                      const isSelected = selected === optIdx;
                      const className =
                        'practice-option' +
                        (selected != null
                          ? isSelected && isCorrect
                            ? ' correct'
                            : isSelected && !isCorrect
                            ? ' wrong'
                            : ''
                          : '');
                      return (
                        <button
                          key={`${q.id}-${opt}`}
                          type="button"
                          className={className}
                          onClick={() => setListenAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {selected != null && (
                    <div className="grammar-note">
                      <strong>Đáp án:</strong> {q.answerVi}
                      <br />
                      <strong>Giải thích chi tiết:</strong> {q.explanationVi}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="writing-feedback writing-result">
              <p className="writing-score">
                Điểm listening: <strong>{listeningScore.correct}/{listeningScore.total}</strong> ({listeningScore.percent}%)
              </p>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>3) Speaking tổng hợp</h2>
            <p className="section-caption">
              Mỗi câu có điểm % tự động theo độ giống với câu mẫu, kèm nhận xét kỹ năng phát âm.
            </p>
          </div>
          <div className="card-body practice-body">
            <MicroPermissionPrompt />
            {clusterConfig.speakingPrompts.map((p, idx) => (
              <div key={p.id} style={{ marginBottom: '1rem' }}>
                <p className="practice-question">
                  <strong>Prompt {idx + 1}</strong> - {p.focus}
                </p>
                <div className="vi">
                  Nghĩa: <strong>{p.vietnamese}</strong>
                </div>
                <div className="jp">{p.japanese}</div>
                <div className="romaji">{p.romaji}</div>
                <div className="practice-actions" style={{ justifyContent: 'flex-start', marginTop: '0.5rem' }}>
                  <button type="button" className="secondary-button" onClick={() => speakJapaneseNow(p.japanese)}>
                    🔊 Nghe mẫu
                  </button>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => startSpeaking(p)}
                    disabled={speakingLoadingId === p.id}
                  >
                    {speakingLoadingId === p.id ? 'Đang nghe 12s...' : '🎤 Nhấn để nói'}
                  </button>
                </div>
                {speakingRecognized[p.id] && (
                  <div className="writing-feedback writing-result" style={{ marginTop: '0.5rem' }}>
                    <p className="writing-overview">
                      Máy nghe được: <strong>{speakingRecognized[p.id]}</strong>
                    </p>
                    <p className="writing-score">
                      Điểm speaking câu này: <strong>{speakingScores[p.id] ?? 0}%</strong>
                    </p>
                    <p className="grammar-note">{commentByScore(speakingScores[p.id] ?? 0)}</p>
                  </div>
                )}
              </div>
            ))}
            {speakingComment && <p className="grammar-note">{speakingComment}</p>}
            <div className="writing-feedback writing-result">
              <p className="writing-score">
                Điểm speaking trung bình: <strong>{speakingSummary.avg}%</strong> ({speakingSummary.attempted}/{speakingSummary.total} câu đã làm)
              </p>
            </div>
          </div>
        </section>

        <section className="card practice-card">
          <div className="card-header">
            <h2>4) Writing tổng hợp</h2>
            <p className="section-caption">
              Chấm tự động bằng AI, trả điểm và nhận xét chi tiết theo ngữ pháp của cụm bài.
            </p>
          </div>
          <div className="card-body practice-body">
            <p className="practice-question">
              <strong>Đề:</strong> {clusterConfig.writingPrompt}
            </p>
            <textarea
              className="dictation-input"
              style={{ minHeight: '140px', width: '100%', marginTop: '0.5rem' }}
              value={writingText}
              onChange={(e) => setWritingText(e.target.value)}
              placeholder="Viết bài của bạn tại đây..."
            />
            <div className="practice-actions" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="primary-button" onClick={handleGradeWriting} disabled={writingLoading}>
                {writingLoading ? 'Đang chấm...' : 'Chấm writing tự động'}
              </button>
            </div>
            {writingError && <div className="writing-feedback writing-error">{writingError}</div>}
            {writingResult && (
              <div className="writing-feedback writing-result">
                <p className="writing-score">
                  Điểm writing: <strong>{writingResult.score}/10</strong>
                </p>
                <p className="writing-overview">{writingResult.feedback}</p>
                {writingResult.suggestions.length > 0 && (
                  <ul className="grammar-list">
                    {writingResult.suggestions.map((s, i) => (
                      <li key={`${s}-${i}`}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>Tổng kết theo kỹ năng</h2>
          </div>
          <div className="card-body">
            <p className="section-caption">
              Bạn nên hoàn thành đủ speaking và writing để hệ thống tính điểm tổng chính xác.
            </p>
            <ul className="grammar-list">
              <li>
                Ngữ pháp/đọc hiểu: <strong>{grammarScore.percent}%</strong> -{' '}
                {grammarScore.percent >= 80 ? 'Nền tảng tốt.' : 'Cần ôn lại mẫu câu trọng tâm.'}
              </li>
              <li>
                Listening: <strong>{listeningScore.percent}%</strong> -{' '}
                {listeningScore.percent >= 80 ? 'Nghe bắt ý tốt.' : 'Nên nghe lại theo cụm từ khóa.'}
              </li>
              <li>
                Speaking: <strong>{speakingSummary.avg}%</strong> -{' '}
                {speakingSummary.avg >= 80 ? 'Phản xạ nói khá tốt.' : 'Cần luyện shadowing thêm.'}
              </li>
              <li>
                Writing: <strong>{writingResult ? `${writingResult.score}/10` : 'chưa chấm'}</strong> -{' '}
                {writingResult ? writingResult.feedback : 'Hãy bấm chấm writing để có nhận xét chi tiết.'}
              </li>
            </ul>
            {overall ? (
              <p className="writing-score">
                Điểm tổng hợp (auto): <strong>{overall.total}/100</strong>
              </p>
            ) : (
              <p className="grammar-note">
                Chưa đủ dữ liệu tính điểm tổng. Hãy hoàn thành speaking và writing.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

