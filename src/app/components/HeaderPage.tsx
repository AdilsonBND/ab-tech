'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User } from 'lucide-react';

export default function HeaderPage() {
  const pathname = usePathname();

  const links = [
    { href: '/', icon: <Home size={18} />, isActive: pathname === '/' },
    { href: '/about', icon: <User size={18} />, isActive: pathname === '/about' },
  ];

  return (
    <header className="fixed top-4 right-4 z-50 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-3 shadow-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`p-2 rounded-full hover:bg-white/10 transition ${
            link.isActive ? 'bg-white/10 text-white' : 'text-gray-400'
          }`}
        >
          {link.icon}
        </Link>
      ))}
    </header>
  );
}
