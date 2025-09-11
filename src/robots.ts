// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/login', '/profile', '/form'] },
    ],
    sitemap: 'https://viteach.in/sitemap.xml',
  };
}
