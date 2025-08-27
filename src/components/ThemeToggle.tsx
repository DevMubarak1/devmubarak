"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check initial theme state
    const hasClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(hasClass);
  }, []);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    
    // Update local state immediately
    setIsDarkMode(!isDarkMode);
    
    // Update next-themes
    setTheme(newTheme);
    
    // Directly manipulate DOM for immediate effect
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
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
    >
      <motion.div
        className={`absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
          isDarkMode 
            ? "bg-gray-100 left-6" 
            : "bg-white left-0.5"
        }`}
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