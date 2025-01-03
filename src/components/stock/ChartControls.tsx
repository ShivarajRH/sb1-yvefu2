import React from 'react';

interface ChartControlsProps {
  chartType: 'line' | 'ohlc';
  interval: '1min' | '5min' | '15min' | '30min' | '60min' | 'daily';
  onChartTypeChange: (type: 'line' | 'ohlc') => void;
  onIntervalChange: (interval: '1min' | '5min' | '15min' | '30min' | '60min' | 'daily') => void;
}

export default function ChartControls({
  chartType,
  interval,
  onChartTypeChange,
  onIntervalChange
}: ChartControlsProps) {
  const intervals = ['1min', '5min', '15min', '30min', '60min', 'daily'] as const;

  return (
    <div className="flex gap-4">
      <div className="space-x-2">
        <button
          onClick={() => onChartTypeChange('line')}
          className={`px-3 py-1 rounded ${
            chartType === 'line'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Line
        </button>
        <button
          onClick={() => onChartTypeChange('ohlc')}
          className={`px-3 py-1 rounded ${
            chartType === 'ohlc'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          OHLC
        </button>
      </div>
      <div className="space-x-2">
        {intervals.map((int) => (
          <button
            key={int}
            onClick={() => onIntervalChange(int)}
            className={`px-3 py-1 rounded ${
              interval === int
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {int}
          </button>
        ))}
      </div>
    </div>
  );
}