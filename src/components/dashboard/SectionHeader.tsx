import React from 'react';
import { TrendingUp } from 'lucide-react';
import RefreshButton from '../common/RefreshButton';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  onRefresh: () => void;
  loading?: boolean;
}

export default function SectionHeader({ 
  title, 
  icon = <TrendingUp />, 
  onRefresh,
  loading = false 
}: SectionHeaderProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="h-6 w-6 text-blue-500 mr-2">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mr-2">{title}</h2>
      <RefreshButton onClick={onRefresh} loading={loading} />
    </div>
  );
}