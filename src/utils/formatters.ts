import { Currency, CURRENCY_SYMBOLS } from '../types/currency';

export function formatCurrency(amount: string | number, currency: Currency): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // Convert USD to INR (using a simple fixed rate for demo)
  const rate = currency === 'INR' ? 83 : 1;
  const value = num * rate;

  return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}