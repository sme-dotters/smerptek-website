import { Organization, WithContext } from 'schema-dts';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SMERP TEK',
    alternateName: 'SMERPTEK',
    url: 'https://smerptek.com',
    logo: 'https://smerptek.com/logo.png',
    description:
      'SMERP TEK provides enterprise-grade ERP solutions, workforce management, business automation, and analytics for modern organizations in the GCC region.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@smerptek.com',
      availableLanguage: ['en', 'ar'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressRegion: 'Dubai',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
      {
        '@type': 'Country',
        name: 'Qatar',
      },
      {
        '@type': 'Country',
        name: 'Kuwait',
      },
      {
        '@type': 'Country',
        name: 'Oman',
      },
      {
        '@type': 'Country',
        name: 'Bahrain',
      },
    ],
    sameAs: [
      // Add social media URLs when available
    ],
  };
}
