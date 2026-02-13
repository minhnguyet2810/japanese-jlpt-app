import './globals.css';
import type { ReactNode } from 'react';
import { VipProvider } from '@/components/VipProvider';

export const metadata = {
  title: 'Japanese JLPT App',
  description: 'Ứng dụng học tiếng Nhật JLPT N5 cơ bản – từ vựng, ngữ pháp, Minna no Nihongo',
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

