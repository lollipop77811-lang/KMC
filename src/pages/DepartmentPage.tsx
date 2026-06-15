import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { departmentBySlug } from '../data/departments';

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const dept = slug ? departmentBySlug[slug] : undefined;

  if (!dept) {
    return (
      <div className="bg-[var(--color-ivory)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-[var(--color-navy)] mb-4">Department Not Found</h1>
          <Link to="/departments" className="text-[var(--color-teal)] underline cursor-grow">Back to Departments</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-ivory)]">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-amber)]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-teal)]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        {dept.hasGallery && dept.galleryImages && (
          <div className="absolute top-32 right-6 z-[5] hidden lg:block pointer-events-none">
            <div className="relative">
              <img
                src={dept.galleryImages[0]}
                alt=""
                className="w-[520px] h-[340px] object-cover rounded-2xl"
                style={{ boxShadow: '0 25px 60px -15px rgba(0,0,0,0.25)' }}
                loading="lazy"
              />
              <div className="absolute -left-28 bottom-12">
                <img
                  src={dept.galleryImages[1]}
                  alt=""
                  className="w-[270px] h-[190px] object-cover rounded-2xl"
                  style={{ boxShadow: '0 20px 50px -10px rgba(0,0,0,0.2)' }}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 right-8">
                <img
                  src={dept.galleryImages[2]}
                  alt=""
                  className="w-[170px] h-[170px] object-cover rounded-2xl"
                  style={{ boxShadow: '0 25px 55px -8px rgba(0,0,0,0.3)' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link to="/departments" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors mb-8 cursor-grow">
            <ArrowLeft size={16} />
            {t('deptPage.label')}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[var(--color-amber)]" />
              <span className="text-label text-[var(--color-amber)]">{dept.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-navy)] leading-tight">
              {dept.title}<br />
              <span className="text-[var(--color-teal)]">{dept.subtitle}</span>
            </h1>
            {dept.introParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-[var(--color-text-muted)] mt-6 max-w-3xl leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--color-navy)]">
              {dept.sectionHeading}
            </h2>
            <div className="w-16 h-[2px] bg-[var(--color-amber)] mx-auto mt-4" />
            {dept.sectionSubDesc && (
              <p className="text-[var(--color-text-muted)] mt-6 max-w-3xl mx-auto leading-relaxed">
                {dept.sectionSubDesc}
              </p>
            )}
          </div>

          <div className="max-w-5xl mx-auto divide-y divide-[var(--color-border)]">
            {dept.highlights.map((f, i) => {
              const IconEl = f.icon;
              return (
                <div key={f.title} className="group py-10 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[var(--color-amber)]/10 text-[var(--color-amber)] flex items-center justify-center group-hover:bg-[var(--color-amber)] group-hover:text-white transition-all duration-500">
                      <IconEl size={28} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-navy)] mb-3">
                        <span className="text-[var(--color-amber)] font-sans text-sm font-bold mr-2">0{i + 1}</span>
                        {f.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
