import PageHero from '../components/PageHero';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const newsItems = [
  { date: 'Oct 10, 2024', key: 'e1', img: 6129655, tag: 'event' },
  { date: 'Nov 5, 2024', key: 'e2', img: 6129115, tag: 'camp' },
  { date: 'Sep 22, 2024', key: 'e3', img: 32213424, tag: 'campus' },
  { date: 'Aug 1, 2024', key: 'e4', img: 6129147, tag: 'milestone' },
];

const moreEvents: Record<string, { en: string; hi: string }> = {
  e3: { en: 'Annual Sports Meet & Cultural Fest 2024', hi: 'वार्षिक खेल मीट और सांस्कृतिक उत्सव 2024' },
  e4: { en: 'New Cath Lab Inaugurated at KMC Hospital', hi: 'KMC अस्पताल में नए कैथ लैब का उद्घाटन' },
};

const noticeList = ['n1', 'n2', 'n3'] as const;

export default function News() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language.split('-')[0] || 'en') as 'en' | 'hi';

  const getTitle = (key: string) => {
    if (key === 'e1' || key === 'e2') return t(`news.events.${key}`);
    return moreEvents[key]?.[lang] || '';
  };

  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="newsPage.label" titleKey="newsPage.title" />
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {newsItems.map((n) => (
            <a key={n.key} href="#" className="group bg-white rounded-[2rem] overflow-hidden border border-[var(--color-border)] hover:shadow-xl transition-all cursor-grow">
              <div className="h-56 overflow-hidden">
                <img src={`https://images.pexels.com/photos/${n.img}/pexels-photo-${n.img}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700`} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[var(--color-mist)] text-[var(--color-teal)] text-[10px] font-bold uppercase">{t(`newsPage.tags.${n.tag}`)}</span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]"><Calendar size={12} /> {n.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors mb-3">{getTitle(n.key)}</h3>
                <span className="text-sm font-semibold text-[var(--color-teal)] flex items-center gap-1 group-hover:gap-2 transition-all">{t('news.readMore')} <ArrowRight size={14} /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] p-8 border border-[var(--color-border)]">
          <h2 className="font-serif text-2xl font-bold text-[var(--color-navy)] mb-6">{t('news.latestNotices')}</h2>
          <div className="divide-y divide-[var(--color-border)]">
            {noticeList.map((k) => (
              <a key={k} href="#" className="flex items-center justify-between py-4 group cursor-grow">
                <span className="text-[var(--color-navy)] group-hover:text-[var(--color-teal)] transition-colors font-medium">{t(`news.notices.${k}`)}</span>
                <ArrowRight size={16} className="text-[var(--color-teal)] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
