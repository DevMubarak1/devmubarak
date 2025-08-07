'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  Brain, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Zap,
  Sparkles,
  Cpu,
  Network,
  Activity,
  Target,
  Lightbulb
} from 'lucide-react';

// Dynamic imports to prevent SSR issues
const NeuralNode = dynamic(() => import('@/components/NeuralNode'), { ssr: false });
const NeuralConnection = dynamic(() => import('@/components/NeuralConnection'), { ssr: false });

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
      strength: 0.9
    },
    {
      id: 'skills',
      title: 'Skills',
      content: 'React, Next.js, TypeScript, Node.js, Python, AI/ML, Cloud Architecture, DevOps, Blockchain, Real-time Systems, Microservices',
      icon: <Code className="w-6 h-6" />,
      x: 300,
      y: 100,
      connections: ['about', 'projects', 'experience'],
      color: '#4ECDC4',
      pulse: false,
      strength: 0.8
    },
    {
      id: 'experience',
      title: 'Experience',
      content: '5+ years building scalable applications, leading development teams, and delivering impactful solutions for Fortune 500 companies and startups.',
      icon: <Briefcase className="w-6 h-6" />,
      x: 150,
      y: 300,
      connections: ['about', 'contact', 'skills'],
      color: '#45B7D1',
      pulse: false,
      strength: 0.85
    },
    {
      id: 'projects',
      title: 'Projects',
      content: 'AI-powered applications, blockchain solutions, real-time systems, innovative web platforms, and cutting-edge technology implementations.',
      icon: <Zap className="w-6 h-6" />,
      x: 450,
      y: 250,
      connections: ['skills', 'contact', 'vision'],
      color: '#96CEB4',
      pulse: false,
      strength: 0.75
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
      strength: 0.7
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
      strength: 0.9
    }
  ]);

  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [connections, setConnections] = useState<{ from: string; to: string; strength: number }[]>([]);
  const [brainWaves, setBrainWaves] = useState<Array<{ id: number; x: number; y: number; amplitude: number }>>([]);
  const [isNetworkActive, setIsNetworkActive] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Set window dimensions on client side
    if (typeof window !== 'undefined') {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });

      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // Generate connections based on node data
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

    // Animate pulse effect with brain-like patterns
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        pulse: Math.random() > 0.6 && node.strength > 0.8
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [nodes]);

  useEffect(() => {
    // Generate brain wave patterns
    const waveInterval = setInterval(() => {
      if (typeof window !== 'undefined') {
        setBrainWaves(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * windowDimensions.width,
            y: Math.random() * windowDimensions.height,
            amplitude: Math.random() * 100 + 50
          }
        ]);
      }
    }, 500);

    return () => clearInterval(waveInterval);
  }, [windowDimensions]);

  useEffect(() => {
    // Clean up brain waves
    const cleanupInterval = setInterval(() => {
      setBrainWaves(prev => prev.filter(wave => Date.now() - wave.id < 3000));
    }, 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
    
    // Activate connected nodes
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

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-4"
          >
            <Network className="w-12 h-12 text-purple-400 mx-auto" />
          </motion.div>
          <h1 className="text-2xl font-bold mb-2">Neural Portfolio</h1>
          <p className="text-purple-200">Loading neural network...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, windowDimensions.width],
              y: [0, windowDimensions.height],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * windowDimensions.width,
              top: Math.random() * windowDimensions.height,
            }}
          />
        ))}
      </div>

      {/* Brain wave patterns */}
      <div className="absolute inset-0">
        {brainWaves.map(wave => (
          <motion.div
            key={wave.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: wave.x,
              top: wave.y,
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: [0, wave.amplitude / 10, 0],
              opacity: [0.8, 0.3, 0]
            }}
            transition={{ duration: 3 }}
          />
        ))}
      </div>

      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const from = getNodePosition(connection.from);
          const to = getNodePosition(connection.to);
          
          return (
            <NeuralConnection
              key={index}
              from={from}
              to={to}
              color={`hsl(${200 + connection.strength * 60}, 70%, 60%)`}
              index={index}
              isActive={isNetworkActive}
            />
          );
        })}
      </svg>

      {/* Header with neural activity */}
      <motion.div 
        className="absolute top-8 left-8 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Network className="w-8 h-8 text-purple-400" />
          </motion.div>
          <div>
            <h1 className="text-4xl font-bold text-white gradient-text">
              Neural Portfolio
            </h1>
            <p className="text-purple-200 text-lg">Interactive • Dynamic • Connected</p>
          </div>
        </div>
        
        {/* Neural activity indicator */}
        <div className="flex gap-1 mt-2">
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
      </motion.div>

      {/* Neural Nodes */}
      <AnimatePresence>
        {nodes.map((node) => (
          <NeuralNode
            key={node.id}
            id={node.id}
            title={node.title}
            content={node.content}
            icon={node.icon}
            color={node.color}
            pulse={node.pulse}
            isSelected={selectedNode === node.id}
            onSelect={handleNodeClick}
            position={{ x: node.x, y: node.y }}
          />
        ))}
      </AnimatePresence>

      {/* Floating action buttons */}
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
          className="w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="mailto:contact@example.com"
          className="w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Interactive instructions */}
      <motion.div 
        className="absolute bottom-8 left-8 text-white/60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p>💡 Click nodes to explore • Drag to reposition • Watch the neural network pulse!</p>
        <p className="text-xs mt-1">🧠 Each connection represents a skill relationship</p>
      </motion.div>

      {/* Network status */}
      <motion.div 
        className="absolute top-8 right-8 flex items-center gap-2 text-white/80"
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
