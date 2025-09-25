import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://ab-tech.ia.br/sitemap.xml',
    host: 'https://ab-tech.ia.br',
  }
}
