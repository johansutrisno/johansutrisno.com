import { MetadataRoute } from 'next';

export const dynamic = "force-static";

// Mock function for blog posts as requested
async function getAllPosts() {
  // In a real scenario, this would fetch from a CMS or local markdown files
  return [
    { slug: 'building-high-quality-products', date: '2026-03-01' },
    { slug: 'flutter-vs-react-native-migration', date: '2026-02-15' },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://johansutrisno.com';
  
  // 1. Static Pages
  // Priority 1.0 for Home as the main entry point. 
  // 0.9 for About as it's the core personal brand page.
  // 0.8 for Work/Projects as key professional evidence.
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/work', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
    { url: '/uses', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  ].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // 2. Dynamic Blog Pages
  const posts = await getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'never' as const, // Blog posts are usually static once published
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
