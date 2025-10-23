import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import PlausibleProvider from 'next-plausible';
import { JsonLd } from '@/components/schema/JsonLd';
import { getOrganizationSchema } from '@/lib/schema/organization';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'SMERP TEK | Digital Transformation & AI Automation UAE',
    template: '%s | SMERP TEK',
  },
  description:
    'Experience digital luxury. Transform your business with AI-powered automation and intelligent workflows. Leading innovation partner in UAE & GCC.',
  keywords: [
    'digital transformation UAE',
    'AI automation Dubai',
    'luxury tech solutions',
    'intelligent workflows',
    'SME technology GCC',
  ],
  authors: [{ name: 'SMERP TEK' }],
  creator: 'SMERP TEK',
  publisher: 'SMERP TEK',
  metadataBase: new URL('https://www.smerptek.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smerptek.com',
    title: 'SMERP TEK | Digital Transformation & AI Automation',
    description:
      'Experience digital luxury. Transform your business with AI-powered automation.',
    siteName: 'SMERP TEK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMERP TEK | Digital Transformation',
    description:
      'Experience digital luxury. AI-powered automation for ambitious teams.',
    creator: '@smerptek',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const { locale } = params;

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'smerptek.com'} />
        <JsonLd data={getOrganizationSchema()} />
      </head>
      <body className="font-body bg-dark-500 text-white antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
