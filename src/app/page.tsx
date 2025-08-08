"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, and secure payment processing.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by OpenAI's GPT API, featuring natural language processing and context-aware responses.",
      tech: ["Python", "OpenAI API", "FastAPI", "React"],
      image: "/project3.jpg",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.",
      tech: ["Vue.js", "Node.js", "PostgreSQL", "Redis"],
      image: "/project4.jpg",
      link: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities.",
      tech: ["React", "Socket.io", "WebRTC", "Express"],
      image: "/project5.jpg",
      link: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React Native", "OpenWeather API", "Redux", "TypeScript"],
      image: "/project6.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-xl font-bold text-slate-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              DevMubarak
            </motion.h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Mubarak</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack developer passionate about creating clean, efficient, and user-friendly web applications.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-gray-900 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                I&apos;m a passionate developer who loves turning ideas into reality through code. 
                With expertise in modern web technologies, I focus on building scalable, 
                maintainable applications that provide exceptional user experiences.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              I&apos;m always interested in new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to collaborate or just say hello!
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                your.email@example.com
              </a>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://github.com/yourusername"
                className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-gray-300">
            © 2024 DevMubarak. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
