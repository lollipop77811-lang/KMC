import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import AboutSection from '../sections/AboutSection';
import Rankings from '../sections/Rankings';
import DepartmentsScroll from '../sections/DepartmentsScroll';
import HospitalServices from '../sections/HospitalServices';
import Testimonials from '../sections/Testimonials';
import FacilitiesGrid from '../sections/FacilitiesGrid';
import NewsNotices from '../sections/NewsNotices';
import CTABanner from '../sections/CTABanner';

export default function Home() {
  return (
    <div className="bg-[var(--color-bg)]">
      <Hero />
      <TrustBar />
      <AboutSection />
      <Rankings />
      <DepartmentsScroll />
      <HospitalServices />
      <Testimonials />
      <FacilitiesGrid />
      <NewsNotices />
      <CTABanner />
    </div>
  );
}
