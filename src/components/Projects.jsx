import { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Sparkles, Filter, Rocket, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Movix",
      description: "A comprehensive movie recommendation platform featuring trending content, detailed ratings, immersive trailers, and curated essential details for entertainment enthusiasts.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=320&fit=crop&auto=format",
      tags: ["react", "redux", "tailwind"],
      github: "https://github.com/AnishRane13/Movix",
      category: "frontend",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      icon: "🎬"
    },
    {
      id: 2,
      title: "Freelance Marketplace",
      description: "Full-featured marketplace connecting businesses with talented freelancers. Complete project lifecycle management from job posting to secure payment processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=320&fit=crop&auto=format",
      tags: ["react", "redux", "tailwind", "javascript", "node", "postgres", "aws"],
      github: "https://github.com/AnishRane13/Freelance-Marketplace",
      category: "fullstack",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "💼"
    },
    // {
    //   id: 3,
    //   title: "AI Chat Assistant",
    //   description: "Intelligent conversational AI powered by advanced machine learning models. Real-time responses with context awareness and natural language processing.",
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=320&fit=crop&auto=format",
    //   tags: ["react", "typescript", "node", "ai"],
    //   github: "#",
    //   category: "ai",
    //   gradient: "from-green-500 via-emerald-500 to-cyan-500",
    //   icon: "🤖"
    // },
    // {
    //   id: 4,
    //   title: "E-Commerce Dashboard",
    //   description: "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and comprehensive sales reporting.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=320&fit=crop&auto=format",
    //   tags: ["react", "typescript", "node", "postgres"],
    //   github: "#",
    //   category: "dashboard",
    //   gradient: "from-orange-500 via-red-500 to-pink-500",
    //   icon: "📊"
    // }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.tags.includes(activeFilter));

  const filters = [
    { name: "all", label: "All Projects", icon: "🌟" },
    { name: "react", label: "React", icon: "⚛️" },
    { name: "node", label: "Node.js", icon: "🟢" },
    { name: "typescript", label: "TypeScript", icon: "🔷" },
    { name: "javascript", label: "JavaScript", icon: "🟨" },
    { name: "postgres", label: "PostgreSQL", icon: "🐘" },
  ];

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <div
        className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating Glow */}
        <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Project Icon */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl shadow-lg">
            {project.icon}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg capitalize">
            {project.category}
          </div>

          {/* Hover Actions */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover/btn:text-orange-500 dark:group-hover/btn:text-cyan-400 transition-colors duration-300" />
            </a>
            {/* <button className="group/btn p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              <Eye className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover/btn:text-red-500 dark:group-hover/btn:text-blue-400 transition-colors duration-300" />
            </button> */}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-pink-600 dark:group-hover:from-cyan-400 dark:group-hover:via-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-xs font-semibold rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 capitalize`}
                style={{ animationDelay: `${tagIndex * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Source Code</span>
            </a>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <Rocket className="w-4 h-4" />
              <span>Featured</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        
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
              Featured Work
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block text-gray-800 dark:text-white mb-2">My</span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Project Gallery
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover my latest creations showcasing 
            <span className="font-semibold text-orange-600 dark:text-cyan-400"> innovative solutions</span> and 
            <span className="font-semibold text-red-600 dark:text-blue-400"> cutting-edge technologies</span> in modern web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex items-center justify-center gap-4 mb-16 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg">
            <Filter className="w-6 h-6 text-orange-500 dark:text-cyan-400" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  activeFilter === filter.name
                    ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 text-white shadow-xl"
                    : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-cyan-400 shadow-lg"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeFilter === filter.name ? 'opacity-100' : ''}`}></div>
                <span className="relative z-10 flex items-center gap-2">
                  <span>{filter.icon}</span>
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="https://github.com/AnishRane13?tab=repositories" target='_blank'>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/40 shadow-xl">
            <Code2 className="w-6 h-6 text-orange-500 dark:text-cyan-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              More projects available on GitHub
            </span>
            <ExternalLink className="w-5 h-5 text-gray-500 dark:text-gray-500" />
          </div>
        </a>
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

export default Projects;