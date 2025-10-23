/**
 * Analytics Event Tracking
 *
 * Centralized event tracking for user interactions.
 * Works with Plausible Analytics for privacy-respecting analytics.
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

/**
 * Track when user clicks Schedule Demo button
 */
export function trackCalendlyClick(location: string = 'unknown') {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Calendly Click', {
      props: {
        location,
      },
    });
  }
  console.log('[Analytics] Calendly clicked from:', location);
}

/**
 * Track when user clicks WhatsApp float button
 */
export function trackWhatsAppClick(location: string = 'float') {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('WhatsApp Click', {
      props: {
        location,
      },
    });
  }
  console.log('[Analytics] WhatsApp clicked from:', location);
}

/**
 * Track currency switch events
 */
export function trackCurrencySwitch(fromCurrency: string, toCurrency: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Currency Switch', {
      props: {
        from: fromCurrency,
        to: toCurrency,
      },
    });
  }
  console.log('[Analytics] Currency switched:', fromCurrency, '→', toCurrency);
}

/**
 * Track language switch events
 */
export function trackLanguageSwitch(fromLanguage: string, toLanguage: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Language Switch', {
      props: {
        from: fromLanguage,
        to: toLanguage,
      },
    });
  }
  console.log('[Analytics] Language switched:', fromLanguage, '→', toLanguage);
}

/**
 * Track contact form submissions
 */
export function trackContactSubmit(formType: string = 'general') {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Contact Form Submit', {
      props: {
        type: formType,
      },
    });
  }
  console.log('[Analytics] Contact form submitted:', formType);
}

/**
 * Track pricing plan interactions
 */
export function trackPlanClick(planName: string, billingType: 'monthly' | 'annual') {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Pricing Plan Click', {
      props: {
        plan: planName,
        billing: billingType,
      },
    });
  }
  console.log('[Analytics] Plan clicked:', planName, billingType);
}

/**
 * Track newsletter signups
 */
export function trackNewsletterSignup(source: string = 'footer') {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Newsletter Signup', {
      props: {
        source,
      },
    });
  }
  console.log('[Analytics] Newsletter signup from:', source);
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaText: string, location: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('CTA Click', {
      props: {
        text: ctaText,
        location,
      },
    });
  }
  console.log('[Analytics] CTA clicked:', ctaText, 'at', location);
}
