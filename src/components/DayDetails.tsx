import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { FezanInfo } from '../types/fezan';

interface DayDetailsProps {
  fezanInfo: FezanInfo;
}

export const DayDetails = ({ fezanInfo }: DayDetailsProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className={`mb-6 p-6 rounded-xl ${
        fezanInfo.type === 'favorable' ? 'bg-emerald-50' : 'bg-rose-50'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            {fezanInfo.name}
          </h2>
          <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
            fezanInfo.type === 'favorable' 
              ? 'bg-emerald-100 text-emerald-700' 
              : 'bg-rose-100 text-rose-700'
          }`}>
            {fezanInfo.type}
          </span>
        </div>
        <p className="text-gray-600">
          {fezanInfo.date} • {fezanInfo.jour}
        </p>
      </div>

      {fezanInfo.isSpecialDay && (
        <motion.div 
          className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Sparkles className="h-5 w-5 text-amber-500 flex-shrink-0" />
          <p className="text-amber-700">
            {fezanInfo.specialMessage}
          </p>
        </motion.div>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-medium text-gray-800">
          Signification
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {fezanInfo.description}
        </p>
      </div>
    </motion.div>
  );
};