"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Star } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code size={16} />
            Featured Work
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center gap-8 text-center"
          >
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-gray-700/50">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new and challenging projects. 
              Whether it&apos;s a web app, mobile app, or something completely unique, 
              let&apos;s discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:your.email@example.com"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Start a Project
              </motion.a>
              <motion.button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 