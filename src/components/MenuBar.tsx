'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Wifi, Battery, Volume2, Sun, Moon } from 'lucide-react';

export default function MenuBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add actual theme switching logic here
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 liquid-glass liquid-glass-cursor border-b border-white/20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left side - App menu */}
        <div className="flex items-center gap-4">
          <motion.span 
            className="text-sm font-medium text-white/90"
            whileHover={{ scale: 1.05 }}
          >
            Dev Mubarak
          </motion.span>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-xs text-white/70">Portfolio</span>
        </div>

        {/* Center - Clock with liquid glass effect */}
        <motion.div 
          className="flex items-center gap-2 liquid-glass rounded-lg px-3 py-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Clock size={14} className="text-white/70" />
          <span className="text-sm text-white/90 font-medium">
            {formatTime(currentTime)}
          </span>
        </motion.div>

        {/* Right side - System controls */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 liquid-glass rounded-lg hover:bg-white/10 transition-colors"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? (
              <Sun size={14} className="text-white/70" />
            ) : (
              <Moon size={14} className="text-white/70" />
            )}
          </motion.button>
          
          <motion.div 
            className="flex items-center gap-1 liquid-glass rounded-lg px-2 py-1"
            whileHover={{ scale: 1.05 }}
          >
            <Wifi size={14} className="text-white/70" />
            <span className="text-xs text-white/70">WiFi</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-1 liquid-glass rounded-lg px-2 py-1"
            whileHover={{ scale: 1.05 }}
          >
            <Battery size={14} className="text-white/70" />
            <span className="text-xs text-white/70">100%</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-1 liquid-glass rounded-lg px-2 py-1"
            whileHover={{ scale: 1.05 }}
          >
            <Volume2 size={14} className="text-white/70" />
            <span className="text-xs text-white/70">50%</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 