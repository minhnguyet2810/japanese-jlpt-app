'use client';

import { useState } from 'react';

// Định nghĩa lại type phản hồi từ API chấm viết để tránh phụ thuộc trực tiếp vào route server
export interface GradeWritingResult {
  score: number;
  feedback: string;
  suggestions?: string[];
}

export interface WritingChallengeProps {
  title: string;
  sectionCaption: string;
  tips: React.ReactNode;
  placeholder?: string;
  rows?: number;
  lessonId: string;
  grammarContext?: string;
}

export default function WritingChallenge({
  title,
  sectionCaption,
  tips,
  placeholder = '',
  rows = 4,
  lessonId,
  grammarContext,
}: WritingChallengeProps) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GradeWritingResult | null>(null);

  const handleGrade = async () => {
    const trimmed = text.trim();
    if (!trimmed) {
      setError('Vui lòng viết ít nhất một câu trước khi gửi chấm.');
      return;
    }
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch('/api/grade-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: trimmed,
          lessonId,
          context: grammarContext,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || `Lỗi ${res.status}`);
        return;
      }
      setResult(data as GradeWritingResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Kết nối thất bại. Thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <p className="section-caption">{sectionCaption}</p>
      </div>
      <div className="card-body">
        {tips}
        <textarea
          className="cloze-input"
          rows={rows}
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <div className="writing-grade-actions">
          <button
            type="button"
            className="primary-button"
            onClick={handleGrade}
            disabled={loading}
          >
            {loading ? 'Đang chấm…' : 'Chấm bài bằng AI'}
          </button>
        </div>
        {error && (
          <div className="writing-feedback writing-error" role="alert">
            {error}
          </div>
        )}
        {result && (
          <div className="writing-feedback writing-result">
            <div className="writing-score">
              Điểm: <strong>{result.score}/10</strong>
            </div>
            <p className="writing-overview">{result.feedback}</p>
            {result.suggestions && result.suggestions.length > 0 && (
              <div className="writing-suggestions">
                <h4>Gợi ý sửa</h4>
                <ul>
                  {result.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
