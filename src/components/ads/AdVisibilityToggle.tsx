import React from 'react';
import { Eye } from 'lucide-react';
import { useAds } from '../../context/AdsContext';

export default function AdVisibilityToggle() {
  const { showAds, setShowAds } = useAds();

  return (
    <div className="flex items-center space-x-2">
      <Eye className="h-5 w-5 text-blue-500" />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={showAds}
          onChange={(e) => setShowAds(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-700">
          {showAds ? 'Ads Enabled' : 'Ads Disabled'}
        </span>
      </label>
    </div>
  );
}