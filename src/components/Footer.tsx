"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white/30 dark:bg-black/30 backdrop-blur-sm border-t border-slate-200/50 dark:border-gray-700/50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Mubarak
              </h3>
              <p className="text-slate-600 dark:text-gray-300 max-w-md mx-auto">
                Full-stack developer passionate about creating exceptional digital experiences 
                that combine cutting-edge technology with beautiful design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-sm">
                <span>© 2024 Mubarak. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Nigeria
                </span>
              </div>

              <motion.button
                onClick={scrollToTop}
                className="group p-3 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ArrowUp className="w-5 h-5 text-slate-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 