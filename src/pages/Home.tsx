import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sun } from 'lucide-react';
import { calculateFezanDay } from '../utils/fezanCalculator';
import { MonthlyCalendar } from '../components/MonthlyCalendar';
import { DayDetails } from '../components/DayDetails';
import type { FezanInfo } from '../types/fezan';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function Home() {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar */}
           <Header />
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 sm:mb-6">
              Découvrez le Calendrier FEZAN
            </h1>
            <p className="text-lg sm:text-xl text-indigo-700 max-w-2xl mx-auto mb-8 sm:mb-12">
              Explorez l'ancienne sagesse du calendrier Fezan et découvrez les jours propices pour vos projets importants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
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
      </section>
      

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full" id='calendar'>
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
        <Footer/>
    </div>
  );
}

export default Home;