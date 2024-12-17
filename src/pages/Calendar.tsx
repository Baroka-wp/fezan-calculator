import React, { useState, useEffect } from 'react';
import { calculateFezanDay } from '../utils/fezanCalculator';
import { getFilteredDates } from '../utils/calendarFilters';
import MainContent from '../components/MainContent';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import type { FezanInfo } from '../types/fezan';
import { CalendarFilters } from '../components/CalendarFilters';
import { MonthSelector } from '../components/MonthSelector';
import { FezanDaySelector } from '../components/FezanDaySelector';
import { DateInput } from '../components/DateInput';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [fezanInfo, setFezanInfo] = useState<FezanInfo | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredDates, setFilteredDates] = useState<{ date: Date; info: FezanInfo }[]>([]);
  const [showDateInput, setShowDateInput] = useState(false);
  const [selectedFezanDay, setSelectedFezanDay] = useState<string | null>(null);

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSelectedFezanDay(null);
    if (filter === 'date') {
      setShowDateInput(true);
    } else {
      const newFilteredDates = getFilteredDates(currentMonth, filter);
      setFilteredDates(newFilteredDates);
    }
  };

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
  useEffect(() => {
    const newFilteredDates = getFilteredDates(currentMonth, activeFilter, selectedFezanDay);
    setFilteredDates(newFilteredDates);
  }, [currentMonth, activeFilter, selectedFezanDay]);

  // Update Fezan info when date is selected
  useEffect(() => {
    if (selectedDate) {
      const info = calculateFezanDay(selectedDate);
      setFezanInfo(info);
    }
  }, [selectedDate]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Calendrier Fezan
          </h1>
          
          <CalendarFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            currentMonth={currentMonth}
          />

          {/* Display filtered dates or main calendar */}
          {activeFilter !== 'all' ? (
            <div className="mt-8">
              {/* Month selector for favorable days */}
              {activeFilter === 'favorable' && (
                <div className="mb-6">
                  <MonthSelector
                    selectedMonth={currentMonth}
                    onMonthSelect={handleMonthChange}
                  />
                </div>
              )}

              {/* Fezan day selector */}
              {activeFilter === 'fezan' && (
                <div className="mb-6 space-y-4">
                  <MonthSelector
                    selectedMonth={currentMonth}
                    onMonthSelect={handleMonthChange}
                  />
                  <FezanDaySelector
                    selectedDate={currentMonth}
                    onDateChange={handleMonthChange}
                    selectedFezanDay={selectedFezanDay}
                    onFezanDaySelect={handleFezanDaySelect}
                  />
                </div>
              )}
              
              {filteredDates.length > 0 ? (
                <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-[#FF4500]/10">
                  <h3 className="text-xl font-semibold mb-4">
                    {activeFilter === 'favorable' && `Jours Favorables - ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`}
                    {activeFilter === 'fezan' && selectedFezanDay && `Jours ${selectedFezanDay} - ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`}
                    {activeFilter === 'month' && 'Jours du Mois'}
                    {activeFilter === 'year' && 'Jours de l\'Année'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredDates.map(({ date, info }) => (
                      <div 
                        key={date.toISOString()}
                        className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedDate(date);
                          setActiveFilter('all');
                        }}
                      >
                        <p className="font-medium">{info.date}</p>
                        <p className={`${info.color} font-semibold`}>{info.name}</p>
                        {info.isSpecialDay && (
                          <p className="text-sm text-gray-600 mt-1">{info.specialMessage}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-8">
                  {activeFilter === 'fezan' && !selectedFezanDay 
                    ? 'Sélectionnez un jour Fezan'
                    : `Aucun résultat trouvé pour ${currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`
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
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;
