/**
 * Phát âm tiếng Nhật.
 * Ưu tiên: /api/tts (Audio) để luôn nghe được.
 * Nếu không được thì thử Web Speech API.
 */

let currentAudio: HTMLAudioElement | null = null;

function speakWithBrowserTts(text: string): void {
  if (typeof window === 'undefined') return;
  const synth = window.speechSynthesis;
  if (!synth) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ja-JP';
  u.rate = 0.95;
  u.volume = 1;
  const voices = synth.getVoices();
  const ja = voices.filter((v) => v.lang?.toLowerCase().startsWith('ja'));
  if (ja.length > 0) u.voice = ja[0];
  synth.speak(u);
}

export function speakJapaneseNow(text: string): void {
  const t = (text || '').trim();
  if (!t) return;
  if (typeof window === 'undefined') return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  const url = `/api/tts?text=${encodeURIComponent(t)}`;
  const audio = new Audio(url);
  currentAudio = audio;
  audio.volume = 1;

  audio.play().catch(() => {
    currentAudio = null;
    speakWithBrowserTts(t);
  });
  audio.onerror = () => {
    if (currentAudio === audio) currentAudio = null;
    speakWithBrowserTts(t);
  };
  audio.onended = () => {
    if (currentAudio === audio) currentAudio = null;
  };
}

export async function speakJapanese(text: string): Promise<void> {
  speakJapaneseNow(text);
}
