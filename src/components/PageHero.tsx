import { useTranslation } from 'react-i18next';
import AnimatedText from './AnimatedText';

export default function PageHero({ labelKey, titleKey, subtitleKey }: { labelKey: string; titleKey: string; subtitleKey?: string }) {
  const { t, i18n } = useTranslation();
  return (
    <section className="pt-40 pb-16 bg-[var(--color-mist)] relative overflow-hidden">
      <div className="absolute top-10 -right-20 w-80 h-80 bg-[var(--color-teal)]/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-5"><span className="w-10 h-[2px] bg-[var(--color-teal)]" /><span className="text-label">{t(labelKey)}</span><span className="w-10 h-[2px] bg-[var(--color-teal)]" /></div>
        <AnimatedText key={i18n.language} text={t(titleKey)} className="text-5xl md:text-7xl text-[var(--color-navy)] justify-center text-center" />
        {subtitleKey && <p className="text-lg text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto">{t(subtitleKey)}</p>}
      </div>
    </section>
  );
}
