import React from 'react';
import { ListFilter } from 'lucide-react';

interface WishlistTabsProps {
  activeTab: 'funds' | 'stocks';
  onTabChange: (tab: 'funds' | 'stocks') => void;
}

export default function WishlistTabs({ activeTab, onTabChange }: WishlistTabsProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        <button
          onClick={() => onTabChange('funds')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'funds'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Mutual Funds
        </button>
        <button
          onClick={() => onTabChange('stocks')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'stocks'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          Stocks
        </button>
      </div>
    </div>
  );
}