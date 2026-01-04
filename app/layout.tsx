import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TSR Lab - Market Research and Policy Advisory',
  description: 'We provide cutting-edge digital strategies to transform your business operations and drive sustainable growth in a digital-first world.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}