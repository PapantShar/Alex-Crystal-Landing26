import Link from 'next/link';
//import Logotip from '../../public/images/logo.png';
//import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="#start">
      <img src="/images/logo.png" alt="logo" className="h-9 md:h-14" />
    </Link>
  );
}
