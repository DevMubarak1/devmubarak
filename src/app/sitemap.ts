how it looks like:
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devmubarak.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://devmubarak.me/about', 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devmubarak.me/projects', 
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
        url: 'https://devmubarak.me/toolbox',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://devmubarak.me/blog',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
  ];
}
