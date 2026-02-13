'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email.trim() || !password || password.length < 6) {
      setError('Vui lòng nhập email và mật khẩu (tối thiểu 6 ký tự).');
      return;
    }
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: err } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
      });
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      setSuccess('Kiểm tra email để xác nhận tài khoản (hoặc đăng nhập ngay nếu đã xác thực).');
      router.refresh();
    } catch {
      setError('Lỗi kết nối.');
    }
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
        },
      });
    } catch {
      setError('Lỗi kết nối.');
    }
    setLoading(false);
  };

  return (
    <main className="auth-page" style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Đăng ký</h1>
      <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Tạo tài khoản để lưu tiến độ và học đầy đủ bài.
      </p>

      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem' }}>
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
          <label htmlFor="password" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem' }}>
            Mật khẩu (tối thiểu 6 ký tự)
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="auth-input"
            autoComplete="new-password"
            disabled={loading}
          />
        </div>
        {error && <p style={{ color: '#b91c1c', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
        {success && <p style={{ color: '#166534', fontSize: '0.875rem', margin: 0 }}>{success}</p>}
        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'Đăng ký'}
        </button>
      </form>

      <div style={{ margin: '1.25rem 0', textAlign: 'center', color: '#9ca3af' }}>hoặc</div>

      <button
        type="button"
        onClick={handleGoogleSignup}
        className="auth-btn auth-btn-google"
        disabled={loading}
      >
        Đăng ký bằng Google
      </button>

      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
        Đã có tài khoản? <Link href={`/login?next=${encodeURIComponent(next)}`} style={{ color: '#166534', fontWeight: 600 }}>Đăng nhập</Link>
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        <Link href="/" style={{ color: '#6b7280', fontSize: '0.875rem' }}>← Về trang chủ</Link>
      </p>
    </main>
  );
}
