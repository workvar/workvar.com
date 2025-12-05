import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <Image src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/Black-W%20Logo-Transparent_vpxZSMC3g.png" alt="WorkVar" width={80} height={100} />
    </Link>
  );
}


