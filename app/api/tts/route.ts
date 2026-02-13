/**
 * GET /api/tts?text=... — Proxy TTS tiếng Nhật (fallback khi Web Speech API không phát được).
 * Trả về audio mp3 từ Google Translate TTS.
 */
import { NextRequest, NextResponse } from 'next/server';

const MAX_LENGTH = 200;

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('text');
  if (!text || typeof text !== 'string') {
    return NextResponse.json({ error: 'Thiếu tham số text' }, { status: 400 });
  }
  const trimmed = text.trim().slice(0, MAX_LENGTH);
  if (!trimmed) {
    return NextResponse.json({ error: 'Text rỗng' }, { status: 400 });
  }

  try {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(trimmed)}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0',
      },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'TTS lỗi' }, { status: 502 });
    }
    const blob = await res.blob();
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    return NextResponse.json({ error: 'TTS lỗi' }, { status: 500 });
  }
}
