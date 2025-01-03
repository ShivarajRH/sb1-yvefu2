import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface AdsContextType {
  showAds: boolean;
  setShowAds: (show: boolean) => void;
}

const AdsContext = createContext<AdsContextType | undefined>(undefined);

export function AdsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [showAds, setShowAds] = useState(() => {
    if (!user) return false; // Default to false for all users
    const saved = localStorage.getItem(`ads_preference_${user.uid}`);
    return saved ? JSON.parse(saved) : false; // Default to false if no preference is saved
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(`ads_preference_${user.uid}`, JSON.stringify(showAds));
    }
  }, [showAds, user]);

  return (
    <AdsContext.Provider value={{ showAds, setShowAds }}>
      {children}
    </AdsContext.Provider>
  );
}

export function useAds() {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error('useAds must be used within an AdsProvider');
  }
  return context;
}