import './globals.css';
import type { ReactNode } from 'react';
import { VipProvider } from '@/components/VipProvider';

export const metadata = {
  title: 'Japanese JLPT App',
  description: 'Ứng dụng học tiếng Nhật JLPT với từ vựng và tài chính/CFA',
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

