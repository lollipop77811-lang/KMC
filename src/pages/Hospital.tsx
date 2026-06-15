import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Activity, Droplet, ScanLine, BedDouble, HeartPulse, FlaskConical, Baby, Stethoscope, Phone, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import local hospital images
import imgCritical from '../assets/hospital/criticle care medicine.webp';
import imgCoronary from '../assets/hospital/Coronary Care Unit (CCU).webp';
import imgLab from '../assets/hospital/Lab Services.webp';
import imgRadio from '../assets/hospital/Radiodiagnosis.webp';
import imgIcu from '../assets/hospital/ICU _ SICU _ MICU.webp';
import imgEmergency from '../assets/hospital/Emergency.webp';
import imgPicu from '../assets/hospital/PICU _ NICU.webp';
import imgBlood from '../assets/hospital/Blood Bank & Component Unit.webp';

const slugMap: Record<string, string> = {
  critical: 'critical-care',
  coronary: 'ccu',
  lab: 'lab-services',
  radio: 'radiodiagnosis',
  icu: 'icu-sicu-micu',
  emergency: 'emergency',
  picu: 'picu-nicu',
  blood: 'blood-bank',
};

const services = [
  { icon: Activity, k: 'critical', img: imgCritical },
  { icon: HeartPulse, k: 'coronary', img: imgCoronary },
  { icon: FlaskConical, k: 'lab', img: imgLab },
  { icon: ScanLine, k: 'radio', img: imgRadio },
  { icon: BedDouble, k: 'icu', img: imgIcu },
  { icon: Stethoscope, k: 'emergency', img: imgEmergency },
  { icon: Baby, k: 'picu', img: imgPicu },
  { icon: Droplet, k: 'blood', img: imgBlood },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((s) => {
            const slug = slugMap[s.k];
            const card = (
              <div className="bg-white rounded-[2rem] p-5 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-grow group h-full flex flex-col">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 shrink-0 relative">
                  <img src={s.img} alt={labels[s.k][lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[var(--color-teal)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-sm">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center group-hover:bg-[var(--color-teal)] group-hover:text-white transition-colors"><s.icon size={22} /></div>
                  <h3 className="font-serif text-lg font-bold text-[var(--color-navy)] leading-snug">{labels[s.k][lang]}</h3>
                </div>
              </div>
            );
            return slug ? (
              <Link key={s.k} to={`/hospital/${slug}`} className="block">{card}</Link>
            ) : (
              <div key={s.k}>{card}</div>
            );
          })}
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
