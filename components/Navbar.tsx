import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-gray-900 dark:text-white">
            SENTINELLE <span className="text-primary">VERTE</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#concept" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Concept</a>
          <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Fonctionnalités</a>
          <a href="#impact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Impact</a>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
            Démonstration
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#concept" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Concept</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Fonctionnalités</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Impact</a>
          <button className="bg-primary text-white px-5 py-3 rounded-lg font-medium w-full mt-2">
            Démonstration
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;