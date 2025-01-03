import { useEffect, useRef, useState } from 'react';
import { debounce } from '../utils/debounce';

export function useAdInitialization() {
  const initialized = useRef(false);
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = adRef.current;
    if (!currentRef) return;

    // Debounced ad initialization
    const initializeAd = debounce(() => {
      if (!initialized.current && isVisible) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          initialized.current = true;
        } catch (error) {
          console.error('AdSense initialization error:', error);
        }
      }
    }, 100);

    // Intersection Observer to check visibility
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Resize Observer with error handling
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      
      const entry = entries[0];
      if (entry.contentRect.width > 0) {
        initializeAd();
      }
    });

    intersectionObserver.observe(currentRef);
    resizeObserver.observe(currentRef);

    return () => {
      initializeAd.cancel();
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      initialized.current = false;
    };
  }, []);

  return { adRef, initialized };
}