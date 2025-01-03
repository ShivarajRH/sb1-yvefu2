import React from 'react';
import { Info } from 'lucide-react';

interface FundOverviewProps {
  schemeCode: number;
}

export default function FundOverview({ schemeCode }: FundOverviewProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Info className="h-5 w-5 text-blue-500 mr-2" />
        Fund Overview
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-600">Category</h4>
          <p className="text-gray-900">Large Cap Fund</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-600">Risk Level</h4>
          <p className="text-gray-900">Moderately High</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-600">Investment Objective</h4>
          <p className="text-gray-900">
            To achieve long-term capital appreciation by investing predominantly in equity and equity-related securities of large-cap companies.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-600">Benchmark</h4>
          <p className="text-gray-900">NIFTY 50 TRI</p>
        </div>
      </div>
    </div>
  );
}