import { useTranslation } from 'react-i18next';
import { BarChart3, TrendingUp, Stethoscope, BedDouble, GraduationCap, Users, HeartPulse } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function InfoMSR() {
  const { t } = useTranslation();

  const stats = [
    { icon: BedDouble, label: t('infoMsr.statBeds'), value: t('infoMsr.statBedsVal') },
    { icon: Stethoscope, label: t('infoMsr.statDepts'), value: t('infoMsr.statDeptsVal') },
    { icon: GraduationCap, label: t('infoMsr.statSeats'), value: t('infoMsr.statSeatsVal') },
    { icon: Users, label: t('infoMsr.statFaculty'), value: t('infoMsr.statFacultyVal') },
    { icon: HeartPulse, label: t('infoMsr.statPatients'), value: t('infoMsr.statPatientsVal') },
    { icon: TrendingUp, label: t('infoMsr.statGrowth'), value: t('infoMsr.statGrowthVal') },
  ];

  return (
    <main>
      <PageHero labelKey="infoMsr.label" titleKey="infoMsr.title" subtitleKey="infoMsr.subtitle" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              {t('infoMsr.intro')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-[var(--color-mist)] rounded-3xl p-6 md:p-8 text-center hover:bg-[var(--color-teal)] transition-all duration-500 cursor-grow group">
                <div className="w-14 h-14 rounded-2xl bg-white text-[var(--color-teal)] group-hover:text-[var(--color-amber)] flex items-center justify-center mb-4 mx-auto shadow-sm transition-colors duration-500">
                  <s.icon size={26} />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] group-hover:text-white transition-colors duration-500">
                  {s.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)] group-hover:text-white/80 mt-1 transition-colors duration-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-mist)]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-label">{t('infoMsr.highlightsLabel')}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-navy)] mt-3">
              {t('infoMsr.highlightsTitle')}
            </h2>
          </div>

          <div className="space-y-6">
            {(t('infoMsr.highlights', { returnObjects: true }) as string[]).map((item, i) => (
              <div key={i} className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-teal)]/10 text-[var(--color-teal)] flex items-center justify-center shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] rounded-3xl p-10 md:p-14 text-white text-center">
            <BarChart3 size={40} className="mx-auto mb-5 text-[var(--color-amber)]" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t('infoMsr.downloadTitle')}</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">{t('infoMsr.downloadDesc')}</p>
            <button className="pill-btn bg-[var(--color-coral)] text-white hover:bg-[var(--color-amber)] px-8 py-4 cursor-grow">
              {t('infoMsr.downloadBtn')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
