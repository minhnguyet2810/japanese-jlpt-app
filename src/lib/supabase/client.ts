/**
 * Supabase browser client — dùng trong Client Components (đăng nhập, đăng ký).
 * Nếu thiếu env sẽ throw để trang auth hiển thị hướng dẫn cấu hình.
 */
import { createBrowserClient } from '@supabase/ssr';

export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      'Chưa cấu hình Supabase. Thêm NEXT_PUBLIC_SUPABASE_URL và NEXT_PUBLIC_SUPABASE_ANON_KEY vào .env.local (xem .env.example). Trên Vercel: Settings → Environment Variables.'
    );
  }
  return createBrowserClient(url, key);
}
