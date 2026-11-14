export type ProjectCategory = "all" | "hardware" | "enterprise" | "tools";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  title: string;
  tags: string[];
  description: string;
  highlight: string;
  link?: string;
  repo?: string;
  badge: string;
  video?: string;
  image?: string;
  model3d?: string;
  mockup: {
    title: string;
    subtitle: string;
    type: "video" | "image" | "terminal" | "cards" | "circuit" | "hardware" | "finance";
    metrics: { label: string; val: string }[];
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "paybypalm",
    category: "hardware",
    title: "PayByPalm (Biometric Palm-Vein Terminal)",
    tags: ["IoT Hardware", "Near-Infrared", "Computer Vision", "Python", "FinTech"],
    description:
      "Contactless biometric payment terminal capturing subcutaneous vascular vein maps via 850nm near-infrared illumination. Tokenizes vein patterns into non-invertible biometric hashes for instant retail checkout without cards or phones.",
    highlight: "Top 5 National Finalist at Wema Bank Hackaholics 7.0 (November 2026).",
    link: "https://paybypalm.app",
    badge: "Wema Bank Top 5",
    video: "/projects/paybypalm.mp4",
    mockup: {
      title: "PayByPalm NIR Terminal",
      subtitle: "Edge Palm-Vein Scanner v2.1",
      type: "video",
      metrics: [
        { label: "Scan Time", val: "240ms" },
        { label: "FAR / FRR", val: "<0.0001%" },
        { label: "Encryption", val: "AES-256 Vault" },
      ],
    },
  },
  {
    id: "pullup",
    category: "enterprise",
    title: "PullUp (Event Discovery & Ticketing)",
    tags: ["Next.js", "TypeScript", "Supabase", "Paystack", "QR Verification"],
    description:
      "Live event discovery, ticketing, and attendee verification platform in Nigeria. Solo-engineered with native digital wallet architecture, automated organizer revenue splitting, instant offline QR ticket validation, and real-time sales telemetry.",
    highlight: "High-concurrency event ticketing platform live in production at pullup.ng.",
    link: "https://pullup.ng",
    badge: "Live Platform",
    video: "/projects/pullupwebsite.mp4",
    mockup: {
      title: "PullUp Event Ticketing Engine",
      subtitle: "pullup.ng Production Cluster",
      type: "terminal",
      metrics: [
        { label: "Verification", val: "Instant QR" },
        { label: "Payouts", val: "Automated Split" },
        { label: "Uptime", val: "99.9%" },
      ],
    },
  },
  {
    id: "vital-vida",
    category: "enterprise",
    title: "Vital Vida (Fulani Hair Secrets ERP)",
    tags: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "REST API", "Docker"],
    description:
      "Enterprise ERP backend and nationwide distribution infrastructure for a direct-to-consumer brand. Engineered idempotent checkout APIs, multi-warehouse inventory allocation, and strict payment webhook verification for high-volume customer orders.",
    highlight: "Processed thousands of checkout transactions with zero duplicate payments or inventory mismatches.",
    link: "https://fulanihairsecrets.com/",
    badge: "Enterprise Production",
    mockup: {
      title: "Vital Vida ERP Core",
      subtitle: "Frappe MariaDB Cluster",
      type: "terminal",
      metrics: [
        { label: "Latency", val: "14ms avg" },
        { label: "Idempotency", val: "100% Strict" },
        { label: "Warehouses", val: "Distributed Multi-Zone" },
      ],
    },
  },
  {
    id: "circuit-weaver",
    category: "tools",
    title: "Circuit Weaver (Digital Logic Lab)",
    tags: ["Next.js", "TypeScript", "Digital Logic", "Canvas API", "Interactive"],
    description:
      "A learning-focused digital logic puzzle laboratory. Build real circuits with logic gates (AND, OR, NOT, XOR, NAND), resolve complex wiring nets, and visualize real-time signal propagation through topological graph analysis.",
    highlight: "Interactive in-browser simulation with cycle detection and custom canvas wire rendering.",
    link: "https://circuitweaver.mubarakraji.me/",
    badge: "Interactive Lab",
    video: "/projects/circuitweaverwebsite.mp4",
    mockup: {
      title: "Circuit Weaver Engine",
      subtitle: "Topological Logic Evaluator",
      type: "video",
      metrics: [
        { label: "Active Gates", val: "4 Placed" },
        { label: "Propagation", val: "Real-time" },
        { label: "Graph Cycles", val: "Auto-detected" },
      ],
    },
  },
  {
    id: "anyshape",
    category: "tools",
    title: "AnyShape (Client-Side Vector Cropper)",
    tags: ["Canvas API", "TypeScript", "Next.js", "SVG Clipping", "Privacy-First"],
    description:
      "Crop photos into 16+ geometric presets or custom SVG polygons. Engineered with 100% in-browser Canvas 2D composite operations with zero server latency and total user data privacy.",
    highlight: "Zero cloud compute cost with instant full-resolution client-side export.",
    link: "https://anyshape.mubarakraji.me/",
    badge: "Privacy-First",
    video: "/projects/anyshapewebsite.mp4",
    mockup: {
      title: "AnyShape Canvas Studio",
      subtitle: "In-Memory Image Compositor",
      type: "video",
      metrics: [
        { label: "Presets", val: "16+ Shapes" },
        { label: "Processing", val: "100% Client-Side" },
        { label: "Server Cost", val: "$0.00 / mo" },
      ],
    },
  },
  {
    id: "topzycut",
    category: "enterprise",
    title: "TopzyCut Hair Studio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "PostgreSQL"],
    description:
      "High-end hair studio and grooming booking platform with dynamic scheduling, stylist slot allocation, responsive booking workflows, and automated client SMS/Email reminders.",
    highlight: "Streamlined appointment booking workflow with real-time calendar synchronization.",
    link: "https://topzyhaircutstudio.com",
    badge: "Client Production",
    video: "/projects/topzywebsite.mp4",
    mockup: {
      title: "TopzyCut Booking Engine",
      subtitle: "Calendar & Schedule Sync",
      type: "video",
      metrics: [
        { label: "Slots Sync", val: "Real-time" },
        { label: "Stylists", val: "Multi-chair" },
        { label: "Uptime", val: "99.9%" },
      ],
    },
  },
  {
    id: "foodify",
    category: "tools",
    title: "Foodify (Culinary AI Assistant)",
    tags: ["AI Assistant", "React Native", "Supabase", "OpenAI API", "Smart Pantry"],
    description:
      "AI-powered culinary companion with intelligent recipe generation, smart pantry tracking, and grocery list planning powered by multimodal LLM vision.",
    highlight: "Next-generation kitchen companion with smart ingredient optimization.",
    link: "https://foodify.mubarakraji.me/",
    badge: "AI Product",
    video: "/projects/foodifywebsite.mp4",
    mockup: {
      title: "Foodify AI Studio",
      subtitle: "foodify.mubarakraji.me",
      type: "video",
      metrics: [
        { label: "Model", val: "Multimodal AI" },
        { label: "Pantry Sync", val: "Real-time" },
        { label: "Export", val: "One-Click" },
      ],
    },
  },
  {
    id: "rateradar",
    category: "tools",
    title: "RateRadar (Chrome Extension)",
    tags: ["Chrome Extension", "Manifest V3", "TypeScript", "WebSocket", "Currency Alerts"],
    description:
      "Real-time currency exchange rates and cryptocurrency market volatility tracker. Monitors live rate movements with configurable price threshold alerts, background alarms, and instant status updates.",
    highlight: "Manifest V3 extension with real-time rate telemetry and background alarms.",
    link: "https://rateradar.mubarakraji.me",
    repo: "https://github.com/DevMubarak1/RateRadar-Extension",
    badge: "Chrome Extension",
    video: "/projects/rateradarwebsite.mp4",
    mockup: {
      title: "RateRadar Extension Telemetry",
      subtitle: "Chrome Manifest V3",
      type: "video",
      metrics: [
        { label: "Latency", val: "<100ms" },
        { label: "Alarms", val: "Active" },
        { label: "Precision", val: "4 Decimals" },
      ],
    },
  },
  {
    id: "devtriage",
    category: "tools",
    title: "DevTriage (Terminal Bug Diagnostics CLI)",
    tags: ["Python CLI", "Bug Triage", "Terminal Hooks", "GitHub API", "Open Source"],
    description:
      "A developer CLI tool that captures failing shell commands, parses terminal error traces, and formats them into structured, actionable GitHub bug reports complete with environment context.",
    highlight: "Open-source Python CLI streamlining terminal error diagnostics into structured issues.",
    repo: "https://github.com/DevMubarak1/DevTriage",
    badge: "Open Source CLI",
    mockup: {
      title: "DevTriage Terminal Engine",
      subtitle: "CLI Error Parser v1.4",
      type: "terminal",
      metrics: [
        { label: "Capture", val: "Stderr Hook" },
        { label: "Formatting", val: "GitHub Markdown" },
        { label: "CLI Core", val: "Python 3" },
      ],
    },
  },
  {
    id: "substation-hardware",
    category: "hardware",
    title: "Smart Puck (Optical Meter Token Loader)",
    tags: ["IoT Hardware", "Gurux DLMS", "Optical Port", "ESP32", "Embedded C"],
    description:
      "We've all been there: buying a prepaid token, then punching in 20 digits hoping you don't miss digit 17. It's time to retire the keypad. The Smart Puck automates this entire process — most meters in Nigeria have an optical port sitting idle. Using the Gurux library, we transfer tokens directly through that interface. No new meter needed — just snap the Puck on, and the token uploads automatically. Seamless, no-typing experience.",
    highlight: "1st Place Grand Champion at Vibranium Valley × PowerTech Grand Challenge.",
    badge: "1st Place Winner",
    image: "/projects/metreprojectimage.png",
    mockup: {
      title: "Substation Thermal Node",
      subtitle: "Edge Telemetry v1.0",
      type: "image",
      metrics: [
        { label: "Sensors", val: "Thermal + Acoustic" },
        { label: "Sampling", val: "1000 Hz" },
        { label: "Grid Status", val: "Normal" },
      ],
    },
  },
  {
    id: "mechmind",
    category: "hardware",
    title: "MechMind AI (Predictive Maintenance IoT)",
    tags: ["Edge AI", "IoT Telemetry", "Acoustic FFT", "ESP32", "Open Source"],
    description:
      "Industrial equipment fault diagnostic engine. Combines triaxial vibration accelerometers and acoustic sensor nodes at the edge with multimodal LLM diagnostic reports to predict motor, pump, and bearing failure weeks in advance.",
    highlight: "Winner of MLH Hacktoberfest Hack Day — Best Open-Source AI Project.",
    link: "https://mechmind.mubarakraji.me/",
    repo: "https://github.com/DevMubarak1/MechMind",
    badge: "MLH Global Winner",
    model3d: "/projects/mechmind3d.glb",
    mockup: {
      title: "MechMind Diagnostic Node",
      subtitle: "FFT Harmonic Spectrum",
      type: "terminal",
      metrics: [
        { label: "Vibration", val: "2.4 mm/s RMS" },
        { label: "Harmonics", val: "124.6 Hz Peak" },
        { label: "Status", val: "Early Bearing Wear" },
      ],
    },
  },
  {
    id: "alayn",
    category: "hardware",
    title: "Alayn (Supermarket Anti-Theft System)",
    tags: ["IoT Hardware", "RFID/NFC", "ESP32", "Embedded C", "Alert System"],
    description:
      "An intelligent anti-theft detection system designed for retail environments. Uses RFID/NFC tag scanning at exit checkpoints to detect unpaid merchandise, triggering real-time alerts with LCD status display and audible alarms. Built with embedded microcontrollers for low-cost, high-reliability retail security.",
    highlight: "End-to-end hardware prototype — from PCB design through enclosure fabrication to working demo.",
    badge: "Hardware Prototype",
    video: "/projects/alayninactionproject.mp4",
    image: "/projects/alayn-device.jpg",
    mockup: {
      title: "Alayn Security Node",
      subtitle: "RFID Checkpoint Scanner",
      type: "hardware",
      metrics: [
        { label: "Detection", val: "RFID/NFC" },
        { label: "Response", val: "<200ms" },
        { label: "Alert", val: "LCD + Buzzer" },
      ],
    },
  },
];
