import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { isLessonLocked } from '../lib/paywall';

interface UserState {
  /** Đã nâng cấp VIP (mở khóa toàn bộ), lưu localStorage */
  isVip: boolean;
  /** Modal "Nâng cấp VIP" đang mở */
  openVipModal: boolean;

  setVip: (value: boolean) => void;
  setOpenVipModal: (value: boolean) => void;

  /** Bài học có bị khóa với user hiện tại không */
  isLessonLockedForUser: (lessonId: string) => boolean;
}

export const useUserState = create<UserState>()(
  persist(
    (set, get) => ({
      isVip: false,
      openVipModal: false,

      setVip: (value) => set({ isVip: value }),
      setOpenVipModal: (value) => set({ openVipModal: value }),

      isLessonLockedForUser: (lessonId: string) => {
        const { isVip } = get();
        if (isVip) return false;
        return isLessonLocked(lessonId);
      },
    }),
    { name: 'user-vip-state', partialize: (s) => ({ isVip: s.isVip }) }
  )
);
