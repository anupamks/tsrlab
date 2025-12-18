import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import AOSProvider from '@/components/AOSProvider';
import './globals.css';

// Keep icon fonts
import '@/styles/flaticon.css';
import '@/styles/ionicons.min.css';
import '@/styles/icomoon.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Consolution - Business Consulting',
  description: 'We Are The Best Consulting Agency - Helping businesses grow with expert guidance',
  keywords: 'consulting, business, finance, strategy, marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-nunito antialiased">
        <AOSProvider>
          <Loader />
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
