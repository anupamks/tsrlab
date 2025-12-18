'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        disable: false,
      });
    }
  }, [mounted]);

  // Refresh AOS on route changes
  useEffect(() => {
    if (mounted) {
      AOS.refresh();
    }
  });

  return <>{children}</>;
}
