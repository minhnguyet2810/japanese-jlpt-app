'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Vui lòng nhập email đăng ký.');
      return;
    }
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: err } = await supabase.auth.resetPasswordForEmail(trimmed, {
        redirectTo: `${window.location.origin}/update-password`,
      });
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      setSuccess('Đã gửi link đặt lại mật khẩu đến email của bạn. Kiểm tra hộp thư (và thư mục spam), bấm link trong email để đặt mật khẩu mới.');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Lỗi kết nối. Thử lại sau.');
    }
    setLoading(false);
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Quên mật khẩu</h1>
        <p className="auth-desc">
          Nhập email đăng ký. Chúng tôi sẽ gửi link đặt lại mật khẩu (kiểm tra cả thư mục spam).
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem', fontSize: '0.9rem', color: '#374151' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="auth-input"
              autoComplete="email"
              disabled={loading}
            />
          </div>
          {error && <p style={{ color: '#b91c1c', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
          {success && <p style={{ color: '#166534', fontSize: '0.875rem', margin: 0 }}>{success}</p>}
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Đang gửi...' : 'Gửi link đặt lại mật khẩu'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
          <Link href="/login" style={{ color: '#0d9488', fontWeight: 600 }}>← Quay lại đăng nhập</Link>
        </p>
        <p style={{ marginTop: '0.75rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Về trang chủ</Link>
        </p>
      </div>
    </main>
  );
}
