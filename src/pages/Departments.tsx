import { useState } from 'react';
import { 
  ArrowUpRight, BookOpen, Activity, FlaskConical, Bug, Pill, Microscope, Scale, Users,
  Stethoscope, Sparkles, Brain, Baby, Scissors, Bone, Eye, Ear, Heart,
  Ambulance, Syringe, Scan, HeartPulse, Smile
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import { departments } from '../data/departments';

// Import images
import imgAnatomy from '../assets/Department/anatamy 1.webp';
import imgPhysiology from '../assets/Department/physiology 2.webp';
import imgBiochemistry from '../assets/Department/biochemestry 3.webp';
import imgMicrobiology from '../assets/Department/microbiology 04.webp';
import imgPharmacology from '../assets/Department/pharmacology 05.webp';
import imgPathology from '../assets/Department/pathology 06.webp';
import imgForensic from '../assets/Department/forensic 07.webp';
import imgCommunity from '../assets/Department/community medicl 08.webp';
import imgGeneralMed from '../assets/Department/general medicine 09.webp';
import imgDermatology from '../assets/Department/dermatology 10.webp';
import imgPsychiatry from '../assets/Department/psychiatry 11.webp';
import imgPediatrics from '../assets/Department/pediatric 12.webp';
import imgGeneralSurg from '../assets/Department/general surgery 13.webp';
import imgOrtho from '../assets/Department/orthopediac 14.webp';
import imgOphthal from '../assets/Department/opthalmology 15.webp';
import imgEnt from '../assets/Department/ENT 16.webp';
import imgObgy from '../assets/Department/Obstetrics & Gynaecology 17.webp';
import imgEmergency from '../assets/Department/emergency medicine.webp';
import imgAnaesth from '../assets/Department/Anaesthesiology 19.webp';
import imgRadio from '../assets/Department/radiodiagnosis 20.webp';
import imgDentistry from '../assets/Department/Dentistry 21.webp';
import imgPhysio from '../assets/Department/Physiotherapy 22.webp';
import imgGastro from '../assets/Department/Gastrology 23.webp';
import imgCardio from '../assets/Department/Cardiology 24.webp';
import imgNeuro from '../assets/Department/Neurology 25.webp';
import imgUro from '../assets/Department/urology26.webp';
import imgPlastic from '../assets/Department/plastic surgery 27.webp';

const keyToSlug: Record<string, string> = {};
departments.forEach((d) => { keyToSlug[d.key] = d.slug; });

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

const imgMap: Record<string, string> = {
  anatomy: imgAnatomy,
  physiology: imgPhysiology,
  biochemistry: imgBiochemistry,
  microbiology: imgMicrobiology,
  pharmacology: imgPharmacology,
  pathology: imgPathology,
  forensic: imgForensic,
  community: imgCommunity,
  generalMed: imgGeneralMed,
  dermatology: imgDermatology,
  psychiatry: imgPsychiatry,
  pediatrics: imgPediatrics,
  generalSurg: imgGeneralSurg,
  ortho: imgOrtho,
  ophthal: imgOphthal,
  ent: imgEnt,
  obgy: imgObgy,
  emergency: imgEmergency,
  anaesth: imgAnaesth,
  radio: imgRadio,
  dentistry: imgDentistry,
  physio: imgPhysio,
  gastro: imgGastro,
  cardio: imgCardio,
  neuro: imgNeuro,
  uro: imgUro,
  plastic: imgPlastic,
};

const iconMap: Record<string, any> = {
  anatomy: BookOpen,
  physiology: Activity,
  biochemistry: FlaskConical,
  microbiology: Bug,
  pharmacology: Pill,
  pathology: Microscope,
  forensic: Scale,
  community: Users,
  generalMed: Stethoscope,
  dermatology: Sparkles,
  psychiatry: Brain,
  pediatrics: Baby,
  generalSurg: Scissors,
  ortho: Bone,
  ophthal: Eye,
  ent: Ear,
  obgy: HeartPulse,
  emergency: Ambulance,
  anaesth: Syringe,
  radio: Scan,
  dentistry: Smile,
  physio: Activity,
  gastro: Activity,
  cardio: Heart,
  neuro: Brain,
  uro: Activity,
  plastic: Sparkles,
};

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((d) => {
            const IconComponent = iconMap[d.key] || Activity;
            const cardImg = imgMap[d.key];
            const card = (
              <div className="bg-white rounded-[2rem] p-5 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all cursor-grow group h-full flex flex-col">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 shrink-0 relative">
                  <img src={cardImg} alt={t(`departmentsList.${d.key}`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[var(--color-teal)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-sm">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-mist)] text-[var(--color-teal)] flex items-center justify-center group-hover:bg-[var(--color-teal)] group-hover:text-white transition-colors">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-teal)] block mb-1">
                      {t(`deptPage.categories.${d.cat}`)}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[var(--color-navy)] leading-snug">
                      {t(`departmentsList.${d.key}`)}
                    </h3>
                  </div>
                </div>
              </div>
            );
            const slug = keyToSlug[d.key];
            const to = slug ? `/departments/${slug}` : null;
            return to ? (
              <Link key={d.key} to={to} className="block h-full">{card}</Link>
            ) : (
              <div key={d.key} className="h-full">{card}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
