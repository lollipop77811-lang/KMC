import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { t } = useTranslation();

  const links = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'departments', path: '/departments' },
    { key: 'hospital', path: '/hospital' },
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
            scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,118,110,0.10)] py-3'
              : 'bg-white/40 backdrop-blur-md py-4'
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
                      active ? 'text-white' : 'text-[var(--color-navy)] hover:text-[var(--color-teal)]'
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
              <LanguageToggle />
              <a
                href="tel:05523350400"
                className="flex items-center justify-center w-9 h-9 xl:w-11 xl:h-11 rounded-full bg-[var(--color-coral)] text-white shadow-lg shadow-[var(--color-coral)]/30 hover:shadow-[var(--color-coral)]/50 hover:scale-110 transition-all duration-300 cursor-grow group relative shrink-0"
              >
                <PhoneCall size={16} className="xl:hidden" />
                <PhoneCall size={18} className="hidden xl:block" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-coral)] animate-ping opacity-75" />
              </a>
              <Link
                to="/contact"
                className="pill-btn bg-[var(--color-navy)] text-white hover:bg-[#1E3A5F] text-xs xl:text-sm px-4 xl:px-7 py-2.5 xl:py-3.5 cursor-grow whitespace-nowrap shrink-0"
              >
                {t('nav.bookAppointment')} <ArrowRight size={15} />
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle />
              <button className="p-2 text-[var(--color-navy)]" onClick={() => setOpen(!open)}>
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
              <a href="tel:05523350400" className="flex items-center gap-4 text-white group">
                <div className="w-14 h-14 rounded-full bg-[var(--color-coral)] flex items-center justify-center shadow-lg shadow-[var(--color-coral)]/30 group-hover:scale-110 transition-transform duration-300 relative">
                  <PhoneCall size={22} />
                  <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--color-coral)] animate-ping opacity-75" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[var(--color-teal-light)]">{t('nav.emergency')}</span>
                  <span className="block text-lg font-semibold">05523-350400</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
