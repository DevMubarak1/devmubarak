"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
<<<<<<< HEAD
            className="inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
=======
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
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
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* And plenty more text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            and plenty more.......
          </p>
        </motion.div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
} 
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
