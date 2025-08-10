"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Check initial theme state
    const hasClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(hasClass);
  }, []);

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-12 h-6 bg-slate-200 rounded-full p-1">
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"></div>
      </div>
    );
  }

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    
    // Update local state immediately
    setIsDarkMode(!isDarkMode);
    
    // Update next-themes
    setTheme(newTheme);
    
    // Directly manipulate DOM for immediate effect
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      // Force body background change
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#f8fafc";
    } else {
      document.documentElement.classList.remove("dark");
      // Force body background change
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#0f172a";
    }
    
    // Add a visual flash to show the change
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${newTheme === 'dark' ? '#000000' : '#ffffff'};
      opacity: 0.1;
      pointer-events: none;
      z-index: 9999;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(flash);
    
    setTimeout(() => {
      flash.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(flash);
      }, 300);
    }, 100);
    
    console.log("Theme toggled to:", newTheme);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`relative w-12 h-6 rounded-full p-1 transition-all duration-300 ${
        isDarkMode 
          ? "bg-gray-700 border border-gray-600" 
          : "bg-slate-200 border border-slate-300"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      style={{
        backgroundColor: isDarkMode ? '#374151' : '#e2e8f0',
        borderColor: isDarkMode ? '#4b5563' : '#cbd5e1'
      }}
    >
      <motion.div
        className={`absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
          isDarkMode 
            ? "bg-gray-100 left-6" 
            : "bg-white left-0.5"
        }`}
        style={{
          backgroundColor: isDarkMode ? '#f3f4f6' : '#ffffff',
          left: isDarkMode ? '24px' : '2px'
        }}
        animate={{
          x: 0, // Remove framer motion animation conflicts
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDarkMode ? (
          <Moon size={12} className="text-gray-700" />
        ) : (
          <Sun size={12} className="text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  );
} 