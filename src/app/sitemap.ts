import { MetadataRoute } from "next";

const BASE_URL = "https://mubarakraji.me";

const articleSlugs = [
  "kafka-golang-microservices",
  "idempotent-erpnext-frappe-checkouts",
  "browser-canvas-shape-cropping",
  "paybypalm-contactless-biometrics",
  "mechmind-edge-ai-diagnostics",
  "interactive-digital-logic-simulator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
