import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroIllustration from '../assets/272138-P5OO85-689.jpg';
import { calculateFezanDay } from '../utils/fezanCalculator';
import { getFilteredDates } from '../utils/calendarFilters';
import { getLunarCalendar, getLunarDaysInMonth } from '../utils/lunarCalendarApi';
import { getLunarPhase } from '../utils/lunarPhases';
import type { FezanInfo } from '../types/fezan';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FezanExplanation from '../components/FezanExplanation';
import MainContent from '../components/MainContent';
import { CalendarFilters } from '../components/CalendarFilters';
import { MonthSelector } from '../components/MonthSelector';
import { FezanDaySelector } from '../components/FezanDaySelector';
import { DateInput } from '../components/DateInput';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());
  const [fezanInfo, setFezanInfo] = React.useState<FezanInfo | null>(null);
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [filteredDates, setFilteredDates] = React.useState<{ date: Date; info: FezanInfo }[]>([]);
  const [showDateInput, setShowDateInput] = React.useState(false);
  const [selectedFezanDay, setSelectedFezanDay] = React.useState<string | null>(null);
  const [lunarDays, setLunarDays] = React.useState<{
    gregorianDate: Date;
    lunarDay: number;
    lunarMonth: number;
    isLeap: boolean;
  }[]>([]);

  // Refs for scrolling
  const fezanExplanationRef = useRef<HTMLDivElement>(null);
  const monthlyCalendarRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setFezanInfo(calculateFezanDay(selectedDate));
  }, [selectedDate]);

  const handleMonthChange = (newDate: Date) => {
    setCurrentMonth(newDate);
    if (activeFilter === 'lunar') {
      fetchLunarDays(newDate.getFullYear(), newDate.getMonth() + 1);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSelectedFezanDay(null);
    if (filter === 'date') {
      setShowDateInput(true);
    } else if (filter === 'lunar') {
      fetchLunarDays(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    } else {
      const newFilteredDates = getFilteredDates(currentMonth, filter);
      setFilteredDates(newFilteredDates);
    }
  };

  const fetchLunarDays = async (year: number, month: number) => {
    try {
      const lunarData = await getLunarCalendar(year, month);
      const monthLunarDays = getLunarDaysInMonth(lunarData);
      setLunarDays(monthLunarDays);
    } catch (error) {
      console.error('Error fetching lunar days:', error);
      setLunarDays([]);
    }
  };

  useEffect(() => {
    if (activeFilter === 'lunar') {
      fetchLunarDays(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    }
  }, [activeFilter]);

  const handleDateSubmit = (date: Date) => {
    setSelectedDate(date);
    setCurrentMonth(date);
    const info = calculateFezanDay(date);
    setFezanInfo(info);
    setShowDateInput(false);
    setActiveFilter('all');
  };

  const handleFezanDaySelect = (dayName: string) => {
    setSelectedFezanDay(dayName);
    const newFilteredDates = getFilteredDates(currentMonth, 'fezan', dayName);
    setFilteredDates(newFilteredDates);
  };

  // Update filtered dates when month or filter changes
  React.useEffect(() => {
    const newFilteredDates = getFilteredDates(currentMonth, activeFilter, selectedFezanDay);
    setFilteredDates(newFilteredDates);
  }, [currentMonth, activeFilter, selectedFezanDay]);

  // Scroll to section functions
  const scrollToFezanExplanation = () => {
    monthlyCalendarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMonthlyCalendar = () => {
    fezanExplanationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderDays = () => {
    if (activeFilter === 'lunar' && lunarDays.length > 0) {
      return lunarDays.map((lunarInfo, index) => {
        const phase = getLunarPhase(lunarInfo.lunarDay);
        return (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => {
              setSelectedDate(lunarInfo.gregorianDate);
              setActiveFilter('all');
            }}
          >
            <p className="font-medium">
              {lunarInfo.gregorianDate.toLocaleDateString('fr-FR', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
            <div className="text-[#FF4500] font-semibold flex flex-col gap-1">
              <p className="text-2xl">{phase.emoji}</p>
              <p>{phase.name}</p>
              <p>
                Jour {lunarInfo.lunarDay} - Mois {lunarInfo.lunarMonth}
                {lunarInfo.isLeap && ' (Mois bissextile)'}
              </p>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  const MonthYearSelector = () => {
    const currentYear = currentMonth.getFullYear();
    const months = Array.from({ length: 12 }, (_, i) => ({
      value: i,
      name: new Date(2024, i).toLocaleDateString('fr-FR', { month: 'long' }),
      shortName: new Date(2024, i).toLocaleDateString('fr-FR', { month: 'short' })
    }));

    const years = Array.from({ length: 21 }, (_, i) => 2020 + i);

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-3">
          <button
            onClick={() => handleMonthChange(new Date(currentYear - 1, currentMonth.getMonth()))}
            className="p-1 hover:text-[#FF4500] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <select
            value={currentYear}
            onChange={(e) => handleMonthChange(new Date(Number(e.target.value), currentMonth.getMonth()))}
            className="text-lg font-medium text-gray-900 bg-transparent focus:outline-none cursor-pointer hover:text-[#FF4500] transition-colors"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <button
            onClick={() => handleMonthChange(new Date(currentYear + 1, currentMonth.getMonth()))}
            className="p-1 hover:text-[#FF4500] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {months.map(({ value, name, shortName }) => (
            <button
              key={value}
              onClick={() => handleMonthChange(new Date(currentYear, value))}
              className={`
                py-1.5 px-3 rounded-lg text-sm font-medium transition-all
                ${value === currentMonth.getMonth()
                  ? 'bg-[#FF4500] text-white'
                  : 'bg-white hover:bg-[#FF4500]/10 text-gray-700 hover:text-[#FF4500]'
                }
              `}
            >
              <span className="hidden md:inline">{name}</span>
              <span className="md:hidden">{shortName}</span>
            </button>
          ))}
        </div>
      </div>
    );
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CalendarFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          currentMonth={currentMonth}
        />

        {/* Display filtered dates or main calendar */}
        {activeFilter !== 'all' ? (
          <div className="mt-8">
            {/* Month selector for favorable days */}
            {(activeFilter === 'favorable' || activeFilter === 'lunar') && (
              <div className="mb-6">
                <MonthYearSelector />
              </div>
            )}

            {/* Fezan day selector */}
            {activeFilter === 'fezan' && (
              <div className="mb-6 space-y-4">
                <MonthYearSelector />
                <FezanDaySelector
                  selectedDate={currentMonth}
                  onDateChange={handleMonthChange}
                  selectedFezanDay={selectedFezanDay}
                  onFezanDaySelect={handleFezanDaySelect}
                />
              </div>
            )}
            
            {filteredDates.length > 0 || (activeFilter === 'lunar' && lunarDays.length > 0) ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3">
                <h3 className="text-sm font-medium mb-2 text-gray-900">
                  {activeFilter === 'favorable' && `Jours Favorables - ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`}
                  {activeFilter === 'fezan' && selectedFezanDay && `Jours ${selectedFezanDay} - ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`}
                  {activeFilter === 'lunar' && `Jours Lunaires - ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`}
                  {activeFilter === 'month' && 'Jours du Mois'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {activeFilter === 'lunar' ? (
                    lunarDays.map((lunarInfo, index) => {
                      const phase = getLunarPhase(lunarInfo.lunarDay);
                      return (
                        <div
                          key={index}
                          className="p-2 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                          onClick={() => {
                            setSelectedDate(lunarInfo.gregorianDate);
                            setActiveFilter('all');
                          }}
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-xl">{phase.emoji}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {lunarInfo.gregorianDate.getDate()} {lunarInfo.gregorianDate.toLocaleDateString('fr-FR', { month: 'short' })}
                              </p>
                              <p className="text-xs text-[#FF4500]">{phase.name}</p>
                              <p className="text-xs text-gray-500">
                                Jour {lunarInfo.lunarDay}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    filteredDates.map(({ date, info }) => (
                      <div 
                        key={date.toISOString()}
                        className="p-2 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedDate(date);
                          setActiveFilter('all');
                        }}
                      >
                        <p className="text-sm font-medium text-gray-900">
                          {date.getDate()} {date.toLocaleDateString('fr-FR', { month: 'short' })}
                        </p>
                        <p className={`text-xs ${info.color}`}>{info.name}</p>
                        {info.isSpecialDay && (
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{info.specialMessage}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 mt-2">
                {activeFilter === 'fezan' && !selectedFezanDay 
                  ? 'Sélectionnez un jour Fezan'
                  : `Aucun résultat pour ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`
                }
              </div>
            )}
          </div>
        ) : (
          <MainContent
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            onMonthChange={handleMonthChange}
            fezanInfo={fezanInfo}
          />
        )}

        {showDateInput && (
          <DateInput
            onDateSubmit={handleDateSubmit}
            onClose={() => {
              setShowDateInput(false);
              setActiveFilter('all');
            }}
          />
        )}
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