import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Dynamic header transformations
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 69, 0, 0.05)', 'rgba(255, 69, 0, 0.9)']
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['0 0 0 0 rgba(0,0,0,0)', '0 4px 6px -1px rgba(0,0,0,0.1)']
  );
  
  // More dramatic height transformation
  const headerHeight = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['5rem', '3rem']  
  );
  
  // Logo size transformation
  const logoSize = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['3rem', '2rem']  
  );
  
  // Logo text size transformation
  const logoTextSize = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['1.75rem', '1.25rem']  
  );

  // Update CSS variable for header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      const isMobile = window.innerWidth <= 768;
      const height = isMobile ? 64 : 80;  
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    // Initial setup
    updateHeaderHeight();

    // Listen for resize events
    window.addEventListener('resize', updateHeaderHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Événements', path: '/culturalevents' },
    { name: 'Le Faa', path: '/fezan' },
    { name: 'Les prenoms', path: '/name-meaning' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      style={{ 
        backgroundColor, 
        boxShadow,
        height: headerHeight
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-[#FF4500]/5 via-white to-[#FF4500]/5"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center font-bold text-gray-800 hover:text-gray-600 transition-colors"
          >
            <motion.img 
              src="../../../image/logo.png" 
              alt="logo" 
              style={{ 
                height: logoSize,
                width: logoSize
              }}
              className="mr-3 object-contain" 
            />
            <motion.span 
              style={{ fontSize: logoTextSize }}
              className="font-['Inter', sans-serif] font-semibold tracking-tight"
            >
              FEZAN
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-['Inter', sans-serif] text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-tight"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className="block py-2 font-['Inter', sans-serif] text-gray-800 hover:text-gray-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
