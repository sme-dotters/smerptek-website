import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'SMERP TEK | Modernize Digital Operations for Startups & SMEs',
    template: '%s | SMERP TEK',
  },
  description:
    'Transform scattered systems into intelligent workflows. SMERP TEK offers consultancy, AI automation, and software for ambitious teams in the UAE and GCC.',
  keywords: [
    'digital transformation UAE',
    'ERP software',
    'AI automation',
    'system integration',
    'SME technology',
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
    title: 'SMERP TEK | Modernize Digital Operations',
    description:
      'Transform scattered systems into intelligent workflows. Consultancy + AI automation + software for ambitious teams.',
    siteName: 'SMERP TEK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMERP TEK | Modernize Digital Operations',
    description:
      'Transform scattered systems into intelligent workflows. Consultancy + AI automation + software.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased">{children}</body>
    </html>
  );
}
