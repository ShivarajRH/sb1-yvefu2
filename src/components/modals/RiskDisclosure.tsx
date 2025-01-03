import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface RiskDisclosureProps {
  hasAcknowledged: boolean;
  onAcknowledge: (value: boolean) => void;
}

export default function RiskDisclosure({ hasAcknowledged, onAcknowledge }: RiskDisclosureProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="h-6 w-6 text-red-500" />
        <h3 className="text-xl font-semibold text-gray-900">
          Important Risk Disclosures on Derivatives
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-4">
          <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
            1
          </span>
          <p className="text-gray-700">
            9 out of 10 individual traders in equity Futures and Options
            Segment, incurred net losses.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
            2
          </span>
          <p className="text-gray-700">
            On average, loss makers registered net trading losses close
            to 50,000.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
          <p className="text-gray-700">
            Over and above the net trading losses incurred, loss makers
            expended an additional 28% of net trading losses as
            transaction costs.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">
            4
          </span>
          <p className="text-gray-700">
            Those making net trading profits, incurred between 15% to
            50% of such profits as transaction costs.
          </p>
        </div>
      </div>

      <a
        href="https://www.sebi.gov.in/legal/circulars/may-2023/risk-disclosure-with-respect-to-trading-by-individual-traders-in-equity-futures-and-options-segment_71426.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        Learn more about SEBI risk disclosure
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="acknowledge"
          checked={hasAcknowledged}
          onChange={(e) => onAcknowledge(e.target.checked)}
          className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="acknowledge" className="text-sm text-gray-700">
          I acknowledge that I have read and understood the risk disclosure statement and am aware of the risks involved in trading in equity derivatives.
        </label>
      </div>
    </div>
  );
}