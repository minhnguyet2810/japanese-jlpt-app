import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Các path yêu cầu đăng nhập. Bài 0–12 (/lesson0 ... /lesson12) KHÔNG bảo vệ — ai cũng xem được. */
const PROTECTED_PATHS = [
  '/lesson',   // /lesson/lesson13, lesson14, ... từ DB
  '/lesson13', // Bài 13 trở đi: cần đăng nhập (VIP để mở khóa)
  '/n5-test', '/dashboard', '/admin-secret', '/analytics',
];

/** Bài 0–12: không cần đăng nhập. Còn lại theo PROTECTED_PATHS. */
function isProtectedPath(pathname: string): boolean {
  if (pathname === '/') return false;
  if (pathname === '/login' || pathname === '/signup') return false;
  if (pathname.startsWith('/api')) return false;
  if (/^\/lesson(0|1|2|3|4|5|6|7|8|9|10|11|12)(\/|$)/.test(pathname)) return false; // Bài 0–12 miễn phí, không yêu cầu login
  return PROTECTED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'));
}

export async function middleware(request: NextRequest) {
  try {
    let response = NextResponse.next({ request });

    if (!supabaseUrl || !supabaseAnonKey) {
      return response;
    }

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    });

    const { data: { user } } = await supabase.auth.getUser();

    if (isProtectedPath(request.nextUrl.pathname)) {
      if (!user) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    }

    return response;
  } catch {
    return NextResponse.next({ request });
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
