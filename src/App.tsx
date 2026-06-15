import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Home from './pages/Home';
import About from './pages/About';
import AboutMessagePage from './pages/AboutMessagePage';
import Departments from './pages/Departments';
import DepartmentPage from './pages/DepartmentPage';
import Hospital from './pages/Hospital';
import HospitalService from './pages/HospitalService';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';
import News from './pages/News';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingButtons from './components/FloatingButtons';
import PageTransition from './components/PageTransition';
import BloodCellsBackground from './components/BloodCellsBackground';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.split('-')[0] || 'en';
  }, [i18n.language]);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <BloodCellsBackground />
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:slug" element={<AboutMessagePage />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:slug" element={<DepartmentPage />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/hospital/:slug" element={<HospitalService />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
