'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { themes, ThemeKey, Theme } from '@/lib/themes';

interface ThemeContextType {
  theme: ThemeKey;
  themeData: Theme;
  setTheme: (theme: ThemeKey) => void;
  allThemes: typeof themes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>('navy');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme CSS variables
    const themeData = themes[theme];
    document.documentElement.style.setProperty('--color-primary', themeData.primary);
    document.documentElement.style.setProperty('--color-primary-hover', themeData.primaryHover);
    document.documentElement.style.setProperty('--color-navbar', themeData.navbar);
    document.documentElement.style.setProperty('--color-accent', themeData.accent);
    document.documentElement.style.setProperty('--color-text-on-primary', themeData.textOnPrimary);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeKey) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeData: themes[theme], setTheme, allThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

