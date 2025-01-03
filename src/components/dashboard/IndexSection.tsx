import React from 'react';
import { IndexStock } from '../../types/indices';

interface IndexSectionProps {
  title: string;
  stocks: IndexStock[];
}

export default function IndexSection({ title, stocks }: IndexSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
        <div className="bg-white rounded-lg shadow">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <div className="font-medium">{stock.symbol}</div>
                <div className="text-sm text-gray-600">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">₹{stock.lastPrice.toFixed(2)}</div>
                <div className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}