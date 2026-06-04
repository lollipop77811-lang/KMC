import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const facilities = [
  { key: 'library', img: 6129870, span: 'md:col-span-2 md:row-span-2' },
  { key: 'lectures', img: 32213424, span: 'md:col-span-1' },
  { key: 'skillLab', img: 6129115, span: 'md:col-span-1' },
  { key: 'hostels', img: 6129147, span: 'md:col-span-2' },
];

export default function FacilitiesGrid() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5"><span className="w-10 h-[2px] bg-[var(--color-teal)]" /><span className="text-label">{t('facilities.label')}</span></div>
            <h2 className="text-4xl md:text-5xl text-[var(--color-navy)]">{t('facilities.title')}</h2>
          </div>
          <Link to="/facilities" className="inline-flex items-center gap-2 text-[var(--color-teal)] font-semibold cursor-grow group">{t('facilities.exploreCampus')} <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          {facilities.map((f, i) => (
            <Link key={i} to="/facilities" className={`group relative overflow-hidden rounded-[2rem] h-[280px] md:h-auto cursor-grow ${f.span}`}>
              <img src={`https://images.pexels.com/photos/${f.img}/pexels-photo-${f.img}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900`} alt={t(`facilities.items.${f.key}`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 flex items-center justify-between w-full">
                <h3 className="text-2xl font-serif font-bold text-white">{t(`facilities.items.${f.key}`)}</h3>
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-[var(--color-amber)] transition-colors"><ArrowUpRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
