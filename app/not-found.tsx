import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Không tìm thấy trang</h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        Trang bạn truy cập không tồn tại hoặc đã bị đổi.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.6rem 1.25rem',
          background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: 8,
          textDecoration: 'none',
        }}
      >
        Về trang chủ
      </Link>
    </main>
  );
}
