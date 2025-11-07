import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import profileImg from '../assets/profile.jpeg';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Education",
      description: "Computer Science Student at Vel Tech Multi Tech",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Specialization",
      description: "Full Stack Development",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Passion",
      description: "Web Developer",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Goal",
      description: "Creating Impactful User Experiences",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    {
      year: "2024-Present",
      title: "Advanced Full Stack Development",
      description: "Mastering modern frameworks and cloud technologies"
    },
    {
      year: "2023-2024",
      title: "Backend Specialization",
      description: "Deep dive into Spring Boot,FastAPI, Restful APIs, and database design"
    },
    {
      year: "2023-2024",
      title: "Frontend Development",
      description: "Building responsive web apps and applications"
    },
    {
      year: "2022-2023",
      title: "Programming Foundations",
      description: "Started journey with Java,and web technologies"
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Profile Section */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="relative inline-block mb-6 sm:mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImg}
                  alt="Muhammad Afzal.F"
                  className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover object-center rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    MozImageRendering: 'crisp-edges',
                    msImageRendering: 'crisp-edges'
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-4 shadow-lg border-2 sm:border-4 border-blue-500"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <UserIcon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-500" />
              </motion.div>
            </div>

            <motion.div
              className="space-y-4 sm:space-y-6 px-4 sm:px-0"
              variants={itemVariants}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Selva Rahul S B
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Computer Science student at VTMT, dedicated to crafting
                innovative solutions through code. My journey spans full-stack development,
                with a focus on creating applications that make a real difference.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in modern technologies like <span className="text-blue-600 dark:text-blue-400 font-semibold">Spring Boot</span>,
                <span className="text-green-600 dark:text-green-400 font-semibold"> React</span>,
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> Vue.js</span>, and
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Flutter</span>,
                building scalable solutions with robust database architectures.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${highlight.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
            My Journey
          </h3>

          <div className="relative">
            {/* Timeline Line - Mobile: Left side, Desktop: Center */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-8 sm:mb-12 ${
                  // Mobile: All items aligned left, Desktop: Alternating
                  'md:flex md:items-center ' + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Mobile Layout: Single column with left padding */}
                <div className={`
                  pl-12 md:pl-0
                  md:w-1/2
                  ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}
                `}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot - Mobile: Left side, Desktop: Center */}
                <motion.div
                  className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;