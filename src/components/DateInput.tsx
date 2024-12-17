import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface DateInputProps {
  onDateSubmit: (date: Date) => void;
  onClose: () => void;
}

export const DateInput: React.FC<DateInputProps> = ({
  onDateSubmit,
  onClose,
}) => {
  const [dateValue, setDateValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateValue) return;

    const date = new Date(dateValue);
    // Set the time to noon to avoid timezone issues
    date.setHours(12, 0, 0, 0);
    
    onDateSubmit(date);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Choisissez une date
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.valueAsDate?.toISOString().split('T')[0] ?? '')}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF4500] focus:border-transparent outline-none"
                required
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#FF4500] text-white rounded-lg hover:bg-[#FF5722] transition-colors"
            >
              Valider
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
