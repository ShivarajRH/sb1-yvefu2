import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { formatChartDate, formatTooltipDate } from '../utils/dateUtils';
import { fetchFundHistory } from '../services/api';

interface FundChartProps {
  schemeCode: number;
  schemeName: string;
}

interface ChartData {
  date: string;
  nav: number;
}

export default function FundChart({ schemeCode, schemeName }: FundChartProps) {
  const [data, setData] = useState<ChartData[]>([]);
  const [timeRange, setTimeRange] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const history = await fetchFundHistory(schemeCode, timeRange);
        setData(history.map((item: any) => ({
          date: item.date,
          nav: parseFloat(item.nav)
        })));
      } catch (error) {
        console.error('Failed to load fund history:', error);
        setError('Failed to load chart data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [schemeCode, timeRange]);

  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{schemeName}</h3>
        <div className="space-x-2">
          {[7, 30, 90, 180].map((days) => (
            <button
              key={days}
              onClick={() => setTimeRange(days)}
              className={`px-3 py-1 rounded ${
                timeRange === days
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {days}D
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={formatChartDate}
              minTickGap={30}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip
              labelFormatter={formatTooltipDate}
              formatter={(value: number) => [`₹${value.toFixed(2)}`, 'NAV']}
            />
            <Line
              type="monotone"
              dataKey="nav"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}