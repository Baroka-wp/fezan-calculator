import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/fezan", 
      label: "Facebook" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/fezan", 
      label: "Twitter" 
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/fezan", 
      label: "Instagram" 
    }
  ];

  const footerLinks = [
    { name: "Accueil", path: "/" },
    { name: "Événements", path: "/culturalevents" },
    { name: "Le Faa", path: "/fezan" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Politique de Confidentialité", path: "/privacy-policy" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer 
      className="bg-gradient-to-br from-[#FF4500]/5 via-white to-[#FF4500]/5 
                 border-t border-[#FF4500]/10 py-12 font-['Inter', sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img 
                src="../../../image/logo.png" 
                alt="Fezan Logo" 
                className="h-10 w-10 mr-3" 
              />
              <span className="text-2xl font-bold text-[#FF4500]">FEZAN</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Découvrez la sagesse ancestrale du calendrier Fezan, un guide spirituel pour comprendre les cycles du temps.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Liens Rapides
            </h4>
            <nav className="space-y-2 w-full">
              {footerLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-600 hover:text-[#FF4500] 
                               transition-colors text-sm group-hover:pl-2 
                               group-hover:font-medium"
                  >
                    <ChevronRight 
                      size={16} 
                      className="mr-2 opacity-0 group-hover:opacity-100 
                                 text-[#FF4500] transition-opacity"
                    />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Suivez-nous
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-[#FF4500] transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Source */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Source : CERCLE NATIONAL DES PRETRES DU FA
          </p>
          <p className="text-gray-500 italic text-sm mb-4">
            "La géomancie ne ment jamais pour quelqu'un qui sait interpréter"
          </p>
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} FEZAN. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;