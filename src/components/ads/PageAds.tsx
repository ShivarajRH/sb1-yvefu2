import React from 'react';
import AdUnit from './AdUnit';
import { AD_SLOTS } from './config/adSlots';
import { useAds } from '../../context/AdsContext';

export default function PageAds() {
  const { showAds } = useAds();

  if (!showAds) return null;

  return (
    <>
      {/* Left Sidebar Ad */}
      <div className="fixed left-4 top-1/4 hidden xl:block">
        <AdUnit
          slot={AD_SLOTS.leftSidebar.id}
          width={AD_SLOTS.leftSidebar.width}
          height={AD_SLOTS.leftSidebar.height}
          format={AD_SLOTS.leftSidebar.format}
        />
      </div>

      {/* Right Sidebar Ad */}
      <div className="fixed right-4 top-1/4 hidden xl:block">
        <AdUnit
          slot={AD_SLOTS.rightSidebar.id}
          width={AD_SLOTS.rightSidebar.width}
          height={AD_SLOTS.rightSidebar.height}
          format={AD_SLOTS.rightSidebar.format}
        />
      </div>

      {/* Bottom Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="max-w-[728px] mx-auto">
          <AdUnit
            slot={AD_SLOTS.bottomBanner.id}
            width={AD_SLOTS.bottomBanner.width}
            height={AD_SLOTS.bottomBanner.height}
            format={AD_SLOTS.bottomBanner.format}
          />
        </div>
      </div>
    </>
  );
}