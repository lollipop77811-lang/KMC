import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bed, Layers, Users, HeartPulse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const statsData = [
  { value: 150, suffix: '+', key: 'beds', icon: Bed, color: 'teal' },
  { value: 25, suffix: '+', key: 'departments', icon: Layers, color: 'navy' },
  { value: 500, suffix: '+', key: 'faculty', icon: Users, color: 'amber' },
  { value: 10000, suffix: '+', key: 'patients', icon: HeartPulse, color: 'coral' },
];

const bg: Record<string, string> = {
  teal: 'bg-[var(--color-teal)]/10 text-[var(--color-teal)]',
  navy: 'bg-[var(--color-navy)]/10 text-[var(--color-navy)]',
  amber: 'bg-[var(--color-amber)]/15 text-[var(--color-amber)]',
  coral: 'bg-[var(--color-coral)]/12 text-[var(--color-coral)]',
};

export default function TrustBar() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    counters.current.forEach((c, i) => {
      if (!c) return;
      gsap.to(c, {
        innerText: statsData[i].value,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    });
  }, []);

  return (
    <section className="py-20 bg-[var(--color-ivory)]" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((s, i) => (
            <div key={i} className="group bg-white rounded-3xl p-7 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-grow">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${bg[s.color]}`}><s.icon size={26} /></div>
              <div className="flex items-baseline font-serif font-bold text-[var(--color-navy)]">
                <span ref={(el) => { counters.current[i] = el; }} className="text-4xl md:text-5xl">0</span>
                <span className="text-3xl md:text-4xl">{s.suffix}</span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mt-1 font-medium">{t(`trust.${s.key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
