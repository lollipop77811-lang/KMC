import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

interface DropdownItem {
  key: string;
  href?: string;
}

interface DropdownGroup {
  key: string;
  items: DropdownItem[];
}

interface NavLink {
  key: string;
  path?: string;
  dropdown?: DropdownGroup[];
}

const BASE = 'https://kmcmedicalcollege.com';

const nmcDropdown: DropdownGroup[] = [
  {
    key: 'nmc.deanMs',
    items: [{ key: 'nmc.deanMsDetail', href: `${BASE}/dean&supretendent` }],
  },
  {
    key: 'nmc.staffDetails',
    items: [
      { key: 'nmc.facultyUgMsr', href: `${BASE}/assets/pdf/Teaching Staff.pdf` },
      { key: 'nmc.nursingStaff', href: `${BASE}/assets/pdf/Nursing Staff List.pdf` },
      { key: 'nmc.nonTeachingStaff', href: `${BASE}/assets/pdf/NonTeachingStaff.pdf` },
    ],
  },
  {
    key: 'nmc.bedDistribution',
    items: [{ key: 'nmc.bedDistributionPdf', href: `${BASE}/assets/pdf/BedDistribution.pdf` }],
  },
  {
    key: 'nmc.vcRegistrar',
    items: [{ key: 'nmc.vcRegistrarLink', href: `${BASE}/vc&registrar` }],
  },
  {
    key: 'nmc.institutionalCommittee',
    items: [
      { key: 'nmc.genderHarassment', href: `${BASE}/assets/pdf/COMMITTEE_FOR_PREVENTION_OF_GENDER_HARASSMENT.pdf` },
      { key: 'nmc.collegeCouncil', href: `${BASE}/assets/pdf/COLLEGE_COUNCIL_COMMITTEE.pdf` },
      { key: 'nmc.antiRagging', href: `${BASE}/assets/pdf/ANTI_RAGGING_COMMITTEE.pdf` },
      { key: 'nmc.antiRaggingSquad', href: `${BASE}/assets/pdf/Anti_Ranging_Squad.pdf` },
      { key: 'nmc.infectionControl', href: `${BASE}/assets/pdf/HOSPITAL_INFECTION_CONTROL_COMMITTE.pdf` },
      { key: 'nmc.studentAffairs', href: `${BASE}/assets/pdf/student_affairs_hostel_committies.pdf` },
      { key: 'nmc.pharmacovigilance', href: `${BASE}/assets/pdf/PHARMAVIGILANCE_COMMITTEE.pdf` },
      { key: 'nmc.curriculumCommittee', href: `${BASE}/assets/pdf/CURRICULAM_COMMITTE.pdf` },
      { key: 'nmc.medicalEducation', href: `${BASE}/assets/pdf/medical_education_unit.pdf` },
      { key: 'nmc.medicalResearch', href: `${BASE}/assets/pdf/medicalresearchcommittee.pdf` },
    ],
  },
  {
    key: 'nmc.recognition',
    items: [
      { key: 'nmc.recognitionStatus', href: `${BASE}/assets/pdf/Recognition Status.pdf` },
      { key: 'nmc.lop', href: `${BASE}/assets/pdf/LOP.pdf` },
      { key: 'nmc.lor', href: `${BASE}/assets/pdf/LOR.pdf` },
      { key: 'nmc.clinicalMaterial', href: `${BASE}/assets/pdf/Clinical Material.pdf` },
    ],
  },
];

