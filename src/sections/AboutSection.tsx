import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedText from '../components/AnimatedText';

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const imgRef = useRef<HTMLImageElement>(null);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(imgRef.current, { yPercent: -8 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: secRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }, []);

  return (
    <section ref={secRef} className="py-24 md:py-32 bg-[var(--color-mist)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[520px]">
            <div className="absolute top-0 left-0 w-3/4 h-80 rounded-[2rem] overflow-hidden shadow-2xl">
              <img ref={imgRef} src="https://images.pexels.com/photos/6129115/pexels-photo-6129115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700" alt="KMC campus" className="w-full h-[120%] object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-72 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[var(--color-mist)]">
              <img src="https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=600" alt="KMC care" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 bg-[var(--color-teal)] text-white rounded-3xl p-6 shadow-xl text-center animate-float-slow">
              <p className="font-serif text-5xl font-bold leading-none">12<span className="text-2xl">+</span></p>
              <p className="text-xs mt-1 uppercase tracking-widest text-white/80">{t('about.yearsOfCare')}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[var(--color-teal)]" />
              <span className="text-label">{t('about.label')}</span>
            </div>
            <AnimatedText key={i18n.language} text={t('about.title')} className="text-4xl md:text-5xl text-[var(--color-navy)] mb-7" />
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
              {t('about.para1')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {(['p1', 'p2', 'p3', 'p4'] as const).map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-teal)] mt-0.5 shrink-0" />
                  <span className="text-sm text-[var(--color-navy)] font-medium">{t(`about.points.${p}`)}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-3 text-[var(--color-teal)] font-semibold group cursor-grow">
              <span className="relative">{t('about.readMore')}<span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-teal)] group-hover:w-full transition-all duration-300" /></span>
              <span className="w-9 h-9 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform"><ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
