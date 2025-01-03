import { FINNHUB_API_KEY, FINNHUB_BASE_URL } from './api/constants';

export async function getLiveStockPrice(symbol: string) {
  try {
    const response = await fetch(
      `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch live stock price');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Live stock price error:', error);
    throw error;
  }
}

export async function getLiveFundNav(schemeCode: number) {
  try {
    const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch live NAV');
    }
    
    const data = await response.json();
    return data.data[0]; // Latest NAV
  } catch (error) {
    console.error('Live NAV error:', error);
    throw error;
  }
}