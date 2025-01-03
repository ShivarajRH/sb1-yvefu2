import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Fund } from '../../types';
import { Stock } from '../../types/stock';
import FundCard from '../FundCard';
import StockCard from '../StockCard';
import SectionHeader from './SectionHeader';

interface PerformanceSectionProps {
  title: string;
  items: (Fund | Stock)[];
  type: 'fund' | 'stock';
  onRefresh: () => Promise<void>;
}

export default function PerformanceSection({ 
  title, 
  items, 
  type,
  onRefresh 
}: PerformanceSectionProps) {
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await onRefresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-12">
      <SectionHeader
        title={title}
        icon={<TrendingUp />}
        onRefresh={handleRefresh}
        loading={loading}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          type === 'fund' ? (
            <FundCard key={`fund-${(item as Fund).schemeCode}`} fund={item as Fund} />
          ) : (
            <StockCard key={`stock-${(item as Stock).id}`} stock={item as Stock} />
          )
        ))}
      </div>
    </div>
  );
}