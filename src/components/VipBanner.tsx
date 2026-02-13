'use client';

import { useUserState } from '../store/useUserState';

export function VipBanner() {
  const isVip = useUserState((s) => s.isVip);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);

  if (isVip) return null;

  return (
    <div className="vip-banner" role="banner">
      🔥 Ưu đãi giảm giá 50% gói VIP N5–N2 chỉ còn 199k —{' '}
      <button
        type="button"
        onClick={() => setOpenVipModal(true)}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          font: 'inherit',
          fontWeight: 700,
          textDecoration: 'underline',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        Mua ngay!
      </button>
    </div>
  );
}
