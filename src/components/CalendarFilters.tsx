import React from 'react';
import { motion } from 'framer-motion';

interface CalendarFiltersProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
  currentMonth: Date;
}

export const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  onFilterChange,
  activeFilter,
  currentMonth,
}) => {
  const currentMonthName = currentMonth.toLocaleDateString('fr-FR', { 
    month: 'long',
    year: 'numeric'
  });

  const filters = [
    { id: 'all', label: `Calendrier de ${currentMonthName}` },
    { id: 'favorable', label: 'Jours Favorables' },
    { id: 'fezan', label: 'Jours Fezan' },
    { id: 'date', label: 'Rechercher une date' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeFilter === filter.id 
                ? 'bg-[#FF4500] text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
