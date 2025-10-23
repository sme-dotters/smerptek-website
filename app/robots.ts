import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/smerptekdev/',
          '/smerptekdev/*',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://smerptek.com/sitemap.xml',
  };
}
