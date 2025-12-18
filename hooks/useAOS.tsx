'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);
}

