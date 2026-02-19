import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/images/logo.png';

export default function Logo() {
  return (
    <Link href="#start">
      <Image src={logoImage} alt="logo" className="h-9 w-auto md:h-14" />
    </Link>
  );
}
