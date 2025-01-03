import React, { useState } from 'react';
import { LineChart, Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import StockCard from '../components/StockCard';
import { useStocks } from '../hooks/useStocks';

export default function StocksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { stocks, loading, error } = useStocks(searchTerm);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <LineChart className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Stock Market Tracker
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search and track real-time stock prices and historical data
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search stocks by symbol or name..."
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Searching stocks...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && searchTerm.length < 2 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Enter at least 2 characters to search for stocks
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocks.map((stock) => (
            <StockCard key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
}