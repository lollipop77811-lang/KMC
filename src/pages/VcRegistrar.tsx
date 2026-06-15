import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Building2, User } from 'lucide-react';

export default function VcRegistrar() {
  const { t } = useTranslation();

  const officials = [
    {
      name: 'Sanjeev Mishra',
      designation: t('vcRegistrar.vc'),
      phone: '+91 9151024465',
    },
    {
      name: 'Sanjeev Kumar',
      designation: t('vcRegistrar.registrar'),
      phone: '+91 9151024466',
    },
  ];

  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero
        labelKey="vcRegistrar.label"
        titleKey="vcRegistrar.title"
        subtitleKey="vcRegistrar.subtitle"
      />
      <section className="py-16 container mx-auto px-6 md:px-12">
        {/* University Info Card */}
        <div className="bg-white rounded-3xl border border-[var(--color-border)] overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-navy)] px-8 py-5">
            <div className="flex items-center gap-3">
              <Building2 size={24} className="text-white" />
              <h3 className="text-2xl font-serif font-bold text-white">{t('vcRegistrar.universityName')}</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="text-lg text-[var(--color-navy)] font-semibold mb-2">{t('vcRegistrar.universityName')}</p>
                <p className="text-[var(--color-text-muted)] mb-1">U.P. Lucknow</p>
                <div className="flex items-start gap-2 text-[var(--color-text-muted)] mt-3">
                  <MapPin size={16} className="text-[var(--color-teal)] mt-0.5 shrink-0" />
                  <span>CG City, Sultanpur Road, Lucknow - 226002</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-text-muted)] mt-2">
                  <Mail size={16} className="text-[var(--color-teal)] shrink-0" />
                  <a href="mailto:vcabvmuup@gmail.com" className="text-[var(--color-teal)] hover:underline">vcabvmuup@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Officials Cards */}
        <h3 className="text-2xl font-serif font-bold text-[var(--color-navy)] mb-6">{t('vcRegistrar.officials')}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {officials.map((official, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[var(--color-border)] p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] flex items-center justify-center shrink-0">
                  <User size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors">
                    {official.name}
                  </h4>
                  <p className="text-[var(--color-teal)] font-semibold text-sm mt-1">{official.designation}</p>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mt-3">
                    <Phone size={14} className="text-[var(--color-teal)] shrink-0" />
                    <a href={`tel:${official.phone.replace(/\s/g, '')}`} className="hover:text-[var(--color-teal)] transition-colors">
                      {official.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 bg-[var(--color-mist)] rounded-2xl p-6 text-center">
          <p className="text-[var(--color-text-muted)] text-sm">{t('vcRegistrar.note')}</p>
        </div>
      </section>
    </div>
  );
}
