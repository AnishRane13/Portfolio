import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Heart, Code2, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating orbs */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-500/15 to-pink-500/15 dark:from-cyan-500/15 dark:to-purple-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-red-500/15 to-orange-500/15 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-full blur-xl animate-pulse"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        
        {/* Subtle mouse following light */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:via-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="relative mb-6">
              {/* Subtle decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-2xl blur-xl"></div>
              
              <div className="relative inline-flex items-center gap-3 px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500 rounded-xl shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  &lt;Anish /&gt;
                </h3>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-gray-600 dark:text-gray-400">
              <span>Crafted with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span>and</span>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full">
                <Sparkles className="w-4 h-4 text-orange-500 dark:text-cyan-400" />
                <span className="font-semibold text-orange-600 dark:text-cyan-400">React</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
              <span>Connect with me</span>
              <div className="w-8 h-px bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500"></div>
            </div>
            
            <div className="flex gap-3">
              {[
                { 
                  Icon: Github, 
                  href: "https://github.com/AnishRane13", 
                  label: "GitHub",
                  gradient: "from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500"
                },
                { 
                  Icon: Linkedin, 
                  href: "https://www.linkedin.com/in/anish-rane13/", 
                  label: "LinkedIn",
                  gradient: "from-red-500 to-pink-500 dark:from-blue-500 dark:to-purple-500"
                },
                { 
                  Icon: Twitter, 
                  href: "https://x.com/Anish_Rane_178", 
                  label: "Twitter",
                  gradient: "from-pink-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500"
                }
              ].map(({ Icon, href, label, gradient }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  aria-label={label}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                  
                  {/* Icon */}
                  <Icon className="relative z-10 w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-all duration-300" />
                  
                  {/* Simple shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Simple Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50 dark:border-gray-700/50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 py-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-200/40 dark:border-gray-700/40 shadow-lg">
            <span className="text-gray-600 dark:text-gray-400">
              &copy; {year} Anish Rane. All rights reserved.
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group p-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}

      {/* Minimal corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/8 to-transparent dark:from-cyan-500/8 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/8 to-transparent dark:from-purple-500/8 rounded-tl-full"></div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </footer>
  );
};

export default Footer;