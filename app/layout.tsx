import type { Metadata } from 'next';
import './globals.css';
import { General } from '@/components';

export const metadata: Metadata = {
  title: 'WorkVar 2.0 | Productivity OS',
  description: 'A minimalist, privacy-focused productivity suite designed for deep work and sustainable workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <General.LayoutComponent>
          {children}
        </General.LayoutComponent>
      </body>
    </html>
  );
}


