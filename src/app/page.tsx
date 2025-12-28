"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail } from "lucide-react";

// Projects Data
const projects = [
  {
    title: "DevTriage",
    description: "A triage system for managing issues and tasks efficiently.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/devtriage-logo.jpg",
    logo: "/devtriage-logo.jpg",
    link: "https://github.com/DevMubarak1/Devtriage",
    role: "Creator"
  },
  {
    title: "RateRadar",
    description: "Track and monitor currency and crypto exchange rates in real-time.",
    tech: ["JavaScript", "Chrome APIs", "React"],
    image: "/rateradar-logo.jpg",
    logo: "/rateradar-logo.jpg",
    link: "https://github.com/DevMubarak1/RateRadar-Extension",
    role: "Creator"
  },
  {
    title: "Foodify",
    description: "AI-powered culinary assistant with recipe discovery and meal planning.",
    tech: ["Next.js", "React Native", "Supabase", "OpenAI API", "TypeScript"],
    image: "/foodify-logo.jpg",
    logo: "/foodify-logo.jpg",
    link: "https://getfoodify.com",
    role: "Founder"
  },
  {
    title: "AnyShape",
    description: "Crop images to any shape with 16+ presets or custom shapes. Privacy-first, all processing happens in your browser.",
    tech: ["Next.js", "TypeScript", "Canvas API", "SVG"],
    image: "/anyshape-logo.png",
    logo: "/anyshape-logo.png",
    link: "https://anyshape.devmubarak.me/",
    role: "Creator"
  }
];

export default function Home() {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
      },
    }),
  };

  const text = "Hello, I am DevMubarak.";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-2xl w-full">
          {/* Animated Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight whitespace-pre-wrap break-normal">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
          >
            Welcome to my corner of the internet! I&apos;m a full-stack developer passionate about building 
            impactful software solutions that solve real problems.
          </motion.p>

          {/* Languages and Technologies */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed"
          >
            I work with <span className="font-semibold text-gray-900 dark:text-white">TypeScript, JavaScript, Python, Rust, Go, and more</span>. 
            My toolkit includes <span className="font-semibold text-gray-900 dark:text-white">React, Next.js, Node.js, Supabase, and modern web technologies</span>.
          </motion.p>

          {/* Current Focus */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed"
          >
            Currently building tools and solutions that matter. Let&apos;s create something great together.
          </motion.p>

          {/* Additional Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed font-semibold text-blue-600 dark:text-blue-400"
          >
            I LOVE ELON MUSK!!
          </motion.p>

          {/* Social Links with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-6 items-center"
          >
            {/* GitHub */}
            <a
              href="https://github.com/DevMubarak1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base sm:text-lg font-medium">GitHub</span>
            </a>

            {/* Mail */}
            <a
              href="mailto:devmubarak@getfoodify.com"
              className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base sm:text-lg font-medium">Mail</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/dev_mubarak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group font-bold text-xl"
            >
              <span className="group-hover:scale-110 transition-transform duration-300 inline-block">X</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl w-full mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">Projects</h2>

          <div className="space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/20 p-3 sm:p-4 rounded-lg transition-colors duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 sm:gap-4 mb-1 sm:mb-2">
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={32}
                        height={32}
                        className="flex-shrink-0 rounded"
                      />
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium whitespace-nowrap transition-colors duration-300 text-sm sm:text-base mt-2 sm:mt-0"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 DevMubarak.</p>
        </div>
      </footer>
    </div>
  );
}
