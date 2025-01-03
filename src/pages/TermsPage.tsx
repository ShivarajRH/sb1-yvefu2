import React from 'react';
import { Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
          <h2>1. Investment Disclaimer</h2>
          <p>All investment decisions are made at your own risk. We do not provide personalized financial advice.</p>
          
          <h2>2. Market Data</h2>
          <p>Market data may be delayed. We make no guarantees about the accuracy or timeliness of the information provided.</p>
          
          <h2>3. User Responsibilities</h2>
          <p>Users are responsible for:</p>
          <ul>
            <li>Conducting their own research</li>
            <li>Understanding investment risks</li>
            <li>Making informed decisions</li>
            <li>Maintaining account security</li>
          </ul>
          
          <h2>4. Service Limitations</h2>
          <p>Our suggestions are for informational purposes only and should not be considered as financial advice.</p>
          
          <h2>5. Disclaimer of Warranties</h2>
          <p>The service is provided "as is" without any warranties, expressed or implied.</p>
        </div>
      </div>
    </div>
  );
}