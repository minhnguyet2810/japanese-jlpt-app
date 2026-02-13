/**
 * Cấu hình các cấp độ JLPT (N5, N4, N3, N2).
 * VIP có thể chọn cấp độ để học; N5 đã có, N4/N3/N2 sắp ra mắt.
 */
export type LevelId = 'n5' | 'n4' | 'n3' | 'n2';

export interface JlptLevel {
  id: LevelId;
  label: string;
  /** Có nội dung học ngay (N5). N4/N3/N2 = sắp ra mắt */
  available: boolean;
  /** Đường dẫn trang bắt đầu học (N5 = /lesson0) */
  startPath: string;
  /** Mô tả ngắn */
  description?: string;
}

export const JLPT_LEVELS: JlptLevel[] = [
  {
    id: 'n5',
    label: 'N5',
    available: true,
    startPath: '/lesson0',
    description: 'Sơ cấp – Minna no Nihongo',
  },
  {
    id: 'n4',
    label: 'N4',
    available: false,
    startPath: '/n4',
    description: 'Sắp ra mắt',
  },
  {
    id: 'n3',
    label: 'N3',
    available: false,
    startPath: '/n3',
    description: 'Sắp ra mắt',
  },
  {
    id: 'n2',
    label: 'N2',
    available: false,
    startPath: '/n2',
    description: 'Sắp ra mắt',
  },
];

export function getLevel(id: LevelId): JlptLevel | undefined {
  return JLPT_LEVELS.find((l) => l.id === id);
}
