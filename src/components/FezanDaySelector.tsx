import { motion } from 'framer-motion';
import { FEZAN_CYCLE } from '../data/fezanCycle';

interface FezanDaySelectorProps {
  onDateChange: (date: Date) => void;
  selectedDate: Date;
  selectedFezanDay: string | null;
  onFezanDaySelect: (dayName: string) => void;
}

export const FezanDaySelector: React.FC<FezanDaySelectorProps> = ({
  selectedFezanDay,
  onFezanDaySelect,
}) => {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 mb-6"
      >


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
