import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ids = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'] as const;

export default function Rankings() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll('.rk-card');
    gsap.fromTo(cards, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[var(--color-teal)]" /><span className="text-label">{t('rankings.label')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[var(--color-navy)]">{t('rankings.title1')}<br />{t('rankings.title2')}</h2>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-teal)] font-semibold"><TrendingUp size={20} /> {t('rankings.rising')}</div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ids.map((id, i) => {
            const feature = i === 0;
            return (
              <div key={id} className={`rk-card group rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1.5 cursor-grow ${feature ? 'bg-[var(--color-navy)] text-white border-transparent shadow-xl' : 'bg-white border-[var(--color-border)] hover:shadow-lg'}`}>
                <div className="flex justify-between items-start mb-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${feature ? 'bg-white/15 text-[var(--color-amber)]' : 'bg-[var(--color-mist)] text-[var(--color-teal)]'}`}>{t(`rankings.items.${id}.year`)}</span>
                  <Award size={22} className={feature ? 'text-[var(--color-amber)]' : 'text-[var(--color-teal)] opacity-60 group-hover:opacity-100'} />
                </div>
                <h3 className={`font-serif text-5xl font-bold mb-2 ${feature ? 'text-[var(--color-amber)]' : 'text-[var(--color-navy)]'}`}>{t(`rankings.items.${id}.rank`)}</h3>
                <p className={`text-xs uppercase tracking-widest mb-1 ${feature ? 'text-white/60' : 'text-[var(--color-text-muted)]'}`}>{t(`rankings.items.${id}.pub`)}</p>
                <p className={`font-serif text-xl ${feature ? 'text-white' : 'text-[var(--color-navy)]'}`}>{t(`rankings.items.${id}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
