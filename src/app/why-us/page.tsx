import type { Metadata } from "next";
import WhyUsHero from "@/components/why-us/WhyUsHero";
import WhyUsDifferentiators from "@/components/why-us/WhyUsDifferentiators";
import WhyUsPartners from "@/components/why-us/WhyUsPartners";

export const metadata: Metadata = {
  title: "Why Choose Us | Process IQ Tech",
  description:
    "Discover what sets Process IQ Tech apart — India's top-tier talent pool, outcome guarantees, proprietary technology, and simple, transparent business terms.",
};

export default function WhyUsPage() {
  return (
    <main className="relative min-h-screen bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <WhyUsHero />
      <WhyUsDifferentiators />
      <WhyUsPartners />
    </main>
  );
}
