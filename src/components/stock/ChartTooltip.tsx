import React from 'react';
import { StockHistory } from '../../types/stock';

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: StockHistory }>;
}

export default function ChartTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;
  return (
    <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
      <p className="text-sm text-gray-600">{data.date}</p>
      <p className="text-sm">Open: ${data.open.toFixed(2)}</p>
      <p className="text-sm">High: ${data.high.toFixed(2)}</p>
      <p className="text-sm">Low: ${data.low.toFixed(2)}</p>
      <p className="text-sm">Close: ${data.close.toFixed(2)}</p>
      <p className="text-sm">Volume: {data.volume.toLocaleString()}</p>
    </div>
  );
}