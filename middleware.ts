import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Disable automatic locale detection for now
  localeDetection: false,

  // Don't prefix default locale
  localePrefix: 'as-needed',
});

export const config = {
  // Exclude admin, API routes, static files
  matcher: ['/((?!api|smerptekdev|_next|_vercel|.*\\..*).*)'],
};
