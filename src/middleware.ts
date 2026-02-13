import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Các path yêu cầu đăng nhập. Bài 0–12 (/lesson0 ... /lesson12) KHÔNG bảo vệ — ai cũng xem được. */
const PROTECTED_PATHS = [
  '/lesson',   // /lesson/lesson13, lesson14, ... từ DB
  '/lesson13', '/lesson14', '/lesson15', '/lesson16', '/lesson17', '/lesson18', '/lesson19',
  '/lesson20', '/lesson21', '/lesson22', '/lesson23', '/lesson24', '/lesson25',
  '/n5-test', '/n5-advanced-test', '/n5-test-21-25',
  '/dashboard', '/admin-secret', '/analytics', '/kanji-radicals', '/pronunciation',
];

/** Bài 13 trở đi + Mock test: chỉ user đã đóng tiền và được xác nhận (is_premium) hoặc email trong ALLOWED_EMAILS. */
const LESSON_13_PLUS_OR_MOCK = [
  '/lesson/lesson13', '/lesson/lesson14', '/lesson/lesson15', '/lesson/lesson16', '/lesson/lesson17',
  '/lesson/lesson18', '/lesson/lesson19', '/lesson/lesson20', '/lesson/lesson21', '/lesson/lesson22',
  '/lesson/lesson23', '/lesson/lesson24', '/lesson/lesson25',
  '/lesson13', '/lesson14', '/lesson15', '/lesson16', '/lesson17', '/lesson18', '/lesson19',
  '/lesson20', '/lesson21', '/lesson22', '/lesson23', '/lesson24', '/lesson25',
  '/n5-test', '/n5-advanced-test', '/n5-test-21-25',
];

function isLesson13PlusOrMock(pathname: string): boolean {
  return LESSON_13_PLUS_OR_MOCK.some((p) => pathname === p || pathname.startsWith(p + '/'));
}

function getAllowedEmailsSet(): Set<string> {
  const raw = process.env.ALLOWED_EMAILS || '';
  if (!raw.trim()) return new Set();
  return new Set(
    raw
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

/** Bài 0–12: không cần đăng nhập. Còn lại theo PROTECTED_PATHS. */
function isProtectedPath(pathname: string): boolean {
  if (pathname === '/') return false;
  if (pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/update-password') return false;
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

    const pathname = request.nextUrl.pathname;

    if (isProtectedPath(pathname)) {
      if (!user) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', pathname);
        return NextResponse.redirect(loginUrl);
      }
      // Bài 13 trở đi + Mock test: chỉ user đã đóng tiền + xác nhận (is_premium) hoặc trong ALLOWED_EMAILS
      if (isLesson13PlusOrMock(pathname)) {
        const allowedEmails = getAllowedEmailsSet();
        const emailLower = (user.email || '').trim().toLowerCase();
        const allowedByEmail = allowedEmails.size > 0 && emailLower && allowedEmails.has(emailLower);

        if (!allowedByEmail) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('is_premium')
            .eq('id', user.id)
            .single();
          const isPremium = profile?.is_premium === true;
          if (!isPremium) {
            const denyUrl = new URL('/dashboard', request.url);
            denyUrl.searchParams.set('access', 'denied');
            return NextResponse.redirect(denyUrl);
          }
        }
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
