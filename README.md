# DevMubarak Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases professional work experience, skills, projects, and services with beautiful animations and a clean design.

## ✨ Features

### 🎨 **Design & UX**
- **Modern Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations throughout
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 📱 **Sections**
- **Hero Section**: Eye-catching introduction with animated background patterns
- **Work Experience**: Detailed timeline of professional experience with achievements
- **Skills Section**: Organized by categories (Frontend, Backend, AI & APIs, Tools)
- **Statistics**: Animated counters showing key metrics and achievements
- **Services**: Comprehensive service offerings with detailed descriptions
- **Projects**: Showcase of 6 featured projects with tech stacks and live links
- **Testimonials**: Client feedback and recommendations
- **Blog Section**: Coming soon section for future content
- **Contact**: Animated contact section with social links

### 🚀 **Technical Features**
- **Scroll Progress**: Visual progress indicator at the top
- **Back to Top**: Smooth scroll button with animations
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **404 Page**: Custom error page with animations
- **Loading States**: Smooth loading transitions
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **PWA Ready**: Web app manifest for mobile installation

### 🎯 **Performance**
- **Fast Loading**: Optimized images and code splitting
- **Smooth Scrolling**: Hardware-accelerated animations
- **Mobile Optimized**: Touch-friendly interactions
- **Cross-browser**: Compatible with all modern browsers

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devmubarak-portfolio.git
   cd devmubarak-portfolio
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

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### `src/data/portfolio.ts`
- **Projects**: Replace with your own projects
- **Skills**: Update your technical skills
- **Work Experience**: Add your professional experience
- **Testimonials**: Include client feedback

#### `src/app/layout.tsx`
- **Metadata**: Update title, description, and SEO tags
- **Social Links**: Update Open Graph and Twitter meta tags

#### `src/components/ContactSection.tsx`
- **Email**: Change to your email address
- **Social Links**: Update GitHub, LinkedIn, and X (Twitter) URLs

### Styling

#### Colors & Themes
- **Primary Colors**: Update gradient colors in components
- **Dark Mode**: Customize dark theme colors in `tailwind.config.js`
- **Brand Colors**: Modify color schemes throughout the site

#### Animations
- **Framer Motion**: Adjust animation durations and easing in components
- **Scroll Animations**: Modify `whileInView` triggers and delays
- **Hover Effects**: Customize interactive animations

### Content

#### Projects Section
Add your projects to `src/data/portfolio.ts`:
```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Next.js", "React", "TypeScript"],
  image: "/project-image.jpg",
  link: "https://project-url.com",
  role: "Your Role"
}
```

#### Skills Section
Organize skills by categories:
```typescript
const skillCategories = [
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript"]
  }
  // Add more categories
];
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── loading.tsx         # Loading component
│   ├── not-found.tsx       # 404 error page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── StatsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ThemeToggle.tsx
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   ├── BackgroundElements.tsx
│   └── XIcon.tsx
└── data/
    └── portfolio.ts        # Portfolio data
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **AWS Amplify**: Full-stack deployment

## 📊 Performance Optimization

### Images
- Use Next.js Image component for optimization
- Compress images before adding to `/public`
- Use WebP format when possible

### Code Splitting
- Components are automatically code-split
- Lazy load non-critical components
- Optimize bundle size with dynamic imports

### SEO
- Update meta tags in `layout.tsx`
- Add structured data for better search results
- Optimize for Core Web Vitals

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Next.js** for the amazing framework

## 📞 Support

For questions or support, reach out at:
- **Email**: devmubarak@getfoodify.com
- **Portfolio**: [https://devmubarak.vercel.app](https://devmubarak.vercel.app)

---

Built with ❤️ by DevMubarak
