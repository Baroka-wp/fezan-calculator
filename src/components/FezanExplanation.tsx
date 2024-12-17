import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const FezanDays = [
  {
    name: 'Mêdjo (1er jour)',
    type: 'Favorable',
    description: 'Premier jour lunaire, naissance de l\'être humain. Particulièrement favorable le jeudi pour entreprendre quelque chose d\'important.'
  },
  {
    name: 'Mêkou (2ème jour)',
    type: 'Défavorable',
    description: 'Deuxième jour lunaire, symbolise la mort. Adapté uniquement pour les enterrements ou sacrifices aux défunts.'
  },
  {
    name: 'Vodoun (3ème jour)',
    type: 'Favorable',
    description: 'Jour du sacré, particulièrement recommandé pour les cérémonies cultuelles le dimanche.'
  },
  {
    name: 'Azon (4ème jour)',
    type: 'Défavorable',
    description: 'Jour de maladie. La mort incarnée peut hanter et apporter malédiction.'
  },
  {
    name: 'Vo (5ème jour)',
    type: 'Favorable',
    description: 'Jour du sacrifice, propice pour conjurer le mauvais sort ou rompre un maléfice.'
  },
  {
    name: 'Akoué/Houé (6ème jour)',
    type: 'Défavorable',
    description: 'Jour du jugement. Risque de disputes, conflits et menaces.'
  },
  {
    name: 'Bo (7ème jour)',
    type: 'Favorable',
    description: 'Jour propice pour jeter des sorts, particulièrement le mardi.'
  },
  {
    name: 'Hin/Fo (8ème jour)',
    type: 'Défavorable',
    description: 'Jour de la misère. Déconseillé pour entreprendre quelque chose d\'important.'
  },
  {
    name: 'Fa (9ème jour)',
    type: 'Favorable',
    description: 'Jour parfait pour consulter l\'oracle et combattre les malheurs.'
  }
];

const FezanExplanation: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FF4500]/5 via-white to-[#FF4500]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center mb-4 px-4 py-2 bg-[#FF4500]/10 text-[#FF4500] rounded-full"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">L'Héritage Ancestral</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Le <span className="text-[#FF4500]">Fêzan</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              Le Fezan est un outil ancestral pour choisir la meilleure date d'un événement de la vie important ou décisif. 
              Ce calendrier résulte de longues années d'observation de la nature et de ses phénomènes par nos ancêtres, 
              transmis oralement de génération en génération.
            </motion.p>
          </div>

          {/* Lunar Cycle Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#FF4500]/10"
          >
            <h3 className="text-2xl font-bold text-[#FF4500] mb-4">Le Fezan et le Cycle Lunaire</h3>
            <p className="text-gray-700 mb-4">
              La base du cycle Fezan est le cycle lunaire, en particulier les nouvelles lunes. 
              Le calendrier comporte des cycles de semaines appelées Fê. Lorsqu'une nouvelle lune apparaît, 
              une nouvelle semaine commence par le Mêdjo, indépendamment de l'étape du cycle en cours.
            </p>
            <div className="bg-[#FF4500]/5 p-4 rounded-lg border-l-4 border-[#FF4500]">
              <p className="text-gray-700 italic">
                Exemple : Si le Mekou tombe le 29 décembre 2024, on pourrait s'attendre à avoir le Vodoun le lendemain. 
                Mais si le 30 décembre correspond à une nouvelle lune, c'est en fait le Mêdjo qui commence.
              </p>
            </div>
          </motion.div>

          {/* Fezan Days */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Les 9 jours du Fezan
            </h3>
            {FezanDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden"
              >
                <div 
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#FF4500]/5 transition-colors"
                >
                  <div>
                    <h4 className={`text-xl font-bold ${day.type === 'Favorable' ? 'text-green-600' : 'text-red-600'}`}>
                      {day.name} - {day.type}
                    </h4>
                  </div>
                  <div>
                    {expandedDay === index ? <ChevronUp className="text-[#FF4500]" /> : <ChevronDown className="text-[#FF4500]" />}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedDay === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 pt-0 text-gray-700"
                    >
                      {day.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FezanExplanation;
