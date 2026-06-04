import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-[var(--color-navy)] text-white overflow-hidden">
      <div className="relative z-10 -mb-px">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-dark)] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">{t('footer.ctaTitle')}</h2>
              <p className="text-white/80 max-w-md">{t('footer.ctaDesc')}</p>
            </div>
            <Link to="/contact" className="pill-btn bg-white text-[var(--color-teal-dark)] hover:bg-[var(--color-amber)] hover:text-white text-base px-8 py-4 shrink-0 cursor-grow">
              {t('footer.ctaBtn')} <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-[var(--color-teal)]/30 shrink-0">
                <img src="/kmc-logo.png" alt="KMC Medical College & Hospital" className="w-full h-full object-contain p-1" />
              </div>
              <div className="leading-tight">
                <h3 className="font-serif font-bold text-lg">{t('nav.brandName')}</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-teal-light)]">{t('nav.collegeHospital')}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              {['FB', 'IG', 'YT'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-xs font-bold hover:bg-[var(--color-teal)] hover:border-[var(--color-teal)] transition-colors cursor-grow">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-3 text-sm">
              {(['about', 'departments', 'hospital', 'admissions'] as const).map((x) => (
                <li key={x}><Link to={`/${x}`} className="text-white/70 hover:text-[var(--color-amber)] transition-colors inline-flex items-center gap-1.5 cursor-grow">{t(`nav.${x}`)} <ArrowUpRight size={12} /></Link></li>
              ))}
              <li><a href="http://kmcmedicalcollege.in/" target="_blank" rel="noreferrer" className="text-[var(--color-amber)] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-grow">{t('footer.studentPortal')} <ArrowUpRight size={12} /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.reachUs')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin size={16} className="text-[var(--color-teal-light)] mt-0.5 shrink-0" /><span className="text-white/70">{t('footer.address')}</span></li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-[var(--color-teal-light)] shrink-0" /><a href="mailto:info@kmcmedicalcollege.com" className="text-white/70 hover:text-white cursor-grow">info@kmcmedicalcollege.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.helplines')}</h4>
            <ul className="space-y-4">
              <li><span className="block text-[10px] uppercase tracking-widest text-white/40">{t('footer.emergencyLbl')}</span><a href="tel:05523350400" className="text-lg font-serif text-[var(--color-coral)] cursor-grow">05523-350400-29</a></li>
              <li><span className="block text-[10px] uppercase tracking-widest text-white/40">{t('footer.admissionsLbl')}</span><a href="tel:05523350430" className="text-lg font-serif cursor-grow">05523-350430-59</a></li>
              <li><span className="block text-[10px] uppercase tracking-widest text-white/40">{t('footer.tollFreeLbl')}</span><a href="tel:18008898390" className="text-lg font-serif text-[var(--color-amber)] cursor-grow">1800-8898-390</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-5"><a href="#" className="hover:text-white cursor-grow">{t('footer.privacy')}</a><a href="#" className="hover:text-white cursor-grow">{t('footer.terms')}</a></div>
        </div>
      </div>
    </footer>
  );
}
