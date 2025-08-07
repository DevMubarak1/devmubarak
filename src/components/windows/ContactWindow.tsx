'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  Twitter,
  MessageCircle
} from 'lucide-react';

export default function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-full overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Contact Info */}
        <div className="liquid-glass rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/80 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 liquid-glass rounded-lg">
                <Mail size={16} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-white/70 text-sm">dev@mubarak.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 liquid-glass rounded-lg">
                <Phone size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 liquid-glass rounded-lg">
                <MapPin size={16} className="text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-white/70 text-sm">Remote / Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="liquid-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 liquid-glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 liquid-glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-white/80 text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 liquid-glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 liquid-glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Social Links */}
        <div className="liquid-glass rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/devmubarak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/devmubarak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/devmubarak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
              title="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:dev@mubarak.com"
              className="p-3 liquid-glass rounded-lg text-white/70 hover:text-white transition-colors"
              title="Email"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="liquid-glass rounded-lg p-6 text-center">
          <h4 className="text-white font-semibold mb-2">Response Time</h4>
          <p className="text-white/70 text-sm">
            I typically respond within 24 hours during business days.
          </p>
        </div>
      </motion.div>
    </div>
  );
} 