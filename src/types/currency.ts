export type Currency = 'USD' | 'INR';

export interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹'
} as const;

export const CURRENCY_NAMES = {
  USD: 'US Dollar',
  INR: 'Indian Rupee'
} as const;