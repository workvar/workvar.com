import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { General } from '@/components';

export const metadata: Metadata = {
  title: 'WorkVar 2.0 | Productivity OS',
  description: 'A minimalist, privacy-focused productivity suite designed for deep work and sustainable workflows.',
  icons: {
    icon: [
      {
        url: '/favicons/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: '/favicons/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicons/favicon.ico',
        rel: 'shortcut icon',
      },
    ],
    apple: [
      {
        url: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    title: 'WorkVar',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <General.Analytics />
        </Suspense>
        <General.LayoutComponent>
          {children}
        </General.LayoutComponent>
      </body>
    </html>
  );
}


