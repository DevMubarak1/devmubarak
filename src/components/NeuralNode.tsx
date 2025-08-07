'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Rnd } from 'react-rnd';
import { useState, useEffect } from 'react';

interface NeuralNodeProps {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
  pulse: boolean;
  isSelected: boolean;
  onSelect: (id: string) => void;
  position: { x: number; y: number };
}

export default function NeuralNode({
  id,
  title,
  content,
  icon,
  color,
  pulse,
  isSelected,
  onSelect,
  position
}: NeuralNodeProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || pulse) {
      const interval = setInterval(() => {
        setParticles(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 150,
            y: Math.random() * 150,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4
          }
        ]);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isHovered, pulse]);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy
          }))
          .filter(particle => 
            particle.x > 0 && particle.x < 150 && 
            particle.y > 0 && particle.y < 150
          )
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  });

  return (
    <Rnd
      default={{
        x: position.x,
        y: position.y,
        width: 150,
        height: 150,
      }}
      minWidth={150}
      minHeight={150}
      bounds="parent"
      className="absolute"
    >
      <motion.div
        className={`relative w-full h-full rounded-2xl p-4 cursor-pointer backdrop-blur-sm border-2 transition-all duration-300 neural-node ${
          isSelected ? 'scale-110 shadow-2xl' : 'hover:scale-105'
        }`}
        style={{
          backgroundColor: `${color}20`,
          borderColor: color,
          boxShadow: pulse 
            ? `0 0 30px ${color}80` 
            : `0 0 10px ${color}40`
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(id)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pulse animation */}
        {pulse && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}

        {/* Floating particles */}
        <AnimatePresence>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: color,
                left: particle.x,
                top: particle.y,
              }}
              initial={{ opacity: 0.8, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </AnimatePresence>

        {/* Neural activity rings */}
        {(isHovered || pulse) && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: color }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div 
            className="text-white mb-2"
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <motion.h3 
            className="text-white font-semibold text-sm mb-1"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Content tooltip */}
          <AnimatePresence>
            {isSelected && (
              <motion.div
                className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs z-50"
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {content}
                  {/* Tooltip arrow */}
                  <div 
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Neural activity indicators */}
        <div className="absolute top-2 right-2 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: color }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </Rnd>
  );
} 