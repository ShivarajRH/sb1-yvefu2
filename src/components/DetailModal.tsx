import React from 'react';
import { X } from 'lucide-react';
import { Fund } from '../types';
import { Stock } from '../types/stock';
import FundChart from './FundChart';
import StockChart from './StockChart';
import { useCurrency } from '../context/CurrencyContext';
import { formatCurrency } from '../utils/formatters';

interface DetailModalProps {
  item: Fund | Stock;
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  const { currency } = useCurrency();
  const isFund = 'schemeCode' in item;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {isFund ? item.schemeName : item.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {isFund ? `Scheme Code: ${item.schemeCode}` : `Symbol: ${(item as Stock).symbol}`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="mt-4">
            {isFund ? (
              <FundChart schemeCode={item.schemeCode} schemeName={item.schemeName} />
            ) : (
              <StockChart symbol={(item as Stock).symbol} name={(item as Stock).name} />
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500">Current Value</h4>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                {formatCurrency(isFund ? item.nav : (item as Stock).price, currency)}
              </p>
            </div>
            {!isFund && (
              <>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500">Change</h4>
                  <p className={`mt-1 text-2xl font-semibold ${
                    (item as Stock).change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {(item as Stock).change >= 0 ? '+' : ''}
                    {formatCurrency((item as Stock).change, currency)} 
                    ({(item as Stock).changePercent.toFixed(2)}%)
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}