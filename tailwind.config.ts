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
        primary: '#007bff',
        secondary: '#17a2b8',
        dark: '#343a40',
        'navy': '#0d1128',
        'blue-dark': '#1a1f36',
        'accent': '#17a2b8',
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

