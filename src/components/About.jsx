import { useState, useEffect } from 'react';
import { MapPin, Mail, Calendar, Award, Download, Code, GraduationCap, Briefcase, Sparkles, Trophy, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra' },
    { icon: Mail, label: 'Email', value: 'anishrane1305@gmail.com' },
    { icon: Calendar, label: 'Experience', value: '1.9+ Years' },
    { icon: Award, label: 'Availability', value: 'Full-time' }
  ];

  const education = [
    {
      degree: "Master's in Computer Application",
      institution: "VESIT",
      period: "November 2022 - May 2024",
      cgpa: "8.5",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Science (Information Technology)",
      institution: "Sathaye College",
      period: "July 2019 - May 2022",
      cgpa: "8.24",
      icon: GraduationCap
    }
  ];

  const experience = [
    {
      title: "Software Developer",
      company: "Chintan Systems Private Limited",
      period: "July 2024 - Present",
      type: "Full-time",
      icon: Briefcase,
      highlights: [
        "Led frontend development of Society Management System using React, Vite, and Tailwind CSS",
        "Developed AI-powered ad generation platform with ChatGPT-like interface",
        "Translated Figma designs into pixel-perfect React components",
        "Built comprehensive event management system with payment integration"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Chintan Systems Private Limited",
      period: "January 2024 - June 2024",
      type: "Internship",
      icon: Code,
      highlights: [
        "Worked on P2P lending financial web app in Deno Fresh",
        "Integrated HubSpot CRM for secure form submissions",
        "Migrated company website to Deno Fresh with multilingual support",
        "Boosted website traffic by 40% through optimization"
      ]
    }
  ];

  const skills = {
    frontend: ["React.js", "Redux", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Figma"],
    backend: ["Node.js", "Deno", "PostgreSQL", "REST API Development"],
    tools: ["Vite", "NGINX", "Git", "GitHub", "GitLab", "Gitea"]
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 via-red-500/10 to-orange-500/10 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-full border border-gray-200/40 dark:border-gray-700/40 shadow-xl shadow-black/5 dark:shadow-white/5">
            <Sparkles className="w-4 h-4 text-orange-500 dark:text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Get to know me</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Software Developer with 1.9+ years of experience crafting modern, responsive web applications
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side - Visual Profile */}
          <div className={`lg:w-2/5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Profile Card */}
            <div className="relative mb-8">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/5 dark:shadow-white/5">
                
                {/* Avatar Section */}
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto relative">
                    {/* Rotating Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 animate-spin-slow opacity-20"></div>
                    
                    {/* Main Avatar */}
                    <div className="absolute inset-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center overflow-hidden">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <span className="relative text-7xl" role="img" aria-label="Developer">👨‍💻</span>
                      </div>
                    </div>
                    
                    {/* Floating Badges */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 dark:from-cyan-500 dark:to-blue-500 rounded-2xl p-3 shadow-xl animate-float">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Anish Rane</h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Software Developer
                    </p>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={info.label} className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow-lg">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="text-base font-semibold text-gray-800 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resume Button */}
                <div className="mt-8">
                  <a 
                    href="https://drive.google.com/file/d/1EYrgFpPRHlbHuPOCBdk3iC4jSYAl2HuE/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Download className="relative z-10 w-5 h-5 group-hover:animate-bounce" />
                    <span className="relative z-10">View Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`lg:w-3/5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { id: 'overview', label: 'Overview', icon: Sparkles },
                { id: 'education', label: 'Education', icon: GraduationCap },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'skills', label: 'Skills', icon: Zap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white shadow-xl'
                      : 'bg-white/60 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-900/80'
                  } backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-black/5 dark:shadow-white/5 min-h-[600px]">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Hello! I'm Anish Rane</h3>
                  
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    <p>
                      I'm a passionate <span className="font-semibold text-orange-600 dark:text-cyan-400">Software Developer</span> with 1+ years of experience 
                      in building responsive, high-performance web applications using React.js, Tailwind CSS, JavaScript, and TypeScript.
                    </p>
                    
                    <p>
                      My journey in web development began with a fascination for creating interactive user experiences. 
                      I specialize in <span className="font-semibold text-red-600 dark:text-blue-400">optimizing UI/UX</span>, developing reusable components, 
                      and integrating REST APIs to build seamless digital experiences.
                    </p>
                    
                    <p>
                      Currently working at <span className="font-semibold text-pink-600 dark:text-purple-400">Chintan Systems Private Limited</span>, 
                      where I lead frontend development of complex systems including Society Management platforms, 
                      AI-powered ad generation tools, and comprehensive event management systems.
                    </p>
                    
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                      or sharing my knowledge through technical discussions and mentoring aspiring developers.
                    </p>
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Educational Background</h3>
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow-lg">
                            <edu.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                            <p className="text-lg font-semibold text-orange-600 dark:text-cyan-400 mb-2">{edu.institution}</p>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.period}</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 dark:bg-gray-900/60 rounded-full border border-gray-200/40 dark:border-gray-700/40">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">CGPA: {edu.cgpa}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Experience</h3>
                  
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="relative">
                        <div className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow-lg">
                              <exp.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h4>
                              <p className="text-lg font-semibold text-orange-600 dark:text-cyan-400 mb-2">{exp.company}</p>
                              <div className="flex items-center gap-4">
                                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                                <span className="px-3 py-1 bg-white/60 dark:bg-gray-900/60 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/40 dark:border-gray-700/40">
                                  {exp.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {exp.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h3>
                  
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                      <div key={category}>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 capitalize">
                          {category === 'frontend' ? 'Frontend Technologies' : 
                           category === 'backend' ? 'Backend & Databases' : 
                           'Build Tools & Collaboration'}
                        </h4>
                        
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, skillIndex) => (
                            <div
                              key={skill}
                              className="group relative px-4 py-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;