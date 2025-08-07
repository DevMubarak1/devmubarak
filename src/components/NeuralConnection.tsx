'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NeuralConnectionProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  index: number;
  isActive: boolean;
}

export default function NeuralConnection({ from, to, color, index, isActive }: NeuralConnectionProps) {
  const [particles, setParticles] = useState<Array<{ id: number; progress: number }>>([]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setParticles(prev => [
          ...prev,
          { id: Date.now(), progress: 0 }
        ]);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setParticles(prev => 
        prev
          .map(particle => ({ ...particle, progress: particle.progress + 0.02 }))
          .filter(particle => particle.progress < 1)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  });

  const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x);

  return (
    <g>
      {/* Main connection line */}
      <motion.line
        x1={from.x + 75}
        y1={from.y + 75}
        x2={to.x + 75}
        y2={to.y + 75}
        stroke={color}
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: index * 0.1 }}
        className="connection-flow"
      />

      {/* Flowing particles */}
      {isActive && particles.map(particle => {
        const x = from.x + 75 + (to.x - from.x) * particle.progress;
        const y = from.y + 75 + (to.y - from.y) * particle.progress;
        
        return (
          <motion.circle
            key={particle.id}
            cx={x}
            cy={y}
            r="3"
            fill={color}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}

      {/* Connection glow effect */}
      <motion.line
        x1={from.x + 75}
        y1={from.y + 75}
        x2={to.x + 75}
        y2={to.y + 75}
        stroke={color}
        strokeWidth="6"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isActive ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
    </g>
  );
} 