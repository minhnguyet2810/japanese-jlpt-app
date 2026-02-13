'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUserState } from '../store/useUserState';

type Word = { japanese?: string; kana?: string; romaji?: string; vietnamese?: string; category?: string };
type GrammarPoint = { title?: string; body?: string; examples?: string[] };
type Sentence = { japanese?: string; romaji?: string; vietnamese?: string };

type LessonData = {
  slug: string;
  title: string;
  description: string | null;
  grammar_summary: string | null;
  content: {
    words?: Word[];
    sentences?: Sentence[];
    grammarPoints?: GrammarPoint[];
    dialogue?: unknown[];
  };
};

interface LessonFromDbProps {
  slug: string;
}

import { speakJapaneseNow } from '@/lib/speakJapanese';

export function LessonFromDb({ slug }: LessonFromDbProps) {
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/lessons/${encodeURIComponent(slug)}`, { credentials: 'include' })
      .then((res) => {
        if (res.status === 403) {
          setLocked(true);
          return null;
        }
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (!cancelled && data) setLesson(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [slug]);

  if (loading) {
    return (
      <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Đang tải...</p>
      </main>
    );
  }

  if (locked) {
    return (
      <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
          <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</p>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Nội dung dành cho VIP</h2>
          <p style={{ color: '#6b7280', marginBottom: '1.25rem' }}>
            Nâng cấp tài khoản để mở khóa bài này và toàn bộ bài N5–N2.
          </p>
          <button
            type="button"
            onClick={() => setOpenVipModal(true)}
            className="vip-cta"
            style={{ maxWidth: 280 }}
          >
            Nâng cấp VIP
          </button>
        </div>
      </main>
    );
  }

  if (!lesson) {
    return (
      <main className="lesson-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Không tìm thấy bài học.</p>
        <Link href="/dashboard" style={{ color: '#166534', marginTop: '1rem', display: 'inline-block' }}>
          ← Về Dashboard
        </Link>
      </main>
    );
  }

  const words = lesson.content?.words ?? [];
  const grammarPoints = lesson.content?.grammarPoints ?? [];
  const sentences = lesson.content?.sentences ?? [];
  const label = lesson.slug.replace('lesson', 'Bài ');

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">日本語</span>
          <Link href="/dashboard" style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600 }}>
            ← Dashboard
          </Link>
        </div>
      </header>
      <main className="lesson-page" style={{ padding: '1.5rem 2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{lesson.title}</h1>
        {lesson.description && (
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{lesson.description}</p>
        )}
        {lesson.grammar_summary && (
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tóm tắt ngữ pháp</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{lesson.grammar_summary}</p>
          </section>
        )}
        {words.length > 0 && (
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Từ vựng</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {words.slice(0, 100).map((w, i) => (
                <li key={i} style={{ padding: '0.35rem 0', borderBottom: '1px solid #f3f4f6' }}>
                  <button
                    type="button"
                    onClick={() => speakJapaneseNow(w.kana || w.japanese || '')}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span className="jp" style={{ fontWeight: 600 }}>
                      {w.japanese ?? w.kana ?? '—'}
                    </span>
                    {w.romaji && (
                      <span style={{ color: '#6b7280' }}>({w.romaji})</span>
                    )}
                    <span
                      aria-hidden
                      style={{
                        fontSize: '0.85rem',
                        color: '#0f766e',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '999px',
                        background: '#ecfdf5',
                      }}
                    >
                      🔊
                    </span>
                  </button>
                  <span>{' — '}{w.vietnamese ?? ''}</span>
                </li>
              ))}
            </ul>
            {words.length > 100 && <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>... và {words.length - 100} từ khác</p>}
          </section>
        )}
        {grammarPoints.length > 0 && (
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ngữ pháp</h2>
            {grammarPoints.map((g, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem' }}>{g.title ?? `Mẫu ${i + 1}`}</h3>
                <p style={{ whiteSpace: 'pre-wrap', margin: '0.25rem 0' }}>{g.body ?? ''}</p>
                {Array.isArray(g.examples) && g.examples.length > 0 && (
                  <ul style={{ margin: '0.25rem 0', paddingLeft: '1.25rem' }}>
                    {g.examples.map((ex, j) => (
                      <li key={j} className="jp">{ex}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
        {sentences.length > 0 && (
          <section>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ví dụ / Câu mẫu</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sentences.slice(0, 50).map((s, i) => (
                <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div style={{ flex: 1 }}>
                      <span className="jp">{s.japanese ?? '—'}</span>
                      {s.romaji && (
                        <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                          {s.romaji}
                        </div>
                      )}
                      <div>{s.vietnamese ?? ''}</div>
                    </div>
                    {s.japanese && (
                      <button
                        type="button"
                        onClick={() => speakJapaneseNow(s.japanese!)}
                        style={{
                          alignSelf: 'flex-start',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '999px',
                          border: '1px solid #bae6fd',
                          background: '#eff6ff',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                        }}
                      >
                        🔊 Nghe
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {sentences.length > 50 && <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>... và {sentences.length - 50} câu khác</p>}
          </section>
        )}
      </main>
    </>
  );
}
