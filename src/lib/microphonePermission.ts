/**
 * Xin quyền micro để chấm điểm Speaking (SpeechRecognition cần truy cập micro).
 * Gọi getUserMedia({ audio: true }) để trình duyệt/app hiện dialog "Cho phép micro?".
 */

export type MicPermissionState = 'prompt' | 'granted' | 'denied' | 'unsupported';

/**
 * Kiểm tra có hỗ trợ MediaDevices.getUserMedia không (cần cho micro).
 */
export function isMicrophoneSupported(): boolean {
  if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) return false;
  return true;
}

/**
 * Xin quyền micro (hiện dialog "Cho phép [trang] truy cập micro?").
 * Gọi từ sự kiện click (user gesture) để trình duyệt cho phép.
 * @returns true nếu user cho phép, false nếu từ chối hoặc lỗi
 */
export async function requestMicrophonePermission(): Promise<boolean> {
  if (!isMicrophoneSupported()) return false;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((t) => t.stop());
    return true;
  } catch {
    return false;
  }
}

/**
 * Kiểm tra trạng thái quyền micro (nếu trình duyệt hỗ trợ permissions.query).
 */
export async function getMicrophonePermissionState(): Promise<MicPermissionState> {
  if (typeof window === 'undefined') return 'unsupported';
  if (!navigator.permissions?.query) return 'prompt';
  try {
    const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
    return result.state as MicPermissionState;
  } catch {
    return 'prompt';
  }
}
