import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Send,
  Award,
  Heart,
} from "lucide-react";

/* ═══════════════════════════════════════════
   NAVIGATION & SOCIAL
   ═══════════════════════════════════════════ */

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Articles", href: "#articles" },
  { label: "Contacts", href: "#contacts" },
];

export const SOCIAL_PILLS = [
  { label: "Github", href: "https://github.com/DevMubarak1", icon: Github },
  { label: "Linkedin", href: "https://linkedin.com/in/rajimubarak123", icon: Linkedin },
  { label: "E-mail", href: "mailto:rmbabatunde123@gmail.com", icon: Mail },
  { label: "Telegram", href: "https://t.me/DevMubarak", icon: Send },
  { label: "X / Twitter", href: "https://x.com/theDevMubarak", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/dev.mubarak/", icon: Instagram },
];

export const FOOTER_PILLS = [
  { label: "Github", href: "https://github.com/DevMubarak1", icon: Github },
  { label: "in Linkedin", href: "https://linkedin.com/in/rajimubarak123", icon: Linkedin },
  { label: "E-mail", href: "mailto:rmbabatunde123@gmail.com", icon: Mail },
  { label: "Telegram", href: "https://t.me/DevMubarak", icon: Send },
  { label: "X / Twitter", href: "https://x.com/theDevMubarak", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/dev.mubarak/", icon: Instagram },
];

/* ═══════════════════════════════════════════
   ACHIEVEMENTS
   ═══════════════════════════════════════════ */

export const ACHIEVEMENTS = [
  {
    title: "Wema Bank Hackaholics 7.0 — Top 5 National Finalist",
    date: "November 2026",
    issuer: "Wema Bank / ALAT ('Festival of the Future')",
    project: "PayByPalm (Contactless Palm-Vein Biometrics)",
    description:
      "Selected as one of the Top 5 national finalists out of thousands of engineering teams across Nigeria. Designed and pitched the near-infrared vascular biometric hardware terminal and tokenized settlement API before bank executives.",
    badge: "National Finalist",
    icon: Award,
  },
  {
    title: "Vibranium Valley × PowerTech Challenge — 1st Place Grand Champion",
    date: "October 2026",
    issuer: "Vibranium Valley & PowerTech Consortium",
    project: "Substation Transformer Thermal Telemetry (IoT)",
    description:
      "Won 1st Place overall for engineering a non-invasive IoT edge node capturing transformer core temperature, oil levels, and acoustic telemetry to prevent electrical grid blowout events.",
    badge: "1st Place Winner",
    icon: Award,
  },
  {
    title: "MLH Hacktoberfest Hack Day — Best Open-Source AI Project",
    date: "October 2026",
    issuer: "Major League Hacking (MLH) × DEV Community",
    project: "MechMind AI (Predictive Equipment Diagnostics)",
    description:
      "Awarded Best Open-Source AI Project globally for building an intelligent industrial monitoring engine that converts triaxial vibration harmonics and acoustic FFT into actionable repair instructions using multimodal AI.",
    badge: "Global Winner",
    icon: Award,
  },
  {
    title: "Head of Digital Infrastructure & Web Systems",
    date: "2026 — Present",
    issuer: "Network of Engineering Xcellence (NEX), LASU",
    project: "Institutional Web & Tech Platforms",
    description:
      "Appointed to direct digital architecture, web systems, and technical mentorship for high-performing engineering students across faculty departments.",
    badge: "Leadership",
    icon: Award,
  },
];

/* ═══════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════ */

export const SKILLS = [
  {
    category: "Front-end",
    items: "TypeScript / React / Vue / Vuex / Redux Toolkit / NextJs / Nuxt / Jest / GraphQL / React Native / Puppeteer / Tailwind CSS",
    icon: "eye" as const,
  },
  {
    category: "Styles",
    items: "SCSS / SASS / PostCSS / Tailwind CSS / Ant.d / MUI / Material UI",
    icon: "eye" as const,
  },
  {
    category: "Back-end",
    items: "Python / Node.js / FastAPI / PostgreSQL / MySQL / MongoDB / Redis / Kafka / REST API / ERPNext / Frappe / Microservices",
    icon: "settings" as const,
  },
  {
    category: "DevOps & Hardware",
    items: "Nginx / Docker / (CI/CD) / k8s / Bash / Vercel / GitHub Actions / Linux / Raspberry Pi / ESP32 / LoRaWAN",
    icon: "settings" as const,
  },
  {
    category: "Civil Engineering",
    items: "AutoCAD (2D/3D) / Structural Analysis / RC Design (BS 8110) / Surveying / Concrete QA/QC / Storm Drainage / Site Supervision / Excel (Pivot Tables)",
    icon: "settings" as const,
  },
];

/* ═══════════════════════════════════════════
   WORK EXPERIENCE
   ═══════════════════════════════════════════ */

export const WORK_EXPERIENCE = [
  {
    period: "2026",
    duration: "6 months",
    company: "Kenol Electromechanical",
    role: "Site Engineering Intern",
    tech: "BS 8110 & Infrastructure",
    description:
      "Completed 9-week site engineering internship at Alaro City Free Trade Zone (Kenol FZE / Daratise Service Ltd). Operated CST/berger automatic optical leveling instruments for storm drainage slopes (1:200 fall). Conducted reinforced concrete QC per BS 8110 — verified T12/T10 rebar spacing (150mm c/c), lap lengths (≥480mm), and 50mm cover blocks. Supervised deep trench excavation with dewatering in high coastal water table. Verified structural clearances for EOT Gantry Crane runway beams against AutoCAD drawings.",
  },
  {
    period: "2025 - 2026",
    duration: "1 year",
    company: "Vital Vida (Fulani Hair Secrets)",
    role: "Backend & ERP Systems Engineer",
    tech: "ERPNext, Frappe & Idempotency",
    isHighlight: true,
    description:
      "Engineered the entire backend infrastructure on ERPNext/Frappe — idempotent checkout APIs, multi-warehouse inventory allocation, Paystack webhook verification, and automated order fulfillment pipelines. Processed thousands of transactions with zero duplicate payments or inventory mismatches across nationwide distribution.",
  },
  {
    period: "2025 -",
    duration: "Present",
    company: "PullUp Technologies (pullup.ng)",
    role: "Founder & Lead Systems Engineer",
    tech: "Next.js, Supabase & Paystack",
    description:
      "Solo-founded and engineered a live event discovery, ticketing, and QR verification platform. Built digital wallet architecture, automated organizer revenue splitting, instant offline ticket validation, and real-time sales telemetry dashboards. Currently serving events across Nigeria.",
  },
  {
    period: "2024 -",
    duration: "Present (Freelance)",
    company: "Eleven Solutions",
    role: "Full Stack Developer",
    tech: "Next.js, TopzyCut Studio & APIs",
    description:
      "Freelance full-stack development — built and maintained client projects including TopzyCut Hair Studio (booking platform with dynamic scheduling, stylist allocation, and SMS/Email reminders) and various business-facing web applications with payment integrations and admin dashboards.",
  },
  {
    period: "2023 - 2024",
    duration: "1 year",
    company: "Independent & Client Projects",
    role: "AI & Systems Engineer",
    tech: "Edge AI, OpenCV & IoT Nodes",
    description:
      "Built custom computer vision and IoT solutions for clients — including real-time object detection pipelines, sensor data aggregation nodes, and embedded edge AI prototypes using ESP32 microcontrollers, OpenCV, and TensorFlow Lite.",
  },
  {
    period: "2021 -",
    duration: "Present",
    company: "Open Source & NEX LASU",
    role: "Head of Digital Infrastructure & Web Systems",
    tech: "Python, JavaScript & Digital Labs",
    description:
      "Appointed Head of Digital Infrastructure & Web Systems for the Network of Engineering Xcellence (NEX) at Lagos State University. Directing web platform architecture, technical mentorship programs, and digital systems for high-performing engineering students. Active open source contributor across multiple repositories.",
  },
];
