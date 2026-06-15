import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { aboutMessages, leaderSlugs } from '../data/aboutMessages';

const pointKeys = ['p1', 'p2', 'p3', 'p4'] as const;

const leaderDescriptions: Record<string, string> = {
  chairman: 'A vision for elevating KMC into a Medical University and nurturing compassionate doctors.',
  ceo: 'Producing competent doctors with knowledge, intellect, and integrity.',
  trustees: 'World-class medical education and patient care under the Shanti Foundation.',
  principal: 'A milestone in medical education and patient care for the region and the nation.',
  ms: 'State-of-the-art multispecialty care with empathy and outreach to all.',
}

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
          {leaderSlugs.map((k) => {
            const msg = aboutMessages[k]
            return (
              <Link
                key={k}
                to={`/about/${k}`}
                className="group bg-white rounded-3xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow block"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-mist)] mb-5 flex items-center justify-center text-[var(--color-teal)] font-serif text-xl font-bold">
                  {msg.author.charAt(0)}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-2">{t(`aboutPage.leaders.${k}`)}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{leaderDescriptions[k]}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)] group-hover:gap-2 transition-all">
                  Read message <ArrowRight size={12} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
}
