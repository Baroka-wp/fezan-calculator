
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NamesTable } from '../data/NamesCategories';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const NamesPage = () => {
  const [selectedEthnie, setSelectedEthnie] = useState('fon');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-8">
      <Header />
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-[#FF4500]"
      >
        Prénoms Traditionnels du Bénin
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto mb-8"
      >
        <input
          type="text"
          placeholder="Rechercher un prénom..."
          className="w-full p-3 rounded-lg shadow-md focus:ring-2 focus:text-[#FF4500]"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </motion.div>

      {/* Sélection de l'ethnie */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"
      >
        {Object.entries(NamesTable).map(([key, ethnie]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg shadow-md ${
              selectedEthnie === key 
                ? 'bg-[#FF4500] text-white' 
                : 'bg-white hover:bg-amber-100'
            }`}
            onClick={() => {
              setSelectedEthnie(key);
              setSelectedCategory(null);
            }}
            
          >
            {ethnie.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Contenu de l'ethnie sélectionnée */}
      <AnimatePresence mode="wait">
        {selectedEthnie && (
          <motion.div
            key={selectedEthnie}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#FF4500]">
              {NamesTable[selectedEthnie].title}
            </h2>
            <p className="text-gray-600 mb-6">
              {NamesTable[selectedEthnie].description}
            </p>

            {/* Catégories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(NamesTable[selectedEthnie].categories).map(([categoryName, names]) => (
                <motion.div
                  key={categoryName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-amber-50 rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold mb-4 text-amber-800">{categoryName}</h3>
                  <div className="space-y-3">
                    {names
                      .filter(name => 
                        searchTerm === "" || 
                        name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((name, index) => (
                        <motion.div
                          key={name.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: index * 0.1 }
                          }}
                          className="bg-white p-3 rounded-md shadow-sm"
                        >
                          <h4 className="font-bold text-amber-900">{name.name}</h4>
                          <p className="text-gray-600 text-sm">{name.meaning}</p>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default NamesPage;