"use client";

import { motion } from "framer-motion";
import { Code, Heart, Rocket, Target } from "lucide-react";
import { workExperience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        {/* About Me Introduction */}
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
            <Heart size={16} />
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
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50 text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Rocket size={24} className="text-white" />
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
              <Target size={24} className="text-white" />
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
              <Code size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Code Quality</h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm">
              Writing clean, maintainable, and scalable code that stands the test of time
            </p>
          </motion.div>
        </motion.div>

        {/* Work Experience Section */}
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
            Professional Journey
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            My Work Experience
          </h3>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of building innovative solutions and leading development teams across various domains.
          </p>
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{experience.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                      {experience.title}
                    </h4>
                    <span className="text-sm text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {experience.company}
                  </h5>
                  <p className="text-slate-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="mb-4">
                    <h6 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">Key Achievements:</h6>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-slate-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">Technologies Used:</h6>
                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 