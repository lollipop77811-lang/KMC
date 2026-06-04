import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const langs = [
  { code: 'en', label: 'English', native: 'EN' },
  { code: 'hi', label: 'हिन्दी', native: 'हि' },
];

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = langs.find((l) => l.code === i18n.language.split('-')[0]) || langs[0];

  const change = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
    // Force fonts to update by updating html lang
    document.documentElement.lang = code;
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-colors cursor-grow ${
          dark
            ? 'bg-white/10 text-white hover:bg-white/20'
            : 'bg-[var(--color-mist)] text-[var(--color-navy)] hover:bg-[var(--color-teal)] hover:text-white'
        }`}
        aria-label="Change language"
      >
        <Globe size={15} />
        <span>{current.native}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden z-50"
          >
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => change(l.code)}
                className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-[var(--color-mist)] transition-colors flex items-center justify-between ${
                  current.code === l.code ? 'text-[var(--color-teal)] bg-[var(--color-mist)]' : 'text-[var(--color-navy)]'
                }`}
              >
                <span>{l.label}</span>
                {current.code === l.code && <span className="w-2 h-2 rounded-full bg-[var(--color-teal)]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
