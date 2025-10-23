'use client';

import { useState } from 'react';
import { DollarSign, ChevronDown } from 'lucide-react';
import { trackCurrencySwitch } from '@/lib/analytics/events';

export type Currency = 'AED' | 'SAR' | 'QAR' | 'KWD' | 'OMR' | 'BHD';

interface CurrencyOption {
  code: Currency;
  name: string;
  symbol: string;
  flag: string;
}

const currencies: CurrencyOption[] = [
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', flag: '🇶🇦' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', flag: '🇴🇲' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: 'د.ب', flag: '🇧🇭' },
];

interface CurrencySwitcherProps {
  selectedCurrency?: Currency;
  onCurrencyChange?: (currency: Currency) => void;
}

export function CurrencySwitcher({
  selectedCurrency = 'AED',
  onCurrencyChange,
}: CurrencySwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>(selectedCurrency);

  const currentCurrency = currencies.find((c) => c.code === currency);

  const handleSelect = (newCurrency: Currency) => {
    const oldCurrency = currency;
    setCurrency(newCurrency);
    setIsOpen(false);

    // Track currency switch
    trackCurrencySwitch(oldCurrency, newCurrency);

    if (onCurrencyChange) {
      onCurrencyChange(newCurrency);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        aria-label="Select currency"
        aria-expanded={isOpen}
      >
        <DollarSign className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentCurrency?.flag} {currentCurrency?.code}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 w-56 bg-slate-800 rounded-lg shadow-xl border border-white/10 overflow-hidden z-50">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => handleSelect(curr.code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors
                  ${curr.code === currency ? 'bg-white/5' : ''}
                `}
                aria-label={`Select ${curr.name}`}
              >
                <span className="text-xl">{curr.flag}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium">{curr.code}</div>
                  <div className="text-xs text-white/60">{curr.name}</div>
                </div>
                <span className="text-sm text-white/60">{curr.symbol}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Exchange rates (simplified - in production, fetch from API)
export const exchangeRates: Record<Currency, number> = {
  AED: 1.0,
  SAR: 1.02,
  QAR: 0.99,
  KWD: 0.084,
  OMR: 0.105,
  BHD: 0.103,
};

// Helper function to convert prices
export function convertPrice(amountInAED: number, targetCurrency: Currency): number {
  return Math.round(amountInAED * exchangeRates[targetCurrency] * 100) / 100;
}

// Helper function to format price with currency symbol
export function formatPrice(amount: number, currency: Currency): string {
  const currencyData = currencies.find((c) => c.code === currency);
  return `${currencyData?.symbol || ''} ${amount.toLocaleString()}`;
}
