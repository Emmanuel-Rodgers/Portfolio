'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <Link href="/" className="text-2xl font-bold text-blue-700">Emmanuel Mwale</Link>
      <div className="flex gap-6">
        <Link href="/" className={`${isActive('/')} font-medium transition-colors`}>
          Home
        </Link>
        <Link href="/projects" className={`${isActive('/projects')} font-medium transition-colors`}>
          Projects
        </Link>
        <Link href="/contact" className={`${isActive('/contact')} font-medium transition-colors`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}