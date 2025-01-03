import { useState, useEffect, useCallback } from 'react';
import { Fund, SearchResult } from '../types';

export function useMutualFunds(searchTerm: string): SearchResult {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFunds = useCallback(async () => {
    if (!searchTerm || searchTerm.length < 3) {
      setFunds([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.mfapi.in/mf/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) throw new Error('Failed to fetch funds');
      
      const data = await response.json();
      
      // Fetch NAV details for each fund
      const fundsWithNav = await Promise.all(
        data.slice(0, 10).map(async (fund: { schemeCode: number }) => {
          const navResponse = await fetch(`https://api.mfapi.in/mf/${fund.schemeCode}`);
          if (!navResponse.ok) throw new Error('Failed to fetch NAV data');
          
          const navData = await navResponse.json();
          return {
            schemeCode: fund.schemeCode,
            schemeName: navData.meta.scheme_name,
            nav: navData.data[0].nav,
            date: navData.data[0].date,
          };
        })
      );

      // Filter out any duplicate scheme codes
      const uniqueFunds = fundsWithNav.reduce((acc: Fund[], current) => {
        const exists = acc.find(fund => fund.schemeCode === current.schemeCode);
        if (!exists) {
          acc.push(current);
        }
        return acc;
      }, []);

      setFunds(uniqueFunds);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const debounceTimer = setTimeout(fetchFunds, 500);
    return () => clearTimeout(debounceTimer);
  }, [fetchFunds]);

  return { funds, loading, error };
}