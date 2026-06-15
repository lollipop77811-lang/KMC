import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { t } = useTranslation();
  const isHome = loc.pathname === '/';

  const links = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'departments', path: '/departments' },
    { key: 'hospital', path: '/hospital' },
    { key: 'infoNmc', path: '/info-nmc' },
    { key: 'infoMsr', path: '/info-msr' },
    { key: 'facilities', path: '/facilities' },
    { key: 'admissions', path: '/admissions' },
    { key: 'news', path: '/news' },
    { key: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center px-4 pt-4">
        <header
          className={`w-full max-w-7xl rounded-2xl transition-all duration-500 ${
            scrolled || !isHome
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,118,110,0.10)] py-3'
              : 'bg-transparent py-4'
          }`}
        >
          <div className="px-5 md:px-7 flex items-center justify-between gap-3">
            <Link to="/" className="cursor-grow shrink-0">
              <img src="/kmc-logo.png" alt="KMC" className="h-14 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {links.map((l) => {
                const active = loc.pathname === l.path;
                return (
                  <Link
                    key={l.key}
                    to={l.path}
                    className={`relative px-2.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-sans font-semibold transition-colors whitespace-nowrap ${
                      active ? 'text-white' : `${scrolled || !isHome ? 'text-[var(--color-navy)]' : 'text-white/90'} hover:text-[var(--color-teal)]`
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navpill"
                        className="absolute inset-0 bg-[var(--color-teal)] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {t(`nav.${l.key}`)}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <LanguageToggle dark={isHome && !scrolled} />
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle dark={isHome && !scrolled} />
              <button className={`p-2 ${scrolled || !isHome ? 'text-[var(--color-navy)]' : 'text-white'}`} onClick={() => setOpen(!open)}>
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[var(--color-navy)] z-[99] flex flex-col justify-center px-8 pt-24"
          >
            <div className="mb-8">
              <img src="/kmc-logo.png" alt="KMC" className="h-16 w-auto brightness-0 invert" />
            </div>
            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.key}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Link to={l.path} className="text-4xl sm:text-5xl font-serif font-bold text-white hover:text-[var(--color-teal-light)] transition-colors">
                    {t(`nav.${l.key}`)}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 pt-8 border-t border-white/15">
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
