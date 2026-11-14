# Mubarak Raji — Developer & Civil Engineer

A monochrome portfolio showcasing my work as a **full-stack developer** and **civil engineering** undergraduate.

> **Live** → [mubarakraji.me](https://mubarakraji.me)

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Fira Code · Open Sans |
| Hosting | Vercel |

## Features

- **Dual identity hero** — Developer (fullstack) + Engineer (civil) with role labels
- **Project showcase** — scroll-triggered video autoplay, 3D model embeds, and custom visual mockups
- **Article pages** — individual routes with an auto-advancing carousel on the home page
- **Work experience** — expandable cards with role details
- **About section** — auto-switching photos with crossfade between developer and engineer portraits
- **Social pills** — email, LinkedIn, GitHub, Telegram links
- **Responsive** — mobile-first layout with adaptive navigation
- **SEO** — sitemap, Open Graph meta, favicons at every size

## Projects Featured

| Project | Description |
|---------|-------------|
| **RateRadar** | Real-time currency exchange rate tracker |
| **MechMind** | Interactive 3D mechanical engineering model viewer |
| **PullUp** | Campus event discovery and ticketing platform |
| **Alayn** | Anti-theft IoT device with real-time tracking |
| **DevTriage** | CLI tool that captures terminal errors and formats them as GitHub issues |
| **Vital Vida** | Custom ERP dashboard for healthcare operations |

## Getting Started

```bash
# Clone
git clone https://github.com/DevMubarak1/devmubarak.git
cd devmubarak

# Install
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   ├── globals.css           # Custom animations & utilities
│   └── articles/[slug]/      # Individual article pages
├── components/
│   ├── AnimatedSection.tsx    # Scroll-triggered animation wrapper
│   └── ProjectVideo.tsx      # Autoplay muted video on scroll
├── data/
│   ├── constants.ts          # Nav, social, skills, work experience
│   ├── projects.ts           # Project data & types
│   └── articles.ts           # Article content
└── instrumentation.ts        # Node.js SSR compatibility fix
```

## Design

Monochrome palette — `#121212` `#181818` `#2E2E2E` `#A6A6A6` `#F5F5F5`. Zero colored accents. Typography-driven hierarchy using Fira Code for headings and Open Sans for body text.

## License

MIT

---

Built by [Mubarak Raji](https://github.com/DevMubarak1)
