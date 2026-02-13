'use client';

import { useState } from 'react';
import {
  isMicrophoneSupported,
  requestMicrophonePermission,
  type MicPermissionState,
} from '@/lib/microphonePermission';

interface MicroPermissionPromptProps {
  /** Nội dung mô tả ngắn (tùy chọn) */
  description?: string;
  /** Có thu gọn thành 1 dòng không */
  compact?: boolean;
}

export function MicroPermissionPrompt({ description, compact }: MicroPermissionPromptProps) {
  const [state, setState] = useState<MicPermissionState | 'requesting'>('prompt');
  const [requested, setRequested] = useState(false);

  const supported = isMicrophoneSupported();

  const handleRequest = async () => {
    if (!supported) return;
    setState('requesting');
    const granted = await requestMicrophonePermission();
    setRequested(true);
    setState(granted ? 'granted' : 'denied');
  };

  if (!supported) {
    return (
      <div className="micro-prompt micro-prompt-unsupported" role="alert">
        <span className="micro-prompt-icon">🎤</span>
        <p className="micro-prompt-text">
          Trình duyệt không hỗ trợ truy cập micro. Để chấm điểm nói, hãy dùng Chrome hoặc Edge trên
          máy tính hoặc điện thoại.
        </p>
      </div>
    );
  }

  if (state === 'granted') {
    return null;
  }

  if (state === 'denied') {
    return (
      <div className="micro-prompt micro-prompt-denied" role="alert">
        <span className="micro-prompt-icon">🔒</span>
        <p className="micro-prompt-text">
          Bạn đã chặn quyền micro. Để chấm điểm phần Nói:
        </p>
        <ul className="micro-prompt-list">
          <li>Trên <strong>Chrome/Edge</strong>: bấm icon ổ khóa hoặc (i) trên thanh địa chỉ → Quyền → Micro → Cho phép.</li>
          <li>Trên <strong>iPhone (Safari)</strong>: Cài đặt → Safari → Micro → Cho phép.</li>
          <li>Sau đó tải lại trang và bấm &quot;Bật micro&quot; lại.</li>
        </ul>
        <button type="button" className="secondary-button" onClick={handleRequest}>
          Thử bật micro lại
        </button>
      </div>
    );
  }

  const defaultDesc =
    description ||
    'Để chấm điểm phần Nói (Speaking), app cần quyền micro. Bấm nút bên dưới và chọn &quot;Cho phép&quot; khi trình duyệt hỏi.';

  return (
    <div className="micro-prompt micro-prompt-prompt" role="region" aria-label="Quyền micro">
      <span className="micro-prompt-icon">🎤</span>
      {!compact && <p className="micro-prompt-text">{defaultDesc}</p>}
      <button
        type="button"
        className="primary-button"
        onClick={handleRequest}
        disabled={state === 'requesting'}
      >
        {state === 'requesting' ? 'Đang mở cài đặt…' : 'Bật micro để chấm điểm nói'}
      </button>
    </div>
  );
}
