import React from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
  onClick: () => void;
  loading?: boolean;
  className?: string;
}

export default function RefreshButton({ onClick, loading = false, className = '' }: RefreshButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${className}`}
      title="Refresh data"
    >
      <RefreshCw 
        className={`h-5 w-5 text-gray-600 ${loading ? 'animate-spin' : 'hover:text-blue-600'}`} 
      />
    </button>
  );
}