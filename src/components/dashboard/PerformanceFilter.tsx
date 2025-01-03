import React from 'react';
import { Calendar } from 'lucide-react';

interface PerformanceFilterProps {
  range: '7d' | '30d' | '90d' | '1y' | '3y' | '5y';
  onRangeChange: (range: '7d' | '30d' | '90d' | '1y' | '3y' | '5y') => void;
}

export default function PerformanceFilter({ range, onRangeChange }: PerformanceFilterProps) {
  const ranges = [
    { value: '7d', label: '7D' },
    { value: '30d', label: '1M' },
    { value: '90d', label: '3M' },
    { value: '1y', label: '1Y' },
    { value: '3y', label: '3Y' },
    { value: '5y', label: '5Y' },
  ] as const;

  return (
    <div className="flex items-center space-x-2 mb-6">
      <Calendar className="h-5 w-5 text-blue-500" />
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        {ranges.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onRangeChange(value)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              range === value
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}