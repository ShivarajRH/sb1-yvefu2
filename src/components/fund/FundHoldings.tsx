import React from 'react';
import { PieChart, Briefcase } from 'lucide-react';

interface FundHoldingsProps {
  schemeCode: number;
}

export default function FundHoldings({ schemeCode }: FundHoldingsProps) {
  const stockHoldings = [
    { name: "HDFC Bank Ltd.", percentage: 9.8 },
    { name: "ICICI Bank Ltd.", percentage: 8.5 },
    { name: "Infosys Ltd.", percentage: 7.2 },
    { name: "Reliance Industries Ltd.", percentage: 6.9 },
    { name: "TCS Ltd.", percentage: 5.4 }
  ];

  const sectoralAllocation = [
    { sector: "Financial Services", percentage: 35.2 },
    { sector: "IT", percentage: 18.5 },
    { sector: "Energy", percentage: 12.8 },
    { sector: "Consumer Goods", percentage: 10.5 },
    { sector: "Automobile", percentage: 8.2 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
          Top Holdings
        </h3>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          {stockHoldings.map((stock) => (
            <div key={stock.name} className="flex justify-between items-center py-2 border-b last:border-0">
              <span className="text-gray-900">{stock.name}</span>
              <span className="text-gray-600">{stock.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <PieChart className="h-5 w-5 text-blue-500 mr-2" />
          Sector Allocation
        </h3>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          {sectoralAllocation.map((sector) => (
            <div key={sector.sector} className="py-2 border-b last:border-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-900">{sector.sector}</span>
                <span className="text-gray-600">{sector.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${sector.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}