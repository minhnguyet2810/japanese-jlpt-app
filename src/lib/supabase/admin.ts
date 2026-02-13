/**
 * Supabase client với Service Role key — CHỈ dùng trong API route bảo vệ bởi ADMIN_SECRET.
 * Không dùng ở client.
 */
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function createSupabaseAdminClient() {
  if (!url || !serviceRoleKey) {
    throw new Error('Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient<Database>(url, serviceRoleKey, { auth: { persistSession: false } });
}

export function isAdminConfigured(): boolean {
  return Boolean(url && serviceRoleKey);
}
