import { MetadataRoute } from 'next';

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johansutrisno.com';
  
  const routes = [
    '',
    '/about',
    '/work',
    '/projects',
    '/blog',
    '/uses',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
