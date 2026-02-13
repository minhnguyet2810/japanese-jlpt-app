'use client';

import { useState } from 'react';

const LEVELS = ['N5', 'N4', 'N3', 'N2'] as const;

export default function AdminSecretPage() {
  const [level, setLevel] = useState<string>('N5');
  const [lessonNumber, setLessonNumber] = useState<string>('13');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [grammarSummary, setGrammarSummary] = useState('');
  const [vocab, setVocab] = useState('');
  const [grammar, setGrammar] = useState('');
  const [examples, setExamples] = useState('');
  const [adminSecret, setAdminSecret] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmStatus, setConfirmStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [confirmMessage, setConfirmMessage] = useState('');

  const handlePublish = async () => {
    if (!adminSecret.trim()) {
      setMessage('Nhập Admin Secret');
      setStatus('error');
      return;
    }
    const num = parseInt(lessonNumber, 10);
    if (Number.isNaN(num) || num < 0) {
      setMessage('Số thứ tự bài học phải là số >= 0');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/admin/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret.trim(),
        },
        body: JSON.stringify({
          level,
          lessonNumber: num,
          title: title.trim() || `Bài ${num}`,
          description: description.trim() || '',
          grammarSummary: grammarSummary.trim() || '',
          vocab: vocab.trim() || '[]',
          grammar: grammar.trim() || '[]',
          examples: examples.trim() || '[]',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(data.error || `Lỗi ${res.status}`);
        setStatus('error');
        return;
      }

      setMessage(`Đã publish: ${data.lesson?.slug ?? 'OK'}`);
      setStatus('success');
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Lỗi kết nối');
      setStatus('error');
    }
  };

  const handleConfirmPremium = async () => {
    if (!adminSecret.trim()) {
      setConfirmMessage('Nhập Admin Secret ở trên');
      setConfirmStatus('error');
      return;
    }
    const email = confirmEmail.trim();
    if (!email) {
      setConfirmMessage('Nhập email user cần xác nhận đã đóng tiền');
      setConfirmStatus('error');
      return;
    }
    setConfirmStatus('loading');
    setConfirmMessage('');
    try {
      const res = await fetch('/api/admin/confirm-premium', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret.trim(),
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setConfirmMessage(data.error || `Lỗi ${res.status}`);
        setConfirmStatus('error');
        return;
      }
      setConfirmMessage(data.message || 'Đã xác nhận VIP.');
      setConfirmStatus('success');
      setConfirmEmail('');
    } catch (e) {
      setConfirmMessage(e instanceof Error ? e.message : 'Lỗi kết nối');
      setConfirmStatus('error');
    }
  };

  return (
    <main className="admin-cms">
      <div className="admin-cms-inner">
        <h1>Admin CMS — Publish bài học</h1>
        <p className="admin-hint">Chọn cấp độ, số bài, dán nội dung (JSON hoặc Markdown). Publish đẩy lên bảng <code>lessons</code> Supabase.</p>

        <div className="admin-form">
          <div className="admin-row">
            <label>Cấp độ</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              {LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className="admin-row">
            <label>Số thứ tự bài (Lesson Number)</label>
            <input
              type="number"
              min={0}
              value={lessonNumber}
              onChange={(e) => setLessonNumber(e.target.value)}
              placeholder="13"
            />
          </div>

          <div className="admin-row">
            <label>Tiêu đề bài</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Bài 13: ..."
            />
          </div>

          <div className="admin-row">
            <label>Mô tả ngắn</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Mô tả bài học"
            />
          </div>

          <div className="admin-row">
            <label>Tóm tắt ngữ pháp</label>
            <textarea
              value={grammarSummary}
              onChange={(e) => setGrammarSummary(e.target.value)}
              rows={2}
              placeholder="Mẫu câu chính..."
            />
          </div>

          <div className="admin-row">
            <label>Từ vựng (JSON array)</label>
            <textarea
              value={vocab}
              onChange={(e) => setVocab(e.target.value)}
              rows={6}
              placeholder='[{"japanese":"...","kana":"...","romaji":"...","vietnamese":"...","category":"noun"}]'
            />
          </div>

          <div className="admin-row">
            <label>Ngữ pháp (JSON array)</label>
            <textarea
              value={grammar}
              onChange={(e) => setGrammar(e.target.value)}
              rows={5}
              placeholder='[{"title":"...","body":"...","examples":["..."]}]'
            />
          </div>

          <div className="admin-row">
            <label>Ví dụ / Câu mẫu (JSON array)</label>
            <textarea
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              rows={5}
              placeholder='[{"japanese":"...","romaji":"...","vietnamese":"..."}]'
            />
          </div>

          <div className="admin-row">
            <label>Admin Secret</label>
            <input
              type="password"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              placeholder="ADMIN_SECRET từ .env.local"
            />
          </div>

          <div className="admin-actions">
            <button
              type="button"
              className="admin-publish"
              onClick={handlePublish}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Đang đẩy...' : 'Publish'}
            </button>
          </div>

          {message && (
            <div className={`admin-feedback ${status === 'error' ? 'error' : 'success'}`}>
              {message}
            </div>
          )}
        </div>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Xác nhận đã đóng tiền (VIP)</h2>
        <p className="admin-hint" style={{ marginBottom: '1rem' }}>
          Sau khi user chuyển khoản, nhập đúng email tài khoản của họ và bấm Xác nhận. User đó sẽ được học bài 13 trở đi và làm Mock test.
        </p>
        <div className="admin-form">
          <div className="admin-row">
            <label>Email user đã đóng tiền</label>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="user@example.com"
            />
          </div>
          <div className="admin-actions">
            <button
              type="button"
              className="admin-publish"
              onClick={handleConfirmPremium}
              disabled={confirmStatus === 'loading'}
            >
              {confirmStatus === 'loading' ? 'Đang xử lý...' : 'Xác nhận VIP'}
            </button>
          </div>
          {confirmMessage && (
            <div className={`admin-feedback ${confirmStatus === 'error' ? 'error' : 'success'}`}>
              {confirmMessage}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
