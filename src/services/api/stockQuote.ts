import { Stock } from '../../types/stock';
import { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_BASE_URL } from './constants';
import { generateUniqueId } from '../../utils/uniqueId';

export async function getStockQuote(symbol: string): Promise<Stock> {
  try {
    const response = await fetch(
      `${ALPHA_VANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(symbol)}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch stock quote');
    }
    
    const data = await response.json();
    const quote = data['Global Quote'];
    
    if (!quote) {
      throw new Error('No quote data available');
    }

    return {
      symbol,
      name: symbol,
      price: parseFloat(quote['05. price']) || 0,
      change: parseFloat(quote['09. change']) || 0,
      changePercent: parseFloat(quote['10. change percent'].replace('%', '')) || 0,
      lastUpdated: quote['07. latest trading day'] || new Date().toISOString(),
      type: 'stock',
      region: 'US',
      id: generateUniqueId()
    };
  } catch (error) {
    console.error('Stock quote error:', error);
    throw new Error('Failed to fetch stock quote');
  }
}