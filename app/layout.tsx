import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import AOSProvider from '@/components/AOSProvider';

import '@/styles/style.css';
import '@/styles/animate.css';
import '@/styles/aos.css';
import '@/styles/ionicons.min.css';
import '@/styles/flaticon.css';
import '@/styles/icomoon.css';
import '@/styles/open-iconic-bootstrap.min.css';
import '@/styles/magnific-popup.css';
import '@/styles/owl.carousel.min.css';
import '@/styles/owl.theme.default.min.css';
import './globals.css';

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AOSProvider>
          <Loader />
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}

