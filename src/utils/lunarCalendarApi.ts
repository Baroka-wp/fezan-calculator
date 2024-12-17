interface LunarDate {
  year: number;
  month: number;
  day: number;
  isLeap: boolean;
}

interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  lunarDate: LunarDate;
}

interface LunarCalendarResponse {
  year: number;
  month: number;
  calendarType: string;
  days: CalendarDay[];
  metadata: {
    daysInMonth: number;
    firstDayOfMonth: number;
  };
}

export async function getLunarCalendar(year: number, month: number): Promise<LunarCalendarResponse> {
  const response = await fetch(
    `https://lunar-calendar-xi.vercel.app/calendar?year=${year}&month=${month}&calendar=Gregorian`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch lunar calendar data');
  }
  
  return response.json();
}

export function getLunarDaysInMonth(calendarData: LunarCalendarResponse): {
  gregorianDate: Date;
  lunarDay: number;
  lunarMonth: number;
  isLeap: boolean;
}[] {
  return calendarData.days
    .filter(day => day.isCurrentMonth)
    .map(day => ({
      gregorianDate: new Date(calendarData.year, calendarData.month - 1, day.day),
      lunarDay: day.lunarDate.day,
      lunarMonth: day.lunarDate.month,
      isLeap: day.lunarDate.isLeap
    }));
}
