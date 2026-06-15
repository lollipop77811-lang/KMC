import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const depts = [
  { key: 'pathology', cat: 'paraClinical', video: '/KMC_Vid/Patho.webm' },
  { key: 'physiology', cat: 'preClinical', video: '/KMC_Vid/Physiology.webm' },
  { key: 'psychiatry', cat: 'clinical', video: '/KMC_Vid/Psychiatry.webm' },
  { key: 'anaesth', cat: 'clinical', video: '/KMC_Vid/Anaesthesiology.webm' },
  { key: 'microbiology', cat: 'paraClinical', video: '/KMC_Vid/Microbiology.webm' },
  { key: 'community', cat: 'paraClinical', video: '/KMC_Vid/PSM.webm' },
  { key: 'anatomy', cat: 'preClinical', video: '/KMC_Vid/Anatomy.webm' },
];

export default function DepartmentsScroll() {
  const { t } = useTranslation();
  const scroll = useRef<HTMLDivElement>(null);
  const sec = useRef<HTMLElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!scroll.current || !sec.current) return;
    
    const ctx = gsap.context(() => {
      const w = scroll.current!.scrollWidth - window.innerWidth;
      if (w <= 0) return;
      
      gsap.to(scroll.current, {
        x: -w, ease: 'none',
        scrollTrigger: { 
          trigger: sec.current, 
          start: 'top top', 
          end: `+=${w * 1.4}`, 
          pin: true, 
          scrub: 1, 
          invalidateOnRefresh: true 
        },
      });
    }, sec);

    return () => ctx.revert();
  }, []);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  return (
    <>
      <section ref={sec} className="bg-[var(--color-teal-dark)] py-20 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-[var(--color-amber)]" /><span className="text-label text-[var(--color-amber)]">{t('deptScroll.label')}</span>
          </div>
          <div className="flex justify-between items-end gap-6">
            <h2 className="text-4xl md:text-6xl text-white max-w-2xl">{t('deptScroll.title1')}<br />{t('deptScroll.title2')}</h2>
            <Link to="/departments" className="hidden md:flex items-center gap-2 text-white/80 hover:text-[var(--color-amber)] font-semibold cursor-grow">{t('deptScroll.viewAll')} <ArrowRight size={16} /></Link>
          </div>
        </div>

        <div className="flex w-full">
          <div ref={scroll} className="flex gap-6 px-6 md:px-12 w-max">
            {depts.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedVideo(d.video)}
                className="group relative w-[280px] md:w-[360px] h-[400px] md:h-[460px] shrink-0 rounded-[2rem] overflow-hidden cursor-grow bg-[var(--color-teal-dark)] text-left"
              >
                <video src={d.video} muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 backdrop-blur text-[var(--color-amber)] text-xs font-bold mb-3">{t(`deptScroll.categories.${d.cat}`)}</span>
                  <h3 className="text-3xl font-serif font-bold text-white">{t(`deptScroll.items.${d.key}`)}</h3>
                </div>
                <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white group-hover:bg-[var(--color-amber)] transition-colors"><ArrowUpRight size={18} /></div>
              </button>
            ))}
            <Link to="/departments" className="w-[280px] md:w-[360px] h-[400px] md:h-[460px] shrink-0 rounded-[2rem] bg-[var(--color-amber)] flex flex-col items-center justify-center gap-4 text-[var(--color-navy)] cursor-grow group">
              <span className="w-16 h-16 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowRight size={24} /></span>
              <span className="font-serif font-bold text-2xl text-center px-6">{t('deptScroll.exploreAll')}</span>
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={closeVideo}
          >
            <motion.video
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              ref={videoRef}
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              className="max-w-[100%] max-h-[100%] md:max-w-[90vw] md:max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); closeVideo(); }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-[120] cursor-pointer"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
