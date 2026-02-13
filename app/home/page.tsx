'use client';

import Link from 'next/link';
import { LevelSelector } from '@/components/LevelSelector';

export default function HomeGatewayPage() {
  return (
    <main className="gateway-page">
      <div className="gateway-inner">
        <Link href="/" className="gateway-back">
          <span aria-hidden>←</span> Xin chào
        </Link>
        <h1 className="gateway-title">Ứng dụng học tiếng Nhật JLPT</h1>
        <p className="gateway-desc">
          Học từ vựng, ngữ pháp N5 và luyện tập theo bài. Đăng nhập để lưu tiến độ và mở khóa đầy đủ.
        </p>

        <div className="gateway-cards">
          <div className="gateway-card gateway-card-free">
            <h2>Gói miễn phí</h2>
            <p>Được học <strong>13 bài đầu N5</strong> (Bài 0 → Bài 12).</p>
            <p className="gateway-note">Đăng nhập để lưu tiến độ.</p>
          </div>
          <div className="gateway-card gateway-card-vip">
            <h2>Gói VIP</h2>
            <p>Học <strong>tất cả các bài</strong> N5 (và mở rộng N4, N3, N2).</p>
            <p className="gateway-note">Mua gói VIP để mở khóa toàn bộ nội dung. Sau khi mua VIP, chọn cấp độ N5 → N2 để học.</p>
          </div>
        </div>

        <section style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
          <LevelSelector variant="bar" title="Chọn cấp độ để học (sau khi VIP)" showDescription />
        </section>

        <div className="gateway-actions">
          <Link href="/login" className="gateway-btn gateway-btn-primary">
            Đăng nhập
          </Link>
          <Link href="/signup" className="gateway-btn gateway-btn-secondary">
            Đăng ký
          </Link>
          <Link href="/lesson0" className="gateway-btn gateway-btn-outline">
            Vào học (Bài 0–12 miễn phí)
          </Link>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#166534' }}>Mock Test N5</h3>
          <p style={{ fontSize: '0.9rem', color: '#15803d', marginBottom: '0.5rem' }}>
            Làm đề thi thử theo nhóm bài:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Link href="/n5-test" className="gateway-btn gateway-btn-outline" style={{ flex: '1 1 auto', minWidth: 120 }}>
              Mock 1-14
            </Link>
            <Link href="/n5-advanced-test" className="gateway-btn gateway-btn-outline" style={{ flex: '1 1 auto', minWidth: 120 }}>
              Mock 15-20
            </Link>
            <Link href="/n5-test-21-25" className="gateway-btn gateway-btn-outline" style={{ flex: '1 1 auto', minWidth: 120, borderColor: '#0d9488', color: '#0f766e' }}>
              Mock 21-25 (đề tốt nghiệp)
            </Link>
          </div>
        </div>

        <p className="gateway-footer">
          Đã có tài khoản? Sau khi đăng nhập, vào <Link href="/dashboard">Dashboard</Link> để xem tiến độ.
        </p>
      </div>
    </main>
  );
}
