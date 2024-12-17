import { FezanInfo } from '../types/fezan';
import { calculateFezanDay } from './fezanCalculator';

export const getFilteredDates = (
  currentMonth: Date,
  filter: string,
  selectedFezanDay?: string | null
): { date: Date; info: FezanInfo }[] => {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Generate all dates for the current month
  const dates = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    return {
      date,
      info: calculateFezanDay(date)
    };
  });

  switch (filter) {
    case 'favorable':
      return dates.filter(({ info }) => info.type === 'favorable');
    
    case 'fezan':
      if (selectedFezanDay) {
        // Filter by specific Fezan day if selected
        return dates.filter(({ info }) => info.name === selectedFezanDay);
      }
      return dates;
    
    case 'month':
      // Group by month - in this case, we're already filtered by month
      return dates;
    
    case 'year':
      // For year view, we'll return all dates as they're already in the current year
      return dates;
    
    case 'all':
    default:
      return dates;
  }
};
