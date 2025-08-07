'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  FileText, 
  Mail, 
  Github, 
  Linkedin,
  Settings,
  Home
} from 'lucide-react';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

interface DockProps {
  onAppClick: (appId: string) => void;
  activeApp?: string;
}

export default function Dock({ onAppClick, activeApp }: DockProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const dockItems: DockItem[] = [
    {
      id: 'home',
      icon: <Home size={24} />,
      label: 'Home',
      onClick: () => onAppClick('home'),
      isActive: activeApp === 'home'
    },
    {
      id: 'about',
      icon: <User size={24} />,
      label: 'About',
      onClick: () => onAppClick('about'),
      isActive: activeApp === 'about'
    },
    {
      id: 'projects',
      icon: <Briefcase size={24} />,
      label: 'Projects',
      onClick: () => onAppClick('projects'),
      isActive: activeApp === 'projects'
    },
    {
      id: 'blog',
      icon: <FileText size={24} />,
      label: 'Blog',
      onClick: () => onAppClick('blog'),
      isActive: activeApp === 'blog'
    },
    {
      id: 'contact',
      icon: <Mail size={24} />,
      label: 'Contact',
      onClick: () => onAppClick('contact'),
      isActive: activeApp === 'contact'
    },
    {
      id: 'github',
      icon: <Github size={24} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/devmubarak', '_blank'),
      isActive: false
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://linkedin.com/in/devmubarak', '_blank'),
      isActive: false
    }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="liquid-glass liquid-glass-cursor liquid-drip rounded-2xl px-4 py-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
        }}
      >
        <div className="flex items-center gap-2">
          {dockItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ 
                scale: 1.2,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={item.onClick}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  item.isActive 
                    ? 'bg-white/20 text-white liquid-glow' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                } liquid-glass-cursor`}
                title={item.label}
              >
                {item.icon}
              </button>
              
              {/* Enhanced Tooltip with liquid glass */}
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 liquid-glass text-white text-xs rounded-lg whitespace-nowrap liquid-glow"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 