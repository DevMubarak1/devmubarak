"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="toolbox" className="py-20 px-4 sm:px-6 bg-white/30 dark:bg-black/30 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            My Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive collection of technologies, frameworks, and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-gray-700/50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skill.color} text-white rounded-2xl text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {/* Development Tools */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Development Tools
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Git & GitHub</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-20 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">VS Code</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Figma</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-16 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Postman</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-18 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">☁️</span>
              Cloud & Deployment
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Vercel</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-24 h-2 bg-gradient-to-r from-black to-gray-800 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">AWS</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-20 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Netlify</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-16 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-gray-300">Docker</span>
                <div className="w-24 h-2 bg-slate-200 dark:bg-gray-700 rounded-full">
                  <div className="w-14 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 