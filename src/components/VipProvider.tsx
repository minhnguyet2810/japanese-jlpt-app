'use client';

import { useEffect } from 'react';
import { VipBanner } from './VipBanner';
import { VipUpgradeModal } from './VipUpgradeModal';
import { AiChatFab } from './AiChatFab';
import { useUserState } from '../store/useUserState';

/** Đồng bộ is_premium từ server (GET /api/me) vào store để khóa bài / AI đúng. */
function AuthSync() {
  const setVip = useUserState((s) => s.setVip);
  useEffect(() => {
    fetch('/api/me', { credentials: 'include' })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data?.profile?.is_premium !== undefined) {
          setVip(!!data.profile.is_premium);
        }
      })
      .catch(() => {});
  }, [setVip]);
  return null;
}

/** Client wrapper: sync VIP + Banner + Modal + AI Chat (chỉ VIP) */
export function VipProvider() {
  return (
    <>
      <AuthSync />
      <VipBanner />
      <VipUpgradeModal />
      <AiChatFab />
    </>
  );
}
