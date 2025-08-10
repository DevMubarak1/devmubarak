"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Globe, Smartphone, Database, Zap, Palette, ShoppingCart, Chrome, LucideIcon, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  role: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getTechIcon = (tech: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    "Next.js": Globe,
    "React": Code,
    "React Native": Smartphone,
    "Supabase": Database,
    "OpenAI API": Zap,
    "Tailwind CSS": Palette,
    "Node.js": Code,
    "Auth.js": Database,
    "PostgreSQL": Database,
    "Framer Motion": Palette,
    "Flutterwave": ShoppingCart,
    "JavaScript": Code,
    "Chrome APIs": Chrome,
    "TypeScript": Code,
    "Visa/Mastercard": ShoppingCart,
    "React Carousel": Palette,
    "JSON": Code,
    "CSS": Palette,
    "HTML": Globe
  };
  return iconMap[tech] || Code;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full blur-xl"></div>
        </div>

        {/* Project Image Placeholder */}
        <div className="relative mb-6">
          <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500">
            <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              {project.title.charAt(0)}
            </div>
          </div>
          
          {/* Role Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              {project.role}
            </span>
          </div>

          {/* Live Link Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight className="w-4 h-4 text-slate-700 dark:text-gray-300" />
          </motion.a>
        </div>

        {/* Project Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Code size={14} />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => {
                const Icon = getTechIcon(tech);
                return (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 text-slate-700 dark:text-gray-300 text-xs font-medium rounded-full border border-slate-200 dark:border-gray-600 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group/tech"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Icon size={12} className="text-blue-600 dark:text-blue-400 group-hover/tech:scale-110 transition-transform duration-300" />
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:from-blue-700 group-hover:to-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.link === "#" ? "Coming Soon" : "View Project"}
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 transition-all duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
} 