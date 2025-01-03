import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PeerComparisonProps {
  schemeCode: number;
}

export default function PeerComparison({ schemeCode }: PeerComparisonProps) {
  const peerFunds = [
    {
      name: "HDFC Top 100 Fund",
      returns: { '1y': 15.2, '3y': 12.8, '5y': 10.5 }
    },
    {
      name: "Axis Bluechip Fund",
      returns: { '1y': 14.8, '3y': 13.2, '5y': 11.2 }
    },
    {
      name: "SBI Bluechip Fund",
      returns: { '1y': 13.9, '3y': 11.9, '5y': 9.8 }
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
        Peer Comparison
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-gray-600 pb-3">Fund Name</th>
              <th className="text-right text-sm font-medium text-gray-600 pb-3">1Y Returns</th>
              <th className="text-right text-sm font-medium text-gray-600 pb-3">3Y Returns</th>
              <th className="text-right text-sm font-medium text-gray-600 pb-3">5Y Returns</th>
            </tr>
          </thead>
          <tbody>
            {peerFunds.map((fund) => (
              <tr key={fund.name} className="border-t">
                <td className="py-3 text-gray-900">{fund.name}</td>
                <td className="text-right text-gray-900">{fund.returns['1y']}%</td>
                <td className="text-right text-gray-900">{fund.returns['3y']}%</td>
                <td className="text-right text-gray-900">{fund.returns['5y']}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}