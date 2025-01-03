import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Terms and Conditions</h2>
      <div className="prose prose-sm max-h-60 overflow-y-auto mb-4">
        <p>By using our stock market suggestion service, you agree to the following:</p>
        <ul className="list-disc pl-5">
          <li>All investment decisions are made at your own risk</li>
          <li>Past performance is not indicative of future results</li>
          <li>Market data may be delayed</li>
          <li>We do not provide personalized financial advice</li>
          <li>Always conduct your own research before investing</li>
        </ul>
      </div>
      <button
        onClick={onAccept}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        I Accept the Terms and Conditions
      </button>
    </div>
  );
}