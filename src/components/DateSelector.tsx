import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { QuickFacts } from './QuickFacts';

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateSelector = ({ selectedDate, onDateChange }: DateSelectorProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-indigo-500" />
          Sélectionnez une date
        </h2>
        
        <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={onDateChange}
          />
        </div>
      </div>

      <QuickFacts />
    </motion.div>
  );
};