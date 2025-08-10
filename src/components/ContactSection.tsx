"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, Github, Linkedin, XIcon, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "devmubarak@getfoodify.com",
      link: "mailto:devmubarak@getfoodify.com",
      description: "Send me a message anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      link: "#",
      description: "Available for remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      description: "I'll get back to you quickly"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: XIcon,
      url: "https://twitter.com/yourusername",
      color: "hover:text-black dark:hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle size={16} />
            Get In Touch
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;m always excited to take on new projects and collaborate with amazing people. 
            Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-300 flex items-center gap-2 group/link"
                      >
                        {info.value}
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      </a>
                      <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-gray-700/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon 
                      size={24} 
                      className={`text-slate-700 dark:text-gray-300 transition-colors duration-300 ${social.color}`} 
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Waving Character */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Waving Character */}
            <div className="relative mb-8">
              {/* Character Body */}
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Face */}
                <div className="relative">
                  {/* Eyes */}
                  <div className="flex gap-4 mb-2">
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </div>
                  {/* Smile */}
                  <div className="w-8 h-4 border-2 border-white rounded-full border-t-0 border-l-0 border-r-0"></div>
                </div>
              </motion.div>

              {/* Waving Hand */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full origin-bottom"
                animate={{
                  rotate: [-20, 20, -20],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Floating Text */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-3">
                  Trying to reach out to me?
                </p>
                <motion.a
                  href="mailto:devmubarak@getfoodify.com"
                  className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  devmubarak@getfoodify.com
                </motion.a>
              </motion.div>

              <motion.div
                className="text-slate-600 dark:text-gray-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-sm">Or simply click on one of the links below</p>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-4 h-4 bg-emerald-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-3 h-3 bg-teal-400 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m currently available for new projects and collaborations. 
              Let&apos;s discuss how we can work together to bring your vision to life.
            </p>
            <motion.a
              href="mailto:devmubarak@getfoodify.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 