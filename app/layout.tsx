import './globals.css';
import type { ReactNode } from 'react';
import { VipProvider } from '@/components/VipProvider';

export const metadata = {
  title: 'Japanese JLPT App',
  description: 'Ứng dụng học tiếng Nhật sơ cấp đến nâng cao qua từ vựng và ngữ pháp',
  openGraph: {
    title: 'Japanese JLPT App',
    description: 'Ứng dụng học tiếng Nhật sơ cấp đến nâng cao qua từ vựng và ngữ pháp',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <VipProvider />
        {children}
      </body>
    </html>
  );
}

