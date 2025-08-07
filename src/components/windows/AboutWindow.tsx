'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin,
  Download
} from 'lucide-react';

export default function AboutWindow() {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-600' },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Personal Info */}
        <div className="liquid-glass rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            I&apos;m a passionate full-stack developer with a love for creating innovative web applications. 
            With expertise in modern JavaScript frameworks and a keen eye for design, I build applications 
            that are both beautiful and functional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-400" />
              <span className="text-white/80">Location: Remote / Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-400" />
              <span className="text-white/80">dev@mubarak.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-400" />
              <span className="text-white/80">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={16} className="text-blue-400" />
              <span className="text-white/80">devmubarak.com</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="liquid-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Skills & Technologies</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white/60 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="liquid-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-400 pl-4">
              <h4 className="text-white font-semibold">Senior Full-Stack Developer</h4>
              <p className="text-blue-400 text-sm">Tech Company • 2022 - Present</p>
              <p className="text-white/70 text-sm mt-1">
                Leading development of modern web applications using React, TypeScript, and Node.js.
              </p>
            </div>
            <div className="border-l-2 border-purple-400 pl-4">
              <h4 className="text-white font-semibold">Frontend Developer</h4>
              <p className="text-purple-400 text-sm">Startup • 2020 - 2022</p>
              <p className="text-white/70 text-sm mt-1">
                Built responsive user interfaces and optimized application performance.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            <Download size={16} />
            Download CV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 liquid-glass text-white rounded-lg transition-colors">
            <Github size={16} />
            GitHub
          </button>
          <button className="flex items-center gap-2 px-4 py-2 liquid-glass text-white rounded-lg transition-colors">
            <Linkedin size={16} />
            LinkedIn
          </button>
        </div>
      </motion.div>
    </div>
  );
} 