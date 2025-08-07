# 🧠 Neural Portfolio

A **revolutionary portfolio template** that behaves like a living neural network. This is the world's first neural network-inspired portfolio where each section is a node that connects to others, creating a dynamic, interactive experience that simulates brain activity.

![Neural Portfolio Demo](https://devmubarak.vercel.app/)

## ✨ **What Makes This Unique**

- **🧠 Living Neural Network**: Each section is a neural node with dynamic connections
- **⚡ Brain-Inspired Interactions**: Click nodes to activate connected pathways
- **🎨 Advanced Animations**: Pulsing nodes, flowing particles, brain wave patterns
- **📱 Mobile Responsive**: Adaptive layout for all devices
- **🎯 Interactive Elements**: Draggable nodes, hover effects, real-time animations
- **🌈 Neural Color Scheme**: Purple gradients with neural activity indicators

## 🚀 **Live Demo**

Visit the live portfolio: **[https://devmubarak.vercel.app/](https://devmubarak.vercel.app/)**

## 🛠️ **Tech Stack**

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons
- **React RND** - Draggable components

## 📦 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/neural-portfolio.git
   cd neural-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 **Customization**

### **Personal Information**

Edit `src/app/page.tsx` to customize your content:

```typescript
const [nodes, setNodes] = useState<NodeData[]>([
  {
    id: 'about',
    title: 'About Me',
    content: 'Your personal description here...',
    icon: <Brain className="w-6 h-6" />,
    x: 50,
    y: 50,
    connections: ['skills', 'experience', 'vision'],
    color: '#FF6B6B',
    pulse: true,
    strength: 0.9
  },
  // Add more nodes...
]);
```

### **Color Scheme**

Customize the neural color palette in `src/app/globals.css`:

```css
.gradient-text {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4);
  /* Your custom colors here */
}
```

### **Node Positioning**

Adjust node positions by modifying the `x` and `y` coordinates:

```typescript
{
  id: 'skills',
  x: 300, // Horizontal position
  y: 100, // Vertical position
  // ... other properties
}
```

### **Social Links**

Update your social media links in the floating action buttons:

```typescript
<motion.a
  href="https://github.com/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
>
  <Github className="w-6 h-6" />
</motion.a>
```

## 📱 **Mobile Layout**

The portfolio automatically adapts to mobile devices:

- **Responsive Design**: Optimized for all screen sizes
- **Touch-Friendly**: Large touch targets for mobile interaction
- **Simplified Layout**: Stacked nodes for better mobile UX
- **Performance Optimized**: Reduced animations on mobile

## 🧠 **Neural Network Features**

### **Node Types**
- **About Me**: Your personal introduction
- **Skills**: Technical expertise and tools
- **Experience**: Work history and achievements
- **Projects**: Portfolio of work
- **Contact**: How to reach you
- **Vision**: Your goals and aspirations

### **Interactive Elements**
- **Click Nodes**: Expand to see detailed content
- **Neural Connections**: Visual representation of skill relationships
- **Pulsing Animation**: Simulates neural activity
- **Brain Waves**: Dynamic background effects
- **Particle System**: Floating neural particles

## 🎯 **Usage Examples**

### **For Developers**
```typescript
// Add a new skill node
{
  id: 'ai-ml',
  title: 'AI/ML',
  content: 'Machine learning, deep learning, neural networks...',
  icon: <Cpu className="w-6 h-6" />,
  x: 600,
  y: 200,
  connections: ['skills', 'projects'],
  color: '#FF6B6B',
  pulse: false,
  strength: 0.85
}
```

### **For Designers**
```typescript
// Customize node colors
const nodeColors = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  accent: '#45B7D1',
  highlight: '#96CEB4'
};
```

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Netlify**
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### **Other Platforms**
The portfolio works on any platform that supports Next.js.

## 🔧 **Development**

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### **Project Structure**
```
src/
├── app/
│   ├── page.tsx          # Main portfolio component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── NeuralNode.tsx    # Individual node component
│   └── NeuralConnection.tsx # Connection component
```

## 🎨 **Customization Guide**

### **Adding New Nodes**
1. Define the node data in the `nodes` array
2. Add connections to other nodes
3. Choose an appropriate icon from Lucide React
4. Set the position and color

### **Modifying Animations**
1. Edit `src/app/globals.css` for CSS animations
2. Modify Framer Motion animations in components
3. Adjust timing and easing functions

### **Changing Colors**
1. Update the color scheme in `globals.css`
2. Modify node colors in the data
3. Adjust gradient effects

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Framer Motion** for amazing animations
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework

## 📞 **Support**

If you have questions or need help:
- Open an issue on GitHub
- Contact: [your-email@example.com](mailto:your-email@example.com)
- Portfolio: [https://devmubarak.vercel.app/](https://devmubarak.vercel.app/)

---

**Made with 🧠 by [Your Name]**

*This is the world's first neural network portfolio template - be the first to use it!*
