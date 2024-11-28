import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
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
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

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

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
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

        <div className="grid grid-cols-7 gap-1">
          {weekDays.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          
          {daysInMonth.map((date, index) => {
            const fezanInfo = getFezanTypeForDate(date);
            const isSelected = isSameDay(date, selectedDate);
            const isCurrentMonth = isSameMonth(date, currentDate);
            
            return (
              <motion.button
                key={index}
                onClick={() => onDateSelect(date)}
                className={`
                  aspect-square p-2 rounded-lg text-sm relative
                  ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                  ${isSelected ? 'bg-indigo-100 text-indigo-700' : ''}
                  hover:bg-gray-50 transition-colors
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{format(date, 'd')}</span>
                <div className={`
                  absolute inset-1 rounded-lg opacity-20
                  ${fezanInfo.type === 'favorable' ? 'bg-emerald-500' : 'bg-rose-500'}
                `} />
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-20" />
          <span className="text-gray-600">Jours favorables</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500 opacity-20" />
          <span className="text-gray-600">Jours défavorables</span>
        </div>
      </div>
    </motion.div>
  );
};