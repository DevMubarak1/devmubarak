"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { XIcon } from "./XIcon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-16 h-16 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, rgba(${100 + i * 20}, ${150 + i * 15}, 255, 0.1) 0%, transparent 70%)`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Mail size={16} />
            Let&apos;s Connect
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          
          {/* Advanced Animated Character */}
          <motion.div
            className="flex justify-center mb-12 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Outer Ring Animation */}
            <motion.div
              className="absolute w-40 h-40 border-2 border-blue-400/30 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute w-32 h-32 border border-purple-400/40 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            
            {/* Main Character Container */}
            <div className="relative z-10">
              {/* Morphing Background with Advanced Effects */}
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl relative overflow-hidden"
                animate={{
                  borderRadius: ["50%", "45% 55% 45% 55%", "40% 60% 40% 60%", "50%"],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  borderRadius: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Inner Glow with Pulse */}
                <motion.div
                  className="absolute inset-3 bg-white/30 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Character Face with Bounce */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>
              
              {/* Advanced Particle System */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  style={{
                    left: `${Math.cos(i * 30 * Math.PI / 180) * 50 + 50}px`,
                    top: `${Math.sin(i * 30 * Math.PI / 180) * 50 + 50}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -30, 0],
                    x: [0, Math.cos(i * 30 * Math.PI / 180) * 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
              
              {/* Floating Tech Icons */}
              {['⚡', '🚀', '💻', '🎯'].map((icon, i) => (
                <motion.div
                  key={`tech-${i}`}
                  className="absolute text-2xl"
                  style={{
                    left: `${Math.cos(i * 90 * Math.PI / 180) * 60 + 50}px`,
                    top: `${Math.sin(i * 90 * Math.PI / 180) * 60 + 50}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5,
                    delay: i * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
              
              {/* Waving Hand with Enhanced Animation */}
              <motion.div
                className="absolute -top-6 -right-6 text-4xl"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced Text Animation with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <motion.p 
              className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to bring your ideas to life? Feel free to reach out to me at{" "}
              <motion.span 
                className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('mailto:devmubarak@getfoodify.com')}
              >
                devmubarak@getfoodify.com
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.span>{" "}
              or connect with me below! 🚀
            </motion.p>
          </motion.div>
          
          {/* Advanced Social Links with Hover Effects */}
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                href: "https://github.com/yourusername", 
                icon: Github, 
                label: "GitHub", 
                color: "hover:text-gray-800 dark:hover:text-gray-200",
                bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
                borderColor: "hover:border-gray-300 dark:hover:border-gray-600"
              },
              { 
                href: "https://linkedin.com/in/yourusername", 
                icon: Linkedin, 
                label: "LinkedIn", 
                color: "hover:text-blue-600 dark:hover:text-blue-400",
                bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                borderColor: "hover:border-blue-300 dark:hover:border-blue-600"
              },
              { 
                href: "https://x.com/yourusername", 
                icon: XIcon, 
                label: "X (Twitter)", 
                color: "hover:text-black dark:hover:text-white",
                bgColor: "hover:bg-gray-50 dark:hover:bg-gray-800",
                borderColor: "hover:border-gray-300 dark:hover:border-gray-600"
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`text-slate-600 dark:text-gray-300 transition-all duration-500 p-6 rounded-2xl border-2 border-transparent shadow-lg hover:shadow-2xl ${social.color} ${social.bgColor} ${social.borderColor} backdrop-blur-sm`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  rotate: [0, -5, 5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon size={32} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 