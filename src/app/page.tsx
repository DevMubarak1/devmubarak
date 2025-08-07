'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Zap,
  Network,
  Target,
  Cpu
} from 'lucide-react';

interface NodeData {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
  color: string;
  pulse: boolean;
  strength: number;
  category: string;
}

export default function NeuralPortfolio() {
  const [nodes, setNodes] = useState<NodeData[]>([
    {
      id: 'about',
      title: 'About Me',
      content: 'Full-stack developer passionate about creating innovative solutions and pushing the boundaries of web technology. Specializing in AI/ML, blockchain, and cutting-edge web applications.',
      icon: <Brain className="w-6 h-6" />,
      x: 50,
      y: 50,
      connections: ['skills', 'experience', 'vision'],
      color: '#FF6B6B',
      pulse: true,
      strength: 0.9,
      category: 'core'
    },
    {
      id: 'skills',
      title: 'Skills',
      content: 'React, Next.js, TypeScript, Node.js, Python, AI/ML, Cloud Architecture, DevOps, Blockchain, Real-time Systems, Microservices, Docker, Kubernetes, AWS, Azure',
      icon: <Code className="w-6 h-6" />,
      x: 300,
      y: 100,
      connections: ['about', 'projects', 'experience', 'tech'],
      color: '#4ECDC4',
      pulse: false,
      strength: 0.8,
      category: 'tech'
    },
    {
      id: 'experience',
      title: 'Experience',
      content: '5+ years building scalable applications, leading development teams, and delivering impactful solutions for Fortune 500 companies and startups. Expert in full-stack development and system architecture.',
      icon: <Briefcase className="w-6 h-6" />,
      x: 150,
      y: 300,
      connections: ['about', 'contact', 'skills', 'projects'],
      color: '#45B7D1',
      pulse: false,
      strength: 0.85,
      category: 'professional'
    },
    {
      id: 'projects',
      title: 'Projects',
      content: 'AI-powered applications, blockchain solutions, real-time systems, innovative web platforms, and cutting-edge technology implementations. From startups to enterprise solutions.',
      icon: <Zap className="w-6 h-6" />,
      x: 450,
      y: 250,
      connections: ['skills', 'contact', 'vision', 'tech'],
      color: '#96CEB4',
      pulse: false,
      strength: 0.75,
      category: 'work'
    },
    {
      id: 'contact',
      title: 'Connect',
      content: 'Ready to collaborate on exciting projects. Let\'s build something amazing together! Always open to new opportunities and innovative partnerships.',
      icon: <Mail className="w-6 h-6" />,
      x: 250,
      y: 450,
      connections: ['experience', 'projects', 'about'],
      color: '#FFEAA7',
      pulse: false,
      strength: 0.7,
      category: 'social'
    },
    {
      id: 'vision',
      title: 'Vision',
      content: 'Pioneering the future of technology through innovative solutions, AI integration, and sustainable development practices that make a real impact.',
      icon: <Target className="w-6 h-6" />,
      x: 500,
      y: 50,
      connections: ['about', 'projects', 'skills'],
      color: '#A8E6CF',
      pulse: false,
      strength: 0.9,
      category: 'core'
    },
    {
      id: 'tech',
      title: 'Tech Stack',
      content: 'Modern JavaScript ecosystem, cloud-native development, microservices architecture, CI/CD pipelines, and cutting-edge frameworks.',
      icon: <Cpu className="w-6 h-6" />,
      x: 600,
      y: 200,
      connections: ['skills', 'projects'],
      color: '#FF9F43',
      pulse: false,
      strength: 0.8,
      category: 'tech'
    }
  ]);

  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [connections, setConnections] = useState<{ from: string; to: string; strength: number }[]>([]);
  const [brainWaves, setBrainWaves] = useState<Array<{ id: number; x: number; y: number; amplitude: number; color: string }>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [networkActivity, setNetworkActivity] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const newConnections: { from: string; to: string; strength: number }[] = [];
    nodes.forEach(node => {
      node.connections.forEach(targetId => {
        const targetNode = nodes.find(n => n.id === targetId);
        if (targetNode) {
          newConnections.push({ 
            from: node.id, 
            to: targetId, 
            strength: (node.strength + targetNode.strength) / 2 
          });
        }
      });
    });
    setConnections(newConnections);

    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        pulse: Math.random() > 0.5 && node.strength > 0.7
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, [nodes]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#A8E6CF', '#FF9F43'];
    const waveInterval = setInterval(() => {
      setBrainWaves(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          amplitude: Math.random() * 150 + 50,
          color: colors[Math.floor(Math.random() * colors.length)]
        }
      ]);
    }, 300);

    return () => clearInterval(waveInterval);
  }, []);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setBrainWaves(prev => prev.filter(wave => Date.now() - wave.id < 4000));
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  useEffect(() => {
    const activityInterval = setInterval(() => {
      setNetworkActivity(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(activityInterval);
  }, []);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
    
    const clickedNode = nodes.find(n => n.id === nodeId);
    if (clickedNode) {
      setNodes(prev => prev.map(node => ({
        ...node,
        pulse: clickedNode.connections.includes(node.id) || node.id === nodeId
      })));
    }
  };

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background particles */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 80 : 150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            animate={{
              x: [0, typeof window !== 'undefined' ? window.innerWidth : 1200],
              y: [0, typeof window !== 'undefined' ? window.innerHeight : 800],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              top: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
          />
        ))}
      </div>

      {/* Enhanced brain wave patterns */}
      <div className="absolute inset-0">
        {brainWaves.map(wave => (
          <motion.div
            key={wave.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: wave.color,
              left: wave.x,
              top: wave.y,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: [0, wave.amplitude / 8, 0],
              opacity: [0.8, 0.4, 0]
            }}
            transition={{ duration: 4 }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="absolute top-4 left-4 right-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Network className="w-8 h-8 text-purple-400" />
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white gradient-text">
                Neural Portfolio
              </h1>
              <p className="text-purple-200 text-sm md:text-lg">Interactive • Dynamic • Connected</p>
            </div>
          </div>

          {/* Network Activity Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
            <div className="text-white/80 text-sm">
              Activity: {networkActivity}%
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="pt-24 pb-20 px-4">
          <AnimatePresence>
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-full p-6 rounded-2xl backdrop-blur-sm border-2 cursor-pointer"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: node.color,
                    boxShadow: node.pulse 
                      ? `0 0 30px ${node.color}80, 0 0 60px ${node.color}40` 
                      : `0 0 10px ${node.color}40`
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  {/* Enhanced pulse animation */}
                  {node.pulse && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: node.color }}
                      initial={{ opacity: 0.3, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div 
                      className="text-white"
                      animate={selectedNode === node.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {node.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {node.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full text-white/80" style={{ backgroundColor: `${node.color}40` }}>
                          {node.category}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: node.color }}
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
                      </div>
                      <AnimatePresence>
                        {selectedNode === node.id && (
                          <motion.p
                            className="text-white/80 text-sm leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {node.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Enhanced mobile floating action buttons */}
          <motion.div 
            className="fixed bottom-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      ) : (
        /* Enhanced Desktop Layout */
        <>
          {/* Enhanced Neural connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const from = getNodePosition(connection.from);
              const to = getNodePosition(connection.to);
              
              return (
                <g key={index}>
                  {/* Glow effect */}
                  <motion.line
                    x1={from.x + 75}
                    y1={from.y + 75}
                    x2={to.x + 75}
                    y2={to.y + 75}
                    stroke={`hsl(${200 + connection.strength * 60}, 70%, 60%)`}
                    strokeWidth="8"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                  {/* Main connection */}
                  <motion.line
                    x1={from.x + 75}
                    y1={from.y + 75}
                    x2={to.x + 75}
                    y2={to.y + 75}
                    stroke={`hsl(${200 + connection.strength * 60}, 70%, 60%)`}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                    className="connection-flow"
                  />
                </g>
              );
            })}
          </svg>

          {/* Enhanced Neural Nodes */}
          <AnimatePresence>
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                className="absolute w-[150px] h-[150px] cursor-pointer"
                style={{ left: node.x, top: node.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="relative w-full h-full rounded-2xl p-4 backdrop-blur-sm border-2 transition-all duration-300"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: node.color,
                    boxShadow: node.pulse 
                      ? `0 0 30px ${node.color}80, 0 0 60px ${node.color}40` 
                      : `0 0 10px ${node.color}40`
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  {/* Enhanced pulse animation */}
                  {node.pulse && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: node.color }}
                      initial={{ opacity: 0.3, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <motion.div 
                      className="text-white mb-2"
                      animate={selectedNode === node.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {node.icon}
                    </motion.div>
                    
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {node.title}
                    </h3>

                    {/* Category badge */}
                    <div className="text-xs px-2 py-1 rounded-full text-white/80 mb-2" style={{ backgroundColor: `${node.color}40` }}>
                      {node.category}
                    </div>

                    {/* Content tooltip */}
                    <AnimatePresence>
                      {selectedNode === node.id && (
                        <motion.div
                          className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/90 backdrop-blur-sm rounded-lg text-white text-xs z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative">
                            {node.content}
                            <div 
                              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"
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
                        style={{ backgroundColor: node.color }}
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
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Enhanced Desktop floating action buttons */}
          <motion.div 
            className="absolute bottom-8 right-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              className="w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </>
      )}

      {/* Enhanced Interactive instructions */}
      <motion.div 
        className="absolute bottom-8 left-8 text-white/60 text-sm hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p>💡 Click nodes to explore • Watch the neural network pulse!</p>
        <p className="text-xs mt-1">🧠 Each connection represents a skill relationship</p>
        <p className="text-xs mt-1">⚡ Network activity: {networkActivity}%</p>
      </motion.div>

      {/* Enhanced Network status */}
      <motion.div 
        className="absolute top-8 right-8 flex items-center gap-2 text-white/80 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-sm">Neural Network Active</span>
      </motion.div>
    </div>
  );
}
