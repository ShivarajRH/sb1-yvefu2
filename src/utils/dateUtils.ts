import { format, parse } from 'date-fns';

export const parseIndianDate = (dateStr: string): Date => {
  // Convert DD-MM-YYYY to YYYY-MM-DD for proper parsing
  const [day, month, year] = dateStr.split('-');
  return new Date(`${year}-${month}-${day}`);
};

export const formatChartDate = (dateStr: string): string => {
  try {
    const date = parseIndianDate(dateStr);
    return format(date, 'dd MMM');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateStr;
  }
};

export const formatTooltipDate = (dateStr: string): string => {
  try {
    const date = parseIndianDate(dateStr);
    return format(date, 'dd MMM yyyy');
  } catch (error) {
    console.error('Error formatting tooltip date:', error);
    return dateStr;
  }
};