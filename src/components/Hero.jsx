import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-red-500/20 to-orange-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-red-500/20 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Mouse Following Light */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            
            {/* Greeting Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-200/40 dark:border-gray-700/40 shadow-xl shadow-black/5 dark:shadow-white/5">
              <Sparkles className="w-4 h-4 text-orange-500 dark:text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Welcome to my portfolio
              </span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block text-gray-800 dark:text-white">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Anish Rane
              </span>
            </h1>

            {/* Subtitle */}
            <div className="relative mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                Software Developer
              </h2>
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Building modern web applications with passion and precision. I specialize in creating 
              <span className="font-semibold text-orange-600 dark:text-cyan-400"> responsive</span> and 
              <span className="font-semibold text-red-600 dark:text-blue-400"> user-friendly</span> experiences 
              with cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-200 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Follow me:</span>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/AnishRane13", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/anish-rane13/", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://x.com/Anish_Rane_178", label: "Twitter" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="relative z-10 w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Visual */}
          <div className={`flex-1 flex justify-center transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="relative">
              {/* Main Avatar Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-orange-500/30 via-red-500/30 to-pink-500/30 dark:from-cyan-500/30 dark:via-blue-500/30 dark:to-purple-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-cyan-500/20 animate-reverse-spin"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl shadow-xl flex items-center justify-center animate-float animation-delay-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                {/* Pulsing Background Circles */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 animate-pulse"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-red-500/15 via-pink-500/15 to-orange-500/15 dark:from-blue-500/15 dark:via-purple-500/15 dark:to-cyan-500/15 animate-pulse animation-delay-500"></div>
                <div className="absolute inset-16 rounded-full bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-red-500/10 dark:from-purple-500/10 dark:via-cyan-500/10 dark:to-blue-500/10 animate-pulse animation-delay-1000"></div>
                
                {/* Main Avatar */}
                <div className="absolute inset-20 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-white/5 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center overflow-hidden">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <span className="relative text-8xl lg:text-9xl" role="img" aria-label="Developer">👨‍💻</span>
                  </div>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="absolute -right-16 top-16">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg animate-float animation-delay-1000">
                  <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">React</span>
                </div>
              </div>
              
              <div className="absolute -left-16 bottom-32">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg animate-float animation-delay-1500">
                  <span className="text-sm font-semibold bg-gradient-to-r from-red-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Scroll to explore</span>
            <div className="p-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg">
              <ArrowDown className="w-5 h-5 text-orange-500 dark:text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;