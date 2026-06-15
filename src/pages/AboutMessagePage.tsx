import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { aboutMessages } from '../data/aboutMessages';
import ChairmanSection, { PortraitCard } from '../components/ChairmanSection';
import ceoImg from '../assets/ceo_.jpg';
import trusteeAbhay from '../assets/trustees/abhay.jpg.webp';
import trusteeChairman from '../assets/trustees/chairman.jpg.webp';
import trusteeCmd from '../assets/trustees/cmd.jpg.webp';
import trusteeAditi from '../assets/trustees/aditi.webp';
import deanImg from '../assets/dean.png.webp';
import msImg from '../assets/ms.jpg.webp';

export default function AboutMessagePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const msg = slug ? aboutMessages[slug] : undefined;

  if (!msg) {
    return (
      <div className="bg-[var(--color-ivory)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-[var(--color-navy)] mb-4">Message Not Found</h1>
          <Link to="/about" className="text-[var(--color-teal)] underline cursor-grow">Back to About</Link>
        </div>
      </div>
    );
  }

  const hasPortrait = slug === 'chairman' || slug === 'ceo' || slug === 'principal' || slug === 'ms'
  const isTrustees = slug === 'trustees'

  if (hasPortrait) {
    const imgSrc = slug === 'ceo' ? ceoImg : slug === 'principal' ? deanImg : slug === 'ms' ? msImg : undefined
    const role = msg.role || (slug === 'ceo' ? 'CEO' : slug === 'principal' ? 'Dean / Principal' : slug === 'ms' ? 'Medical Superintendent' : 'Chairman')
    return (
      <div className="bg-[var(--color-ivory)] min-h-screen">
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-amber)]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-teal)]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors mb-8 cursor-grow">
              <ArrowLeft size={16} />
              {t('aboutPage.label')}
            </Link>
            <div className="lg:hidden portrait-reveal mx-auto mb-8">
              <PortraitCard name={msg.author} imgSrc={imgSrc} role={role} compact />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-10 h-[2px] bg-[var(--color-amber)]" />
                <span className="text-label text-[var(--color-amber)]">{t('aboutPage.leadership')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-navy)] leading-tight">
                {msg.title}
              </h1>
            </div>
          </div>
        </section>
        <section className="pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto relative">
              <div className="lg:pr-[300px]">
                <ChairmanSection
                  name={msg.author}
                  message={msg.content}
                  role={role}
                />
              </div>
              <div className="hidden lg:block absolute right-0 top-0 portrait-reveal">
                <PortraitCard name={msg.author} imgSrc={imgSrc} role={role} />
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-[var(--color-teal)] font-semibold group cursor-grow"
                >
                  <ArrowLeft size={16} />
                  <span className="relative">
                    Back to About
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-teal)] group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (isTrustees) {
    const trustees = [
      { src: trusteeChairman, name: 'Mr. Vinay Kumar Srivastava', role: 'Managing / Trustee' },
      { src: trusteeCmd, name: 'Mrs. Neera Chandra Srivastava', role: 'CMD / Trustee' },
      { src: trusteeAditi, name: 'Mrs. Aditi Krishna Srivastava', role: 'Member / Trustee' },
      { src: trusteeAbhay, name: 'Mr. Abhay Kumar Srivastava', role: 'Trustee' },
    ]
    return (
      <div className="bg-[var(--color-ivory)] min-h-screen">
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-amber)]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-teal)]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors mb-8 cursor-grow">
              <ArrowLeft size={16} />
              {t('aboutPage.label')}
            </Link>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-10 h-[2px] bg-[var(--color-amber)]" />
                <span className="text-label text-[var(--color-amber)]">{t('aboutPage.leadership')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-navy)] leading-tight">
                {msg.title}
              </h1>
            </div>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {trustees.map((t, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-full aspect-[4/5] rounded-[10px] overflow-hidden border-[3px] border-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
                    <img src={t.src} alt={t.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-[13px] font-medium text-center mt-3" style={{ color: '#1a3a31' }}>{t.name}</p>
                  <p className="text-[11px] text-center" style={{ color: '#6b7c75' }}>{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-[var(--color-border)]">
                <Quote size={32} className="text-[var(--color-teal)]/30 mb-6" />
                <div className="space-y-5 text-lg text-[var(--color-text)] leading-relaxed">
                  {msg.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
                  <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">{msg.author}</p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">{msg.role}</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-[var(--color-teal)] font-semibold group cursor-grow"
                >
                  <ArrowLeft size={16} />
                  <span className="relative">
                    Back to About
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-teal)] group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-ivory)] min-h-screen">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-amber)]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-teal)]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors mb-8 cursor-grow">
            <ArrowLeft size={16} />
            {t('aboutPage.label')}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[var(--color-amber)]" />
              <span className="text-label text-[var(--color-amber)]">{t('aboutPage.leadership')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-navy)] leading-tight">
              {msg.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[2rem] p-10 md:p-14 border border-[var(--color-border)]">
              <Quote size={32} className="text-[var(--color-teal)]/30 mb-6" />
              <div className="space-y-5 text-lg text-[var(--color-text)] leading-relaxed">
                {msg.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
                <p className="font-serif text-2xl font-bold text-[var(--color-navy)]">{msg.author}</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{msg.role}</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-[var(--color-teal)] font-semibold group cursor-grow"
              >
                <ArrowLeft size={16} />
                <span className="relative">
                  Back to About
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-teal)] group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
