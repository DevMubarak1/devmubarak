"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { XIcon } from "./XIcon";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Morphing Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            borderRadius: [
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
            ],
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
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
          
          {/* Advanced 3D Interactive Character */}
          <motion.div
            ref={containerRef}
            className="flex justify-center mb-8 relative perspective-1000"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D Character Container */}
            <motion.div
              className="relative w-32 h-32"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.1 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {/* Main Character Sphere */}
              <motion.div
                className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl relative overflow-hidden"
                style={{
                  transform: "translateZ(20px)",
                }}
                animate={{
                  borderRadius: [
                    "50% 50% 50% 50% / 50% 50% 50% 50%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "40% 60% 70% 30% / 50% 60% 30% 60%",
                    "50% 50% 50% 50% / 50% 50% 50% 50%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Inner Glow Layers */}
                <motion.div
                  className="absolute inset-4 bg-white/30 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="absolute inset-8 bg-white/20 rounded-full blur-sm"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Character Face */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🚀
                </motion.div>
              </motion.div>
              
              {/* Orbital Rings */}
              {[...Array(3)].map((_, ringIndex) => (
                <motion.div
                  key={`ring-${ringIndex}`}
                  className="absolute inset-0 border-2 border-white/20 rounded-full"
                  style={{
                    transform: `translateZ(${10 - ringIndex * 5}px)`,
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotateZ: {
                      duration: 10 + ringIndex * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2 + ringIndex,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
              
              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.cos(i * 30 * Math.PI / 180) * 60 + 50}px`,
                    top: `${Math.sin(i * 30 * Math.PI / 180) * 60 + 50}px`,
                    transform: "translateZ(30px)",
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -30, 0],
                    x: [0, Math.cos(i * 30) * 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
              
              {/* Energy Waves */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  className="absolute inset-0 border border-blue-400/30 rounded-full"
                  style={{
                    transform: "translateZ(40px)",
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
            
            {/* Waving Hand with Trail Effect */}
            <motion.div
              className="absolute -top-6 -right-6 text-4xl z-20"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋
              {/* Hand Trail */}
              <motion.div
                className="absolute inset-0 text-4xl opacity-30"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Text with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <motion.p 
              className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Feel free to reach out to me at{" "}
              <motion.span 
                className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('mailto:devmubarak@getfoodify.com')}
              >
                devmubarak@getfoodify.com
                {/* Email Underline Effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.span>{" "}
              or click the links below!
            </motion.p>
          </motion.div>
          
          {/* Advanced Social Links with 3D Effects */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                href: "https://github.com/yourusername", 
                icon: Github, 
                label: "GitHub", 
                color: "hover:text-gray-800 dark:hover:text-gray-200",
                bgGradient: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
              },
              { 
                href: "https://linkedin.com/in/yourusername", 
                icon: Linkedin, 
                label: "LinkedIn", 
                color: "hover:text-blue-600 dark:hover:text-blue-400",
                bgGradient: "from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20"
              },
              { 
                href: "https://x.com/yourusername", 
                icon: XIcon, 
                label: "X (Twitter)", 
                color: "hover:text-black dark:hover:text-white",
                bgGradient: "from-black/10 to-gray-800/10 dark:from-white/10 dark:to-gray-200/10"
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`text-slate-600 dark:text-gray-300 transition-all duration-300 p-5 rounded-2xl bg-gradient-to-br ${social.bgGradient} shadow-lg hover:shadow-2xl ${social.color} relative overflow-hidden group`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  rotateY: [0, 15, -15, 0],
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: "translateX(-100%)",
                  }}
                  whileHover={{
                    transform: "translateX(100%)",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                />
                
                <social.icon size={32} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 