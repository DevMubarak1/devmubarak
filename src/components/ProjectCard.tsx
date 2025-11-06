import { motion } from "framer-motion";
import { ExternalLink, Code, Globe, Smartphone, Database, Zap, Palette, ShoppingCart, Chrome } from "lucide-react";
import Image from "next/image";

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

const getTechIcon = (tech: string): typeof Code => {
  const iconMap: Record<string, typeof Code> = {
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-black backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-800 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-black flex items-center justify-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs bg-black text-blue-400 px-2 py-1 rounded-full font-medium">
            {project.role}
          </span>
        </div>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {project.tech.map((tech, techIndex) => {
              const IconComponent = getTechIcon(tech);
              return (
                <motion.div
                  key={techIndex}
                  className="flex items-center gap-1 bg-black text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconComponent size={12} />
                  <span className="truncate">{tech}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.a
            href={project.link}
            className="group/link flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
            {project.link === "#" ? "Coming Soon" : "Live Demo"}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}