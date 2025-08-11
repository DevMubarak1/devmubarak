"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Projects Completed",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 10,
    suffix: "K+",
    label: "Active Users",
    icon: "👥",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: 99,
    suffix: ".9%",
    label: "Uptime",
    icon: "⚡",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 500,
    suffix: "+",
    label: "Extension Users",
    icon: "🔧",
    color: "from-orange-500 to-red-500"
  }
];

function AnimatedCounter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            📊 Achievements & Stats
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Impact & Results
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves. Here&apos;s what I&apos;ve accomplished through dedication and technical expertise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              
              <div className="text-slate-800 dark:text-white mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              
              <p className="text-slate-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Client Satisfaction
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                100% client satisfaction rate with projects delivered on time and within budget
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Performance
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                Average page load time under 2 seconds with optimized performance metrics
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Scalability
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                Built applications that scale from 0 to 10,000+ users with robust architecture
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 