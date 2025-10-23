import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/superadmindev/', '/api/'],
    },
    sitemap: 'https://www.smerptek.com/sitemap.xml',
  };
}
