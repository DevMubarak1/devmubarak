"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle size={16} />
            Coming Soon
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Blog & Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I&apos;m working on sharing my thoughts on development, technology trends, and lessons learned from building products.
          </p>
          <motion.div
            className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-8 border border-gray-800/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              🚧 Blog Under Construction
            </h3>
            <p className="text-slate-600 dark:text-gray-300">
              I&apos;m currently setting up my blog to share insights about full-stack development, 
              AI integration, and building scalable applications. Stay tuned for articles about 
              React, Next.js, AI APIs, and more!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}