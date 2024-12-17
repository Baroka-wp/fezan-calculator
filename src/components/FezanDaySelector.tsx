import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FEZAN_CYCLE } from '../data/fezanCycle';

interface FezanDaySelectorProps {
  onDateChange: (date: Date) => void;
  selectedDate: Date;
  selectedFezanDay: string | null;
  onFezanDaySelect: (dayName: string) => void;
}

export const FezanDaySelector: React.FC<FezanDaySelectorProps> = ({
  onDateChange,
  selectedDate,
  selectedFezanDay,
  onFezanDaySelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  useEffect(() => {
    onDateChange(new Date(currentYear, currentMonth));
  }, [currentMonth, currentYear, onDateChange]);

  const handleMonthChange = (delta: number) => {
    const newMonth = currentMonth + delta;
    if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  const handleYearChange = (delta: number) => {
    setCurrentYear(currentYear + delta);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 mb-6"
    >
      {/* Compact Date Selector - Mobile Only */}
      <div className="md:hidden flex items-center justify-center gap-8 bg-white/60 backdrop-blur-sm py-2 px-4 rounded-lg">
        {/* Year Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleYearChange(-1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-900 min-w-[4rem] text-center">
            {currentYear}
          </span>
          <button
            onClick={() => handleYearChange(1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="w-px h-6 bg-gray-200" />

        {/* Month Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleMonthChange(-1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-900 min-w-[5rem] text-center">
            {new Date(currentYear, currentMonth).toLocaleDateString('fr-FR', { month: 'long' })}
          </span>
          <button
            onClick={() => handleMonthChange(1)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Fezan Days Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
        {FEZAN_CYCLE.map((day) => (
          <button
            key={day.name}
            onClick={() => onFezanDaySelect(day.name)}
            className={`
              p-2 rounded-lg text-center transition-all duration-200 border
              ${selectedFezanDay === day.name
                ? 'bg-[#FF4500] text-white shadow-sm transform scale-105 border-transparent'
                : 'bg-white hover:bg-gray-50 border-gray-200'
              }
            `}
          >
            <div className="flex flex-col gap-0.5">
              <span className={`text-sm font-medium ${selectedFezanDay === day.name ? 'text-white' : day.color}`}>
                {day.name}
              </span>
              <span className={`text-xs ${selectedFezanDay === day.name ? 'text-white/90' : 'text-gray-600'}`}>
                {day.type}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
