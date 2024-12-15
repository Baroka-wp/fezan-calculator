import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths,
  startOfWeek,
  endOfWeek,
  eachWeekOfInterval,
  addDays
} from 'date-fns';
import { fr } from 'date-fns/locale';
import { calculateFezanDay } from '../utils/fezanCalculator';
import type { FezanInfo } from '../types/fezan';

interface MonthlyCalendarProps {
  currentDate: Date;
  onDateSelect: (date: Date) => void;
  selectedDate: Date;
  onMonthChange: (date: Date) => void;
}

export const MonthlyCalendar = ({ 
  currentDate, 
  onDateSelect, 
  selectedDate,
  onMonthChange 
}: MonthlyCalendarProps) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  // Get weeks for the calendar
  const weeks = eachWeekOfInterval(
    { start: calendarStart, end: calendarEnd },
    { weekStartsOn: 1 }
  );

  const getFezanTypeForDate = (date: Date): FezanInfo => {
    return calculateFezanDay(date);
  };

  const handlePreviousMonth = () => {
    const newDate = subMonths(currentDate, 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    onMonthChange(newDate);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl p-4 sm:p-6 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {format(currentDate, 'MMMM yyyy', { locale: fr })}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePreviousMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
              <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 py-1">
                {day}
              </div>
            ))}
          </div>
          
          <div className="flex-1 grid grid-rows-6 gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const date = addDays(week, dayIndex);
                  const fezanInfo = getFezanTypeForDate(date);
                  const isSelected = isSameDay(date, selectedDate);
                  const isCurrentMonth = isSameMonth(date, currentDate);
                  
                  return (
                    <motion.button
                      key={dayIndex}
                      onClick={() => onDateSelect(date)}
                      className={`
                        relative flex items-center justify-center p-1 sm:p-2 rounded-lg
                        ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                        ${isSelected ? 'bg-indigo-100 text-indigo-700 font-medium' : ''}
                        hover:bg-gray-50 transition-colors
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 text-xs sm:text-sm">
                        {format(date, 'd')}
                      </span>
                      <div className={`
                        absolute inset-1 rounded-lg opacity-20
                        ${fezanInfo.type === 'favorable' ? 'bg-emerald-500' : 'bg-rose-500'}
                      `} />
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center text-xs sm:text-sm mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-20" />
            <span className="text-gray-600">Jours favorables</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 opacity-20" />
            <span className="text-gray-600">Jours défavorables</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};