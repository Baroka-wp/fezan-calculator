import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroIllustration from '../assets/272138-P5OO85-689.jpg';
import { calculateFezanDay } from '../utils/fezanCalculator';
import type { FezanInfo } from '../types/fezan';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FezanExplanation from '../components/FezanExplanation';
import MainContent from '../components/MainContent';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());
  const [fezanInfo, setFezanInfo] = React.useState<FezanInfo | null>(null);
  
  // Refs for scrolling
  const fezanExplanationRef = useRef<HTMLDivElement>(null);
  const monthlyCalendarRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setFezanInfo(calculateFezanDay(selectedDate));
  }, [selectedDate]);

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
  };

  // Scroll to section functions
  const scrollToFezanExplanation = () => {
    monthlyCalendarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMonthlyCalendar = () => {
    fezanExplanationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF4500]/5 via-white to-[#FF4500]/5 font-['Inter', sans-serif]">
      {/* Navbar */}
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.7, 0.5],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF4500]/10 rounded-full blur-2xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.7, 0.5],
              rotate: [0, -360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FF4500]/10 rounded-full blur-2xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12 lg:py-16">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center mb-4 px-4 py-2 bg-[#FF4500]/10 text-[#FF4500] rounded-full">
                <span className="text-sm font-medium">Découvrez la Sagesse des temps Immémoriaux !</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                <span className="text-[#FF4500]">Découvrez le </span>FEZAN
              </h1>
              
              <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
                Naviguez dans le temps avec l'ancienne sagesse géomantique. Chaque jour révèle son propre potentiel cosmique.
              </p>
              
              <div className="flex space-x-4">
                <motion.button
                  onClick={scrollToFezanExplanation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-[#FF4500] text-white rounded-full font-semibold hover:bg-[#FF4500]/90 transition-all"
                >
                  Voir le calendrier
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={scrollToMonthlyCalendar}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 border-2 border-[#FF4500] text-[#FF4500] rounded-full font-semibold hover:bg-[#FF4500]/10 transition-all"
                >
                  Savoir plus sur le Fezan
                </motion.button>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="flex justify-center items-center"
            >
              <img 
                src={HeroIllustration} 
                alt="Fezan Calendar Illustration" 
                className="w-full max-w-xl object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6"
        >
        <span className="text-[#FF4500]">Explorez <br /></span> le Calendrier Fezan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Découvrez les jours et leurs significations uniques dans le calendrier Fezan, un système ancestral de compréhension du temps.
        </motion.p>
      </div>

      <MainContent
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        onMonthChange={handleMonthChange}
        fezanInfo={fezanInfo}
      />
      
      <div className="flex justify-center pb-16">
        <Link 
          to="/calendar" 
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#FF4500] rounded-full hover:bg-[#FF6347] transition-colors duration-200"
        >
          Voir le Calendrier Complet
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Fezan Explanation Section */}
      <div ref={fezanExplanationRef}>
        <FezanExplanation />
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;