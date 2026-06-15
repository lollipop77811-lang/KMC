import { useTranslation } from 'react-i18next';
import AnimatedText from '../components/AnimatedText';
import MagneticButton from '../components/MagneticButton';
import DNAHelix from '../components/DNAHelix';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const key = i18n.language;

  return (
    <section className="relative min-h-screen pt-36 pb-16 overflow-hidden bg-[#0A1628]">
      {/* DNA Double Helix Particle Animation Background */}
      <DNAHelix />

      {/* Subtle radial vignette for depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,22,40,0.6) 100%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-white mb-8" key={key}>
              <AnimatedText text={t('hero.line1')} className="text-display block" delay={0.2} />
              <AnimatedText text={t('hero.line2')} className="text-display block text-[#64FFDA]" delay={0.35} />
              <AnimatedText text={t('hero.line3')} className="text-display block" delay={0.5} />
            </div>

            <p className="text-white/70 text-lg max-w-lg mb-10">
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
          </div>

          {/* Right side: College video with glass-morphism card */}
          <div className="relative h-[420px] sm:h-[560px] flex items-center justify-center">
            <div className="absolute inset-0 animate-blob animate-float-slow overflow-hidden rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(0,191,165,0.15), rgba(244,143,177,0.15))' }}
            >
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
                <source src="/college_1.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
            </div>

          </div>
        </div>
      </div>

      <div className="mt-16 bg-[#0A1628] py-4 overflow-hidden -rotate-1 scale-105">
        <div className="flex whitespace-nowrap animate-marquee-x text-white/90 font-serif text-2xl italic">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="flex">
              {(['rank1', 'rank2', 'rank3', 'rank4', 'rank5'] as const).map((r, i) => (
                <span key={i} className="mx-8 flex items-center gap-8">{t(`hero.marquee.${r}`)} <span className="text-[#FF80AB]">&#10022;</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
