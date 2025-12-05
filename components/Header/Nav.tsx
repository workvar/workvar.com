'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants';
import { General } from '@/components';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-10">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`text-sm font-medium tracking-wide transition-colors ${
            pathname === item.path
              ? 'text-forest-800'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          {item.label}
        </Link>
      ))}
      <Link href="/research">
        <General.ButtonComponent size="sm" variant="primary">Read the Report</General.ButtonComponent>
      </Link>
    </nav>
  );
}

