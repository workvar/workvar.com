'use client';

import {Header, Footer} from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-stone-50 selection:bg-forest-200 selection:text-forest-900">
      <Header.HeaderComponent />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer.FooterComponent />
    </div>
  );
}
