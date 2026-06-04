import PageHero from '../components/PageHero';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const leaderKeys = ['chairman', 'ceo', 'trustees', 'principal', 'ms'] as const;
const pointKeys = ['p1', 'p2', 'p3', 'p4'] as const;

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="aboutPage.label" titleKey="aboutPage.title" subtitleKey="aboutPage.subtitle" />
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <img src="https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800" alt="" className="rounded-[2rem] shadow-xl w-full h-[420px] object-cover" />
          <div>
            <h2 className="text-4xl text-[var(--color-navy)] mb-6">{t('aboutPage.ourStory')}</h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-6">{t('aboutPage.storyText')}</p>
            <div className="grid grid-cols-2 gap-4">
              {pointKeys.map((k) => (
                <div key={k} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[var(--color-teal)]" /><span className="text-sm font-medium text-[var(--color-navy)]">{t(`about.points.${k}`)}</span></div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-4xl text-[var(--color-navy)] mb-10 text-center">{t('aboutPage.leadership')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaderKeys.map((k) => (
            <div key={k} className="bg-white rounded-3xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-mist)] mb-5" />
              <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-2">{t(`aboutPage.leaders.${k}`)}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{t('aboutPage.leadershipDesc')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
