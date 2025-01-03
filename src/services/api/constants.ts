export const ALPHA_VANTAGE_API_KEY = 'RTH29BXQMYFLRPUD';
export const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

// Add Finnhub for real-time stock data
export const FINNHUB_API_KEY = 'cn2qj0pr01qhlsq0nh0gcn2qj0pr01qhlsq0nh10';
export const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

export const INTERVALS = {
  '1min': 'TIME_SERIES_INTRADAY',
  '5min': 'TIME_SERIES_INTRADAY',
  '15min': 'TIME_SERIES_INTRADAY',
  '30min': 'TIME_SERIES_INTRADAY',
  '60min': 'TIME_SERIES_INTRADAY',
  'daily': 'TIME_SERIES_DAILY'
} as const;

export const TIME_SERIES_KEYS = {
  '1min': 'Time Series (1min)',
  '5min': 'Time Series (5min)',
  '15min': 'Time Series (15min)',
  '30min': 'Time Series (30min)',
  '60min': 'Time Series (60min)',
  'daily': 'Time Series (Daily)'
} as const;