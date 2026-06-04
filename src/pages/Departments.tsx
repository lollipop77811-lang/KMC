import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

const cats = ['all', 'preClinical', 'paraClinical', 'clinical', 'superSpec'] as const;

const data: { key: string; cat: typeof cats[number] }[] = [
  { key: 'anatomy', cat: 'preClinical' }, { key: 'physiology', cat: 'preClinical' }, { key: 'biochemistry', cat: 'preClinical' },
  { key: 'microbiology', cat: 'paraClinical' }, { key: 'pharmacology', cat: 'paraClinical' }, { key: 'pathology', cat: 'paraClinical' },
  { key: 'forensic', cat: 'paraClinical' }, { key: 'community', cat: 'paraClinical' },
  { key: 'generalMed', cat: 'clinical' }, { key: 'dermatology', cat: 'clinical' }, { key: 'psychiatry', cat: 'clinical' },
  { key: 'pediatrics', cat: 'clinical' }, { key: 'generalSurg', cat: 'clinical' }, { key: 'ortho', cat: 'clinical' },
  { key: 'ophthal', cat: 'clinical' }, { key: 'ent', cat: 'clinical' }, { key: 'obgy', cat: 'clinical' },
  { key: 'emergency', cat: 'clinical' }, { key: 'anaesth', cat: 'clinical' }, { key: 'radio', cat: 'clinical' },
  { key: 'dentistry', cat: 'clinical' }, { key: 'physio', cat: 'clinical' },
  { key: 'gastro', cat: 'superSpec' }, { key: 'cardio', cat: 'superSpec' }, { key: 'neuro', cat: 'superSpec' },
  { key: 'uro', cat: 'superSpec' }, { key: 'plastic', cat: 'superSpec' },
];

export default function Departments() {
  const { t } = useTranslation();
  const [active, setActive] = useState<typeof cats[number]>('all');
  const filtered = active === 'all' ? data : data.filter((d) => d.cat === active);

  return (
    <div className="bg-[var(--color-ivory)]">
      <PageHero labelKey="deptPage.label" titleKey="deptPage.title" />
      <section className="pb-24 container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`pill-btn text-sm cursor-grow ${active === c ? 'bg-[var(--color-teal)] text-white' : 'bg-white border border-[var(--color-border)] text-[var(--color-navy)] hover:border-[var(--color-teal)]'}`}>
              {t(`deptPage.categories.${c}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <div key={d.key} className="group bg-white rounded-3xl p-7 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-grow flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-teal)]">{t(`deptPage.categories.${d.cat}`)}</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--color-navy)] mt-1">{t(`departmentsList.${d.key}`)}</h3>
              </div>
              <span className="w-11 h-11 rounded-full bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center group-hover:bg-[var(--color-teal)] group-hover:text-white transition-colors"><ArrowUpRight size={18} /></span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
