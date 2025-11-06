"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-black flex items-center justify-center px-4">
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
<<<<<<< HEAD
            className="text-9xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-4"
=======
            className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-slate-800 dark:bg-white text-white dark:text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-700 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            Go Back
          </motion.button>

          <Link href="/">
            <motion.div
<<<<<<< HEAD
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
=======
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              Go Home
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
} 
>>>>>>> fd9b60d1375b9367d3397a3e938935719c4ebebf
