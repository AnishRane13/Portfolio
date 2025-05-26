import { useState, useEffect } from 'react';
import { Code2, Database, Globe, Server, Sparkles, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const frontendSkills = [
    { 
      name: 'React', 
      icon: '⚛️', 
      level: 90, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Component-based UI library'
    },
    { 
      name: 'JavaScript', 
      icon: '🟨', 
      level: 85, 
      color: 'from-yellow-400 to-orange-500',
      description: 'Dynamic programming language'
    },
    { 
      name: 'TypeScript', 
      icon: '🔷', 
      level: 80, 
      color: 'from-blue-600 to-indigo-600',
      description: 'Typed JavaScript superset'
    },
    { 
      name: 'HTML5', 
      icon: '🌐', 
      level: 95, 
      color: 'from-orange-500 to-red-500',
      description: 'Modern markup language'
    },
    { 
      name: 'CSS3', 
      icon: '🎨', 
      level: 90, 
      color: 'from-blue-400 to-purple-500',
      description: 'Advanced styling & animations'
    },
    { 
      name: 'Tailwind', 
      icon: '💨', 
      level: 85, 
      color: 'from-teal-400 to-cyan-500',
      description: 'Utility-first CSS framework'
    },
    { 
      name: 'Redux', 
      icon: '🔮', 
      level: 75, 
      color: 'from-purple-500 to-pink-500',
      description: 'State management library'
    },
    { 
      name: 'Next.js', 
      icon: '▲', 
      level: 80, 
      color: 'from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white',
      description: 'React production framework'
    },
  ];

  const backendSkills = [
    { 
      name: 'Node.js', 
      icon: '🟢', 
      level: 85, 
      color: 'from-green-500 to-emerald-500',
      description: 'JavaScript runtime environment'
    },
    { 
      name: 'Express', 
      icon: '🚀', 
      level: 80, 
      color: 'from-gray-600 to-gray-800',
      description: 'Fast web framework'
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      level: 75, 
      color: 'from-green-600 to-green-800',
      description: 'NoSQL database'
    },
    { 
      name: 'SQL', 
      icon: '🗄️', 
      level: 70, 
      color: 'from-blue-700 to-blue-900',
      description: 'Database query language'
    },
  ];

  const SkillCard = ({ skill, index, category }) => {
    const isHovered = hoveredSkill === `${category}-${index}`;
    
    return (
      <div
        className={`group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/40 dark:border-gray-700/40 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating Glow Effect */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
        
        {/* Icon Container */}
        <div className="relative mb-6 flex justify-center">
          <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <div className="w-full h-full bg-white/90 dark:bg-gray-900/90 rounded-xl flex items-center justify-center text-3xl backdrop-blur-sm">
              {skill.icon}
            </div>
          </div>
          
          {/* Pulsing Ring */}
          <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 animate-ping`}></div>
        </div>

        {/* Skill Name */}
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-pink-600 dark:group-hover:from-cyan-400 dark:group-hover:via-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
          {skill.name}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {skill.description}
        </p>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Proficiency</span>
            <span className="text-xs font-bold text-gray-800 dark:text-white">{skill.level}%</span>
          </div>
          
          <div className="relative h-3 bg-gray-200/80 dark:bg-gray-700/80 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
              style={{ width: isVisible ? `${skill.level}%` : '0%' }}
            >
              {/* Progress Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Hover Tooltip */}
        {isHovered && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl px-4 py-2 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs font-semibold text-gray-800 dark:text-white">Expert Level</div>
              <div className="w-2 h-2 bg-white/90 dark:bg-gray-900/90 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-gray-200/50 dark:border-gray-700/50"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-red-500/20 to-orange-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        
        {/* Mouse Following Light */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 dark:from-cyan-500/5 dark:via-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-200/40 dark:border-gray-700/40 shadow-xl">
            <Sparkles className="w-5 h-5 text-orange-500 dark:text-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block text-gray-800 dark:text-white mb-2">My</span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills Arsenal
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and modern development practices. 
            <span className="font-semibold text-orange-600 dark:text-cyan-400"> Innovation</span> meets 
            <span className="font-semibold text-red-600 dark:text-blue-400"> precision</span> in every project.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-20">
          <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg">
              <Code2 className="w-8 h-8 text-orange-500 dark:text-cyan-400" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Frontend Development
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 max-w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} category="frontend" />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg">
              <Server className="w-8 h-8 text-red-500 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Backend Development
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 dark:from-blue-500 dark:via-purple-500 dark:to-cyan-500 max-w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + 8} category="backend" />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: <TrendingUp className="w-8 h-8" />, value: '12+', label: 'Technologies Mastered', color: 'from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500' },
            { icon: <Zap className="w-8 h-8" />, value: '7+', label: 'Projects Completed', color: 'from-red-500 to-pink-500 dark:from-blue-500 dark:to-purple-500' },
            { icon: <Sparkles className="w-8 h-8" />, value: '1.5+', label: 'Years Experience', color: 'from-pink-500 to-orange-500 dark:from-purple-500 dark:to-cyan-500' }
          ].map((stat, index) => (
            <div key={index} className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/40 dark:border-gray-700/40 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Skills;