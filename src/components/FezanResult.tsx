import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Star } from 'lucide-react';
import { FezanInfo } from '../types/fezan';

interface FezanResultProps {
  fezanInfo: FezanInfo;
}

const getSpecialDayIcon = (type?: 'ritual' | 'ceremony' | 'general') => {
  switch (type) {
    case 'ritual':
      return <Moon className="h-5 w-5 text-amber-500" />;
    case 'ceremony':
      return <Sun className="h-5 w-5 text-amber-500" />;
    case 'general':
      return <Star className="h-5 w-5 text-amber-500" />;
    default:
      return <Sparkles className="h-5 w-5 text-amber-500" />;
  }
};

export const FezanResult = ({ fezanInfo }: FezanResultProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className={`mb-6 p-4 rounded-xl ${fezanInfo.type === 'favorable' ? 'bg-emerald-50' : 'bg-rose-50'}`}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {fezanInfo.name}
          </h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            fezanInfo.type === 'favorable' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
          }`}>
            {fezanInfo.type}
          </span>
        </div>
        <p className="text-gray-600 mt-2">
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
          {getSpecialDayIcon(fezanInfo.specialType)}
          <p className="text-amber-700">
            {fezanInfo.specialMessage}
          </p>
        </motion.div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">
          Signification
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {fezanInfo.description}
        </p>
      </div>
    </motion.div>
  );
};