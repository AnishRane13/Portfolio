// Navbar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          &lt;Anish /&gt;
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#home" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            <a href="#home" className="text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(false)}>Contact</a>
            <button 
              onClick={toggleDarkMode} 
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
            >
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;