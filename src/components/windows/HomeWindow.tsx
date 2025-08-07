'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

export default function HomeWindow() {
  return (
    <div className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Sparkles size={32} className="text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Welcome to Dev Mubarak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-white/80 mb-8 max-w-md"
        >
          Full-stack developer passionate about creating beautiful, functional, and innovative web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl"
        >
          <div className="liquid-glass rounded-lg p-4 text-center">
            <Code size={24} className="text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold mb-1">Development</h3>
            <p className="text-white/70 text-sm">Modern web technologies</p>
          </div>
          
          <div className="liquid-glass rounded-lg p-4 text-center">
            <Palette size={24} className="text-purple-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold mb-1">Design</h3>
            <p className="text-white/70 text-sm">Beautiful user interfaces</p>
          </div>
          
          <div className="liquid-glass rounded-lg p-4 text-center">
            <Zap size={24} className="text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold mb-1">Performance</h3>
            <p className="text-white/70 text-sm">Fast and efficient apps</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-white/60 text-sm"
        >
          Click on the dock icons below to explore different sections
        </motion.div>
      </motion.div>
    </div>
  );
} 