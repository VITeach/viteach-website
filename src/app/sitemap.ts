import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://viteach-website-ten.vercel.app';
  const now = new Date();

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
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1 : 0.7,
  }));

  // If you maintain slugs in constants, include them here:
  // Example (pseudo):
  // const blogs = blogMeta.map((b) => ({ url: `${base}${b.path}`, lastModified: b.updatedAt }));
  // const vtales = vtalesMeta.map((v) => ({ url: `${base}${v.path}`, lastModified: v.updatedAt }));

  return [...staticPaths /*, ...blogs, ...vtales */];
}
