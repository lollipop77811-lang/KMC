import PageHero from '../components/PageHero';
import { Activity, Droplet, ScanLine, BedDouble, HeartPulse, FlaskConical, Baby, Stethoscope, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const services = [
  { icon: Activity, k: 'critical' }, { icon: HeartPulse, k: 'coronary' },
  { icon: FlaskConical, k: 'lab' }, { icon: ScanLine, k: 'radio' },
  { icon: BedDouble, k: 'icu' }, { icon: Stethoscope, k: 'emergency' },
  { icon: Baby, k: 'picu' }, { icon: Droplet, k: 'blood' },
];

const labels: Record<string, { en: string; hi: string }> = {
  critical: { en: 'Critical Care Medicine', hi: 'गंभीर देखभाल चिकित्सा' },
  coronary: { en: 'Coronary Care Unit', hi: 'कोरोनरी केयर यूनिट' },
  lab: { en: 'Lab Services', hi: 'लैब सेवाएँ' },
  radio: { en: 'Radiodiagnosis', hi: 'रेडियोडायग्नोसिस' },
  icu: { en: 'ICU / SICU / MICU', hi: 'ICU / SICU / MICU' },
  emergency: { en: 'Emergency', hi: 'आपातकाल' },
  picu: { en: 'PICU / NICU', hi: 'PICU / NICU' },
  blood: { en: 'Blood Bank & Component Unit', hi: 'ब्लड बैंक और घटक इकाई' },
};

export default function Hospital() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.split('-')[0] || 'en') as 'en' | 'hi';
  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="hospitalPage.label" titleKey="hospitalPage.title" subtitleKey="hospitalPage.subtitle" />
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s) => (
            <div key={s.k} className="bg-white rounded-3xl p-7 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all cursor-grow group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-teal)] group-hover:text-white transition-colors"><s.icon size={24} /></div>
              <h3 className="font-serif text-xl font-bold text-[var(--color-navy)]">{labels[s.k][lang]}</h3>
            </div>
          ))}
        </div>

        <div className="relative rounded-[2.5rem] bg-[var(--color-coral)] text-white p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
          <div className="relative z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-6">{t('hospitalPage.alwaysOpen')}</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">{t('hospitalPage.emergencyTitle')}</h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto">{t('hospitalPage.emergencyDesc')}</p>
            <a href="tel:05523350400" className="inline-flex items-center gap-2 bg-white text-[var(--color-coral)] px-8 py-4 rounded-full font-bold cursor-grow"><Phone size={18} /> 05523-350400-29</a>
          </div>
        </div>
      </section>
    </div>
  );
}
