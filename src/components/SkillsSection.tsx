"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"]
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "Auth.js"]
  },
  {
    name: "AI & APIs",
    skills: ["OpenAI API", "Chrome APIs"]
  },
  {
    name: "Tools & Services",
    skills: ["AWS", "Flutterwave", "Git", "Docker"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-white/30 dark:bg-black/30 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            🛠️ Skills & Technologies
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Technical Expertise
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in modern web technologies and have extensive experience building scalable applications across the full stack.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                {category.name === "Frontend Development" && "🎨"}
                {category.name === "Backend Development" && "⚙️"}
                {category.name === "AI & APIs" && "🤖"}
                {category.name === "Tools & Services" && "🛠️"}
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skillName, skillIndex) => {
                  const skill = skills.find(s => s.name === skillName);
                  if (!skill) return null;
                  
                  return (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-slate-700 dark:text-gray-200 text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">
            Complete Skill Set
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-white font-medium text-sm">
                      {skill.name}
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 