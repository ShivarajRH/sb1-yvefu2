import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Calendar, Users, Briefcase, PieChart } from 'lucide-react';
import FundChart from '../FundChart';
import FundOverview from './FundOverview';
import FundManagers from './FundManagers';
import FundHoldings from './FundHoldings';
import PeerComparison from './PeerComparison';

interface FundDetailsProps {
  fund: {
    schemeCode: number;
    schemeName: string;
    nav: string;
    date: string;
    change?: number;
    changePercent?: number;
  };
}

export default function FundDetails({ fund }: FundDetailsProps) {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y' | '3y' | '5y'>('1y');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{fund.schemeName}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Current NAV</div>
            <div className="text-2xl font-bold">₹{fund.nav}</div>
            <div className="flex items-center mt-1">
              {fund.change && fund.changePercent && (
                <>
                  {fund.change >= 0 ? (
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={fund.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {fund.change >= 0 ? '+' : ''}{fund.change.toFixed(2)} 
                    ({fund.changePercent.toFixed(2)}%)
                  </span>
                </>
              )}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Last Updated</div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-500 mr-2" />
              <span>{new Date(fund.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Scheme Code</div>
            <div className="text-lg font-semibold">{fund.schemeCode}</div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Historical Performance</h2>
            <div className="flex space-x-2">
              {['7d', '30d', '90d', '1y', '3y', '5y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range as typeof timeRange)}
                  className={`px-3 py-1 rounded ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <FundChart schemeCode={fund.schemeCode} schemeName={fund.schemeName} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FundOverview schemeCode={fund.schemeCode} />
          <PeerComparison schemeCode={fund.schemeCode} />
        </div>

        <div className="mt-8">
          <FundManagers schemeCode={fund.schemeCode} />
        </div>

        <div className="mt-8">
          <FundHoldings schemeCode={fund.schemeCode} />
        </div>
      </div>
    </div>
  );
}