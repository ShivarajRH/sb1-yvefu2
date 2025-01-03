import React, { useState, useEffect } from 'react';
import { LineChart } from 'lucide-react';
import PerformanceFilter from '../components/dashboard/PerformanceFilter';
import PerformanceSection from '../components/dashboard/PerformanceSection';
import IndicesOverview from '../components/dashboard/IndicesOverview';
import InContentAd from '../components/ads/InContentAd';
import { Fund } from '../types';
import { Stock } from '../types/stock';
import { fetchTopPerformingFunds } from '../services/fundService';
import { fetchTopPerformingStocks } from '../services/stockService';

export default function DashboardPage() {
  const [range, setRange] = useState<'7d' | '30d' | '90d' | '1y' | '3y' | '5y'>('30d');
  const [topFunds, setTopFunds] = useState<Fund[]>([]);
  const [topStocks, setTopStocks] = useState<Stock[]>([]);
  const [recommendedFunds, setRecommendedFunds] = useState<Fund[]>([]);
  const [recommendedStocks, setRecommendedStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [funds, stocks] = await Promise.all([
          fetchTopPerformingFunds(range),
          fetchTopPerformingStocks(range)
        ]);
        
        setTopFunds(funds);
        setTopStocks(stocks);
        setRecommendedFunds(funds.slice().reverse());
        setRecommendedStocks(stocks.slice().reverse());
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <LineChart className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Market Dashboard
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track top performing funds and stocks across different time periods
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Indices</h2>
        <IndicesOverview />
      </div>

      <PerformanceFilter range={range} onRangeChange={setRange} />

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <PerformanceSection
            title="Top Performing Funds"
            items={topFunds}
            type="fund"
          />

          <InContentAd />

          <PerformanceSection
            title="Top Performing Stocks"
            items={topStocks}
            type="stock"
          />

          <InContentAd />

          <PerformanceSection
            title="Recommended Funds"
            items={recommendedFunds}
            type="fund"
          />

          <InContentAd />

          <PerformanceSection
            title="Recommended Stocks"
            items={recommendedStocks}
            type="stock"
          />
        </>
      )}
    </div>
  );
}