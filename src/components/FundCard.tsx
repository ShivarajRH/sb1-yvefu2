import React, { useState } from 'react';
import { TrendingUp, Calendar, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Fund } from '../types';
import { useWishlist } from '../context/WishlistContext';
import FundChart from './FundChart';

interface FundCardProps {
  fund: Fund;
}

export default function FundCard({ fund }: FundCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [showChart, setShowChart] = useState(false);
  const inWishlist = isInWishlist(fund.schemeCode, 'fund');

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(fund.schemeCode, 'fund');
    } else {
      addToWishlist(fund);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1 mr-2">
            {fund.schemeName}
          </h3>
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-colors ${
              inWishlist
                ? 'text-yellow-500 hover:text-yellow-600'
                : 'text-gray-400 hover:text-gray-500'
            }`}
            title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Star className="h-5 w-5" fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
            <span className="font-medium text-lg">₹{fund.nav}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            <span>{new Date(fund.date).toLocaleDateString()}</span>
          </div>
          <div className="text-sm text-gray-500">
            Scheme Code: {fund.schemeCode}
          </div>
        </div>
        <button
          onClick={() => setShowChart(!showChart)}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          {showChart ? (
            <>Hide Chart <ChevronUp className="ml-1 h-4 w-4" /></>
          ) : (
            <>Show Chart <ChevronDown className="ml-1 h-4 w-4" /></>
          )}
        </button>
      </div>
      {showChart && (
        <div className="border-t border-gray-100">
          <FundChart schemeCode={fund.schemeCode} schemeName={fund.schemeName} />
        </div>
      )}
    </div>
  );
}