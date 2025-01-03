import React, { useState } from 'react';
import { Menu, Search, Star, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SlidingMenu from './navigation/SlidingMenu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <nav className="bg-theme-card shadow-sm">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Market Tracker
          </Link>
          
          <div className="lg:flex md:flex sm:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md ${
                location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <PieChart className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>

            <Link
              to="/search"
              className={`flex items-center px-3 py-2 rounded-md ${
                location.pathname === '/search'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Search className="h-5 w-5 mr-1" />
              <span>Funds</span>
            </Link>

            <Link
              to="/stocks"
              className={`flex items-center px-3 py-2 rounded-md ${
                location.pathname === '/stocks'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <TrendingUp className="h-5 w-5 mr-1" />
              <span>Stocks</span>
            </Link>

          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-primary/10"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <SlidingMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}