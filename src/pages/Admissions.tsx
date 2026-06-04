import PageHero from '../components/PageHero';
import MagneticButton from '../components/MagneticButton';
import { GraduationCap, FileText, IndianRupee, Award, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stepKeys = ['s1', 's2', 's3', 's4'] as const;

export default function Admissions() {
  const { t } = useTranslation();
  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="admissionsPage.label" titleKey="admissionsPage.title" subtitleKey="admissionsPage.subtitle" />
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {[
            { i: GraduationCap, tKey: 'mbbsProgram', dKey: 'mbbsDesc' },
            { i: IndianRupee, tKey: 'feeStructure', dKey: 'feeDesc' },
            { i: Award, tKey: 'nmcCompliant', dKey: 'nmcDesc' },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center mb-5"><c.i size={26} /></div>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-2">{t(`admissionsPage.${c.tKey}`)}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{t(`admissionsPage.${c.dKey}`)}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl text-[var(--color-navy)] text-center mb-12">{t('admissionsPage.howToApply')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stepKeys.map((s, i) => (
            <div key={s} className="bg-white rounded-3xl p-7 border border-[var(--color-border)] cursor-grow">
              <span className="font-serif text-5xl font-bold text-[var(--color-teal)]/30">0{i + 1}</span>
              <h3 className="font-serif text-xl font-bold text-[var(--color-navy)] mt-3 mb-2">{t(`admissionsPage.steps.${s}t`)}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{t(`admissionsPage.steps.${s}d`)}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-navy)] rounded-[2.5rem] p-12 text-center">
          <FileText size={36} className="text-[var(--color-amber)] mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{t('admissionsPage.readyTitle')}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t('admissionsPage.readyDesc')}</p>
          <MagneticButton variant="primary" to="/contact">{t('admissionsPage.registerBtn')} <ArrowRight size={16} /></MagneticButton>
        </div>
      </section>
    </div>
  );
}
