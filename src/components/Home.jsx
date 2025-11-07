import { motion } from 'framer-motion';
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';

function Home() {
  const roles = [
    'Full Stack Developer',
    'Software Developer',
    'Web Developer'
  ];

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 pt-20 pb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-2 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-2 sm:top-40 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-2 sm:bottom-40 sm:left-20 w-14 h-14 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Selva Rahul S B
          </motion.h1>

          <motion.div
            className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 h-12 sm:h-16 flex items-center justify-center px-2"
            variants={itemVariants}
          >
            <TypingAnimation texts={roles} speed={100} deleteSpeed={50} pauseTime={2000} />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
          variants={itemVariants}
        >
          A passionate Web Developer skilled in creating responsive, user-friendly, and visually appealing websites. Experienced in modern frontend technologies like React, JavaScript, and Tailwind CSS, with a focus on clean design and seamless user experience
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            View Projects
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 opacity-60 px-2"
          variants={itemVariants}
        >
          {['React', 'Vue.js', 'Spring Boot','Node.js', 'Flutter'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;