import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/faq',
          '/privacy',
          '/terms',
          '/cookies',
        ],
        disallow: [
          '/admin',
          '/admin/*',
          '/checkout',
          '/checkout/*',
          '/api/*',
          '/_next/*',
          '/static/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/checkout', '/api/*'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/checkout', '/api/*'],
      },
    ],
    sitemap: 'https://tracksy.me/sitemap.xml',
  }
}
