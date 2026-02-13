'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LessonNav } from '@/components/LessonNav';
import { JLPT_LEVELS } from '@/lib/levels';

type Me = { user: { id: string; email: string | null } | null; profile: { is_premium: boolean } | null };

export default function HomeGatewayPage() {
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { user: null, profile: null }))
      .then((data) => {
        setMe({
          user: data?.user ?? null,
          profile: data?.profile ?? null,
        });
      })
      .catch(() => setMe({ user: null, profile: null }))
      .finally(() => setLoading(false));
  }, []);

  const isLoggedIn = !!me?.user;
  const isVip = !!me?.profile?.is_premium;
  const displayName = me?.user?.email?.split('@')[0] || 'bạn';

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <Link href="/home" className="app-logo">
            日本語
          </Link>
          <LessonNav currentLessonId="lesson0" />
        </div>
      </header>

      <main className="gateway-page gateway-page--new">
        <div className="gateway-inner gateway-inner--new">
          {/* Hero */}
          <section className="gateway-hero">
            <p className="gateway-hero-greeting">Xin chào</p>
            <h1 className="gateway-hero-title">
              Ứng dụng học tiếng Nhật JLPT
            </h1>
            {!loading && isLoggedIn && (
              <p className="gateway-hero-user">
                {isVip ? (
                  <>Chào <strong>{displayName}</strong>! Bạn đã là thành viên VIP.</>
                ) : (
                  <>Chào <strong>{displayName}</strong>!</>
                )}
              </p>
            )}
            {(!isLoggedIn || loading) && (
              <p className="gateway-hero-desc">
                Học từ vựng, ngữ pháp N5 và luyện tập theo bài. Đăng nhập để lưu tiến độ và mở khóa đầy đủ.
              </p>
            )}
          </section>

          {/* Thanh chọn cấp độ */}
          <section className="gateway-level-bar" aria-label="Chọn cấp độ JLPT">
            <h2 className="gateway-level-bar-title">Chọn cấp độ để học</h2>
            <div className="gateway-level-bar-inner">
              {JLPT_LEVELS.map((level) =>
                level.available ? (
                  <Link
                    key={level.id}
                    href={level.startPath}
                    className="gateway-level-item gateway-level-item--active"
                  >
                    <span className="gateway-level-label">{level.label}</span>
                    {level.description && (
                      <span className="gateway-level-desc">{level.description}</span>
                    )}
                  </Link>
                ) : (
                  <span
                    key={level.id}
                    className="gateway-level-item gateway-level-item--soon"
                    aria-disabled
                  >
                    <span className="gateway-level-label">{level.label}</span>
                    <span className="gateway-level-desc">Sắp ra mắt</span>
                  </span>
                )
              )}
            </div>
          </section>

          {/* Đã đăng nhập + VIP: chỉ chào và kêu vào bài học tiếp theo */}
          {!loading && isLoggedIn && isVip && (
            <section className="gateway-vip-welcome">
              <p className="gateway-vip-welcome-text">
                Tình hình học tập thế nào? Bước vào bài học tiếp theo nhé.
              </p>
              <Link href="/dashboard" className="gateway-btn-new gateway-btn-new--primary gateway-vip-cta">
                Vào bài học tiếp theo
              </Link>
            </section>
          )}

          {/* Gói học: ẩn nếu đã VIP; nếu chưa đăng nhập hoặc chưa VIP thì hiện (để giới thiệu VIP) */}
          {(!isLoggedIn || !isVip) && (
            <>
              <section className="gateway-cards-new">
                <div className="gateway-card-new gateway-card-new--free">
                  <h3>Gói miễn phí</h3>
                  <p>13 bài đầu N5 (Bài 0 → Bài 12). Đăng nhập để lưu tiến độ.</p>
                </div>
                <div className="gateway-card-new gateway-card-new--vip">
                  <h3>Gói VIP</h3>
                  <p>Toàn bộ N5 và mở rộng N4, N3, N2. Mua VIP để mở khóa tất cả.</p>
                </div>
              </section>

              {/* CTA: chỉ hiện Đăng nhập / Đăng ký khi chưa đăng nhập */}
              <div className="gateway-actions-new">
                {!isLoggedIn && (
                  <>
                    <Link href="/login" className="gateway-btn-new gateway-btn-new--primary">
                      Đăng nhập
                    </Link>
                    <Link href="/signup" className="gateway-btn-new gateway-btn-new--secondary">
                      Đăng ký
                    </Link>
                  </>
                )}
                <Link href="/lesson0" className="gateway-btn-new gateway-btn-new--outline">
                  {isLoggedIn ? 'Vào học' : 'Vào học (Bài 0–12 miễn phí)'}
                </Link>
                {isLoggedIn && (
                  <Link href="/dashboard" className="gateway-btn-new gateway-btn-new--outline">
                    Dashboard
                  </Link>
                )}
              </div>
            </>
          )}

          {/* Mock Test */}
          <section className="gateway-mock-new">
            <h3>Mock Test N5</h3>
            <p>Làm đề thi thử theo nhóm bài:</p>
            <div className="gateway-mock-links">
              <Link href="/n5-test" className="gateway-mock-btn">Mock 1-14</Link>
              <Link href="/n5-advanced-test" className="gateway-mock-btn">Mock 15-20</Link>
              <Link href="/n5-test-21-25" className="gateway-mock-btn gateway-mock-btn--main">
                Mock 21-25 (đề tốt nghiệp)
              </Link>
            </div>
          </section>

          {/* Footer: ẩn khi đã đăng nhập */}
          {!isLoggedIn && (
            <p className="gateway-footer-new">
              Đã có tài khoản? Sau khi đăng nhập, vào <Link href="/dashboard">Dashboard</Link> để xem tiến độ.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
