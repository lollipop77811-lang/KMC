import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const depts = [
  { key: 'generalMed', cat: 'clinical', img: 'https://images.pexels.com/photos/6129115/pexels-photo-6129115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500' },
  { key: 'pediatrics', cat: 'clinical', img: 'https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500' },
  { key: 'cardiology', cat: 'superSpec', img: 'https://images.pexels.com/photos/6129147/pexels-photo-6129147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500' },
  { key: 'orthopaedics', cat: 'clinical', img: 'https://images.pexels.com/photos/6129655/pexels-photo-6129655.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500' },
  { key: 'anatomy', cat: 'preClinical', img: 'https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500' },
];

export default function DepartmentsScroll() {
  const { t } = useTranslation();
  const scroll = useRef<HTMLDivElement>(null);
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scroll.current || !sec.current) return;
    
    const ctx = gsap.context(() => {
      const w = scroll.current!.scrollWidth - window.innerWidth;
      if (w <= 0) return;
      
      gsap.to(scroll.current, {
        x: -w, ease: 'none',
        scrollTrigger: { 
          trigger: sec.current, 
          start: 'top top', 
          end: `+=${w * 1.4}`, 
          pin: true, 
          scrub: 1, 
          invalidateOnRefresh: true 
        },
      });
    }, sec);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sec} className="bg-[var(--color-teal-dark)] py-20 h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-[2px] bg-[var(--color-amber)]" /><span className="text-label text-[var(--color-amber)]">{t('deptScroll.label')}</span>
        </div>
        <div className="flex justify-between items-end gap-6">
          <h2 className="text-4xl md:text-6xl text-white max-w-2xl">{t('deptScroll.title1')}<br />{t('deptScroll.title2')}</h2>
          <Link to="/departments" className="hidden md:flex items-center gap-2 text-white/80 hover:text-[var(--color-amber)] font-semibold cursor-grow">{t('deptScroll.viewAll')} <ArrowRight size={16} /></Link>
        </div>
      </div>

      <div className="flex w-full">
        <div ref={scroll} className="flex gap-6 px-6 md:px-12 w-max">
          {depts.map((d, i) => (
            <Link key={i} to="/departments" className="group relative w-[280px] md:w-[360px] h-[400px] md:h-[460px] shrink-0 rounded-[2rem] overflow-hidden cursor-grow">
              <img src={d.img} alt={t(`deptScroll.items.${d.key}`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 backdrop-blur text-[var(--color-amber)] text-xs font-bold mb-3">{t(`deptScroll.categories.${d.cat}`)}</span>
                <h3 className="text-3xl font-serif font-bold text-white">{t(`deptScroll.items.${d.key}`)}</h3>
              </div>
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white group-hover:bg-[var(--color-amber)] transition-colors"><ArrowUpRight size={18} /></div>
            </Link>
          ))}
          <Link to="/departments" className="w-[280px] md:w-[360px] h-[400px] md:h-[460px] shrink-0 rounded-[2rem] bg-[var(--color-amber)] flex flex-col items-center justify-center gap-4 text-[var(--color-navy)] cursor-grow group">
            <span className="w-16 h-16 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowRight size={24} /></span>
            <span className="font-serif font-bold text-2xl text-center px-6">{t('deptScroll.exploreAll')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
