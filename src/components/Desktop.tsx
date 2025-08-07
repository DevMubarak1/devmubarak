'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DesktopProps {
  children: React.ReactNode;
}

export default function Desktop({ children }: DesktopProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-200/20 dark:bg-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Desktop content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
} 