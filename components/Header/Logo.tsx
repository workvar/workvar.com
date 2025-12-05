import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <span className="font-serif text-2xl font-bold tracking-tight text-forest-900 group-hover:text-forest-700 transition-colors">
        WorkVar.
      </span>
    </Link>
  );
}


