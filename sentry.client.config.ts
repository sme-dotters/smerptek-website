/**
 * Sentry Client Configuration
 *
 * This configures error tracking for client-side code.
 */

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,

    // Performance Monitoring
    tracesSampleRate: 0.1, // Capture 10% of transactions for performance monitoring

    // Session Replay
    replaysSessionSampleRate: 0.1, // Capture 10% of sessions
    replaysOnErrorSampleRate: 1.0, // Capture 100% of sessions with errors

    // Environment
    environment: process.env.NODE_ENV,

    // Release tracking
    release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,

    // Filter out known errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      // Network errors
      'NetworkError',
      'Network request failed',
      // Random plugins/extensions
      'Non-Error promise rejection captured',
    ],

    // Before sending errors, add custom context
    beforeSend(event, hint) {
      // Don't send errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Sentry error (dev mode, not sent):', hint.originalException || hint.syntheticException);
        return null;
      }

      return event;
    },
  });
}
