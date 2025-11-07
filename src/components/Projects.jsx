import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const [filter, setFilter] = useState('All');

  const handleProjectClick = (githubLink, projectTitle) => {
    console.log('Clicking project:', projectTitle, 'with GitHub link:', githubLink);
    if (githubLink && githubLink.startsWith('http')) {
      window.open(githubLink, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Invalid GitHub link:', githubLink);
      alert('Invalid GitHub link for this project');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Get unique technologies for filter
  const allTech = [...new Set(portfolioData.projects.flatMap(project => project.tech))];
  const filters = ['All', ...allTech.slice(0, 6)]; // Limit to 6 main technologies

  // Filter projects based on selected filter
  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.tech.includes(filter));

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Vue.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Flutter': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      'Springboot': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      'FastApi': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'MySQL': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'MongoDB': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Streamlit': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Explore my latest work showcasing modern web development, mobile applications, and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          {filters.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                filter === tech
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${index}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleProjectClick(project.githubLink, project.title)}
                layout
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      imageRendering: 'auto',
                      WebkitImageRendering: 'auto'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200/3b82f6/ffffff?text=' + encodeURIComponent(project.title);
                    }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* GitHub Icon */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full">
                      <CodeBracketIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <CalendarIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.duration.split(' - ')[1] || project.duration}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Click to view indicator */}
                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium">
                    Click to view on GitHub
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/selvarahul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;