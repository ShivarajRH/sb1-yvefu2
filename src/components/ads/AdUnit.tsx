import React from 'react';
import { useAdInitialization } from './hooks/useAdInitialization';

interface AdUnitProps {
  slot: string;
  width: number;
  height: number;
  format?: 'auto' | 'fluid' | 'rectangle';
  layout?: 'in-article' | 'in-feed';
  className?: string;
}

export default function AdUnit({
  slot,
  width,
  height,
  format = 'auto',
  layout,
  className = ''
}: AdUnitProps) {
  const { adRef } = useAdInitialization();

  return (
    <div
      ref={adRef}
      className={`ad-container relative ${className}`}
      style={{
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        width: '100%',
        maxWidth: format === 'rectangle' ? `${width}px` : undefined,
        visibility: 'hidden', // Hide initially until properly sized
        opacity: 0,
        transition: 'visibility 0s, opacity 0.3s ease-in-out'
      }}
      onLoad={() => {
        // Show ad container once loaded
        if (adRef.current) {
          adRef.current.style.visibility = 'visible';
          adRef.current.style.opacity = '1';
        }
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          height: format === 'rectangle' ? `${height}px` : '100%'
        }}
        data-ad-client="ca-pub-4637961908114415"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={format !== 'rectangle'}
        {...(layout && { 'data-ad-layout': layout })}
      />
    </div>
  );
}