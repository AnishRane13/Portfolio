// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">&lt;YourName /&gt;</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Made with <FaHeart className="inline text-red-500" /> and React
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {year} [Your Name]. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;