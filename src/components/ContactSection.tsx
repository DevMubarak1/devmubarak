"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { XIcon } from "./XIcon";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail size={16} />
            Let&apos;s Connect
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Let&apos;s Work Together
          </h2>
          
          {/* Enhanced Animated Character */}
          <motion.div
            className="flex justify-center mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background Glow Effect */}
            <motion.div
              className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main Character Container */}
            <div className="relative z-10">
              {/* Morphing Background Shape */}
              <motion.div
                className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl shadow-2xl relative overflow-hidden"
                animate={{
                  borderRadius: ["50%", "45% 55% 45% 55%", "50%"],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  borderRadius: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-2 bg-white/20 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Character Face */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>
              
              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    left: `${Math.cos(i * 60 * Math.PI / 180) * 40 + 50}px`,
                    top: `${Math.sin(i * 60 * Math.PI / 180) * 40 + 50}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              {/* Waving Hand */}
              <motion.div
                className="absolute -top-4 -right-4 text-3xl"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
              
              {/* Particle Effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${30 + (i % 4) * 15}px`,
                    top: `${20 + Math.floor(i / 4) * 15}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 10 : -10)],
                    y: [0, -15],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <motion.p 
              className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Feel free to reach out to me at{" "}
              <motion.span 
                className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('mailto:devmubarak@getfoodify.com')}
              >
                devmubarak@getfoodify.com
              </motion.span>{" "}
              or click the links below!
            </motion.p>
          </motion.div>
          
          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { href: "https://github.com/yourusername", icon: Github, label: "GitHub", color: "hover:text-gray-800 dark:hover:text-gray-200" },
              { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { href: "https://x.com/yourusername", icon: XIcon, label: "X (Twitter)", color: "hover:text-black dark:hover:text-white" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`text-slate-600 dark:text-gray-300 transition-all duration-300 p-4 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/80 shadow-lg hover:shadow-xl ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 