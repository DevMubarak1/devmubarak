"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 relative min-h-screen flex items-center">
      {/* Hero Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(147,197,253,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.1)_1px,transparent_1px)]"></div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/50 dark:from-gray-900/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-300/30 dark:border-blue-600/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-purple-300/30 dark:border-purple-600/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Dots Pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/40 dark:bg-blue-500/40 rounded-full"
              style={{
                left: `${Math.cos(i * 60 * Math.PI / 180) * 150 + 150}px`,
                top: `${Math.sin(i * 60 * Math.PI / 180) * 150 + 150}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-300/30 dark:border-blue-600/30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-300/30 dark:border-purple-600/30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-300/30 dark:border-green-600/30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-300/30 dark:border-pink-600/30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Zap size={16} />
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mubarak</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack developer passionate about creating clean, efficient, and user-friendly web applications.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 