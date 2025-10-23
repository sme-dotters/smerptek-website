'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)/, '');

    // Navigate to the same page with new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
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
