import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import all images from src/assets
import forexDashboard from '../../assets/forexdashboard.png';
import balance from '../../assets/balance.png';
import ramztool from '../../assets/ramztool.png';
import chartsan from '../../assets/chartsan.png';
import botinter from '../../assets/botinter.png';
import dashboard from '../../assets/dashboard.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Forex Analysis Dashboard',
      description:
        'Advanced trading dashboard integrating TradingView charts with Deriv API for real-time market analysis, technical indicators, and automated signal generation.',
      technologies: [
        'React',
        'TradingView API',
        'Deriv API',
        'WebSocket',
        'Chart.js',
      ],
      image: forexDashboard,
      liveDemo: 'https://forex-dashboard-demo.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/forex-dashboard',
    },
    {
      id: 2,
      title: 'Binary Tick Bot',
      description:
        'Automated binary options trading bot for Deriv platform with advanced risk management, multiple strategies, and real-time performance monitoring.',
      technologies: [
        'Python',
        'Deriv API',
        'Machine Learning',
        'WebSocket',
        'SQLite',
      ],
      image: balance,
      liveDemo: 'https://binary-bot-demo.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/binary-tick-bot',
    },
    {
      id: 3,
      title: 'CeoramzTraders Multi-Contract Analyzer',
      description:
        'Comprehensive web application for analyzing multiple trading contracts simultaneously with advanced filtering, comparison tools, and performance metrics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'D3.js'],
      image: ramztool,
      liveDemo: 'https://ceoramztraders-analyzer.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/ceoramztraders-analyzer',
    },
  ];

  const skillHighlights = [
    {
      title: 'Chart Analysis',
      description: 'Advanced technical analysis and pattern recognition',
      image: chartsan,
    },
    {
      title: 'Bot Interface',
      description: 'Intuitive automation and control systems',
      image: botinter,
    },
    {
      title: 'Web App UI',
      description: 'Modern and responsive user interfaces',
      image: dashboard,
    },
    {
      title: 'Market Analytics',
      description: 'Real-time data processing and insights',
      image: chartsan,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative trading applications and web solutions that bridge
              financial markets with modern technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1
                      ? 'lg:col-start-1 lg:row-start-1'
                      : ''
                  }`}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center justify-center space-x-2"
                    >
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary inline-flex items-center justify-center space-x-2"
                    >
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Skill <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-gray-400">
              Key areas of expertise in trading and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillHighlights.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-4">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
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
              Interested in Working Together?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss your next trading platform, analytical tool, or web
              application. I bring both technical expertise and market knowledge
              to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="mailto:robert.nyaundi@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
