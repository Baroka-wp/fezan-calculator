import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSelectorProps {
  onMonthSelect: (date: Date) => void;
  selectedMonth: Date;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  onMonthSelect,
  selectedMonth,
}) => {
  const currentYear = selectedMonth.getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, i, 1);
    return {
      name: date.toLocaleDateString('fr-FR', { month: 'long' }),
      date: date,
    };
  });

  const handleYearChange = (increment: number) => {
    const newDate = new Date(selectedMonth);
    newDate.setFullYear(newDate.getFullYear() + increment);
    onMonthSelect(newDate);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      {/* Year Selector */}
      <div className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm py-2 px-4 rounded-lg mb-4">
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

      {/* Month Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {months.map(({ name, date }) => (
          <button
            key={name}
            onClick={() => onMonthSelect(date)}
            className={`
              px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${date.getMonth() === selectedMonth.getMonth()
                ? 'bg-[#FF4500] text-white shadow-sm transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }
            `}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
