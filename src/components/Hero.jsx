// Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Full Stack</span> Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Building modern web applications with passion
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Hi! I'm Anish Rane, a full stack developer specializing in 
            creating responsive and user-friendly web applications with modern technologies.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/AnishRane13" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/anish-rane13/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaLinkedin size={28} />
            </a>
            <a href="https://x.com/Anish_Rane_178" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaTwitter size={28} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors text-center">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 font-medium transition-colors text-center">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-blue-500 dark:bg-blue-400 opacity-20 animate-pulse animation-delay-500"></div>
            <div className="absolute inset-8 rounded-full bg-blue-400 dark:bg-blue-300 opacity-20 animate-pulse animation-delay-1000"></div>
            <div className="absolute inset-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
              {/* Alternative: use an actual image of yourself */}
              {/* <img src="/assets/profile.jpg" alt="Your Name" className="rounded-full" /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;