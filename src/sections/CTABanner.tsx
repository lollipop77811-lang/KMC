import { useTranslation } from 'react-i18next';
import MagneticButton from '../components/MagneticButton';
import { Phone, Calendar } from 'lucide-react';

export default function CTABanner() {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-[var(--color-ivory)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[var(--color-navy)] px-8 py-16 md:py-24 text-center">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--color-teal)]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-[var(--color-amber)]/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[var(--color-teal-light)] text-xs font-bold uppercase tracking-widest mb-6">{t('cta.tag')}</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-5">{t('cta.title')}</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{t('cta.desc')}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton variant="primary" to="/contact">
                <Calendar size={18} /> {t('cta.bookBtn')}
              </MagneticButton>
              <a href="tel:05523350400" className="pill-btn bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-[var(--color-coral)] hover:border-[var(--color-coral)] cursor-grow text-sm px-7 py-3.5">
                <Phone size={18} /> {t('cta.emergency')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
