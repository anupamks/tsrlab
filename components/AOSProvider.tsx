'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
    });

    // Re-initialize on route change
    AOS.refresh();
  }, []);

  return <>{children}</>;
}

