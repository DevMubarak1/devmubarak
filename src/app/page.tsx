"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, Sparkles, Code, Zap, MessageCircle, Star } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ThemeToggle from "@/components/ThemeToggle";
import { XIcon } from "@/components/XIcon";

export default function Home() {
  const projects = [
    {
      title: "Foodify – AI-Powered Culinary Assistant",
      description: "Recipe discovery, meal planning, shopping lists, and AI chat cooking guide. Experience as Founder and Full-time developer.",
      tech: ["Next.js", "React Native", "Supabase", "OpenAI API", "Tailwind CSS", "Node.js", "Auth.js"],
      image: "/project1.jpg",
      link: "https://getfoodify.com",
      role: "Founder & Full-stack Developer"
    },
    {
      title: "Shomoloo - Unified Workflow Platform",
      description: "A unified workflow platform bringing together designers, fabric vendors, and printing services in one interface—no more jumping between apps or suppliers.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Node.js", "Auth.js", "Flutterwave"],
      image: "/project2.jpg",
      link: "https://shomoloo.vercel.app/",
      role: "Full-stack Developer"
    },
    {
      title: "Perfect Skin Industry - E-commerce Store",
      description: "A polished e-commerce storefront for skincare products featuring hero banners, product showcases, and integrated payment systems.",
      tech: ["Next.js", "React Carousel", "Supabase", "Auth.js", "Node.js", "Visa/Mastercard"],
      image: "/project3.jpg",
      link: "https://perfect-skin-industry.vercel.app/",
      role: "Full-stack Developer"
    },
    {
      title: "DevMubarak - Portfolio",
      description: "My personal portfolio showcasing my work, skills, and experience in modern web development.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      image: "/project4.jpg",
      link: "#",
      role: "Full-stack Developer"
    },
    {
      title: "RateRadar - Chrome Extension",
      description: "Track, convert, and monitor currency and crypto exchange rates—anytime, anywhere.",
      tech: ["JavaScript", "Chrome APIs", "JSON", "CSS", "HTML"],
      image: "/project5.jpg",
      link: "#",
      role: "Creator"
    },
    {
      title: "Foodify Recipe Importer - Chrome Extension",
      description: "Browser extension for importing recipes into the Foodify app from anywhere on the web.",
      tech: ["JavaScript", "Chrome APIs", "JSON", "CSS", "HTML"],
      image: "/project6.jpg",
      link: "#",
      role: "Creator"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-500 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "⚡", color: "from-gray-800 to-black" },
    { name: "React Native", icon: "📱", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-purple-600" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-indigo-500" },
    { name: "Supabase", icon: "🔥", color: "from-green-400 to-emerald-600" },
    { name: "OpenAI API", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
    { name: "Framer Motion", icon: "✨", color: "from-purple-400 to-pink-400" },
    { name: "Auth.js", icon: "🔐", color: "from-blue-600 to-indigo-600" },
    { name: "Chrome APIs", icon: "🌐", color: "from-blue-500 to-green-500" },
    { name: "Flutterwave", icon: "💳", color: "from-orange-500 to-red-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "Mubarak's work on our e-commerce platform was exceptional. His attention to detail and technical expertise made all the difference.",
      avatar: "👩‍💼"
    },
    {
      name: "Alex Rodriguez",
      role: "Startup Founder",
      company: "Foodify",
      content: "Working with Mubarak was a game-changer. His AI integration skills and full-stack capabilities brought our vision to life perfectly.",
      avatar: "👨‍💻"
    },
    {
      name: "Emma Thompson",
      role: "Design Director",
      company: "Creative Studio",
      content: "Mubarak's technical implementation of our design system was flawless. He truly understands the balance between aesthetics and functionality.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="text-blue-600 dark:text-blue-400" size={18} />
              <span className="hidden sm:inline">DevMubarak</span>
              <span className="sm:hidden">DM</span>
            </motion.h1>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="hidden sm:flex space-x-6">
                <a href="#about" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#projects" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#blog" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative">
        {/* Hero Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(147,197,253,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.1)_1px,transparent_1px)]"></div>
          
          {/* Wave Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/50 dark:from-gray-900/50 to-transparent"></div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-300/30 dark:border-blue-600/30 rotate-45"
            animate={{
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-purple-300/30 dark:border-purple-600/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Dots Pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/40 dark:bg-blue-500/40 rounded-full"
                style={{
                  left: `${Math.cos(i * 60 * Math.PI / 180) * 150 + 150}px`,
                  top: `${Math.sin(i * 60 * Math.PI / 180) * 150 + 150}px`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-300/30 dark:border-blue-600/30"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-300/30 dark:border-purple-600/30"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-300/30 dark:border-green-600/30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-300/30 dark:border-pink-600/30"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Zap size={16} />
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mubarak</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
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
              <motion.a 
                href="#projects" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I&apos;m a passionate developer who loves turning ideas into reality through code. 
                With expertise in modern web technologies, I focus on building scalable, 
                maintainable applications that provide exceptional user experiences.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`bg-gradient-to-r ${skill.color} text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{skill.icon}</span>
                    <span className="hidden sm:inline">{skill.name}</span>
                    <span className="sm:hidden">{skill.name.length > 8 ? skill.name.substring(0, 8) + '...' : skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 sm:w-80 h-64 sm:h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 w-64 sm:w-80 h-64 sm:h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 animate-pulse"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Star size={16} />
              Client Testimonials
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              What People Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here&apos;s what clients and colleagues have to say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
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
              className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-purple-200/50 dark:border-purple-800/50"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Mail size={16} />
              Let&apos;s Connect
            </motion.div>
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
              <motion.a
                href="mailto:your.email@example.com"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                your.email@example.com
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
                { href: "https://x.com/yourusername", icon: XIcon, label: "X (Twitter)" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors p-3 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-slate-200/50 dark:border-gray-800/50 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-slate-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © 2024 DevMubarak. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
