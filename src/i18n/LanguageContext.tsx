'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Locale } from './translations';

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (typeof translations)['en'];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'portfolio-locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pt') {
      setLocale(stored);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next: Locale = prev === 'en' ? 'pt' : 'en';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{ locale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
