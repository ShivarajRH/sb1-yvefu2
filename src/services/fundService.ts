import { Fund } from '../types';
import { fetchFundHistory } from './api';

export async function fetchTopPerformingFunds(range: string): Promise<Fund[]> {
  // This would typically fetch from your backend
  // For now, returning mock data
  const mockFunds: Fund[] = [
    {
      schemeCode: 119551,
      schemeName: "Quant Small Cap Fund Direct Plan Growth",
      nav: "245.32",
      date: "2024-03-15"
    },
    {
      schemeCode: 119027,
      schemeName: "Nippon India Small Cap Fund Direct Growth",
      nav: "132.45",
      date: "2024-03-15"
    },
    {
      schemeCode: 120465,
      schemeName: "SBI Small Cap Fund Direct Growth",
      nav: "167.89",
      date: "2024-03-15"
    },
    {
      schemeCode: 120754,
      schemeName: "Axis Small Cap Fund Direct Growth",
      nav: "98.76",
      date: "2024-03-15"
    },
    {
      schemeCode: 120123,
      schemeName: "HDFC Mid-Cap Opportunities Fund Direct Growth",
      nav: "145.67",
      date: "2024-03-15"
    },
    {
      schemeCode: 120789,
      schemeName: "Kotak Emerging Equity Fund Direct Growth",
      nav: "189.23",
      date: "2024-03-15"
    }
  ];

  return mockFunds;
}