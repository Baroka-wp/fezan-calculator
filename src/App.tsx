import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sun } from 'lucide-react';
import { calculateFezanDay } from './utils/fezanCalculator';
import { MonthlyCalendar } from './components/MonthlyCalendar';
import { DayDetails } from './components/DayDetails';
import type { FezanInfo } from './types/fezan';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [fezanInfo, setFezanInfo] = useState<FezanInfo | null>(null);

  useEffect(() => {
    setFezanInfo(calculateFezanDay(selectedDate));
  }, [selectedDate]);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-indigo-900 mb-6">
              Découvrez le Calendrier FEZAN
            </h1>
            <p className="text-xl text-indigo-700 max-w-2xl mx-auto mb-12">
              Explorez l'ancienne sagesse du calendrier Fezan et découvrez les jours propices pour vos projets importants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                <Star className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-indigo-900">5 jours favorables</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                <Moon className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-amber-900">4 jours défavorables</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                <Sun className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-purple-900">Cycle de 9 jours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <MonthlyCalendar 
            currentDate={currentMonth}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            onMonthChange={handleMonthChange}
          />
          {fezanInfo && <DayDetails fezanInfo={fezanInfo} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Source : CERCLE NATIONAL DES PRETRES DU FA
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            "La géomancie ne ment jamais pour quelqu'un qui sait interpréter"
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;