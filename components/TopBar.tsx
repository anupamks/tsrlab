'use client';

import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div className="flex flex-col md:flex-row items-center justify-between" suppressHydrationWarning>
          {/* Logo */}
          <div className="py-4" suppressHydrationWarning>
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors" suppressHydrationWarning>
              Consolution
            </Link>
          </div>
          
          {/* Contact Info & CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6 pb-4 md:pb-0">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="icon-paper-plane text-primary text-xl"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Email</span>
                <span className="text-sm font-semibold text-gray-800">youremail@email.com</span>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="icon-phone2 text-primary text-xl"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Call</span>
                <span className="text-sm font-semibold text-gray-800">+971 58 591 2084</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm 
                         hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Free Consulting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
