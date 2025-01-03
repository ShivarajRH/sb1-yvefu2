import React, { useState, useEffect } from 'react';
import { StockIndex } from '../../types/indices';
import IndexSection from './IndexSection';
import {
  fetchNifty50,
  fetchNiftyMidcap150,
  fetchNiftyPSUBank,
  fetchNiftySmallcap50
} from '../../services/indicesService';

export default function IndicesOverview() {
  const [indices, setIndices] = useState<StockIndex[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIndices = async () => {
      try {
        const [nifty50, midcap150, psuBank, smallcap50] = await Promise.all([
          fetchNifty50(),
          fetchNiftyMidcap150(),
          fetchNiftyPSUBank(),
          fetchNiftySmallcap50()
        ]);
        setIndices([nifty50, midcap150, psuBank, smallcap50]);
      } catch (error) {
        console.error('Failed to load indices:', error);
      } finally {
        setLoading(false);
      }
    };

    loadIndices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {indices.map((index) => (
        <IndexSection
          key={index.name}
          title={index.name}
          stocks={index.stocks}
        />
      ))}
    </div>
  );
}