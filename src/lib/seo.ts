/**
 * SEO Utilities for johansutrisno.com
 */

const BASE_URL = 'https://johansutrisno.com';

/**
 * Generates an absolute canonical URL for a given path.
 * @param path The relative path (e.g., '/projects')
 * @returns The absolute URL (e.g., 'https://johansutrisno.com/projects')
 */
export function generateCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash if exists (good for SEO consistency)
  const finalPath = normalizedPath === '/' ? '' : normalizedPath.replace(/\/$/, '');
  
  return `${BASE_URL}${finalPath}`;
}
