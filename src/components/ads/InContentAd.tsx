import React from 'react';
import AdUnit from './AdUnit';
import { AD_SLOTS } from './config/adSlots';
import { useAds } from '../../context/AdsContext';

export default function InContentAd() {
  const { showAds } = useAds();

  if (!showAds) return null;

  return (
    <div className="my-8">
      <AdUnit
        slot={AD_SLOTS.inContent.id}
        width={AD_SLOTS.inContent.width}
        height={AD_SLOTS.inContent.height}
        format={AD_SLOTS.inContent.format}
        layout="in-article"
      />
    </div>
  );
}