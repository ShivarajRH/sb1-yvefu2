import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import RiskDisclosure from './RiskDisclosure';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [hasAcknowledged, setHasAcknowledged] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (!hasAcknowledged) {
      alert('Please acknowledge the risk disclosure before proceeding');
      return;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        {/* Modal positioning helper */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-6xl p-6 my-8 text-left align-middle transition-all transform bg-white rounded-xl shadow-xl">
          {/* Close button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Welcome Section */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome to Market Tracker
              </h2>
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000"
                alt="Market Analysis"
                className="rounded-lg shadow-lg w-full max-w-md object-cover h-64"
              />
              <p className="text-gray-600 text-center">
                Track your investments and make informed decisions with
                real-time market data
              </p>
            </div>

            {/* Risk Disclosure Section */}
            <RiskDisclosure
              hasAcknowledged={hasAcknowledged}
              onAcknowledge={setHasAcknowledged}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={handleClose}
              disabled={!hasAcknowledged}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}