"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Toolbox", href: "/toolbox" },
  { name: "Blog", href: "/blog" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-black/95 dark:bg-black/95 backdrop-blur-xl border border-slate-200/60 dark:border-gray-800/60 rounded-full shadow-2xl shadow-black/10 dark:shadow-black/20 max-w-4xl w-[95%] transition-all duration-300 ${
          isOpen ? 'min-h-[400px]' : 'min-h-[60px]'
        }`}
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="text-xl font-bold text-black"
              >
                DevMubarak
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-black hover:text-black transition-colors duration-200 font-medium ${
                      pathname === item.href ? "text-black" : ""
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              {navItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className={`text-black hover:text-black transition-colors duration-200 font-medium text-sm ${
                      pathname === item.href ? "text-black" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={toggleMenu}
                className="text-black hover:text-black transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <motion.button
                onClick={toggleMenu}
                className="text-black hover:text-black transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-slate-200/50 dark:border-gray-800/50 mt-3 pt-3 overflow-hidden"
              >
                <div className="space-y-1 pb-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-black hover:text-black hover:bg-black rounded-xl transition-all duration-200 font-medium ${
                          pathname === item.href ? "text-black bg-black" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}