import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mb-12 md:mb-0"
          >
            <img 
              src="/api/placeholder/500/500" 
              alt="Profile" 
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 md:pl-12"
          >
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            
            <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Hello! I'm [Your Name], a passionate full-stack developer with expertise in building modern, 
              responsive web applications. With over [X] years of experience in the field, I've developed 
              a deep understanding of both front-end and back-end technologies.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              My journey in web development began with a fascination for creating interactive user experiences.
              Since then, I've worked on various projects ranging from e-commerce platforms to complex dashboards,
              always striving to write clean, maintainable, and efficient code.
            </p>
            
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through writing technical articles and mentoring aspiring developers.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Name:</strong> [Your Name]
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> you@example.com
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> [Your Location]
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Availability:</strong> Full-time
                </p>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="500" className="mt-8">
              <a href="https://drive.google.com/file/d/1EYrgFpPRHlbHuPOCBdk3iC4jSYAl2HuE/view?usp=sharing" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-block">
               View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;