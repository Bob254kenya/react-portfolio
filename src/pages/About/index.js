import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "Forex Trading", level: 95, icon: "📈" },
    { name: "Binary Trading", level: 90, icon: "📊" },
    { name: "Technical Analysis", level: 92, icon: "🔍" },
    { name: "React Development", level: 88, icon: "⚛️" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "API Integration", level: 87, icon: "🔗" },
    { name: "Trading Automation", level: 83, icon: "🤖" },
    { name: "Web Development", level: 86, icon: "💻" },
  ];

  const aboutImages = [
    {
      title: "Chart Analysis",
      description: "Deep technical analysis and market research",
      image: (
        <img
          src="./candle.jpg"
          alt="Chart Analysis"
          className="w-full h-48 rounded-lg p-4"
        />
      ),
    },
    {
      title: "Trading Bot Interface",
      description: "Automated trading systems and algorithms",
      image: (
        <svg
          className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-4"
          viewBox="0 0 400 200"
        >
          <rect width="400" height="200" fill="url(#botGradient)" rx="8" />
          <defs>
            <linearGradient
              id="botGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          {/* Bot Interface Elements */}
          <circle
            cx="80"
            cy="60"
            r="25"
            fill="rgba(255,255,255,0.2)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="80" cy="60" r="15" fill="white" />
          <rect
            x="130"
            y="40"
            width="200"
            height="15"
            fill="rgba(255,255,255,0.3)"
            rx="7"
          />
          <rect
            x="130"
            y="65"
            width="150"
            height="10"
            fill="rgba(255,255,255,0.2)"
            rx="5"
          />
          <rect
            x="130"
            y="85"
            width="180"
            height="10"
            fill="rgba(255,255,255,0.2)"
            rx="5"
          />
          <text x="20" y="30" fill="white" fontSize="14" fontWeight="bold">
            Trading Bot
          </text>
          <text x="20" y="150" fill="white" fontSize="10">
            Status: Active | Profit: +$2,450
          </text>
        </svg>
      ),
    },
    {
      title: "Code Development",
      description: "React applications and trading platforms",
      image: (
        <svg
          className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4"
          viewBox="0 0 400 200"
        >
          <rect width="400" height="200" fill="url(#codeGradient)" rx="8" />
          <defs>
            <linearGradient
              id="codeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          {/* Code Editor Interface */}
          <rect
            x="20"
            y="30"
            width="360"
            height="140"
            fill="rgba(0,0,0,0.3)"
            rx="4"
          />
          <rect x="30" y="40" width="80" height="8" fill="#22c55e" rx="4" />
          <rect x="120" y="40" width="60" height="8" fill="#3b82f6" rx="4" />
          <rect x="30" y="55" width="100" height="8" fill="#f59e0b" rx="4" />
          <rect x="140" y="55" width="40" height="8" fill="#ef4444" rx="4" />
          <rect x="30" y="70" width="120" height="8" fill="#8b5cf6" rx="4" />
          <rect x="30" y="85" width="90" height="8" fill="#22c55e" rx="4" />
          <text x="20" y="25" fill="white" fontSize="12" fontWeight="bold">
            React Trading App
          </text>
        </svg>
      ),
    },
    {
      title: "Educational Content",
      description: "Trading tutorials and market insights",
      image: (
        <svg
          className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4"
          viewBox="0 0 400 200"
        >
          <rect width="400" height="200" fill="url(#eduGradient)" rx="8" />
          <defs>
            <linearGradient
              id="eduGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          {/* Educational Content Layout */}
          <rect
            x="30"
            y="40"
            width="340"
            height="20"
            fill="rgba(255,255,255,0.3)"
            rx="10"
          />
          <rect
            x="30"
            y="70"
            width="280"
            height="12"
            fill="rgba(255,255,255,0.2)"
            rx="6"
          />
          <rect
            x="30"
            y="90"
            width="320"
            height="12"
            fill="rgba(255,255,255,0.2)"
            rx="6"
          />
          <rect
            x="30"
            y="110"
            width="250"
            height="12"
            fill="rgba(255,255,255,0.2)"
            rx="6"
          />
          <circle cx="350" cy="130" r="20" fill="rgba(255,255,255,0.3)" />
          <polygon points="345,125 345,135 355,130" fill="white" />
          <text x="30" y="35" fill="white" fontSize="12" fontWeight="bold">
            Trading Education
          </text>
          <text x="30" y="170" fill="white" fontSize="10">
            Market Analysis & Strategy Guide
          </text>
        </svg>
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate trader and developer combining financial expertise with
              cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div >
                <div className="w-full h-full bg-slate-700 rounded-full flex items-center justify-center">
                  <img src="./ramzsetup.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white p-4 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">My Journey</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Forex and Binary Trader with a strong
                  foundation in web development. My journey began in the
                  financial markets, where I developed a deep understanding of
                  technical analysis, risk management, and market psychology.
                </p>
                <p>
                  Combining my trading expertise with modern web development
                  skills, I build analytical tools, automated trading bots, and
                  sophisticated trading interfaces that help traders make
                  smarter, data-driven decisions.
                </p>
                <p>
                  My unique perspective allows me to bridge the gap between
                  financial markets and technology, creating solutions that are
                  both technically sound and practically applicable in real
                  trading scenarios.
                </p>
              </div>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download CV</span>
              </motion.button>
            </motion.div>
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
              Core <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">
              Expertise spanning financial markets and modern web technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-primary-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Showcase */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-400">
              A glimpse into my trading and development activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutImages.map((item, index) => (
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
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
