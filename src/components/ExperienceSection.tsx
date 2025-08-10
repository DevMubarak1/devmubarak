"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { workExperience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            <Briefcase size={16} />
            Professional Journey
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            My Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of building innovative solutions and leading development teams across various domains.
          </p>
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex-row gap-8 items-start`}
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 shadow-lg border-4 border-white dark:border-gray-900"></div>

              {/* Experience Card */}
              <motion.div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{experience.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-gray-400 mb-1">
                        <Calendar size={14} />
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 text-slate-700 dark:text-gray-300 text-xs font-medium rounded-full border border-slate-200 dark:border-gray-600 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects. 
              Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 