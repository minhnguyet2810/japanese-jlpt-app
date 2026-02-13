'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const checkSession = () => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          setSessionReady(true);
          setError('');
          return;
        }
        setSessionReady(true);
        setError('Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn. Vui lòng yêu cầu gửi lại link từ trang Quên mật khẩu.');
      });
    };
    checkSession();
    const timer = setTimeout(checkSession, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Mật khẩu mới tối thiểu 6 ký tự.');
      return;
    }
    if (password !== confirm) {
      setError('Hai ô mật khẩu không trùng khớp.');
      return;
    }
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: err } = await supabase.auth.updateUser({ password });
      if (err) {
        setError(err.message);
        setLoading(false);
        return;
      }
      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Lỗi. Thử lại sau.');
    }
    setLoading(false);
  };

  if (!sessionReady) {
    return (
      <main className="auth-page" style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
        <p style={{ color: '#6b7280' }}>Đang xác thực link...</p>
      </main>
    );
  }

  if (error && !password && !confirm) {
    return (
      <main className="auth-page" style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Đặt lại mật khẩu</h1>
        <p style={{ color: '#b91c1c', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</p>
        <Link href="/forgot-password" className="auth-btn" style={{ display: 'inline-block', textAlign: 'center' }}>
          Gửi lại link qua email
        </Link>
        <p style={{ marginTop: '1.5rem' }}>
          <Link href="/login" style={{ color: '#166534' }}>← Quay lại đăng nhập</Link>
        </p>
      </main>
    );
  }

  if (success) {
    return (
      <main className="auth-page" style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Đã đặt lại mật khẩu</h1>
        <p style={{ color: '#166534', marginBottom: '1rem' }}>Mật khẩu của bạn đã được cập nhật. Đang chuyển đến trang đăng nhập...</p>
        <Link href="/login">Đăng nhập ngay</Link>
      </main>
    );
  }

  return (
    <main className="auth-page" style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Đặt lại mật khẩu</h1>
      <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Nhập mật khẩu mới (tối thiểu 6 ký tự).
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="password" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem' }}>
            Mật khẩu mới
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
            minLength={6}
          />
        </div>
        <div>
          <label htmlFor="confirm" style={{ display: 'block', fontWeight: 600, marginBottom: '0.35rem' }}>
            Xác nhận mật khẩu
          </label>
          <input
            id="confirm"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
            className="auth-input"
            autoComplete="new-password"
            disabled={loading}
            minLength={6}
          />
        </div>
        {error && <p style={{ color: '#b91c1c', fontSize: '0.875rem', margin: 0 }}>{error}</p>}
        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? 'Đang lưu...' : 'Đặt mật khẩu mới'}
        </button>
      </form>

      <p style={{ marginTop: '1.5rem' }}>
        <Link href="/login" style={{ color: '#6b7280', fontSize: '0.875rem' }}>← Quay lại đăng nhập</Link>
      </p>
    </main>
  );
}
