"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
<<<<<<< HEAD
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-700 to-black origin-left z-50"
      style={{ scaleX }}
    />
  );
}
=======
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
} 
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
