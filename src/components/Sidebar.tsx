'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LESSON_NAV_ITEMS, MOCK_TEST_NAV_ITEMS } from '../lib/paywall';
import { useUserState } from '../store/useUserState';
import { createSupabaseBrowserClient } from '../lib/supabase/client';

const FREE_LESSON_IDS = new Set([
  'lesson0','lesson1','lesson2','lesson3','lesson4','lesson5',
  'lesson6','lesson7','lesson8','lesson9','lesson10','lesson11','lesson12',
  'n5-test','n5-advanced-test','n5-test-21-25',
]);

function LockIcon() {
  return (
    <svg className="sb-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

interface SidebarProps {
  currentLessonId?: string;
}

export function Sidebar({ currentLessonId }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [lessonsOpen, setLessonsOpen] = useState(true);
  const [mockOpen, setMockOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLessonLockedForUser = useUserState((s) => s.isLessonLockedForUser);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);
  const setVip = useUserState((s) => s.setVip);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch('/api/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setIsLoggedIn(!!data?.user))
      .catch(() => setIsLoggedIn(false));
  }, []);

  // Track lesson progress automatically when a user visits a lesson
  useEffect(() => {
    if (!isLoggedIn || !currentLessonId) return;
    
    // Đợi 5 giây để chắc chắn user đang học, sau đó tự động lưu tiến độ và streak
    const timer = setTimeout(() => {
      fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lesson_slug: currentLessonId, lesson_completed: true }),
      }).catch((err) => console.error('Lỗi khi tự động lưu tiến độ:', err));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentLessonId, isLoggedIn]);

  // Close mobile sidebar on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Sync collapsed state to parent layout via CSS class on body
  useEffect(() => {
    document.body.classList.toggle('sb-collapsed', collapsed);
    return () => document.body.classList.remove('sb-collapsed');
  }, [collapsed]);

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
    } catch { /* ignore */ } finally {
      setVip(false);
      setLoggingOut(false);
      router.push('/login');
      router.refresh();
    }
  };

  const isActive = (href: string) => pathname === href;
  const isLessonPage = pathname?.startsWith('/lesson');
  const isMockPage = pathname === '/n5-test' || pathname === '/n5-advanced-test' || pathname === '/n5-test-21-25';

  const isItemLocked = (id: string) => {
    if (!isMounted) return false;
    if (FREE_LESSON_IDS.has(id)) return false;
    return isLessonLockedForUser(id);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        type="button"
        className="sb-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span className={`sb-hamburger ${mobileOpen ? 'sb-hamburger--open' : ''}`}>
          <span /><span /><span />
        </span>
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div className="sb-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sb ${mobileOpen ? 'sb--open' : ''} ${collapsed ? 'sb--collapsed' : ''}`}>
        {/* Collapse toggle arrow */}
        <button
          type="button"
          className="sb-collapse-toggle"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Mở sidebar' : 'Thu gọn sidebar'}
          title={collapsed ? 'Mở sidebar' : 'Thu gọn sidebar'}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sb-collapse-arrow">
            <polyline points={collapsed ? '9 18 15 12 9 6' : '15 18 9 12 15 6'} />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/home" className="sb-logo" onClick={() => setMobileOpen(false)}>
          <span className="sb-logo-jp">{collapsed ? '日' : '日本語'}</span>
          {!collapsed && <span className="sb-logo-sub">JLPT App</span>}
        </Link>

        <nav className="sb-nav">
          {/* Trang chủ */}
          <Link
            href="/home"
            className={`sb-item ${isActive('/home') ? 'sb-item--active' : ''}`}
            title="Trang chủ"
          >
            <span className="sb-item-icon">🏠</span>
            {!collapsed && <span>Trang chủ</span>}
          </Link>

          {/* Bài học - collapsible */}
          {!collapsed ? (
            <div className="sb-group">
              <button
                type="button"
                className={`sb-item sb-item--group ${isLessonPage ? 'sb-item--active-parent' : ''}`}
                onClick={() => setLessonsOpen(!lessonsOpen)}
              >
                <span className="sb-item-icon">📖</span>
                <span>Bài học N5</span>
                <span className={`sb-chevron ${lessonsOpen ? 'sb-chevron--open' : ''}`}>›</span>
              </button>
              {lessonsOpen && (
                <div className="sb-sub-list">
                  {LESSON_NAV_ITEMS.map((item) => {
                    const active = currentLessonId === item.id || isActive(item.href);
                    const locked = !FREE_LESSON_IDS.has(item.id) && isItemLocked(item.id);

                    if (locked) {
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`sb-sub-item sb-sub-item--locked ${active ? 'sb-sub-item--active' : ''}`}
                          onClick={() => setOpenVipModal(true)}
                          title="Cần VIP"
                        >
                          <LockIcon />
                          <span>{item.label}</span>
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`sb-sub-item ${active ? 'sb-sub-item--active' : ''}`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/lesson0"
              className={`sb-item ${isLessonPage ? 'sb-item--active' : ''}`}
              title="Bài học N5"
            >
              <span className="sb-item-icon">📖</span>
            </Link>
          )}

          {/* Mock Test - collapsible */}
          {!collapsed ? (
            <div className="sb-group">
              <button
                type="button"
                className={`sb-item sb-item--group ${isMockPage ? 'sb-item--active-parent' : ''}`}
                onClick={() => setMockOpen(!mockOpen)}
              >
                <span className="sb-item-icon">📝</span>
                <span>Mock Test</span>
                <span className={`sb-chevron ${mockOpen ? 'sb-chevron--open' : ''}`}>›</span>
              </button>
              {mockOpen && (
                <div className="sb-sub-list">
                  {MOCK_TEST_NAV_ITEMS.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`sb-sub-item ${isActive(item.href) ? 'sb-sub-item--active' : ''}`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/n5-test"
              className={`sb-item ${isMockPage ? 'sb-item--active' : ''}`}
              title="Mock Test"
            >
              <span className="sb-item-icon">📝</span>
            </Link>
          )}

          {/* Separator */}
          <div className="sb-separator" />

          {/* Công cụ */}
          <Link
            href="/kanji-radicals"
            className={`sb-item ${isActive('/kanji-radicals') ? 'sb-item--active' : ''}`}
            title="Kanji Bộ thủ"
          >
            <span className="sb-item-icon">✒️</span>
            {!collapsed && <span>Kanji Bộ thủ</span>}
          </Link>
          <Link
            href="/pronunciation"
            className={`sb-item ${isActive('/pronunciation') ? 'sb-item--active' : ''}`}
            title="Phát âm"
          >
            <span className="sb-item-icon">🎤</span>
            {!collapsed && <span>Phát âm</span>}
          </Link>

          {/* Separator - above Dashboard */}
          <div className="sb-separator" />
          
          {/* Dashboard now at bottom */}
          <Link
            href="/dashboard"
            className={`sb-item ${isActive('/dashboard') ? 'sb-item--active' : ''}`}
            title="Dashboard"
          >
            <span className="sb-item-icon">📊</span>
            {!collapsed && <span>Dashboard</span>}
          </Link>
        </nav>

        {/* Bottom */}
        <div className="sb-bottom">
          {isLoggedIn ? (
            <button
              type="button"
              className="sb-logout"
              onClick={handleLogout}
              disabled={loggingOut}
              title="Đăng xuất"
            >
              <span className="sb-item-icon">🚪</span>
              {!collapsed && <span>{loggingOut ? 'Đang thoát...' : 'Đăng xuất'}</span>}
            </button>
          ) : (
            <>
              <Link href="/login" className="sb-auth-btn sb-auth-btn--login" title="Đăng nhập">
                {collapsed ? '🔑' : 'Đăng nhập'}
              </Link>
              <Link href="/signup" className="sb-auth-btn sb-auth-btn--signup" title="Đăng ký">
                {collapsed ? '✨' : 'Đăng ký'}
              </Link>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
