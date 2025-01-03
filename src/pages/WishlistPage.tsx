import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import WishlistTabs from '../components/WishlistTabs';
import WishlistTable from '../components/wishlist/WishlistTable';
import { getLiveFundNav } from '../services/liveDataService';
import { getStockQuote } from '../services/stockApi';

export default function WishlistPage() {
  const { fundWishlist, stockWishlist, addToWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState<'funds' | 'stocks'>('funds');

  const refreshFunds = async () => {
    const updatedFunds = await Promise.all(
      fundWishlist.map(async (fund) => {
        try {
          const latestNav = await getLiveFundNav(fund.schemeCode);
          return {
            ...fund,
            nav: latestNav.nav,
            date: latestNav.date
          };
        } catch (error) {
          console.error(`Failed to refresh fund ${fund.schemeCode}:`, error);
          return fund;
        }
      })
    );

    // Update wishlist with new data
    updatedFunds.forEach(fund => addToWishlist(fund));
  };

  const refreshStocks = async () => {
    const updatedStocks = await Promise.all(
      stockWishlist.map(async (stock) => {
        try {
          const quote = await getStockQuote(stock.symbol);
          return {
            ...stock,
            ...quote
          };
        } catch (error) {
          console.error(`Failed to refresh stock ${stock.symbol}:`, error);
          return stock;
        }
      })
    );

    // Update wishlist with new data
    updatedStocks.forEach(stock => addToWishlist(stock));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Star className="h-12 w-12 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">
          Track your favorite investments in one place
        </p>
      </div>

      <WishlistTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="mb-8">
        <WishlistTable
          type={activeTab}
          items={activeTab === 'funds' ? fundWishlist : stockWishlist}
          onRefresh={activeTab === 'funds' ? refreshFunds : refreshStocks}
        />
      </div>
    </div>
  );
}