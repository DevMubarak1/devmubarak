"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="text-blue-600 dark:text-blue-400" size={18} />
            <span className="hidden sm:inline">DevMubarak</span>
            <span className="sm:hidden">DM</span>
          </motion.h1>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden sm:flex space-x-6">
              <a href="#experience" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#blog" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 