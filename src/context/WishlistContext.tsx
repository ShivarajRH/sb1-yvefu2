import React, { createContext, useContext, useState, useEffect } from 'react';
import { Fund, WishlistContextType } from '../types';
import { Stock } from '../types/stock';
import { useAuth } from './AuthContext';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [fundWishlist, setFundWishlist] = useState<Fund[]>(() => {
    if (!user) return [];
    const saved = localStorage.getItem(`fund_wishlist_${user.uid}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [stockWishlist, setStockWishlist] = useState<Stock[]>(() => {
    if (!user) return [];
    const saved = localStorage.getItem(`stock_wishlist_${user.uid}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(`fund_wishlist_${user.uid}`, JSON.stringify(fundWishlist));
      localStorage.setItem(`stock_wishlist_${user.uid}`, JSON.stringify(stockWishlist));
    }
  }, [fundWishlist, stockWishlist, user]);

  const addToWishlist = (item: Fund | Stock) => {
    if (!user) return;
    if ('schemeCode' in item) {
      setFundWishlist(prev => [...prev, item as Fund]);
    } else {
      setStockWishlist(prev => [...prev, item as Stock]);
    }
  };

  const removeFromWishlist = (id: number | string, type: 'fund' | 'stock') => {
    if (!user) return;
    if (type === 'fund') {
      setFundWishlist(prev => prev.filter(fund => fund.schemeCode !== id));
    } else {
      setStockWishlist(prev => prev.filter(stock => stock.symbol !== id));
    }
  };

  const isInWishlist = (id: number | string, type: 'fund' | 'stock') => {
    if (!user) return false;
    if (type === 'fund') {
      return fundWishlist.some(fund => fund.schemeCode === id);
    }
    return stockWishlist.some(stock => stock.symbol === id);
  };

  return (
    <WishlistContext.Provider
      value={{ fundWishlist, stockWishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}