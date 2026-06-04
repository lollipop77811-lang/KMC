import { ArrowRight, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const notices = [
  { date: 'Jul 4, 2025', key: 'n1', tag: 'admissions' },
  { date: 'Aug 15, 2024', key: 'n2', tag: 'exams' },
  { date: 'Sep 1, 2024', key: 'n3', tag: 'notice' },
];

const events = [
  { date: 'Oct 10, 2024', key: 'e1', img: 6129655 },
  { date: 'Nov 5, 2024', key: 'e2', img: 6129115 },
];

export default function NewsNotices() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-[var(--color-mist)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl text-[var(--color-navy)] flex items-center gap-3"><Bell size={24} className="text-[var(--color-teal)]" /> {t('news.latestNotices')}</h2>
              <Link to="/news" className="text-sm font-semibold text-[var(--color-teal)] cursor-grow">{t('news.viewAll')}</Link>
            </div>
            <div className="space-y-4">
              {notices.map((n, i) => (
                <Link key={i} to="/news" className="block group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-teal)] transition-all cursor-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[var(--color-mist)] text-[var(--color-teal)] text-[10px] font-bold uppercase tracking-wider">{t(`news.tags.${n.tag}`)}</span>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]"><Calendar size={12} /> {n.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors">{t(`news.notices.${n.key}`)}</h3>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl text-[var(--color-navy)]">{t('news.newsEvents')}</h2>
              <Link to="/news" className="text-sm font-semibold text-[var(--color-teal)] cursor-grow">{t('news.viewAll')}</Link>
            </div>
            <div className="space-y-5">
              {events.map((n, i) => (
                <Link key={i} to="/news" className="flex gap-5 items-center group bg-white rounded-2xl p-4 border border-[var(--color-border)] hover:shadow-lg transition-all cursor-grow">
                  <div className="w-28 h-24 shrink-0 rounded-xl overflow-hidden">
                    <img src={`https://images.pexels.com/photos/${n.img}/pexels-photo-${n.img}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=400`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1.5">{n.date}</p>
                    <h3 className="font-serif font-bold text-lg text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors leading-tight mb-2">{t(`news.events.${n.key}`)}</h3>
                    <span className="text-sm font-semibold text-[var(--color-teal)] flex items-center gap-1 group-hover:gap-2 transition-all">{t('news.readMore')} <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
