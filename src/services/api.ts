import { getAuthToken } from './auth';

const BASE_URL = 'https://api.mfapi.in/mf';

export const fetchFundHistory = async (schemeCode: number, days: number = 30) => {
  try {
    const token = await getAuthToken();
    const response = await fetch(`${BASE_URL}/${schemeCode}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid response format from API');
    }
    
    return data.data.slice(0, days).reverse();
  } catch (error) {
    console.error('Fund history fetch error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch fund history');
  }
};