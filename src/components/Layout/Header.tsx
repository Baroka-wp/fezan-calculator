import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full relative py-2 sm:py-3 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="text-indigo-900 font-bold text-lg sm:text-2xl flex items-center">
          <img src={logo} alt="logo" className="h-20 w-[80px]" />
          FEZAN
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          <Link to={"/"} className="text-indigo-700 hover:text-indigo-900 font-medium">
            Calendrier
          </Link>
          <Link to="/culturalevents" className="text-indigo-700 hover:text-indigo-900 font-medium">
            Évènements Culturels
          </Link>
          <a href="https://vodundays.bj/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-900 font-medium">
            Vodoun Day
          </a>
          <Link to="/name-meaning" className="text-indigo-700 hover:text-indigo-900 font-medium">
            Signification des Prénoms
          </Link>
          <Link to="/fezan" className="text-indigo-700 hover:text-indigo-900 font-medium">
            Le Faa
          </Link>
        </nav>

        {/* Responsive Menu */}
        <div className="lg:hidden">
          <button
            className="text-indigo-900 focus:outline-none cursor-pointer"
            onClick={handleToggle}
            aria-expanded={isOpen}
          >
            <MenuIcon />
          </button>

          
          {isOpen && (
            <>
             
              <div
                className="fixed inset-0 bg-black bg-opacity-35 z-10"
                onClick={closeMenu}
              ></div>

              {/* Mobile Menu */}
              <nav className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-20 flex flex-col gap-4 p-6">
                <button
                  className="text-indigo-900 self-end focus:outline-none"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
                <Link
                  to={'/'}
                  className="text-indigo-700 hover:text-indigo-900 font-medium"
                  onClick={closeMenu}
                >
                  Calendrier
                </Link>
                <Link
                  to={'/culturalevents'}
                  className="text-indigo-700 hover:text-indigo-900 font-medium"
                  onClick={closeMenu}
                >
                  Évènements Culturels
                </Link>
                <a
                  href="https://vodundays.bj/"
                  target="_blank"
                  className="text-indigo-700 hover:text-indigo-900 font-medium"
                  onClick={closeMenu}
                >
                  Vodoun Day
                </a>
                <Link
                  to={'/name-meaning'}
                  className="text-indigo-700 hover:text-indigo-900 font-medium"
                  onClick={closeMenu}
                >
                  Signification des Prénoms
                </Link>
                <Link
                  to={'/fezan'}
                  className="text-indigo-700 hover:text-indigo-900 font-medium"
                  onClick={closeMenu}
                >
                  Le Faa
                </Link>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
