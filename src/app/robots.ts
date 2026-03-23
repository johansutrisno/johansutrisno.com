import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://johansutrisno.com';

  /**
   * AI CRAWLER STRATEGY:
   * 
   * OPTION A: ALLOW (Good for visibility in AI search like Perplexity/SearchGPT)
   * { userAgent: ['GPTBot', 'Claude-Web'], allow: '/' }
   * 
   * OPTION B: DISALLOW (Prevents training on personal content without permission)
   * { userAgent: ['GPTBot', 'Claude-Web'], disallow: '/' }
   * 
   * We'll go with ALLOW (Option A) for now as this is a public portfolio 
   * intended for visibility and personal branding.
   */

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',    // Protect internal API routes
          '/_next/',  // No need to crawl internal Next.js assets
          '/admin/',  // Protect potential admin areas
          '/private/',
        ],
      },
      {
        userAgent: ['GPTBot', 'Claude-Web'],
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
