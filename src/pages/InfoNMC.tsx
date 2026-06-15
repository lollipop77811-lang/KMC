import { useTranslation } from 'react-i18next';
import { FileText, CheckCircle2, Shield, BookOpen, Users, Award } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function InfoNMC() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Shield,
      title: t('infoNmc.complianceTitle'),
      desc: t('infoNmc.complianceDesc'),
    },
    {
      icon: FileText,
      title: t('infoNmc.regulationsTitle'),
      desc: t('infoNmc.regulationsDesc'),
    },
    {
      icon: Users,
      title: t('infoNmc.facultyTitle'),
      desc: t('infoNmc.facultyDesc'),
    },
    {
      icon: BookOpen,
      title: t('infoNmc.curriculumTitle'),
      desc: t('infoNmc.curriculumDesc'),
    },
    {
      icon: Award,
      title: t('infoNmc.accreditationTitle'),
      desc: t('infoNmc.accreditationDesc'),
    },
    {
      icon: CheckCircle2,
      title: t('infoNmc.governanceTitle'),
      desc: t('infoNmc.governanceDesc'),
    },
  ];

  return (
    <main>
      <PageHero labelKey="infoNmc.label" titleKey="infoNmc.title" subtitleKey="infoNmc.subtitle" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              {t('infoNmc.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((s, i) => (
              <div
                key={i}
                className="group bg-[var(--color-mist)] rounded-3xl p-8 hover:bg-[var(--color-teal)] transition-all duration-500 cursor-grow"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-[var(--color-teal)] group-hover:text-[var(--color-amber)] flex items-center justify-center mb-5 shadow-sm transition-colors duration-500">
                  <s.icon size={26} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[var(--color-navy)] group-hover:text-white mb-3 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-mist)]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
              {t('infoNmc.documentsTitle')}
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              {t('infoNmc.documentsDesc')}
            </p>
            <div className="space-y-4">
              {['doc1', 'doc2', 'doc3', 'doc4', 'doc5'].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-mist)] hover:bg-[var(--color-teal)]/10 transition-colors">
                  <FileText size={20} className="text-[var(--color-teal)] shrink-0" />
                  <span className="text-sm font-medium text-[var(--color-navy)]">{t(`infoNmc.${doc}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
