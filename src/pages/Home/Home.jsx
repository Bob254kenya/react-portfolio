import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import GetTouch from '../../components/GetTouch';
import Scroll from '../../components/Scroll';


import forexdashboard from '../../assets/forexdashboard.png';
import ramzsetup from '../../assets/ramzsetup.png';
import forex from '../../assets/forex.png';
import candle from '../../assets/candle.jpg';
import trading from '../../assets/trading.jpg';

const showcaseImages = [
  {
    title: 'Forex Trading Dashboard',
    description: 'Advanced chart analysis and market insights',
    image: (
      <img
        src={forexdashboard}
        alt="Forex Trading Dashboard"
        className="w-[300px] h-[300px] object-cover rounded-lg p-4"
      />
    ),
  },
  {
    title: 'Binary Trading Setup',
    description: 'Deriv platform optimization and automation',
    image: (
      <img
        src={trading}
        alt="Binary Trading Setup"
        className="w-[300px] h-[300px] object-cover rounded-lg p-4"
      />
    ),
  },
  {
    title: 'Web Development Workspace',
    description: 'Modern React applications and trading tools',
    image: (
      <img
        src={ramzsetup}
        alt="Web Development Workspace"
        className="w-[300px] h-[300px] object-cover rounded-lg p-4"
      />
    ),
  },
  {
    title: 'Project Portfolio',
    description: 'Innovative trading applications and websites',
    image: (
      <img
        src={forex}
        alt="Project Portfolio"
        className="w-[300px] h-[300px] object-cover rounded-lg p-4"
      />
    ),
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="block text-white">Robert</span>
              <span className="block gradient-text">Nyaundi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              Forex Trader | Binary Trader | Web Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
            >
              <p>
                Passionate about financial markets and cutting-edge technology. I combine my expertise in 
                Forex and Binary trading with advanced web development skills to create innovative trading 
                solutions and analytical tools that empower traders worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/portfolio">
                <Button />
              </Link>
              <Link to="/contact">
                <GetTouch />
              </Link>
            </motion.div>

            {/* Profile Image */}
            <div className="mt-8">
              <img src={candle} alt="profile" className="w-20 h-20 rounded-full mx-auto" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Scroll />
        </motion.div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combining financial market expertise with modern web development to create 
              powerful trading solutions and analytical tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-4">{item.image}</div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's collaborate on your next trading platform, analytical tool, or web application. 
              I bring both financial market expertise and technical skills to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
