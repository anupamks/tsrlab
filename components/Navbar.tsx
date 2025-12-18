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
    // Handle search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container d-flex align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <form onSubmit={handleSearch} className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control pl-3"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="form-control search">
              <span className="ion-ios-search"></span>
            </button>
          </div>
        </form>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`nav-item ${pathname === item.href ? 'active' : ''}`}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${item.href === '/' ? 'pl-0' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

