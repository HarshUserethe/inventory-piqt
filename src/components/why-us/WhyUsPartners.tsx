"use client";

import { motion } from "framer-motion";
import { partnerBrands } from "@/config/why-us";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { ShieldCheck, Cpu } from "lucide-react";

export default function WhyUsPartners() {
  return (
    <section className="relative z-20 py-20 sm:py-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container-custom text-center">
        <RevealOnScroll>
          <SectionHeading
            badge="Technology Ecosystem"
            title="Certified Partnerships & Integration with"
            accent="Industry Leaders"
            description="We seamlessly integrate with your existing technology stack, tools, and CRM platforms."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        {/* Partner Logos Marquee / Badge Cloud */}
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-lg shadow-blue-500/5 hover:border-blue-500/40 hover:shadow-blue-500/15 text-slate-800 dark:text-slate-200 text-base sm:text-lg font-bold tracking-tight flex items-center gap-3 transition-colors cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                <span>{brand}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
