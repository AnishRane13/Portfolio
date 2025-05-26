import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Zap } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-white/5 border-b border-gray-200/30 dark:border-gray-800/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl px-6 py-3 border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5 dark:shadow-white/5">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-6 h-6 text-orange-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Anish
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full px-3 py-2 border border-gray-200/40 dark:border-gray-700/40 shadow-xl shadow-black/5 dark:shadow-white/5">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:text-white dark:hover:text-white group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="relative">
                <button
                  onClick={toggleDarkMode}
                  className="relative p-4 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 group overflow-hidden"
                >
                  <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-2xl"></div>
                  <div className="relative z-10 flex items-center justify-center w-6 h-6">
                    {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-500 transform group-hover:rotate-180 transition-transform duration-700" />
                    ) : (
                      <Moon className="w-5 h-5 text-indigo-600 transform group-hover:-rotate-45 transition-transform duration-700" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-400 dark:to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:scale-110"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:scale-110"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border-t border-gray-200/30 dark:border-gray-800/30 mx-4 mb-6 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-white/5">
            <div className="p-8 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center px-6 py-4 text-gray-700 dark:text-gray-200 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:via-red-500/10 hover:to-pink-500/10 dark:hover:from-cyan-500/10 dark:hover:via-blue-500/10 dark:hover:to-purple-500/10 hover:text-orange-600 dark:hover:text-cyan-400 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                  <span className="font-semibold text-lg">{item.name}</span>
                  <Zap className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 dark:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
