export const themes = {
  navy: {
    name: 'Navy Blue',
    primary: '#007bff',
    primaryHover: '#0056b3',
    navbar: '#0d1128',
    accent: '#17a2b8',
    textOnPrimary: '#ffffff',
  },
  corporate: {
    name: 'Dark Corporate',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    navbar: '#111827',
    accent: '#f59e0b',
    textOnPrimary: '#ffffff',
  },
  teal: {
    name: 'Ocean Teal',
    primary: '#0d9488',
    primaryHover: '#0f766e',
    navbar: '#134e4a',
    accent: '#06b6d4',
    textOnPrimary: '#ffffff',
  },
  green: {
    name: 'Professional Green',
    primary: '#059669',
    primaryHover: '#047857',
    navbar: '#064e3b',
    accent: '#10b981',
    textOnPrimary: '#ffffff',
  },
  purple: {
    name: 'Elegant Purple',
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    navbar: '#1e1b4b',
    accent: '#a855f7',
    textOnPrimary: '#ffffff',
  },
  red: {
    name: 'Modern Red',
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    navbar: '#1c1917',
    accent: '#f97316',
    textOnPrimary: '#ffffff',
  },
  gray: {
    name: 'Sleek Gray',
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    navbar: '#18181b',
    accent: '#6366f1',
    textOnPrimary: '#ffffff',
  },
  light: {
    name: 'Light Theme',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    navbar: '#ffffff',
    accent: '#3b82f6',
    textOnPrimary: '#ffffff',
  },
};

export type ThemeKey = keyof typeof themes;
export type Theme = typeof themes[ThemeKey];

