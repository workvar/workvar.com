'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { General } from '@/components';
import { useMobileMenu } from './Header';

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return (
    <>
      <button
        className="md:hidden p-2 text-stone-600 hover:text-stone-900"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-stone-50 border-b border-stone-200 p-6 flex flex-col space-y-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-3 text-lg font-serif font-medium rounded-xl ${
                pathname === item.path
                  ? 'bg-stone-100 text-forest-800'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/research" className="block w-full">
              <General.ButtonComponent fullWidth>Read the Report</General.ButtonComponent>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

