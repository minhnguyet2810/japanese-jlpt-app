'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password) {
      setError('Vui lòng nhập email và mật khẩu.');
      return;
    }
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: err } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      router.push(next);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Lỗi kết nối. Kiểm tra mạng hoặc cấu hình Supabase.');
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: err } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
        },
      });
      if (err) {
        setError(err.message);
      }
      // OAuth mở tab mới hoặc redirect, không cần router.push
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Lỗi kết nối. Kiểm tra mạng hoặc cấu hình Supabase.');
    }
    setLoading(false);
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Đăng nhập</h1>
        <p className="auth-desc">Đăng nhập để học bài và lưu tiến độ</p>

        <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
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
          <div>
            <label htmlFor="password" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem', fontSize: '0.9rem', color: '#374151' }}>
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="auth-input"
              autoComplete="current-password"
              disabled={loading}
            />
            <p style={{ marginTop: '0.4rem', marginBottom: 0 }}>
              <Link href="/forgot-password" style={{ fontSize: '0.875rem', color: '#0d9488' }}>Quên mật khẩu?</Link>
            </p>
          </div>
          {error && <p style={{ color: '#b91c1c', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>

        <div style={{ margin: '1.35rem 0', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>hoặc</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="auth-btn auth-btn-google"
          disabled={loading}
        >
          Đăng nhập bằng Google
        </button>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center' }}>
          Chưa có tài khoản? <Link href={`/signup?next=${encodeURIComponent(next)}`} style={{ color: '#0d9488', fontWeight: 600 }}>Đăng ký</Link>
        </p>
        <p style={{ marginTop: '0.75rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#94a3b8', fontSize: '0.875rem' }}>← Về trang chủ</Link>
        </p>
      </div>
    </main>
  );
}
