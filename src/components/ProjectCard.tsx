import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700"
    >
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
        <div className="text-4xl text-blue-600 dark:text-blue-400">📱</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.link}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors text-sm"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
} 