'use client';

import { useState, useEffect } from 'react';

const themes = {
  navy: {
    name: 'Navy Blue',
    primary: '#007bff',
    primaryHover: '#0056b3',
    navbar: '#0d1128',
    accent: '#17a2b8',
  },
  corporate: {
    name: 'Dark Corporate',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    navbar: '#111827',
    accent: '#f59e0b',
  },
  teal: {
    name: 'Ocean Teal',
    primary: '#0d9488',
    primaryHover: '#0f766e',
    navbar: '#134e4a',
    accent: '#06b6d4',
  },
  green: {
    name: 'Professional Green',
    primary: '#059669',
    primaryHover: '#047857',
    navbar: '#064e3b',
    accent: '#10b981',
  },
  purple: {
    name: 'Elegant Purple',
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    navbar: '#1e1b4b',
    accent: '#a855f7',
  },
  red: {
    name: 'Modern Red',
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    navbar: '#1c1917',
    accent: '#f97316',
  },
  gray: {
    name: 'Sleek Gray',
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    navbar: '#18181b',
    accent: '#6366f1',
  },
  light: {
    name: 'Light Theme',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    navbar: '#ffffff',
    accent: '#3b82f6',
  },
};

type ThemeKey = keyof typeof themes;

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('navy');
  const [mounted, setMounted] = useState(false);

  // Load theme on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('site-theme') as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeKey: ThemeKey) => {
    const theme = themes[themeKey];
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-primary-hover', theme.primaryHover);
    document.documentElement.style.setProperty('--color-navbar', theme.navbar);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
  };

  const handleThemeChange = (themeKey: ThemeKey) => {
    setCurrentTheme(themeKey);
    applyTheme(themeKey);
    localStorage.setItem('site-theme', themeKey);
    setIsOpen(false);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg 
                   hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        style={{ backgroundColor: themes[currentTheme].primary }}
        title="Theme Switcher"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {/* Theme Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl p-4">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Choose Theme</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(themes) as ThemeKey[]).map((key) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-200
                  ${currentTheme === key 
                    ? 'border-gray-900 shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow'
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-6 h-6 rounded-full border border-gray-200"
                    style={{ backgroundColor: themes[key].primary }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: themes[key].navbar }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 block text-left">
                  {themes[key].name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
