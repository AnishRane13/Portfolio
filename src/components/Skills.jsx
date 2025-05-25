// Skills.jsx
import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: <FaReact size={40} className="text-blue-500" />, level: 90 },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-500" />, level: 85 },
    { name: 'Redux', icon: <SiRedux size={40} className="text-purple-500" />, level: 75 },
    { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black dark:text-white" />, level: 80 },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNode size={40} className="text-green-500" />, level: 85 },
    { name: 'Express', icon: <SiExpress size={40} className="text-gray-600 dark:text-gray-400" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" />, level: 75 },
    { name: 'SQL', icon: <FaDatabase size={40} className="text-blue-800" />, level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I specialize in full-stack development with a focus on modern JavaScript frameworks
            and responsive design. Here are my core technical competencies:
          </p>
        </div>

        <div className="mb-16">
          <h3 data-aos="fade-up" className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {frontendSkills.map((skill, index) => (
              <div 
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 data-aos="fade-up" className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {backendSkills.map((skill, index) => (
              <div 
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;




// import { useState, useEffect } from 'react';
// import { 
//   Code2, 
//   Database, 
//   Globe, 
//   Palette, 
//   Layers, 
//   Terminal,
//   Zap,
//   Star,
//   TrendingUp,
//   Cpu,
//   Server,
//   Settings
// } from 'lucide-react';

// const Skills = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const frontendSkills = [
//     { name: 'React', icon: <Code2 />, level: 90, color: 'from-blue-400 to-blue-600' },
//     { name: 'JavaScript', icon: <Zap />, level: 85, color: 'from-yellow-400 to-orange-500' },
//     { name: 'TypeScript', icon: <Terminal />, level: 80, color: 'from-blue-500 to-indigo-600' },
//     { name: 'HTML5', icon: <Globe />, level: 95, color: 'from-orange-400 to-red-500' },
//     { name: 'CSS3', icon: <Palette />, level: 90, color: 'from-blue-400 to-cyan-500' },
//     { name: 'Tailwind CSS', icon: <Layers />, level: 85, color: 'from-teal-400 to-cyan-600' },
//     { name: 'Redux', icon: <Settings />, level: 75, color: 'from-purple-400 to-pink-500' },
//     { name: 'Next.js', icon: <TrendingUp />, level: 80, color: 'from-gray-600 to-gray-800' },
//   ];

//   const backendSkills = [
//     { name: 'Node.js', icon: <Server />, level: 85, color: 'from-green-400 to-emerald-600' },
//     { name: 'Express', icon: <Cpu />, level: 80, color: 'from-gray-500 to-gray-700' },
//     { name: 'MongoDB', icon: <Database />, level: 75, color: 'from-green-500 to-lime-600' },
//     { name: 'SQL', icon: <Database />, level: 70, color: 'from-blue-600 to-indigo-700' },
//   ];

//   const SkillCard = ({ skill, index, delay = 0 }) => (
//     <div 
//       className="group relative"
//       style={{ animationDelay: `${delay + index * 100}ms` }}
//     >
//       {/* Glow Effect */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-pink-500/30 dark:from-cyan-500/30 dark:via-blue-500/30 dark:to-purple-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
//       {/* Main Card */}
//       <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/5 dark:shadow-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-cyan-500/10 transform hover:-translate-y-3 group">
        
//         {/* Icon Container */}
//         <div className="relative mb-6">
//           <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
//           <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//             <div className="w-10 h-10 text-orange-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform duration-300">
//               {skill.icon}
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Name */}
//         <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
//           {skill.name}
//         </h4>
        
//         {/* Progress Bar Container */}
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Proficiency</span>
//             <span className="text-sm font-bold text-orange-600 dark:text-cyan-400">{skill.level}%</span>
//           </div>
          
//           {/* Progress Bar */}
//           <div className="relative">
//             <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//               <div 
//                 className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
//                 style={{width: `${skill.level}%`}}
//               >
//                 {/* Shimmer Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
//               </div>
//             </div>
//             {/* Glow Line */}
//             <div 
//               className="absolute top-0 h-3 bg-gradient-to-r from-orange-400/50 via-red-400/50 to-pink-400/50 dark:from-cyan-400/50 dark:via-blue-400/50 dark:to-purple-400/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{width: `${skill.level}%`}}
//             ></div>
//           </div>
//         </div>
        
//         {/* Floating Stars */}
//         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20">
//       {/* Theme Toggle for Demo */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:scale-110"
//         >
//           {darkMode ? (
//             <Star className="w-5 h-5 text-yellow-500" />
//           ) : (
//             <Star className="w-5 h-5 text-indigo-600 fill-indigo-600" />
//           )}
//         </button>
//       </div>

//       <section id="skills" className="container mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-20 max-w-4xl mx-auto">
//           <div className="relative mb-8">
//             <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 blur-3xl"></div>
//             <h2 className="relative text-6xl md:text-7xl font-black mb-6">
//               <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//                 My Skills
//               </span>
//             </h2>
//           </div>
          
//           <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
//             Mastering the art of full-stack development with cutting-edge technologies and modern frameworks. 
//             Here's my technical arsenal that brings ideas to life.
//           </p>
          
//           <div className="mt-8 w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Frontend Skills */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
//               <Code2 className="w-8 h-8 text-orange-500 dark:text-cyan-400" />
//               <h3 className="text-3xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//                 Frontend Mastery
//               </h3>
//               <Zap className="w-8 h-8 text-pink-500 dark:text-purple-400" />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {frontendSkills.map((skill, index) => (
//               <SkillCard key={skill.name} skill={skill} index={index} />
//             ))}
//           </div>
//         </div>

//         {/* Backend Skills */}
//         <div className="mb-12">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center space-x-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
//               <Server className="w-8 h-8 text-orange-500 dark:text-cyan-400" />
//               <h3 className="text-3xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//                 Backend Power
//               </h3>
//               <Database className="w-8 h-8 text-pink-500 dark:text-purple-400" />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {backendSkills.map((skill, index) => (
//               <SkillCard key={skill.name} skill={skill} index={index} delay={400} />
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 text-center">
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             {[
//               { number: "12+", label: "Technologies Mastered", icon: <Settings /> },
//               { number: "3+", label: "Years Experience", icon: <TrendingUp /> },
//               { number: "50+", label: "Projects Completed", icon: <Star /> }
//             ].map((stat, i) => (
//               <div key={i} className="group relative">
//                 <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                 <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
//                   <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <div className="text-white">{stat.icon}</div>
//                   </div>
//                   <h4 className="text-4xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-300 font-semibold">{stat.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;