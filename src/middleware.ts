import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Các path yêu cầu đăng nhập. Tất cả bài học (kể cả Bài 0–12) đều cần đăng ký/đăng nhập mới vào được. */
const PROTECTED_PATHS = [
  '/lesson',   // /lesson/lesson13, lesson14, ... từ DB
  '/lesson0', '/lesson1', '/lesson2', '/lesson3', '/lesson4', '/lesson5', '/lesson6',
  '/lesson7', '/lesson8', '/lesson9', '/lesson10', '/lesson11', '/lesson12',
  '/lesson13', '/lesson14', '/lesson15', '/lesson16', '/lesson17', '/lesson18', '/lesson19',
  '/lesson20', '/lesson21', '/lesson22', '/lesson23', '/lesson24', '/lesson25',
  '/n5-test', '/n5-advanced-test', '/n5-test-21-25',
  '/dashboard', '/admin-secret', '/analytics', '/kanji-radicals', '/pronunciation',
];

/** Bài 13 trở đi + Mock test: chỉ user đã chuyển khoản và được admin xác nhận (is_premium = true). Không cấp quyền trước khi thanh toán. */
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

/** Trang chủ, login, signup, API: không yêu cầu đăng nhập. Còn lại theo PROTECTED_PATHS (gồm tất cả bài học). */
function isProtectedPath(pathname: string): boolean {
  if (pathname === '/') return false;
  if (pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/update-password') return false;
  if (pathname.startsWith('/api')) return false;
  return PROTECTED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'));
}

const PUBLIC_PATHS = ['/', '/login', '/signup', '/forgot-password', '/update-password'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next({ request });
  }

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

    if (isProtectedPath(pathname)) {
      if (!user) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', pathname);
        return NextResponse.redirect(loginUrl);
      }
      // Bài 13 trở đi + Mock test: chỉ khi đã chuyển khoản và admin xác nhận (is_premium). Không cấp quyền trước khi thanh toán.
      if (isLesson13PlusOrMock(pathname)) {
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
