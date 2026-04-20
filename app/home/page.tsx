'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { JLPT_LEVELS } from '@/lib/levels';
import { Sidebar } from '@/components/Sidebar';

type Me = { user: { id: string; email: string | null; full_name?: string } | null; profile: { is_premium: boolean } | null };

export default function HomeGatewayPage() {
  const router = useRouter();
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
  const displayName = me?.user?.full_name || me?.user?.email?.split('@')[0] || 'bạn';

  return (
    <div className="sb-layout">
      <Sidebar />
      <div className="sb-content">

      <main className="hp-main">
        {/* ===== Hero Section ===== */}
        <section className="hp-hero">
          <div className="hp-hero-bg-shapes">
            <div className="hp-shape hp-shape-1" />
            <div className="hp-shape hp-shape-2" />
            <div className="hp-shape hp-shape-3" />
          </div>
          <div className="hp-hero-inner">
            <div className="hp-hero-kanji-float">
              <span className="hp-kanji-char">日</span>
              <span className="hp-kanji-char hp-kanji-char-2">本</span>
              <span className="hp-kanji-char hp-kanji-char-3">語</span>
            </div>
            <p className="hp-hero-badge">🎌 Ứng dụng học tiếng Nhật #1</p>
            <h1 className="hp-hero-title">
              Chinh phục <span className="hp-hero-highlight">JLPT</span> cùng chúng tôi
            </h1>
            <p className="hp-hero-subtitle">
              Học từ vựng, ngữ pháp, luyện nghe - nói - đọc - viết từ N5 đến N2. Phương pháp hiệu quả, tiến bộ mỗi ngày.
            </p>

            {!loading && isLoggedIn && (
              <div className="hp-hero-welcome-badge">
                <span className="hp-welcome-avatar">👋</span>
                <span>
                  Xin chào, <strong>{displayName}</strong>!
                  {isVip && <span className="hp-vip-badge">⭐ VIP</span>}
                </span>
              </div>
            )}

            <div className="hp-hero-actions">
              {!isLoggedIn && (
                <>
                  <Link href="/signup" className="hp-btn hp-btn-primary hp-btn-lg">
                    🚀 Bắt đầu miễn phí
                  </Link>
                  <Link href="/login" className="hp-btn hp-btn-outline hp-btn-lg">
                    Đăng nhập
                  </Link>
                </>
              )}
              {isLoggedIn && isVip && (
                <Link href="/dashboard" className="hp-btn hp-btn-primary hp-btn-lg">
                  📚 Vào học tiếp
                </Link>
              )}
              {isLoggedIn && !isVip && (
                <>
                  <Link href="/lesson0" className="hp-btn hp-btn-primary hp-btn-lg">
                    📚 Vào học
                  </Link>
                  <Link href="/dashboard" className="hp-btn hp-btn-outline hp-btn-lg">
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            <div className="hp-hero-stats">
              <div className="hp-stat">
                <span className="hp-stat-number">25+</span>
                <span className="hp-stat-label">Bài học</span>
              </div>
              <div className="hp-stat-divider" />
              <div className="hp-stat">
                <span className="hp-stat-number">500+</span>
                <span className="hp-stat-label">Từ vựng</span>
              </div>
              <div className="hp-stat-divider" />
              <div className="hp-stat">
                <span className="hp-stat-number">100+</span>
                <span className="hp-stat-label">Ngữ pháp</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Tính năng nổi bật ===== */}
        <section className="hp-section">
          <h2 className="hp-section-title">✨ Tại sao chọn chúng tôi?</h2>
          <div className="hp-features-grid">
            <div className="hp-feature-card">
              <div className="hp-feature-icon">📖</div>
              <h3>Bài học có cấu trúc</h3>
              <p>Từ vựng, ngữ pháp, hội thoại theo giáo trình Minna no Nihongo. Học từ cơ bản đến nâng cao.</p>
            </div>
            <div className="hp-feature-card">
              <div className="hp-feature-icon">🎯</div>
              <h3>Luyện thi Mock Test</h3>
              <p>Đề thi thử JLPT N5 sát đề thật. Đánh giá năng lực và sẵn sàng cho kỳ thi.</p>
            </div>
            <div className="hp-feature-card">
              <div className="hp-feature-icon">🗣️</div>
              <h3>Luyện phát âm AI</h3>
              <p>Nói tiếng Nhật và được AI chấm điểm phát âm. Cải thiện kỹ năng nói mỗi ngày.</p>
            </div>
            <div className="hp-feature-card">
              <div className="hp-feature-icon">📊</div>
              <h3>Theo dõi tiến độ</h3>
              <p>Dashboard cá nhân hiển thị tiến trình học, streak và thống kê chi tiết.</p>
            </div>
            <div className="hp-feature-card">
              <div className="hp-feature-icon">✍️</div>
              <h3>Viết Kanji</h3>
              <p>Luyện viết Kanji bằng tay trên điện thoại/máy tính. Học bộ thủ và phân rã chữ Hán.</p>
            </div>
            <div className="hp-feature-card">
              <div className="hp-feature-icon">🤖</div>
              <h3>AI Chat hỗ trợ</h3>
              <p>Hỏi đáp với AI về ngữ pháp, từ vựng. Giải thích chi tiết, dễ hiểu.</p>
            </div>
          </div>
        </section>

        {/* ===== Chọn cấp độ ===== */}
        <section className="hp-section">
          <h2 className="hp-section-title">🏯 Chọn cấp độ JLPT</h2>
          <p className="hp-section-desc">Bắt đầu từ N5 cho người mới, hoặc chọn cấp độ phù hợp với bạn</p>
          <div className="hp-levels-grid">
            {JLPT_LEVELS.map((level) =>
              level.available ? (
                <Link
                  key={level.id}
                  href={level.startPath}
                  className="hp-level-card hp-level-card--active"
                >
                  <span className="hp-level-badge-tag">Đã mở</span>
                  <span className="hp-level-name">{level.label}</span>
                  <span className="hp-level-desc">{level.description}</span>
                  <span className="hp-level-arrow">→</span>
                </Link>
              ) : (
                <div
                  key={level.id}
                  className="hp-level-card hp-level-card--soon"
                >
                  <span className="hp-level-badge-tag hp-level-badge-tag--soon">Sắp ra mắt</span>
                  <span className="hp-level-name">{level.label}</span>
                  <span className="hp-level-desc">{level.description}</span>
                  <span className="hp-level-lock">🔒</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* ===== Gói học ===== */}
        {(!isLoggedIn || !isVip) && (
          <section className="hp-section">
            <h2 className="hp-section-title">💎 Gói học tập</h2>
            <div className="hp-pricing-grid">
              <div className="hp-pricing-card">
                <div className="hp-pricing-header">
                  <span className="hp-pricing-emoji">🆓</span>
                  <h3>Miễn phí</h3>
                  <p className="hp-pricing-price">0đ</p>
                </div>
                <ul className="hp-pricing-features">
                  <li>✅ 13 bài đầu N5 (Bài 0 → 12)</li>
                  <li>✅ Từ vựng + Ngữ pháp cơ bản</li>
                  <li>✅ Flashcard luyện tập</li>
                  <li>✅ Mock Test cơ bản</li>
                  <li className="hp-pricing-disabled">❌ Bài 13 → 25</li>
                  <li className="hp-pricing-disabled">❌ AI Chat hỗ trợ</li>
                </ul>
                <Link href={isLoggedIn ? '/lesson0' : '/signup'} className="hp-btn hp-btn-outline hp-btn-full">
                  {isLoggedIn ? 'Vào học' : 'Đăng ký miễn phí'}
                </Link>
              </div>

              <div className="hp-pricing-card hp-pricing-card--vip">
                <div className="hp-pricing-popular">🔥 Phổ biến nhất</div>
                <div className="hp-pricing-header">
                  <span className="hp-pricing-emoji">👑</span>
                  <h3>VIP</h3>
                  <p className="hp-pricing-price">199k <span className="hp-pricing-old">399k</span></p>
                  <p className="hp-pricing-note">Giảm 50% - Trọn đời</p>
                </div>
                <ul className="hp-pricing-features">
                  <li>✅ Toàn bộ N5 (25+ bài)</li>
                  <li>✅ Mở rộng N4, N3, N2</li>
                  <li>✅ AI Chat không giới hạn</li>
                  <li>✅ Chấm bài viết bằng AI</li>
                  <li>✅ Mock Test nâng cao</li>
                  <li>✅ Cập nhật trọn đời</li>
                </ul>
                <Link href={isLoggedIn ? '/dashboard' : '/signup'} className="hp-btn hp-btn-vip hp-btn-full">
                  {isLoggedIn ? 'Nâng cấp VIP' : 'Đăng ký & Mua VIP'}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ===== Mock Test ===== */}
        <section className="hp-section">
          <h2 className="hp-section-title">📝 Mock Test N5</h2>
          <p className="hp-section-desc">Luyện đề thi thử JLPT N5 — Chia theo nhóm bài</p>
          <div className="hp-mock-grid">
            <Link href="/n5-test" className="hp-mock-card">
              <div className="hp-mock-icon">📋</div>
              <h3>Mock 1-14</h3>
              <p>Bài 1 → 14</p>
              <span className="hp-mock-arrow">Làm ngay →</span>
            </Link>
            <Link href="/n5-advanced-test" className="hp-mock-card">
              <div className="hp-mock-icon">📝</div>
              <h3>Mock 15-20</h3>
              <p>Bài 15 → 20</p>
              <span className="hp-mock-arrow">Làm ngay →</span>
            </Link>
            <Link href="/n5-test-21-25" className="hp-mock-card hp-mock-card--highlight">
              <div className="hp-mock-icon">🎓</div>
              <h3>Mock 21-25</h3>
              <p>Đề tốt nghiệp N5</p>
              <span className="hp-mock-arrow">Làm ngay →</span>
            </Link>
          </div>
        </section>

        {/* ===== Footer CTA ===== */}
        {!isLoggedIn && (
          <section className="hp-cta-section">
            <div className="hp-cta-inner">
              <h2>Sẵn sàng học tiếng Nhật? 🇯🇵</h2>
              <p>Đăng ký ngay để lưu tiến độ và mở khóa toàn bộ nội dung</p>
              <div className="hp-cta-buttons">
                <Link href="/signup" className="hp-btn hp-btn-primary hp-btn-lg">
                  Bắt đầu ngay
                </Link>
                <Link href="/login" className="hp-btn hp-btn-glass hp-btn-lg">
                  Đã có tài khoản? Đăng nhập
                </Link>
              </div>
            </div>
          </section>
        )}

        <footer className="hp-footer">
          <p>© 2025 Japanese JLPT App — Học tiếng Nhật mỗi ngày 🌸</p>
        </footer>
      </main>
      </div>
    </div>
  );
}
