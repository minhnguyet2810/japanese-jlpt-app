'use client';

import Link from 'next/link';
import { JLPT_LEVELS } from '@/lib/levels';

type Variant = 'bar' | 'cards';

interface LevelSelectorProps {
  /** 'bar' = thanh ngang, 'cards' = từng ô N5/N4/N3/N2 */
  variant?: Variant;
  /** Tiêu đề phía trên (vd: "Chọn cấp độ để học") */
  title?: string;
  /** Có hiển thị mô tả nhỏ (Sơ cấp, Sắp ra mắt) không */
  showDescription?: boolean;
}

const itemBase =
  'inline-flex flex-col items-center justify-center min-w-[88px] py-3 px-4 rounded-xl font-semibold no-underline transition-all duration-150 text-center gap-0.5';
const available =
  'bg-gradient-to-br from-green-600 to-green-800 text-white border-2 border-green-600 shadow shadow-green-600/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-600/35';
const coming =
  'bg-gray-100 text-gray-400 border-2 border-dashed border-gray-300 cursor-not-allowed';

export function LevelSelector({
  variant = 'bar',
  title,
  showDescription = true,
}: LevelSelectorProps) {
  return (
    <section className="mb-5" aria-label="Chọn cấp độ JLPT">
      {title && (
        <h2 className="text-[1.1rem] font-semibold mb-3 text-gray-700">{title}</h2>
      )}
      <div
        className={
          variant === 'cards'
            ? 'level-cards-grid'
            : 'flex flex-wrap gap-3 [&>a]:flex-1 [&>span]:flex-1 [&>a]:min-w-[80px] [&>span]:min-w-[80px]'
        }
      >
        {JLPT_LEVELS.map((level) => {
          const content = (
            <>
              <span className="text-[1.15rem] leading-none block mb-0.5" style={{ display: 'block' }}>
                {level.label}
              </span>
              {showDescription && level.description ? (
                <span
                  className="text-[0.7rem] font-medium opacity-90 leading-tight text-center"
                  style={{ display: 'block', marginTop: '0.25rem' }}
                >
                  {level.description}
                </span>
              ) : null}
            </>
          );
          if (level.available) {
            return (
              <Link
                key={level.id}
                href={level.startPath}
                className={`${itemBase} ${available}`}
              >
                {content}
              </Link>
            );
          }
          return (
            <span
              key={level.id}
              className={`${itemBase} ${coming}`}
              aria-disabled
            >
              {content}
            </span>
          );
        })}
      </div>
    </section>
  );
}
