'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { trackLanguageSwitch } from '@/lib/analytics/events';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current locale from pathname (e.g., /ar/pricing -> 'ar')
  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';

  const switchLanguage = (newLocale: string) => {
    // Track language switch
    trackLanguageSwitch(currentLocale, newLocale);

    // Remove current locale prefix from pathname if exists
    let newPathname = pathname;
    if (pathname.startsWith('/ar')) {
      newPathname = pathname.slice(3) || '/';
    } else if (pathname.startsWith('/en')) {
      newPathname = pathname.slice(3) || '/';
    }

    // Add new locale prefix (but not for default 'en' if using as-needed prefix)
    const targetPath = newLocale === 'ar' ? `/ar${newPathname}` : newPathname;

    router.push(targetPath);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);
  const otherLanguage = languages.find((lang) => lang.code !== currentLocale);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        aria-label={`Current language: ${currentLanguage?.name}. Click to change language.`}
        aria-expanded="false"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.nativeName}</span>
      </button>

      {otherLanguage && (
        <button
          onClick={() => switchLanguage(otherLanguage.code)}
          className="absolute top-full mt-1 left-0 w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50"
          aria-label={`Switch to ${otherLanguage.name}`}
        >
          <span className="text-sm font-medium">{otherLanguage.nativeName}</span>
        </button>
      )}
    </div>
  );
}
