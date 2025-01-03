import React, { useState } from 'react';
import { LineChart, Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FundCard from '../components/FundCard';
import { useMutualFunds } from '../hooks/useMutualFunds';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { funds, loading, error } = useMutualFunds(searchTerm);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <LineChart className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Mutual Funds NAV Checker
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search and track Net Asset Values (NAV) of mutual funds in real-time
        </p>
      </div>

      {/* Search Section */}
      <div className="flex justify-center mb-12">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Fetching mutual funds...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && searchTerm.length < 3 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Enter at least 3 characters to search for mutual funds
            </p>
          </div>
        )}

        {!loading && !error && funds.length === 0 && searchTerm.length >= 3 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No mutual funds found</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <FundCard 
              key={`${fund.schemeCode}-${fund.date}`} 
              fund={fund} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}