import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

function Contact() {

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

  const contactMethods = [
    {
      type: 'Email',
      value: 'iamselvarahul@gmail.com',
      link: `mailto:${portfolioData.contact.email}`,
      icon: <EnvelopeIcon className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Send me an email'
    },
    {
      type: 'Phone',
      value: '+91 7200886659',
      link: 'tel:+917200886659',
      icon: <PhoneIcon className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      description: 'Give me a call'
    },
    {
      type: 'Location',
      value: 'Chennai, India',
      link: '#',
      icon: <MapPinIcon className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Come say hello'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: portfolioData.contact.linkedin,
      icon: <FaLinkedin className="w-6 h-6" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: portfolioData.contact.github,
      icon: <FaGithub className="w-6 h-6" />,
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: <FaInstagram className="w-6 h-6" />,
      color: 'hover:text-pink-600'
    }
  ];



  return (
    <motion.section
      id="contact"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Information - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with talented individuals.
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
            variants={itemVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4`}>
                  {method.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
                  {method.type}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2">
                  {method.description}
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium break-words">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            variants={itemVariants}
          >
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Follow Me
            </h4>
            <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;