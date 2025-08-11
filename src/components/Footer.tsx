"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-slate-200/50 dark:border-gray-800/50 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p 
          className="text-slate-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © 2024 DevMubarak. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
} 