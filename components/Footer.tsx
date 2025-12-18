'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-navy text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Have a Questions?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="icon-map-marker text-primary mt-1"></span>
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li>
                <a href="tel:+23923929210" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="icon-phone text-primary"></span>
                  <span>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@yourdomain.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="icon-envelope text-primary"></span>
                  <span>info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Recent Blog</h3>
            <div className="space-y-4">
              {[1, 2].map((id) => (
                <div key={id} className="flex gap-4">
                  <div 
                    className="w-20 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url('/images/image_${id}.jpg')` }}
                  />
                  <div>
                    <h4 className="text-sm font-medium text-white hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${id}`}>
                        Even the all-powerful Pointing has no control about
                      </Link>
                    </h4>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <span className="icon-calendar"></span> June 27, 2019
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="icon-person"></span> Admin
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="icon-chat"></span> 19
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <span className="ion-ios-arrow-round-forward text-primary"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe & Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Subscribe Us!</h3>
            <form onSubmit={handleSubscribe} className="mb-8">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white 
                           placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold 
                           hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {[
                { href: 'https://twitter.com', icon: 'icon-twitter' },
                { href: 'https://facebook.com', icon: 'icon-facebook' },
                { href: 'https://instagram.com', icon: 'icon-instagram' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                             hover:bg-primary transition-colors"
                >
                  <span className={social.icon}></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>
            Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
            <span className="icon-heart text-red-500"></span> by{' '}
            <a 
              href="https://colorlib.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
