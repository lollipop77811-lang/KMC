import { Activity, Pill, Droplet, ScanLine, BedDouble, HeartPulse, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MagneticButton from '../components/MagneticButton';

const services = [
  { icon: Pill, key: 'pharmacy' },
  { icon: Droplet, key: 'bloodBank' },
  { icon: ScanLine, key: 'radio' },
  { icon: BedDouble, key: 'icu' },
  { icon: HeartPulse, key: 'cath' },
];

export default function HospitalServices() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[var(--color-teal)]" /><span className="text-label">{t('hospital.label')}</span><span className="w-8 h-[2px] bg-[var(--color-teal)]" />
          </div>
          <h2 className="text-4xl md:text-5xl text-[var(--color-navy)]">{t('hospital.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:row-span-2 rounded-[2rem] bg-[var(--color-coral)] text-white p-9 flex flex-col justify-between relative overflow-hidden cursor-grow group">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute bottom-10 -left-8 w-32 h-32 rounded-full bg-white/10" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Activity size={30} />
                <span className="absolute w-16 h-16 rounded-2xl border-2 border-white/40 animate-ping" />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-4">{t('hospital.alwaysOpen')}</span>
              <h3 className="font-serif text-4xl font-bold mb-3">{t('hospital.emergencyTitle')}</h3>
              <p className="text-white/85">{t('hospital.emergencyDesc')}</p>
            </div>
            <a href="tel:05523350400" className="relative z-10 mt-8 inline-flex items-center gap-2 bg-white text-[var(--color-coral)] px-6 py-3 rounded-full font-semibold w-fit group-hover:gap-3 transition-all">
              {t('hospital.callBtn')} <ArrowRight size={16} />
            </a>
          </div>

          {services.map((s, i) => (
            <div key={i} className="rounded-[2rem] bg-white border border-[var(--color-border)] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-grow group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-teal)] group-hover:text-white transition-colors">
                <s.icon size={26} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-2">{t(`hospital.services.${s.key}.t`)}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t(`hospital.services.${s.key}.d`)}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <MagneticButton variant="outline" to="/hospital">
            {t('hospital.viewAll')} <ArrowRight size={16} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
