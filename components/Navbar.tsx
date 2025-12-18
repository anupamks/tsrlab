'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, FormEvent } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <nav className="bg-navy sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className={`
            md:flex items-center gap-1
            ${isOpen 
              ? 'absolute top-16 left-0 right-0 bg-navy flex flex-col p-4 border-t border-white/10' 
              : 'hidden md:flex'
            }
          `}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${pathname === item.href 
                      ? 'text-primary bg-white/5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-32 md:w-40 bg-white/10 border border-white/20 rounded-full px-4 py-2 
                           text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-primary focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <span className="ion-ios-search text-lg"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
