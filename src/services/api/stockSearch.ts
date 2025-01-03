import { Stock } from '../../types/stock';
import { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_BASE_URL } from './constants';
import { generateUniqueId } from '../../utils/uniqueId';

export async function searchStocks(query: string): Promise<Stock[]> {
  if (!query.trim()) return [];

  try {
    const response = await fetch(
      `${ALPHA_VANTAGE_BASE_URL}?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(query)}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch stocks');
    }
    
    const data = await response.json();
    
    if (!data.bestMatches) {
      return [];
    }

    return data.bestMatches.map((match: any) => ({
      symbol: match['1. symbol'],
      name: match['2. name'],
      type: match['3. type'],
      region: match['4. region'],
      price: 0,
      change: 0,
      changePercent: 0,
      lastUpdated: new Date().toISOString(),
      id: generateUniqueId()
    }));
  } catch (error) {
    console.error('Stock search error:', error);
    throw new Error('Failed to search stocks');
  }
}