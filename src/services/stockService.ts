import { Stock } from '../types/stock';
import { generateUniqueId } from '../utils/uniqueId';

export async function fetchTopPerformingStocks(range: string): Promise<Stock[]> {
  // This would typically fetch from your backend
  // For now, returning mock data
  const mockStocks: Stock[] = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 172.45,
      change: 2.34,
      changePercent: 1.37,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 415.32,
      change: 5.67,
      changePercent: 1.38,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 147.89,
      change: 1.23,
      changePercent: 0.84,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 178.23,
      change: 3.45,
      changePercent: 1.97,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 892.67,
      change: 12.34,
      changePercent: 1.40,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    },
    {
      symbol: "META",
      name: "Meta Platforms Inc.",
      price: 505.89,
      change: 7.89,
      changePercent: 1.58,
      lastUpdated: new Date().toISOString(),
      type: "stock",
      region: "US",
      id: generateUniqueId()
    }
  ];

  return mockStocks;
}