export interface IndexStock {
  symbol: string;
  name: string;
  lastPrice: number;
  change: number;
  changePercent: number;
}

export interface StockIndex {
  name: string;
  stocks: IndexStock[];
}