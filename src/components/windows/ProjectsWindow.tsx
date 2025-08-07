'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Star,
  Eye
} from 'lucide-react';

export default function ProjectsWindow() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
      image: '/api/placeholder/300/200',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/devmubarak/ecommerce',
      live: 'https://ecommerce.devmubarak.com',
      stars: 45,
      views: 1200
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/api/placeholder/300/200',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/devmubarak/taskapp',
      live: 'https://tasks.devmubarak.com',
      stars: 32,
      views: 890
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This liquid glass portfolio website with macOS-inspired design and animations.',
      image: '/api/placeholder/300/200',
      technologies: ['Next.js', 'Framer Motion', 'React RND', 'Tailwind CSS'],
      github: 'https://github.com/devmubarak/portfolio',
      live: 'https://devmubarak.com',
      stars: 28,
      views: 650
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data and interactive charts.',
      image: '/api/placeholder/300/200',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      github: 'https://github.com/devmubarak/weather',
      live: 'https://weather.devmubarak.com',
      stars: 19,
      views: 420
    }
  ];

  return (
    <div className="h-full overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="liquid-glass rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/80 mb-6">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="liquid-glass rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                <Code size={48} className="text-white/60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="liquid-glass rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">More Projects</h3>
          <p className="text-white/70 mb-4">
            Check out my GitHub for more projects and contributions.
          </p>
          <a
            href="https://github.com/devmubarak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
} 