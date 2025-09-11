import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://viteach.in';
  const staticPaths = [
    '/',
    '/story',
    '/team',
    '/join',
    '/content',
    '/digital-library',
    '/blogs',
    '/viteacher-tales',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  // TODO: Expand with real slugs from filesystem or constants
  return staticPaths;
}
