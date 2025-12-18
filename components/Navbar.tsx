'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  return (
    <nav className="bg-navy sticky top-0 z-50">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo - extends 30% below navbar */}
          <Link href="/" className="flex-shrink-0 absolute top-0 left-4 z-[60]">
            <Image 
              src="/images/logo.png" 
              alt="TRSLAB" 
              width={160} 
              height={115} 
              className="h-[7rem] w-auto"
              priority
            />
          </Link>
          
          {/* Spacer for logo */}
          <div className="w-44"></div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
            lg:flex items-center gap-1
            ${isOpen 
              ? 'absolute top-20 left-0 right-0 bg-navy flex flex-col p-4 border-t border-white/10 z-50' 
              : 'hidden lg:flex'
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

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="icon-paper-plane text-primary text-lg"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Email</span>
                <a href="mailto:info@electroitsolutions.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  info@electroitsolutions.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="icon-phone2 text-primary text-lg"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Call</span>
                <a href="tel:+971585912084" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  +971 58 591 2084
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm
                         hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Free Consulting
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
