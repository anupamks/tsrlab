'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <svg className="animate-spin" width="48" height="48" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#007bff"
          strokeDasharray="138"
          strokeDashoffset="35"
          className="origin-center"
        />
      </svg>
    </div>
  );
}
