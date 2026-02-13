'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUserState } from '../store/useUserState';
import { LESSON_NAV_ITEMS, MOCK_TEST_NAV_ITEMS } from '../lib/paywall';
import { createSupabaseBrowserClient } from '../lib/supabase/client';

/** Bài 0–12 luôn mở (link), từ 13 trở đi mới check VIP */
const FREE_LESSON_IDS = new Set([
  'lesson0',
  'lesson1',
  'lesson2',
  'lesson3',
  'lesson4',
  'lesson5',
  'lesson6',
  'lesson7',
  'lesson8',
  'lesson9',
  'lesson10',
  'lesson11',
  'lesson12',
  'n5-test',
  'n5-advanced-test',
  'n5-test-21-25',
]);

function LockIcon() {
  return (
    <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

interface LessonNavProps {
  currentLessonId: string;
}

export function LessonNav({ currentLessonId }: LessonNavProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isLessonLockedForUser = useUserState((s) => s.isLessonLockedForUser);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);
  const setVip = useUserState((s) => s.setVip);

  const isMockTest =
    MOCK_TEST_NAV_ITEMS.some((i) => i.id === currentLessonId) || currentLessonId === 'n5-test-21-25';
  const isToolPage = currentLessonId === 'kanji-radicals' || currentLessonId === 'pronunciation';
  const currentLabel = isMockTest
    ? (MOCK_TEST_NAV_ITEMS.find((i) => i.id === currentLessonId)?.label ?? (currentLessonId === 'n5-test-21-25' ? 'Mock 21-25' : 'Mock Test'))
    : isToolPage
      ? 'Bài học'
      : (LESSON_NAV_ITEMS.find((i) => i.id === currentLessonId)?.label ?? currentLessonId.replace('lesson', 'B'));

  const [openMock, setOpenMock] = useState(false);
  const mockPanelRef = useRef<HTMLDivElement>(null);
  const mockTriggerRef = useRef<HTMLButtonElement>(null);

  const [openTools, setOpenTools] = useState(false);
  const toolsPanelRef = useRef<HTMLDivElement>(null);
  const toolsTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const el = e.target as Node;
      if (panelRef.current?.contains(el) || triggerRef.current?.contains(el)) return;
      setOpen(false);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [open]);

  useEffect(() => {
    if (!openMock) return;
    const handleClick = (e: MouseEvent) => {
      const el = e.target as Node;
      if (mockPanelRef.current?.contains(el) || mockTriggerRef.current?.contains(el)) return;
      setOpenMock(false);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [openMock]);

  useEffect(() => {
    if (!openTools) return;
    const handleClick = (e: MouseEvent) => {
      const el = e.target as Node;
      if (toolsPanelRef.current?.contains(el) || toolsTriggerRef.current?.contains(el)) return;
      setOpenTools(false);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [openTools]);

  const isItemLocked = (id: string) => {
    if (FREE_LESSON_IDS.has(id)) return false; // B0–B12 luôn là link, không khóa
    return isLessonLockedForUser(id);
  };

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
    } catch {
      // ignore and continue cleaning local state
    } finally {
      setVip(false);
      setOpen(false);
      setLoggingOut(false);
      router.push('/login');
      router.refresh();
    }
  };

  const lessonLabel = isMockTest ? 'Bài học' : currentLabel;
  const mockLabel = isMockTest ? currentLabel : 'Mock Test';

  return (
    <div className="lesson-nav-actions">
      {/* Thanh 1: Bài học B0–B25 */}
      <div className={`lesson-nav-wrap${open ? ' open' : ''}`}>
        <button
          ref={triggerRef}
          type="button"
          className="lesson-nav-trigger"
          onClick={() => { setOpen((o) => !o); setOpenMock(false); setOpenTools(false); }}
          aria-expanded={open}
          aria-label="Chọn bài học"
        >
          <span className="lesson-nav-trigger-text">{lessonLabel}</span>
          <span className="lesson-nav-chevron" aria-hidden>▼</span>
        </button>
        {open && (
          <div ref={panelRef} className="lesson-nav-panel">
            <div className="lesson-nav-panel-title">Bài học</div>
            <div className="lesson-nav-panel-scroll">
              {LESSON_NAV_ITEMS.map((item) => {
                const isActive = item.id === currentLessonId;
                const isB11OrB12 = item.id === 'lesson11' || item.id === 'lesson12';
                const locked = !isB11OrB12 && isItemLocked(item.id);

                if (locked) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`lesson-nav-panel-item locked${isActive ? ' active' : ''}`}
                      onClick={() => { setOpenVipModal(true); setOpen(false); }}
                      title="Cần VIP"
                    >
                      <LockIcon />
                      {item.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`lesson-nav-panel-item${isActive ? ' active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Thanh 2: Mock Test (dưới cùng / menu riêng) */}
      <div className={`lesson-nav-wrap${openMock ? ' open' : ''}`}>
        <button
          ref={mockTriggerRef}
          type="button"
          className="lesson-nav-trigger lesson-nav-trigger-mock"
          onClick={() => { setOpenMock((o) => !o); setOpen(false); setOpenTools(false); }}
          aria-expanded={openMock}
          aria-label="Chọn Mock Test"
        >
          <span className="lesson-nav-trigger-text">{mockLabel}</span>
          <span className="lesson-nav-chevron" aria-hidden>▼</span>
        </button>
        {openMock && (
          <div ref={mockPanelRef} className="lesson-nav-panel">
            <div className="lesson-nav-panel-title">Mock Test</div>
            <div className="lesson-nav-panel-scroll">
              {MOCK_TEST_NAV_ITEMS.map((item) => {
                const isActive = item.id === currentLessonId;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`lesson-nav-panel-item${isActive ? ' active' : ''}`}
                    onClick={() => setOpenMock(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Công cụ: Kanji, Phát âm */}
      <div className={`lesson-nav-wrap${openTools ? ' open' : ''}`}>
        <button
          ref={toolsTriggerRef}
          type="button"
          className="lesson-nav-trigger lesson-nav-trigger-tools"
          onClick={() => { setOpenTools((o) => !o); setOpen(false); setOpenMock(false); }}
          aria-expanded={openTools}
          aria-label="Công cụ học"
        >
          <span className="lesson-nav-trigger-text">
            {currentLessonId === 'kanji-radicals' ? 'Kanji' : currentLessonId === 'pronunciation' ? 'Phát âm' : 'Công cụ'}
          </span>
          <span className="lesson-nav-chevron" aria-hidden>▼</span>
        </button>
        {openTools && (
          <div ref={toolsPanelRef} className="lesson-nav-panel">
            <div className="lesson-nav-panel-title">Công cụ</div>
            <div className="lesson-nav-panel-scroll">
              <Link
                href="/kanji-radicals"
                className={`lesson-nav-panel-item${currentLessonId === 'kanji-radicals' ? ' active' : ''}`}
                onClick={() => setOpenTools(false)}
              >
                Kanji – Bộ thủ &amp; Phân rã
              </Link>
              <Link
                href="/pronunciation"
                className={`lesson-nav-panel-item${currentLessonId === 'pronunciation' ? ' active' : ''}`}
                onClick={() => setOpenTools(false)}
              >
                Quy tắc Phát âm (Âm ngắt &amp; Trường âm)
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/dashboard"
        className="lesson-nav-trigger lesson-nav-trigger-dashboard"
        onClick={() => { setOpen(false); setOpenMock(false); setOpenTools(false); }}
      >
        <span className="lesson-nav-trigger-text">Dashboard</span>
      </Link>

      <button
        type="button"
        className="lesson-nav-logout"
        onClick={handleLogout}
        disabled={loggingOut}
        aria-label="Đăng xuất"
      >
        {loggingOut ? 'Đang thoát...' : 'Đăng xuất'}
      </button>
    </div>
  );
}
