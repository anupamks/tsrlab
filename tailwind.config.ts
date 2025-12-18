import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-accent)',
        dark: '#343a40',
        'navy': 'var(--color-navbar)',
        'blue-dark': '#1a1f36',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        'nunito': ['var(--font-nunito)', 'Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg_1.jpg')",
        'hero-2': "url('/images/bg_2.jpg')",
        'hero-3': "url('/images/bg_3.jpg')",
        'counter-bg': "url('/images/bg_2.jpg')",
      },
    },
  },
  plugins: [],
}
export default config

