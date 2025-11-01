import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ Important for all icons to show

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received. I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <i className="fas fa-envelope text-2xl text-primary-400"></i>,
      title: 'Email',
      value: 'robertnyaundi09@gmail.com',
      link: 'mailto:robertnyaundi09@gmail.com'
    },
    {
      icon: <i className="fas fa-phone text-2xl text-primary-400"></i>,
      title: 'Phone',
      value: '+254 757261120',
      link: 'tel:+254757261120'
    },
    {
      icon: <i className="fas fa-location-dot text-2xl text-primary-400"></i>,
      title: 'Location',
      value: 'Eldoret, Kenya',
      link: null
    },
    {
      icon: <i className="fas fa-clock text-2xl text-primary-400"></i>,
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM EAT',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h1>
          <p className="text-lg text-gray-300">
            Ready to discuss your next trading platform or web project? Let’s connect and explore how we can work together.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-700 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm text-gray-300 mb-2 capitalize"
                  >
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600 rounded-lg border border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 outline-none transition"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-600 rounded-lg border border-slate-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-500 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              I’m always open to discussing new opportunities — trading systems, web apps, or analytics tools.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-slate-700 p-4 rounded-xl hover:bg-slate-600 transition"
                >
                  {info.icon}
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-primary-400 transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-8 border-t border-slate-600 text-center"
            >
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex justify-center gap-6">
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com/roberto.nyaundi.7', icon: 'fa-facebook-f', color: 'hover:text-blue-400' },
                  { name: 'GitHub', url: 'https://github.com/robert-nyaundi', icon: 'fa-github', color: 'hover:text-gray-400' },
                  { name: 'YouTube', url: 'https://www.youtube.com/@DjRamz254thegameattacker', icon: 'fa-youtube', color: 'hover:text-red-500' },
                  { name: 'TikTok', url: 'https://www.tiktok.com/@ceoramz', icon: 'fa-tiktok', color: 'hover:text-pink-400' }
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-gray-400 ${s.color} transition`}
                  >
                    <div className="w-11 h-11 bg-slate-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-slate-700 transition-all duration-300">
                      <i className={`fab ${s.icon} text-xl`}></i>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Whether it’s a trading bot, analytics dashboard, or full-stack app, I’m here to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:robertnyaundi09@gmail.com"
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Email Me
            </a>
            <a
              href="tel:+254757261120"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition"
            >
              Call Me
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Contact;
