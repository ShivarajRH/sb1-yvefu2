import React from 'react';
import { Coins } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { CURRENCY_NAMES } from '../types/currency';

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center space-x-2">
      <Coins className="h-5 w-5 text-blue-500" />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as 'USD' | 'INR')}
        className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {Object.entries(CURRENCY_NAMES).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}