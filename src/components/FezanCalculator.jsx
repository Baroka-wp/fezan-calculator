import React, { useState, useEffect } from 'react';
import { 
  Calendar,
  Sun,
  Moon,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  Info,
  Calendar as CalendarIcon,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
const FEZAN_CYCLE = [
  { 
    name: 'Medjo',
    type: 'favorable',
    color: 'text-green-600',
    position: 1,
    description: "Premier jour lunaire, naissance de l'être humain. Particulièrement favorable le jeudi pour entreprendre quelque chose d'important.",
    special: "Jeudi"
  },
  { 
    name: 'Mekou',
    type: 'défavorable',
    color: 'text-red-600',
    position: 2,
    description: "Deuxième jour lunaire, symbolise la mort. Adapté uniquement pour les enterrements ou sacrifices aux défunts.",
    special: "Enterrements"
  },
  { 
    name: 'Vodoun',
    type: 'favorable',
    color: 'text-green-600',
    position: 3,
    description: "Jour du sacré, particulièrement recommandé pour les cérémonies cultuelles le dimanche.",
    special: "Dimanche"
  },
  { 
    name: 'Azon',
    type: 'défavorable',
    color: 'text-red-600',
    position: 4,
    description: "Jour de maladie. La mort incarnée peut hanter et apporter malédiction."
  },
  { 
    name: 'Vo',
    type: 'favorable',
    color: 'text-green-600',
    position: 5,
    description: "Jour du sacrifice, propice pour conjurer le mauvais sort ou rompre un maléfice."
  },
  { 
    name: 'Akoue/Houe',
    type: 'défavorable',
    color: 'text-red-600',
    position: 6,
    description: "Jour du jugement. Risque de disputes, conflits et menaces."
  },
  { 
    name: 'Bo',
    type: 'favorable',
    color: 'text-green-600',
    position: 7,
    description: "Jour propice pour jeter des sorts, particulièrement le mardi.",
    special: "Mardi"
  },
  { 
    name: 'Hin/Fo',
    type: 'défavorable',
    color: 'text-red-600',
    position: 8,
    description: "Jour de la misère. Déconseillé pour entreprendre quelque chose d'important."
  },
  { 
    name: 'Fa',
    type: 'favorable',
    color: 'text-green-600',
    position: 9,
    description: "Jour parfait pour consulter l'oracle et combattre les malheurs."
  }
];

const FezanCalculator = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fezanInfo, setFezanInfo] = useState(null);

  useEffect(() => {
    // Initialiser le fezanInfo avec la date actuelle au chargement
    setFezanInfo(calculateFezanDay(selectedDate));
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois au montage

  const calculateFezanDay = (date) => {

    
    const baseDate = new Date(2022, 10, 3); // 1er novembre 2022 (Hin/Fo, position 8)
    const diffTime = date - baseDate;


    console.log({date})
    console.log({baseDate})
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays)
    // Position correcte dans le cycle
    let position = (diffDays % 9 + 9) % 9; // Assure un résultat positif
    const fezanDay = FEZAN_CYCLE[position];
  
    const dayName = date.toLocaleDateString('fr-FR', { weekday: 'long' });
    const formattedDate = date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  
    // Vérifier les jours spéciaux
    let isSpecialDay = false;
    let specialMessage = '';
    if (fezanDay.special) {
      if ((fezanDay.name === 'Medjo' && dayName === 'jeudi') ||
          (fezanDay.name === 'Vodoun' && dayName === 'dimanche') ||
          (fezanDay.name === 'Bo' && dayName === 'mardi')) {
        isSpecialDay = true;
        specialMessage = `Jour particulièrement propice (${fezanDay.name} un ${dayName})`;
      }
    }
  
    return {
      ...fezanDay,
      jour: dayName,
      date: formattedDate,
      isSpecialDay,
      specialMessage
    };
  };
  

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    setFezanInfo(calculateFezanDay(date));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-indigo-900 mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Calendrier FEZAN
          </motion.h1>
          <p className="text-lg text-indigo-600 opacity-80">
          ‘’La géomancie ne ment jamais pour quelqu'un qui sait interpréter’’
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Date Selection */}
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
                  onChange={(e) => handleDateChange(e)}
                />
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-indigo-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Points Clés du FEZAN
              </h3>
              <ul className="space-y-2 text-sm text-indigo-700">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Cycle de 9 jours
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  5 jours favorables
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  4 jours défavorables
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Results */}
          {fezanInfo && (
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Result Header */}
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

              {/* Special Day Alert */}
              {fezanInfo.isSpecialDay && (
                <motion.div 
                  className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <p className="text-amber-700">
                    {fezanInfo.specialMessage}
                  </p>
                </motion.div>
              )}

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Signification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {fezanInfo.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Source : CERCLE NATIONAL DES PRETRES DU FA
        </div>
      </motion.div>
    </div>
  );
};


export default FezanCalculator;