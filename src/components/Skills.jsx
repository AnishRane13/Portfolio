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