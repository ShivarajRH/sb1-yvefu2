import React from 'react';
import { User, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import CurrencySelector from '../components/CurrencySelector';
import AdVisibilityToggle from '../components/ads/AdVisibilityToggle';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Currency
                </label>
                <CurrencySelector />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Advertisement Settings
                </label>
                <AdVisibilityToggle />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-500">Account Information</h3>
            <div className="mt-2 text-sm text-gray-900">
              <p>Email: {user?.email}</p>
              <p>Member since: {new Date(user?.metadata.creationTime).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}