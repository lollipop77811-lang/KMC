import PageHero from '../components/PageHero';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const list: Record<string, { en: string; hi: string }> = {
  lectures: { en: 'Lecture Theatres', hi: 'लेक्चर थिएटर' },
  library: { en: 'Central Library', hi: 'केंद्रीय पुस्तकालय' },
  skill: { en: 'Skill Lab', hi: 'स्किल लैब' },
  demo: { en: 'Demo Rooms', hi: 'डेमो रूम' },
  gym: { en: 'Gymnasium', hi: 'जिम्नेजियम' },
  hostel: { en: 'Hostels', hi: 'छात्रावास' },
  mess: { en: 'Mess', hi: 'मेस' },
  guest: { en: 'Guest House', hi: 'अतिथि गृह' },
  doctors: { en: "Doctors' Residence", hi: 'डॉक्टर निवास' },
  cafe: { en: 'Cafeteria', hi: 'कैफेटेरिया' },
  common: { en: 'Common Room', hi: 'कॉमन रूम' },
  cath: { en: 'Cath Lab', hi: 'कैथ लैब' },
};

const keys = Object.keys(list);
const imgs = [6129870, 32213424, 6129115, 6129147, 6129655, 6129681];

export default function Facilities() {
  const { i18n } = useTranslation();
  const lang = (i18n.language.split('-')[0] || 'en') as 'en' | 'hi';
  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="facilitiesPage.label" titleKey="facilitiesPage.title" subtitleKey="facilitiesPage.subtitle" />
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {keys.map((k, i) => (
            <div key={k} className="group relative rounded-[2rem] overflow-hidden h-64 cursor-grow">
              <img src={`https://images.pexels.com/photos/${imgs[i % imgs.length]}/pexels-photo-${imgs[i % imgs.length]}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600`} alt={list[k][lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 flex items-center justify-between w-full">
                <h3 className="font-serif text-2xl font-bold text-white">{list[k][lang]}</h3>
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-[var(--color-amber)] transition-colors"><ArrowUpRight size={16} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
