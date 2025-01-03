import React from 'react';
import { useParams } from 'react-router-dom';
import FundDetails from '../components/fund/FundDetails';
import { useFundDetails } from '../hooks/useFundDetails';

export default function FundDetailsPage() {
  const { schemeCode } = useParams();
  const { fund, loading, error } = useFundDetails(Number(schemeCode));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !fund) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Failed to load fund details</div>
      </div>
    );
  }

  return <FundDetails fund={fund} />;
}