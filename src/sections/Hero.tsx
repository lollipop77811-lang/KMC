import { useTranslation } from 'react-i18next';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';
import { ArrowRight, Phone, Star, Heart, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const key = i18n.language;

  return (
    <section className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-[var(--color-ivory)]">
      <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-[var(--color-mist)] rounded-bl-[40%] -z-0" />
      <div className="absolute top-32 -left-32 w-96 h-96 bg-[var(--color-teal)]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--color-amber)]/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[var(--color-navy)] mb-8" key={key}>
              <AnimatedText text={t('hero.line1')} className="text-display block" delay={0.2} />
              <AnimatedText text={t('hero.line2')} className="text-display block text-[var(--color-teal)]" delay={0.35} />
              <AnimatedText text={t('hero.line3')} className="text-display block" delay={0.5} />
            </div>

            <p className="text-[var(--color-text-muted)] text-lg max-w-lg mb-10">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton variant="primary" to="/departments">
                {t('hero.exploreBtn')} <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton variant="ghost" to="/contact">
                <Phone size={16} /> {t('hero.contactBtn')}
              </MagneticButton>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                {[6129681, 6129115, 6129870, 32213424].map((id) => (
                  <img key={id} src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=80&w=80`} alt="" className="w-11 h-11 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[var(--color-amber)]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{t('hero.trustText')}</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[560px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[var(--color-teal)] animate-blob animate-float-slow overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                <source src="/college.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[var(--color-teal)]/20" />
            </div>

            <div className="absolute -left-4 top-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="w-11 h-11 rounded-xl bg-[var(--color-coral)]/15 text-[var(--color-coral)] flex items-center justify-center"><Heart size={20} /></div>
              <div>
                <p className="font-serif font-bold text-xl text-[var(--color-navy)] leading-none">150+</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t('hero.stats.beds')}</p>
              </div>
            </div>
            <div className="absolute -right-2 bottom-16 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-slow" style={{ animationDelay: '2s' }}>
              <div className="w-11 h-11 rounded-xl bg-[var(--color-teal)]/15 text-[var(--color-teal)] flex items-center justify-center"><ShieldCheck size={20} /></div>
              <div>
                <p className="font-serif font-bold text-xl text-[var(--color-navy)] leading-none">25+</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t('hero.stats.departments')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-[var(--color-navy)] py-4 overflow-hidden -rotate-1 scale-105">
        <div className="flex whitespace-nowrap animate-marquee-x text-white/90 font-serif text-2xl italic">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="flex">
              {(['rank1', 'rank2', 'rank3', 'rank4', 'rank5'] as const).map((r, i) => (
                <span key={i} className="mx-8 flex items-center gap-8">{t(`hero.marquee.${r}`)} <span className="text-[var(--color-amber)]">✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
