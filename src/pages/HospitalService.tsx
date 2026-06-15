import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { serviceBySlug } from '../data/hospitalServices';

export default function HospitalService() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceBySlug[slug] : undefined;

  if (!service) {
    return (
      <div className="bg-[var(--color-ivory)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-[var(--color-navy)] mb-4">Service Not Found</h1>
          <Link to="/hospital" className="text-[var(--color-teal)] underline cursor-grow">Back to Hospital</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-[var(--color-ivory)]">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-teal)]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-coral)]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link to="/hospital" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors mb-8 cursor-grow">
            <ArrowLeft size={16} />
            Back to Hospital
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[var(--color-teal)]" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-teal)]/10 text-[var(--color-teal)] flex items-center justify-center">
                  <Icon size={16} />
                </div>
                <span className="text-label text-[var(--color-teal)] font-semibold">{service.badge}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-navy)] leading-tight">
              {service.title}<br />
              <span className="text-[var(--color-teal)]">{service.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {service.sections.map((section, i) => (
              <div key={i} className={i > 0 ? 'mt-12 pt-12 border-t border-[var(--color-border)]' : ''}>
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-navy)] mb-6">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[var(--color-text-muted)] leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-[var(--color-text-muted)] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