const msrDropdown: DropdownGroup[] = [
  {
    key: 'msr.group',
    items: [
      { key: 'msr.collegeInfo', href: `${BASE}/assets/pdf/Collegeinfombbs.pdf` },
      { key: 'msr.deptFaculty', href: `${BASE}/assets/pdf/Departmentwise.pdf` },
      { key: 'msr.cmeProgram', href: `${BASE}/assets/pdf/cme.pdf` },
      { key: 'msr.publication', href: `${BASE}/assets/pdf/Publicationmbbs.pdf` },
      { key: 'msr.universityAffiliation', href: `${BASE}/assets/pdf/ABVMU_Affiliation.pdf` },
      { key: 'msr.essentialCertificate', href: `${BASE}/assets/pdf/Essentiality_Certificate.pdf` },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loc = useLocation();
  const { t } = useTranslation();
  const isHome = loc.pathname === '/';

  const links: NavLink[] = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'departments', path: '/departments' },
    { key: 'hospital', path: '/hospital' },
    { key: 'infoNmc', dropdown: nmcDropdown },
    { key: 'infoMsr', dropdown: msrDropdown },
    { key: 'facilities', path: '/facilities' },
    { key: 'admissions', path: '/admissions' },
    { key: 'news', path: '/news' },
    { key: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); setMobileSubmenu(null); }, [loc.pathname]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center px-4 pt-4">
        <header
          className={`w-full max-w-7xl rounded-2xl transition-all duration-500 ${
            scrolled || !isHome
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,118,110,0.10)] py-3'
              : 'bg-transparent py-4'
          }`}
        >
          <div className="px-5 md:px-7 flex items-center justify-between gap-3">
            <Link to="/" className="cursor-grow shrink-0">
              <img src="/kmc-logo.png" alt="KMC" className="h-14 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {links.map((l) => {
                const isDropdown = !!l.dropdown;
                const active = !isDropdown && loc.pathname === l.path;

                if (isDropdown) {
                  return (
                    <div
                      key={l.key}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(l.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`relative px-2.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-sans font-semibold transition-colors whitespace-nowrap flex items-center gap-1 ${
                          activeDropdown === l.key
                            ? 'text-white'
                            : `${scrolled || !isHome ? 'text-[var(--color-navy)]' : 'text-white/90'} hover:text-[var(--color-teal)]`
                        }`}
                      >
                        {activeDropdown === l.key && (
                          <motion.span
                            layoutId="navpill"
                            className="absolute inset-0 bg-[var(--color-teal)] rounded-full -z-10"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        {t(`nav.${l.key}`)}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === l.key ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === l.key && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_12px_40px_rgba(15,41,66,0.15)] border border-[var(--color-sage)] overflow-hidden"
                          >
                            <div className="max-h-[70vh] overflow-y-auto py-2">
                              {l.dropdown!.map((group) => (
                                <div key={group.key}>
                                  <div className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-teal)] bg-[var(--color-mist)]/60">
                                    {t(`navDropdown.${group.key}`)}
                                  </div>
                                  {group.items.map((item) => (
                                    <a
                                      key={item.key}
                                      href={item.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-teal)]/5 hover:text-[var(--color-teal)] transition-colors group/item"
                                    >
                                      <span className="flex-1">{t(`navDropdown.${item.key}`)}</span>
                                      <ExternalLink size={12} className="text-[var(--color-text-muted)] group-hover/item:text-[var(--color-teal)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.key}
                    to={l.path!}
                    className={`relative px-2.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-sans font-semibold transition-colors whitespace-nowrap ${
                      active ? 'text-white' : `${scrolled || !isHome ? 'text-[var(--color-navy)]' : 'text-white/90'} hover:text-[var(--color-teal)]`
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navpill"
                        className="absolute inset-0 bg-[var(--color-teal)] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {t(`nav.${l.key}`)}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <LanguageToggle dark={isHome && !scrolled} />
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle dark={isHome && !scrolled} />
              <button className={`p-2 ${scrolled || !isHome ? 'text-[var(--color-navy)]' : 'text-white'}`} onClick={() => setOpen(!open)}>
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[var(--color-navy)] z-[99] flex flex-col justify-center px-8 pt-24 overflow-y-auto"
          >
            <div className="mb-8">
              <img src="/kmc-logo.png" alt="KMC" className="h-16 w-auto brightness-0 invert" />
            </div>
            <div className="flex flex-col gap-4">
              {links.map((l, i) => {
                const isDropdown = !!l.dropdown;
                if (isDropdown) {
                  const isOpen = mobileSubmenu === l.key;
                  return (
                    <div key={l.key}>
                      <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                      >
                        <button
                          onClick={() => setMobileSubmenu(isOpen ? null : l.key)}
                          className="text-4xl sm:text-5xl font-serif font-bold text-white hover:text-[var(--color-teal-light)] transition-colors flex items-center gap-3"
                        >
                          {t(`nav.${l.key}`)}
                          <ChevronDown size={28} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </motion.div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-4 mt-2 pl-4 border-l-2 border-white/20"
                          >
                            {l.dropdown!.map((group) => (
                              <div key={group.key} className="mb-3">
                                <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-teal-light)] font-bold mb-2">
                                  {t(`navDropdown.${group.key}`)}
                                </div>
                                {group.items.map((item) => (
                                  <a
                                    key={item.key}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block py-1.5 text-lg text-white/70 hover:text-white transition-colors"
                                  >
                                    {t(`navDropdown.${item.key}`)}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.div
                    key={l.key}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <Link to={l.path!} className="text-4xl sm:text-5xl font-serif font-bold text-white hover:text-[var(--color-teal-light)] transition-colors">
                      {t(`nav.${l.key}`)}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 pt-8 border-t border-white/15" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
