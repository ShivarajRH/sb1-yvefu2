import { useState, useEffect } from 'react';
import { Fund } from '../types';
import { fetchFundDetails } from '../services/fundService';

export function useFundDetails(schemeCode: number) {
  const [fund, setFund] = useState<Fund | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFundDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchFundDetails(schemeCode);
        setFund(data);
      } catch (err) {
        setError('Failed to load fund details');
        console.error('Fund details error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFundDetails();
  }, [schemeCode]);

  return { fund, loading, error };
}