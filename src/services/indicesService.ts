import { StockIndex } from '../types/indices';

export async function fetchNifty50(): Promise<StockIndex> {
  // Mock data for demonstration
  return {
    name: "NIFTY 50",
    stocks: [
      { symbol: "RELIANCE", name: "Reliance Industries", lastPrice: 2456.75, change: 34.25, changePercent: 1.42 },
      { symbol: "TCS", name: "Tata Consultancy Services", lastPrice: 3789.50, change: -12.30, changePercent: -0.32 },
      // Add more stocks as needed
    ]
  };
}

export async function fetchNiftyMidcap150(): Promise<StockIndex> {
  return {
    name: "NIFTY MIDCAP 150",
    stocks: [
      { symbol: "ABCAPITAL", name: "Aditya Birla Capital", lastPrice: 178.45, change: 5.65, changePercent: 3.27 },
      { symbol: "APOLLOTYRE", name: "Apollo Tyres", lastPrice: 432.90, change: -3.20, changePercent: -0.73 },
      // Add more stocks as needed
    ]
  };
}

export async function fetchNiftyPSUBank(): Promise<StockIndex> {
  return {
    name: "NIFTY PSU BANK",
    stocks: [
      { symbol: "SBIN", name: "State Bank of India", lastPrice: 567.80, change: 12.45, changePercent: 2.24 },
      { symbol: "BANKBARODA", name: "Bank of Baroda", lastPrice: 234.55, change: 4.30, changePercent: 1.87 },
      // Add more stocks as needed
    ]
  };
}

export async function fetchNiftySmallcap50(): Promise<StockIndex> {
  return {
    name: "NIFTY SMALLCAP 50",
    stocks: [
      { symbol: "CENTRALBK", name: "Central Bank of India", lastPrice: 45.75, change: 1.25, changePercent: 2.81 },
      { symbol: "GNFC", name: "Gujarat Narmada Valley Fertilizers", lastPrice: 678.90, change: -8.45, changePercent: -1.23 },
      // Add more stocks as needed
    ]
  };
}