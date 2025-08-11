"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/portfolio";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 