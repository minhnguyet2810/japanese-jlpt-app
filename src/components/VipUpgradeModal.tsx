'use client';

import { useState } from 'react';
import { useUserState } from '../store/useUserState';

const FEATURES = [
  'Toàn bộ bài học N5 từ Bài 11 trở đi',
  'Trọn bộ cấp độ N4, N3, N2 (khi mở)',
  'Học mọi lúc, không quảng cáo',
  'Hỗ trợ ôn thi JLPT',
];

export function VipUpgradeModal() {
  const open = useUserState((s) => s.openVipModal);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);
  const setVip = useUserState((s) => s.setVip);
  const [step, setStep] = useState<1 | 2>(1);
  const [confirming, setConfirming] = useState(false);

  if (!open) return null;

  const handleClose = () => {
    setOpenVipModal(false);
    setStep(1);
    setConfirming(false);
  };

  const handleMuaNgay = () => setStep(2);

  const handleDaThanhToan = () => {
    setConfirming(true);
    setTimeout(() => {
      setVip(true);
      setConfirming(false);
      handleClose();
    }, 800);
  };

  return (
    <div
      className="vip-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="vip-modal-title"
    >
      <div className="vip-modal">
        <button
          type="button"
          className="vip-modal-close"
          onClick={handleClose}
          aria-label="Đóng"
        >
          ×
        </button>

        {step === 1 && (
          <>
            <div className="vip-modal-header">
              <span className="vip-modal-badge">VIP</span>
              <h2 id="vip-modal-title" className="vip-modal-title">
                Nâng cấp VIP
              </h2>
              <p className="vip-modal-subtitle">
                Mở khóa toàn bộ bài học N5–N2, học không giới hạn.
              </p>
            </div>
            <ul className="vip-features">
              {FEATURES.map((text, i) => (
                <li key={i} className="vip-feature-item">
                  <span className="vip-feature-icon">✓</span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="vip-price-block">
              <span className="vip-price-old">398.000đ</span>
              <span className="vip-price">199.000đ</span>
              <span className="vip-price-note">Giảm 50%</span>
            </div>
            <button type="button" className="vip-cta" onClick={handleMuaNgay}>
              Mua ngay
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="vip-modal-title">Thanh toán</h2>
            <p className="vip-modal-subtitle">
              Chuyển khoản 199.000đ theo thông tin bên dưới. Sau khi chuyển, nhấn &quot;Tôi đã thanh toán&quot; để mở khóa.
            </p>
            <div className="vip-qr-block">
              <img
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=200&h=200&fit=crop"
                alt="QR thanh toán"
                className="vip-qr-img"
                width={200}
                height={200}
              />
              <div className="vip-bank-info">
                <p><strong>Ngân hàng:</strong> MB Bank</p>
                <p><strong>STK:</strong> 0937011220</p>
                <p><strong>Chủ TK:</strong> Nguyễn Minh Nguyệt</p>
                <p><strong>Số tiền:</strong> 199.000đ</p>
                <p><strong>Nội dung:</strong> VIP [số điện thoại]</p>
              </div>
            </div>
            <p className="vip-note-small">
              Đây là giao diện thanh toán giả lập. Trong môi trường thật, bạn sẽ nhập thông tin và tích hợp cổng thanh toán.
            </p>
            <button
              type="button"
              className="vip-cta vip-cta-confirm"
              onClick={handleDaThanhToan}
              disabled={confirming}
            >
              {confirming ? 'Đang xác thực...' : 'Tôi đã thanh toán'}
            </button>
            <button type="button" className="vip-back" onClick={() => setStep(1)}>
              ← Quay lại
            </button>
          </>
        )}
      </div>
    </div>
  );
}
