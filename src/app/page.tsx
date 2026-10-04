import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import BpmAdvantagesSection from "@/components/home/BpmAdvantagesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechnologySection from "@/components/home/TechnologySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CtaBanner from "@/components/home/CtaBanner";
import { siteSections } from "@/config/sections";

export const metadata: Metadata = {
  title: "Process IQ Tech | Intelligent Business Process Management",
  description:
    "AI-powered BPM solutions that streamline operations, reduce costs by up to 45%, and accelerate growth for 500+ global enterprises.",
};

export default function HomePage() {
  const cfg = siteSections.homepage;

  return (
    <>
      {cfg.hero && <HeroSection />}
      {cfg.valueProposition && <ValuePropositionSection />}
      {cfg.stats && <StatsSection />}
      {cfg.servicesOverview && <ServicesOverview />}
      {cfg.bpmAdvantages && <BpmAdvantagesSection />}
      {cfg.process && <ProcessSection />}
      {cfg.technology && <TechnologySection />}
      {cfg.industries && <IndustriesSection />}
      {cfg.testimonials && <TestimonialsSection />}
      {cfg.whyUs && <WhyUsSection />}
      {cfg.ctaBanner && <CtaBanner />}
    </>
  );
}

