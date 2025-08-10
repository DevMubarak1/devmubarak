"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-slate-600 dark:text-gray-400 text-sm">
              © 2025 Mubarak. All rights reserved.
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
    </footer>
  );
} 