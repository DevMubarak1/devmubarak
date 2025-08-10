"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Star size={16} />
            Client Testimonials
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            What People Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full blur-lg"></div>
                </div>

                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: starIndex * 0.1 }}
                      >
                        <Star
                          size={16}
                          className={`${
                            starIndex < 5
                              ? "text-yellow-500 fill-current"
                              : "text-slate-300 dark:text-gray-600"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/20 dark:group-hover:border-yellow-400/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200/50 dark:border-yellow-800/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their ideas into reality. 
              Let&apos;s create something amazing together!
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 