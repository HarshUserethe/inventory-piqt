"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const statsData = [
  {
    value: "15+",
    label: "Years of Excellence",
    description: "Delivering world-class BPM and customer support solutions globally.",
  },
  {
    value: "2,800+",
    label: "Dedicated Specialists",
    description: "Highly trained, accent-neutral professionals ready to support your brand.",
  },
  {
    value: "24/7/365",
    label: "Uninterrupted Coverage",
    description: "Always active across multiple global timezones for round-the-clock peace of mind.",
  },
  {
    value: "45%",
    label: "Cost Savings",
    description: "Average operational cost reduction achieved for our global enterprise partners.",
  },
];

export default function AboutStats() {
  return (
    <section className="section-padding bg-slate-100/70 dark:bg-[#0E1017] border-y border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Proven Impact"
            title="Quantifiable Results Across"
            accent="Global Operations"
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 80} className="h-full">
              <div className="p-8 rounded-[24px] bg-white dark:bg-[#12141C] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <p className="font-display font-extrabold text-[#1A73FF] dark:text-[#3B82F6] text-4xl sm:text-5xl tracking-tight mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    {stat.label}
                  </p>
                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
