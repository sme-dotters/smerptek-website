/**
 * Error Handling Utilities
 *
 * Centralized error handling and reporting to Sentry.
 */

import * as Sentry from '@sentry/nextjs';

/**
 * Log an error to Sentry and console
 */
export function logError(error: Error, context?: Record<string, any>) {
  console.error('Error:', error, context);

  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

/**
 * Log a warning message
 */
export function logWarning(message: string, context?: Record<string, any>) {
  console.warn('Warning:', message, context);

  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.captureMessage(message, {
      level: 'warning',
      extra: context,
    });
  }
}

/**
 * Set user context for error tracking
 */
export function setUserContext(user: { id: string; email?: string; name?: string }) {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.setUser(user);
  }
}

/**
 * Clear user context (on logout)
 */
export function clearUserContext() {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.setUser(null);
  }
}

/**
 * Add custom breadcrumb for debugging
 */
export function addBreadcrumb(message: string, category: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.addBreadcrumb({
      message,
      category,
      data,
      level: 'info',
    });
  }
}
