'use client';

import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const match = document.cookie.match(/googtrans=([^;]+)/);
    if (match && match[1].includes('/es')) {
      setLang('es');
    }
  }, []);

  const switchTo = (target: 'en' | 'es') => {
    if (target === lang) return;
    if (target === 'es') {
      document.cookie = 'googtrans=/en/es; path=/';
      document.cookie = `googtrans=/en/es; path=/; domain=${window.location.hostname}`;
    } else {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    }
    window.location.reload();
  };

  return (
    <div className="flex items-center bg-white/10 rounded-full p-1 gap-0.5">
      <button
        onClick={() => switchTo('en')}
        aria-label="Switch to English"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'en'
            ? 'bg-accent text-white shadow-sm'
            : 'text-white/60 hover:text-white'
        }`}
      >
        🇺🇸 EN
      </button>
      <span className="text-white/20 text-sm select-none">|</span>
      <button
        onClick={() => switchTo('es')}
        aria-label="Cambiar a Español"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'es'
            ? 'bg-accent text-white shadow-sm'
            : 'text-white/60 hover:text-white'
        }`}
      >
        🇪🇸 ES
      </button>
    </div>
  );
}
