/**
 * Currency Exchange Rate API
 *
 * Fetches live exchange rates from exchangerate-api.com
 * Free tier: 1,500 requests/month
 */

export type Currency = 'AED' | 'SAR' | 'QAR' | 'KWD' | 'OMR' | 'BHD';

interface ExchangeRateResponse {
  result: string;
  base_code: string;
  conversion_rates: Record<string, number>;
  time_last_update_unix: number;
}

// Fallback rates if API fails
const FALLBACK_RATES: Record<Currency, number> = {
  AED: 1.0,
  SAR: 1.02,
  QAR: 0.99,
  KWD: 0.084,
  OMR: 0.105,
  BHD: 0.103,
};

// Cache for exchange rates (1 hour TTL)
let ratesCache: Record<Currency, number> | null = null;
let cacheTimestamp: number | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Fetch exchange rates from API with caching
 */
export async function fetchExchangeRates(): Promise<Record<Currency, number>> {
  // Check cache first
  if (ratesCache && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_TTL) {
    console.log('[Currency API] Using cached rates');
    return ratesCache;
  }

  try {
    // Fetch from exchangerate-api.com (free tier)
    // Base currency: AED (UAE Dirham)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/AED', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: ExchangeRateResponse = await response.json();

    // Extract only GCC currencies we need
    const rates: Record<Currency, number> = {
      AED: 1.0, // Base currency
      SAR: data.conversion_rates.SAR || FALLBACK_RATES.SAR,
      QAR: data.conversion_rates.QAR || FALLBACK_RATES.QAR,
      KWD: data.conversion_rates.KWD || FALLBACK_RATES.KWD,
      OMR: data.conversion_rates.OMR || FALLBACK_RATES.OMR,
      BHD: data.conversion_rates.BHD || FALLBACK_RATES.BHD,
    };

    // Update cache
    ratesCache = rates;
    cacheTimestamp = Date.now();

    console.log('[Currency API] Fetched fresh rates:', rates);
    return rates;
  } catch (error) {
    console.error('[Currency API] Failed to fetch rates, using fallback:', error);

    // Use fallback rates on error
    ratesCache = FALLBACK_RATES;
    cacheTimestamp = Date.now();

    return FALLBACK_RATES;
  }
}

/**
 * Get cached exchange rates (synchronous)
 * Returns fallback rates if cache is empty
 */
export function getCachedRates(): Record<Currency, number> {
  return ratesCache || FALLBACK_RATES;
}

/**
 * Convert amount from AED to target currency
 */
export function convertPrice(amountInAED: number, targetCurrency: Currency): number {
  const rates = getCachedRates();
  return Math.round(amountInAED * rates[targetCurrency] * 100) / 100;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(amount: number, currency: Currency): string {
  const symbols: Record<Currency, string> = {
    AED: 'د.إ',
    SAR: '﷼',
    QAR: 'ر.ق',
    KWD: 'د.ك',
    OMR: 'ر.ع.',
    BHD: 'د.ب',
  };

  return `${symbols[currency]} ${amount.toLocaleString()}`;
}
