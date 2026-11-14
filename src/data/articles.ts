export interface Article {
  slug: string;
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  heroImage: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "kafka-golang-microservices",
    id: 1,
    title: "The Simplest Example is Kafka + Golang Microservices",
    excerpt:
      "A high-throughput guide to event-driven microservices: partitions, offset commits, consumer group rebalancing, and dockerized local orchestration.",
    date: "October 2026",
    readTime: "7 min read",
    tags: ["Kafka", "Golang", "Microservices", "Docker"],
    heroImage: "/carousel-1.jpg",
    content: [
      "In modern backend distributed systems, direct synchronous HTTP calls between microservices introduce tight coupling, cascading failures, and latency spikes under bursty traffic. Apache Kafka resolves this by decoupling message producers from consumers via durable, distributed, partitioned commit logs.",
      "When implementing Kafka consumers in Go using Sarama or segmentio/kafka-go, the golden rule is understanding partition assignment and consumer groups. A consumer group ensures each partition in a topic is consumed by exactly one consumer instance in that group.",
      "Here is a standard idempotent consumer pattern in Go: whenever a transaction message arrives on the partition, we verify the message UUID against a fast Redis SETNX cache before applying business state to PostgreSQL. If the lock succeeds, we process the event and commit the offset manually. If the worker crashes midway, the newly rebalanced consumer can safely re-read without duplicate database writes.",
      "By combining Kafka with Docker Compose, you can simulate local multi-broker clusters, test consumer group failure recovery, and ensure your message schemas remain backward-compatible using Protocol Buffers or JSON Schema validation.",
    ],
  },
  {
    slug: "idempotent-erpnext-frappe-checkouts",
    id: 2,
    title: "Building Idempotent Checkout Workflows in Frappe & ERPNext",
    excerpt:
      "Architecting zero-duplicate payment callbacks, distributed locks, and atomic ledger mutations in high-throughput enterprise e-commerce.",
    date: "September 2026",
    readTime: "9 min read",
    tags: ["ERPNext", "Frappe", "Python", "MariaDB"],
    heroImage: "/carousel-2.jpg",
    content: [
      "At Vital Vida (Fulani Hair Secrets ERP), one of our critical engineering challenges was handling high-volume flash sales where thousands of concurrent shoppers check out simultaneously across nationwide distribution centers.",
      "Payment gateways like Paystack and Flutterwave retry webhook delivery multiple times if a temporary network timeout occurs. If your webhook handler does not implement strict idempotency, a single payment can easily trigger duplicate Sales Invoices, double inventory decrements, and conflicting delivery notes.",
      "Our solution was a multi-tiered idempotency gate implemented directly in Python inside our custom Frappe app: First, we compute an HMAC-SHA512 verification of the incoming webhook payload. Second, we acquire a distributed Redis mutex lock using the payment reference as the key with a 15-second TTL.",
      "Third, inside an atomic MariaDB transaction block (`frappe.db.begin()`), we query the Payment Entry doctype. If the reference already exists, we immediately return HTTP 200 OK without mutating stock. If it is new, we atomically post the Sales Invoice, reserve the inventory across local warehouses, and dispatch courier routing tasks.",
    ],
  },
  {
    slug: "browser-canvas-shape-cropping",
    id: 3,
    title: "Designing In-Browser Canvas API Image Cropping with Zero Server Overhead",
    excerpt:
      "How in-memory HTML5 Canvas 2D contexts, SVG clipping paths, and client-side blob rendering enable privacy-first graphics editing with zero backend compute.",
    date: "August 2026",
    readTime: "6 min read",
    tags: ["Canvas API", "TypeScript", "Next.js", "SVG"],
    heroImage: "/carousel-3.jpg",
    content: [
      "When building AnyShape, my guiding architectural principle was 100% privacy: user photos should never touch a server, upload to cloud buckets, or incur serverless compute costs. Every crop, geometric mask, and raster export had to happen in real-time inside the user's browser tab.",
      "The HTML5 Canvas 2D rendering context provides powerful composite operations (`globalCompositeOperation = 'destination-in'`) that allow you to draw arbitrary vector paths — including stars, hearts, hexagons, organic blobs, and SVG paths — and mask source pixels instantly.",
      "To preserve high-resolution photo quality, the canvas coordinate space must account for device pixel ratios (`window.devicePixelRatio`). We render the interactive on-screen preview on a scaled-down canvas for 60fps gesture responsiveness, and then perform the final export on an off-screen full-resolution canvas using `canvas.toBlob()`.",
      "This architecture guarantees that AnyShape can process thousands of high-resolution images daily at zero server cost while keeping user images strictly confidential on their local hardware.",
    ],
  },
  {
    slug: "paybypalm-contactless-biometrics",
    id: 4,
    title: "PayByPalm: Engineering Contactless Palm-Vein Biometrics for FinTech",
    excerpt:
      "Top 5 National Finalist at Wema Bank Hackaholics 7.0: Near-infrared vascular capture, edge vein extraction, and cryptographic tokenized settlement.",
    date: "November 2026",
    readTime: "11 min read",
    tags: ["Biometrics", "IoT", "Computer Vision", "FinTech"],
    heroImage: "/carousel-1.jpg",
    content: [
      "Traditional biometric payment methods like fingerprint scanners require physical surface contact, making them vulnerable to wear, grease, and hygiene concerns in high-traffic retail environments. Facial recognition, meanwhile, struggles with lighting variations, occlusions, and deepfake vulnerabilities.",
      "PayByPalm addresses both challenges by leveraging subcutaneous palm-vein patterns. Hemoglobin in deoxygenated blood absorbs near-infrared (NIR) light at wavelengths between 760nm and 850nm. When an illuminated palm hovers above the NIR sensor, the vein network appears as a high-contrast dark vascular map.",
      "At Wema Bank Hackaholics 7.0 ('Festival of the Future'), our team presented PayByPalm as a Top 5 National Finalist out of thousands of applicants. Our architecture runs edge vein pattern enhancement via Gabor filter banks on an embedded camera module.",
      "The extracted template is hashed using a non-invertible biometric cryptographic vault, generating a one-time token that links to the customer's account for settlement without ever storing raw biometric imagery on centralized servers.",
    ],
  },
  {
    slug: "mechmind-edge-ai-diagnostics",
    id: 5,
    title: "MechMind: Multimodal Edge AI for Industrial Predictive Maintenance",
    excerpt:
      "Winner of MLH Hacktoberfest Hack Day (MLH × DEV): Combining triaxial vibration telemetry, acoustic FFT spectra, and multimodal LLMs for equipment fault prediction.",
    date: "October 2026",
    readTime: "8 min read",
    tags: ["IoT", "Edge AI", "Predictive Maintenance", "Open Source"],
    heroImage: "/carousel-2.jpg",
    content: [
      "In heavy electromechanical infrastructure, mechanical breakdown of conveyor gearboxes, gantry motors, and generator cooling fans is almost always preceded by subtle acoustic and vibration frequency shifts weeks before catastrophic failure.",
      "During our inspection work on site, equipment failures caused costly downtime because maintenance was either purely reactive or based on rigid calendar schedules rather than actual real-time wear and tear.",
      "MechMind AI was developed as an open-source solution that won Best Open-Source AI Project at MLH Hacktoberfest Hack Day. The system collects high-frequency accelerometer and acoustic sensor data at the edge, computes Fast Fourier Transform (FFT) frequency harmonics, and flags bearing wear anomalies.",
      "When anomalous harmonic signatures are detected, MechMind feeds the telemetry telemetry snapshot to an AI diagnostic engine that generates an actionable maintenance brief detailing the likely failing component, urgency level, and recommended repair procedure.",
    ],
  },
  {
    slug: "interactive-digital-logic-simulator",
    id: 6,
    title: "From Gate to Signal: Building an Interactive Digital Logic Lab in React",
    excerpt:
      "Representing circuit state graphs, cycle detection in combinatorial logic, and interactive canvas wire animations in Circuit Weaver.",
    date: "July 2026",
    readTime: "8 min read",
    tags: ["Digital Logic", "Next.js", "TypeScript", "Graph Theory"],
    heroImage: "/carousel-3.jpg",
    content: [
      "Digital logic is the foundational bridge between physics and computation. Yet, many beginner engineers struggle with understanding how simple boolean gates (AND, OR, NOT, XOR, NAND) compose into arithmetic logic units, registers, and sequential state machines.",
      "I built Circuit Weaver to turn abstract logic theory into a gamified, hands-on puzzle laboratory. Users place gates onto an infinite canvas, drag wires between pins, and immediately watch high and low voltage signals propagate dynamically through the circuit.",
      "Under the hood, the circuit is represented as a directed graph where nodes are gate instances and edges are wire nets. To evaluate the circuit safely without infinite browser freezes, the engine performs topological sorting and cycle detection to handle feedback loops and latches.",
      "The rendering engine uses customized Canvas 2D drawing loops with glowing Bezier curves for live wires, rendering high-contrast signals that give immediate visual feedback as logic gates switch states.",
    ],
  },
];

