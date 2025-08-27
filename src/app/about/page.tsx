"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import BackToTop from "@/components/BackToTop";

export default function About() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("About page theme changed to:", theme);
    if (typeof window !== "undefined") {
      document.body.className = document.body.className.replace(/theme-\w+/, '') + ` theme-${theme}`;
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Back to Top Button */}
      <BackToTop />

      {/* Global Floating Background Elements */}
      <BackgroundElements />

      {/* Navigation */}
      <Navigation />

      {/* About Content */}
      <div className="pt-16 pb-16">
        {/* About Me Section */}
        <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-lg">💙</span>
                About Me
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mubarak</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                A passionate full-stack developer and creative technologist with over 3 years of experience building innovative digital solutions. 
                I specialize in creating modern web applications, mobile apps, and AI-powered tools that solve real-world problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                My journey in tech started with a curiosity to understand how things work, which evolved into a passion for building products that make a difference. 
                I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. 
                I&apos;m always excited to take on new challenges and collaborate with teams that share my vision for innovative, user-centric solutions.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div
                className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Innovation Driven</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm">
                  Always exploring cutting-edge technologies and pushing the boundaries of what&apos;s possible
                </p>
              </motion.div>

              <motion.div
                className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Problem Solver</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm">
                  Focused on understanding user needs and creating solutions that deliver real value
                </p>
              </motion.div>

              <motion.div
                className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Code Quality</h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm">
                  Writing clean, maintainable, and scalable code that stands the test of time
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 