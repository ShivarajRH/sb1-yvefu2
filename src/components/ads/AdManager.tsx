import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdManager() {
  useEffect(() => {
    // Initialize adsbygoogle only once when component mounts
    if (typeof window !== 'undefined' && !window.adsbygoogle) {
      window.adsbygoogle = window.adsbygoogle || [];
    }
  }, []);

  return null;
}