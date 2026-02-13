/**
 * Paywall: Bài 0–12 N5 miễn phí (được xem thoải mái); từ Bài 13 trở đi + N4, N3, N2 khóa (VIP).
 */

export const FREE_LESSON_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const FREE_SET = new Set(FREE_LESSON_NUMBERS);

/** lessonId: "lesson0" | "lesson1" | ... | "lesson12" | "n5-test" */
export function isLessonFree(lessonId: string): boolean {
  if (lessonId === 'n5-test') return true; // N5 test miễn phí
  if (lessonId === 'n5-advanced-test') return true; // đề tổng hợp nâng cao mở để luyện
  if (lessonId === 'n5-test-21-25') return true; // Mock Bài 21–25 (đề tốt nghiệp N5)
  const num = parseInt(lessonId.replace('lesson', ''), 10);
  if (Number.isNaN(num)) return false;
  return FREE_SET.has(num as (typeof FREE_LESSON_NUMBERS)[number]);
}

export function isLessonLocked(lessonId: string): boolean {
  return !isLessonFree(lessonId);
}

/** Thanh nav 1: Bài học B0–B25 */
export const LESSON_NAV_ITEMS: { href: string; label: string; id: string }[] = [
  { href: '/lesson0', label: 'B0', id: 'lesson0' },
  { href: '/lesson1', label: 'B1', id: 'lesson1' },
  { href: '/lesson2', label: 'B2', id: 'lesson2' },
  { href: '/lesson3', label: 'B3', id: 'lesson3' },
  { href: '/lesson4', label: 'B4', id: 'lesson4' },
  { href: '/lesson5', label: 'B5', id: 'lesson5' },
  { href: '/lesson6', label: 'B6', id: 'lesson6' },
  { href: '/lesson7', label: 'B7', id: 'lesson7' },
  { href: '/lesson8', label: 'B8', id: 'lesson8' },
  { href: '/lesson9', label: 'B9', id: 'lesson9' },
  { href: '/lesson10', label: 'B10', id: 'lesson10' },
  { href: '/lesson11', label: 'B11', id: 'lesson11' },
  { href: '/lesson12', label: 'B12', id: 'lesson12' },
  { href: '/lesson13', label: 'B13', id: 'lesson13' },
  { href: '/lesson14', label: 'B14', id: 'lesson14' },
  { href: '/lesson15', label: 'B15', id: 'lesson15' },
  { href: '/lesson16', label: 'B16', id: 'lesson16' },
  { href: '/lesson17', label: 'B17', id: 'lesson17' },
  { href: '/lesson18', label: 'B18', id: 'lesson18' },
  { href: '/lesson19', label: 'B19', id: 'lesson19' },
  { href: '/lesson20', label: 'B20', id: 'lesson20' },
  { href: '/lesson21', label: 'B21', id: 'lesson21' },
  { href: '/lesson22', label: 'B22', id: 'lesson22' },
  { href: '/lesson23', label: 'B23', id: 'lesson23' },
  { href: '/lesson24', label: 'B24', id: 'lesson24' },
  { href: '/lesson25', label: 'B25', id: 'lesson25' },
];

/** Thanh nav 2: Mock Test */
export const MOCK_TEST_NAV_ITEMS: { href: string; label: string; id: string }[] = [
  { href: '/n5-test', label: 'Mock 1-14', id: 'n5-test' },
  { href: '/n5-advanced-test', label: 'Mock 15-20', id: 'n5-advanced-test' },
  { href: '/n5-test-21-25', label: 'Mock 21-25 (đề tốt nghiệp N5)', id: 'n5-test-21-25' },
];
