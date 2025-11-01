import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Forex Analysis Dashboard',
      description: 'Advanced trading dashboard integrating TradingView charts with Deriv API for real-time market analysis, technical indicators, and automated signal generation.',
      technologies: ['React', 'TradingView API', 'Deriv API', 'WebSocket', 'Chart.js'],
      image: (
      <img src="./forexdashboard.png" alt="imgb" />
      ),
      liveDemo: 'https://forex-dashboard-demo.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/forex-dashboard',
    },
    {
      id: 2,
      title: 'Binary Tick Bot',
      description: 'Automated binary options trading bot for Deriv platform with advanced risk management, multiple strategies, and real-time performance monitoring.',
      technologies: ['Python', 'Deriv API', 'Machine Learning', 'WebSocket', 'SQLite'],
      image: (
       <img src="./balance.png" alt="jjjn" />
      ),
      liveDemo: 'https://binary-bot-demo.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/binary-tick-bot',
    },
    {
      id: 3,
      title: 'CeoramzTraders Multi-Contract Analyzer',
      description: 'Comprehensive web application for analyzing multiple trading contracts simultaneously with advanced filtering, comparison tools, and performance metrics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'D3.js'],
      image: (
        <img src="./ramztool.png" alt="imageh" />
      ),
      liveDemo: 'https://ceoramztraders-analyzer.vercel.app',
      sourceCode: 'https://github.com/robert-nyaundi/ceoramztraders-analyzer',
    },
  ];

  const skillHighlights = [
    {
      title: 'Chart Analysis',
      description: 'Advanced technical analysis and pattern recognition',
      image: (
      <img src="./chartsan.png" alt="chartsnn" />
      ),
    },
    {
      title: 'Bot Interface',
      description: 'Intuitive automation and control systems',
      image: (
        <img src="./botinter.png" alt="fd" />
      ),
    },
    {
      title: 'Web App UI',
      description: 'Modern and responsive user interfaces',
      image: (
      <img src="./dashboard.png" alt="ddd" />
      ),
    },
    {
      title: 'Market Analytics',
      description: 'Real-time data processing and insights',
      image: (
     <img src="./chartsan.png" alt="chartsnn" />
      ),
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
              Innovative trading applications and web solutions that bridge financial markets with modern technology
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
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700 text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Highlights Section */}
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
              Key areas of expertise in trading and development
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
                  {skill.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
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
              Let's discuss your next trading platform, analytical tool, or web application. 
              I bring both technical expertise and market knowledge to every project.
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