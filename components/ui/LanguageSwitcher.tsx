'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

export function LanguageSwitcher() {
  // For now, default to English until full i18n is set up
  const [locale, setLocale] = useState('en');

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
    // In future, this will actually switch language
    // For now, just update state
    console.log(`Language switched to: ${newLocale}`);
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);
  const otherLanguage = languages.find((lang) => lang.code !== locale);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.nativeName}</span>
      </button>

      {otherLanguage && (
        <button
          onClick={() => switchLanguage(otherLanguage.code)}
          className="absolute top-full mt-1 left-0 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        >
          <span className="text-sm font-medium">{otherLanguage.nativeName}</span>
        </button>
      )}
    </div>
  );
}
