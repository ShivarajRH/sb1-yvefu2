export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  type: string;
  region: string;
  id: string; // Add id field
}

export interface StockHistory {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  id: string; // Add id field
}

export interface StockSearchResult {
  stocks: Stock[];
  loading: boolean;
  error: string | null;
}