"use client";

import { motion } from "framer-motion";
import { MessageCircle, BookOpen, ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen size={16} />
            Coming Soon
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Blog & Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I&apos;m working on sharing my thoughts on development, technology trends, and lessons learned from building products.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-12 border border-indigo-200/50 dark:border-indigo-800/50 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-400/30 to-red-400/30 rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                🚧 Blog Under Construction
              </h3>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                I&apos;m currently setting up my blog to share insights about full-stack development, 
                AI integration, and building scalable applications. Stay tuned for articles about 
                React, Next.js, AI APIs, and more!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Development Tips</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Best practices and coding insights</p>
                </motion.div>

                <motion.div
                  className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">AI Integration</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">AI tools and implementation guides</p>
                </motion.div>

                <motion.div
                  className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Project Stories</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Behind-the-scenes of my projects</p>
                </motion.div>
              </div>

              <motion.div
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span>Stay tuned for updates</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 