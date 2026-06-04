import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const meta = [
  { key: 't1', img: 6129681 },
  { key: 't2', img: 6129870 },
  { key: 't3', img: 6129115 },
  { key: 't4', img: 6129655 },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const it = setInterval(() => setActive((p) => (p + 1) % meta.length), 5000);
    return () => clearInterval(it);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-mist)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5"><span className="w-10 h-[2px] bg-[var(--color-teal)]" /><span className="text-label">{t('testimonials.label')}</span></div>
            <h2 className="text-4xl md:text-5xl text-[var(--color-navy)] mb-8">{t('testimonials.title')}</h2>
            <div className="flex flex-col gap-3">
              {meta.map((it, i) => (
                <button key={i} onClick={() => setActive(i)} className={`flex items-center gap-4 p-3 rounded-2xl text-left transition-all cursor-grow ${active === i ? 'bg-white shadow-md' : 'opacity-60 hover:opacity-100'}`}>
                  <img src={`https://images.pexels.com/photos/${it.img}/pexels-photo-${it.img}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80`} alt="" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[var(--color-navy)] text-sm">{t(`testimonials.${it.key}.n`)}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{t(`testimonials.${it.key}.r`)}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl min-h-[340px] flex flex-col justify-center">
              <Quote size={56} className="text-[var(--color-teal)]/15 absolute top-8 right-10" />
              {meta.map((it, i) => (
                <div key={i} className={`transition-all duration-700 ${active === i ? 'opacity-100' : 'opacity-0 absolute inset-0 p-14 pointer-events-none'}`}>
                  <div className="flex gap-1 text-[var(--color-amber)] mb-6">{[...Array(5)].map((_, k) => <Star key={k} size={18} fill="currentColor" />)}</div>
                  <p className="font-serif text-2xl md:text-3xl text-[var(--color-navy)] leading-snug italic mb-8">"{t(`testimonials.${it.key}.q`)}"</p>
                  <div>
                    <p className="font-bold text-[var(--color-teal)]">{t(`testimonials.${it.key}.n`)}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{t(`testimonials.${it.key}.r`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
