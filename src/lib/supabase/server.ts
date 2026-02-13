/**
 * Supabase server client cho API Routes & Server Components.
 * Dùng cookies từ request để lấy session.
 */
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase chưa cấu hình: thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
  const cookieStore = await cookies();

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Gọi từ Route Handler có thể không cho set cookie trong một số context
        }
      },
    },
  });
}

/**
 * Lấy user hiện tại và profile (is_premium).
 * Trả về null nếu chưa đăng nhập.
 */
export async function getCurrentUserAndProfile(): Promise<{
  id: string;
  email: string | null;
  is_premium: boolean;
} | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  // cast supabase sang any để tránh lỗi type infer 'never' khi select profile
  const { data: profile } = await (supabase as any)
    .from('profiles')
    .select('is_premium')
    .eq('id', user.id)
    .single();

  return {
    id: user.id,
    email: user.email ?? null,
    is_premium: profile?.is_premium ?? false,
  };
}
