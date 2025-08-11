"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Database, Zap, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with Next.js, React, and cutting-edge technologies. From simple landing pages to complex SaaS platforms.",
    features: [
      "Full-stack web applications",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Performance optimization",
      "SEO-friendly architecture"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native. Native performance with shared codebase for iOS and Android.",
    features: [
      "React Native applications",
      "iOS & Android development",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
      "Native device features"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust backend systems and APIs built with Node.js, PostgreSQL, and cloud services. Scalable architecture for growing applications.",
    features: [
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Authentication & authorization",
      "Cloud deployment (AWS, Vercel)",
      "Microservices architecture",
      "Real-time features"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Intelligent features powered by OpenAI and custom AI solutions. From chatbots to content generation and data analysis.",
    features: [
      "OpenAI API integration",
      "Custom AI models",
      "Natural language processing",
      "Content generation",
      "Data analysis & insights",
      "Automated workflows"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Code,
    title: "Browser Extensions",
    description: "Chrome extensions and browser tools that enhance productivity and user experience. Custom solutions for specific workflows.",
    features: [
      "Chrome extension development",
      "Cross-browser compatibility",
      "API integrations",
      "Data synchronization",
      "User interface design",
      "Store deployment"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed with modern principles. Focus on user experience and accessibility.",
    features: [
      "User interface design",
      "User experience optimization",
      "Responsive design",
      "Accessibility compliance",
      "Design systems",
      "Prototyping & wireframing"
    ],
    color: "from-pink-500 to-rose-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-white/30 dark:bg-black/30 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            🎯 Services & Solutions
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            What I Can Build For You
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development services tailored to your specific needs and goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ y: -8 }}
              >
                {/* Service Icon */}
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={28} />
                </motion.div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and turn them into reality. I&apos;m here to help you build something amazing.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 