import { useState, useEffect, useCallback } from 'react';
import { Stock, StockSearchResult } from '../types/stock';
import { searchStocks, getStockQuote } from '../services/stockApi';

export function useStocks(searchTerm: string): StockSearchResult {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStocks = useCallback(async () => {
    if (!searchTerm || searchTerm.length < 2) {
      setStocks([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchStocks(searchTerm);
      
      // Get quotes for each stock (limited to first 5 to avoid API rate limits)
      const stocksWithQuotes = await Promise.all(
        searchResults.slice(0, 5).map(async (stock) => {
          try {
            const quote = await getStockQuote(stock.symbol);
            return {
              ...stock,
              price: quote.price,
              change: quote.change,
              changePercent: quote.changePercent,
              lastUpdated: quote.lastUpdated
            };
          } catch (error) {
            console.error(`Failed to fetch quote for ${stock.symbol}:`, error);
            return stock;
          }
        })
      );

      setStocks(stocksWithQuotes);
    } catch (err) {
      console.error('Stock search error:', err);
      setError('Failed to search stocks. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const debounceTimer = setTimeout(fetchStocks, 500);
    return () => clearTimeout(debounceTimer);
  }, [fetchStocks]);

  return { stocks, loading, error };
}