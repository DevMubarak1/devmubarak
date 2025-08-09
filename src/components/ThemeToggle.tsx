"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Debug: Log theme state
    console.log("Theme Debug:", { theme, resolvedTheme, systemTheme });
  }, [theme, resolvedTheme, systemTheme]);

  const toggleTheme = () => {
    console.log("Toggle clicked, current theme:", theme, "resolved:", resolvedTheme);
    // Simplified toggle logic
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Setting theme to:", newTheme);
    setTheme(newTheme);
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="relative w-12 h-6 bg-slate-200 dark:bg-gray-700 rounded-full p-1">
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"></div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-slate-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-theme={theme}
      data-resolved={resolvedTheme}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-100 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={12} className="text-gray-700" />
        ) : (
          <Sun size={12} className="text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  );
} 