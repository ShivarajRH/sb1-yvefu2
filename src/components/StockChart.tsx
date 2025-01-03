import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { getStockHistory } from '../services/stockApi';
import { StockHistory } from '../types/stock';
import ChartControls from './stock/ChartControls';
import ChartTooltip from './stock/ChartTooltip';

interface StockChartProps {
  symbol: string;
  name: string;
}

export default function StockChart({ symbol, name }: StockChartProps) {
  const [data, setData] = useState<StockHistory[]>([]);
  const [interval, setInterval] = useState<'1min' | '5min' | '15min' | '30min' | '60min' | 'daily'>('daily');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartType, setChartType] = useState<'line' | 'ohlc'>('line');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const history = await getStockHistory(symbol, interval);
        setData(history);
      } catch (error) {
        console.error('Failed to load stock history:', error);
        setError('Failed to load chart data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [symbol, interval]);

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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <ChartControls
          chartType={chartType}
          interval={interval}
          onChartTypeChange={setChartType}
          onIntervalChange={setInterval}
        />
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" domain={['auto', 'auto']} />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<ChartTooltip />} />
            <Legend />
            {chartType === 'line' ? (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="close"
                stroke="#2563eb"
                dot={false}
                name="Price"
              />
            ) : (
              data.map((entry) => (
                <React.Fragment key={`${entry.date}-ohlc`}>
                  <ReferenceLine
                    yAxisId="left"
                    segment={[
                      { x: entry.date, y: entry.low },
                      { x: entry.date, y: entry.high }
                    ]}
                    stroke={entry.close >= entry.open ? '#22c55e' : '#ef4444'}
                    strokeWidth={1}
                  />
                  <ReferenceLine
                    yAxisId="left"
                    segment={[
                      { x: entry.date, y: entry.open },
                      { x: entry.date, y: entry.open }
                    ]}
                    stroke={entry.close >= entry.open ? '#22c55e' : '#ef4444'}
                    strokeWidth={6}
                    label={{ position: 'left', value: 'O', fill: '#666' }}
                  />
                  <ReferenceLine
                    yAxisId="left"
                    segment={[
                      { x: entry.date, y: entry.close },
                      { x: entry.date, y: entry.close }
                    ]}
                    stroke={entry.close >= entry.open ? '#22c55e' : '#ef4444'}
                    strokeWidth={6}
                    label={{ position: 'right', value: 'C', fill: '#666' }}
                  />
                </React.Fragment>
              ))
            )}
            <Bar
              yAxisId="right"
              dataKey="volume"
              fill="#4ade80"
              opacity={0.5}
              name="Volume"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}