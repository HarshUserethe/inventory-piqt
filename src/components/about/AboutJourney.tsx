"use client";

import { companyMilestones } from "@/config/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export default function AboutJourney() {
  return (
    <section className="section-padding bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Our Journey"
            title="Over a Decade of"
            accent="Operational Excellence"
            description="How Process IQ Tech evolved from a dedicated BPM consulting team into a premier global call center and support partner."
            centered
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {companyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <RevealOnScroll key={item.year} delay={index * 60}>
                  <div className={`relative flex flex-col sm:flex-row items-center ${isEven ? "sm:flex-row-reverse" : ""}`}>
                    
                    {/* Content Card */}
                    <div className="w-full sm:w-[45%]">
                      <div className="p-6 rounded-[20px] bg-white dark:bg-[#12141C] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-blue-500/40 transition-all duration-300 group">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-600/10 dark:bg-blue-500/15 border border-blue-500/20 text-[#1A73FF] dark:text-[#3B82F6] font-bold text-sm mb-3">
                          {item.year}
                        </div>
                        <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-[#1A73FF] dark:group-hover:text-[#3B82F6] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Badge */}
                    <div className="my-4 sm:my-0 w-10 h-10 rounded-full bg-[#1A73FF] text-white font-extrabold text-xs flex items-center justify-center border-4 border-slate-50 dark:border-black shadow-md z-10 shrink-0">
                      •
                    </div>

                    {/* Empty Column for spacing */}
                    <div className="hidden sm:block w-[45%]" />
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
