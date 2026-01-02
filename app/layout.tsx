import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import './globals.css';

// Keep icon fonts
import '@/styles/flaticon.css';
import '@/styles/ionicons.min.css';
import '@/styles/icomoon.css';

// Dynamic imports with no SSR to prevent hydration issues
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const AOSProvider = dynamic(() => import('@/components/AOSProvider'), { ssr: false });
const ThemeSwitcher = dynamic(() => import('@/components/ThemeSwitcher'), { ssr: false });

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Market Research and Policy Advisory',
  description: 'Expert market research and policy advisory services. Comprehensive data analytics, economic research, and strategic insights to help businesses and organizations make informed decisions.',
  keywords: 'market research, policy advisory, economic research, data analytics, business intelligence, strategic consulting, market analysis, policy development, research services, market insights, competitive analysis, industry research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-nunito antialiased">
        <Loader />
        <Navbar />
        <AOSProvider>
          <main>{children}</main>
        </AOSProvider>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
