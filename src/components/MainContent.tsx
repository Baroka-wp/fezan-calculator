import { motion } from 'framer-motion';
import { useRef } from 'react';
import {MonthlyCalendar} from './MonthlyCalendar';
import {DayDetails} from './DayDetails';
import type { FezanInfo } from '../types/fezan';


interface MainContentProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onMonthChange: (date: Date) => void;
  fezanInfo: FezanInfo | null;
}

const MainContent: React.FC<MainContentProps> = ({
  currentMonth,
  selectedDate,
  onDateSelect,
  onMonthChange,
  fezanInfo,
}) => {
  const monthlyCalendarRef = useRef<HTMLDivElement>(null);

  return (
    <motion.main 
      ref={monthlyCalendarRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16"
    >
      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 bg-white/80 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-[#FF4500]/10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MonthlyCalendar 
            currentDate={currentMonth}
            selectedDate={selectedDate}
            onDateSelect={onDateSelect}
            onMonthChange={onMonthChange}
          />
        </motion.div>
        
        {fezanInfo && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <DayDetails fezanInfo={fezanInfo} />
          </motion.div>
        )}
      </div>
    </motion.main>
  );
};

export default MainContent;
