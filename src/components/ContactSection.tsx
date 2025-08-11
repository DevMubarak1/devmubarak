"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { XIcon } from "./XIcon";

export default function ContactSection() {
  return (
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
  );
} 