import { StockHistory } from '../../types/stock';
import { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_BASE_URL, INTERVALS, TIME_SERIES_KEYS } from './constants';
import { generateUniqueId } from '../../utils/uniqueId';

export async function getStockHistory(
  symbol: string,
  interval: '1min' | '5min' | '15min' | '30min' | '60min' | 'daily' = 'daily'
): Promise<StockHistory[]> {
  try {
    const functionName = INTERVALS[interval];
    const params = new URLSearchParams({
      function: functionName,
      symbol: symbol,
      apikey: ALPHA_VANTAGE_API_KEY,
      ...(interval !== 'daily' && { interval })
    });

    const response = await fetch(`${ALPHA_VANTAGE_BASE_URL}?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch stock history');
    }
    
    const data = await response.json();
    const timeSeriesKey = TIME_SERIES_KEYS[interval];
    const timeSeries = data[timeSeriesKey];
    
    if (!timeSeries) {
      throw new Error('No historical data available');
    }

    return Object.entries(timeSeries).map(([date, values]: [string, any]) => ({
      date,
      open: parseFloat(values['1. open']) || 0,
      high: parseFloat(values['2. high']) || 0,
      low: parseFloat(values['3. low']) || 0,
      close: parseFloat(values['4. close']) || 0,
      volume: parseInt(values['5. volume']) || 0,
      id: generateUniqueId()
    })).slice(0, 30);
  } catch (error) {
    console.error('Stock history error:', error);
    throw new Error('Failed to fetch stock history');
  }
}