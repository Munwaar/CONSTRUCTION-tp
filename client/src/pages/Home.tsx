import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatisticsSection from "@/components/StatisticsSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useLenis();

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden">
      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Custom Cursor */}
      {!loading && <CustomCursor />}

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="noise-overlay">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <StatisticsSection />
        <TimelineSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
