'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useUserState } from '../store/useUserState';

type Message = { role: 'user' | 'assistant'; content: string };

export function AiChatFab() {
  const isVip = useUserState((s) => s.isVip);
  const setOpenVipModal = useUserState((s) => s.setOpenVipModal);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const lessonSlug = pathname?.startsWith('/lesson')
    ? pathname.slice(1).replace(/\/$/, '').split('/')[0] || undefined
    : undefined;

  useEffect(() => {
    if (open && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [open, messages]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lessonSlug: lessonSlug || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data?.message || data?.error || 'Lỗi kết nối';
        setError(msg);
        setMessages((m) => [...m, { role: 'assistant', content: '' }]);
        if (res.status === 403 && data?.error === 'premium_required') setOpenVipModal(true);
        return;
      }
      setMessages((m) => [...m, { role: 'assistant', content: data.content || '' }]);
    } catch {
      setError('Lỗi kết nối');
      setMessages((m) => [...m, { role: 'assistant', content: '' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="ai-chat-fab ai-chat-fab-3d"
        aria-label="Mở AI Assistant"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96, y: 0 }}
      >
        <span className="ai-chat-fab-orb" />
        <span className="ai-chat-fab-face">🤖</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-chat-panel ai-chat-panel-3d"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="ai-chat-header">
              <div className="ai-chat-title-wrap">
                <span className="ai-chat-avatar">🧠</span>
                <div>
                  <span className="ai-chat-title">JLPT AI Tutor</span>
                  {lessonSlug && (
                    <span className="ai-chat-context">
                      Bài hiện tại: {lessonSlug.replace('lesson', 'Bài ')}
                    </span>
                  )}
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="ai-chat-close">
                ✕
              </button>
            </div>
            <div ref={listRef} className="ai-chat-messages">
              {messages.length === 0 && (
                <>
                  <p className="ai-chat-placeholder">
                    Hỏi về ngữ pháp, phân tích câu, hoặc xin thêm ví dụ theo đúng bài JLPT bạn đang học.
                  </p>
                  {!isVip && (
                    <p className="ai-chat-placeholder" style={{ fontSize: '0.85rem', color: 'var(--color-muted, #64748b)', marginTop: '0.5rem' }}>
                      Đăng nhập và nâng cấp VIP để trò chuyện với AI.
                    </p>
                  )}
                </>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`ai-chat-msg ai-chat-msg--${msg.role}`}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {msg.content || (msg.role === 'assistant' && error ? error : '...')}
                </motion.div>
              ))}
              {loading && (
                <div className="ai-chat-msg ai-chat-msg--assistant">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              )}
            </div>
            <div className="ai-chat-input-wrap">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="Nhập câu hỏi..."
                className="ai-chat-input"
                disabled={loading}
              />
              <button
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                className="ai-chat-send"
              >
                Gửi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
