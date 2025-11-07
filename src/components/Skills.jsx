import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CodeBracketIcon,
  CpuChipIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  // Enhanced skills data with proficiency levels and icons
  const skillsData = {
    "Programming Languages": {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 70 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    "Frameworks": {
      icon: <CpuChipIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 90 },
        { name: "Flutter", level: 90 },
        { name: "Tailwind CSS", level: 95 },
          { name: "Node.js", level: 85 }
      ]
    },
    "Databases": {
      icon: <CircleStackIcon className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", level: 95 },
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 85 }
      ]
    },
    "Technologies": {
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "RESTful APIs", level: 95 },
        { name: "VS Code", level: 95 },
      ]
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setActiveCategory(categoryIndex)}
              onHoverEnd={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {data.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {data.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex justify-end mt-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.level / 20)
                                ? 'bg-gradient-to-r ' + getSkillColor(skill.level)
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-colors duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
             
              { label: "Projects Completed", value: "5+", icon: <CpuChipIcon className="w-8 h-8" /> },
              { label: "Technologies Mastered", value: "5+", icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
              { label: "Frameworks Mastered", value: "5+", icon: <GlobeAltIcon className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;