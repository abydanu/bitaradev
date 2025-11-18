'use client';

import Navbar from './components/ui/Navbar';
import HeroSection from './components/contents/HeroSection';
import StatisticSection from './components/contents/StatisticSection';
import LayananSection from './components/contents/LayananSection';
import PaketSection from './components/contents/PaketSection';
import PortofolioSection from './components/contents/PortofolioSection';
import ProcessSection from './components/contents/AlurSection';
import TestimonialSection from './components/contents/TestimoniSection';
import Footer from './components/ui/Footer';


const page = () => {
  return (
    <>
      <div className="min-h-screen w-full relative scroll-smooth">
        <div
          className="fixed inset-0 -z-10 pointer-events-none bg-white"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #3aabdb  100%)",
          }}
        />
        <Navbar />
        <HeroSection />
        <StatisticSection />
        <LayananSection />
        <PaketSection />
        <PortofolioSection />
        <ProcessSection />
        <TestimonialSection />
        <Footer />
      </div>

    </>
  );
};

export default page;