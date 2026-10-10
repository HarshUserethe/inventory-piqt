"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const steps = [
  {
    step: "01",
    title: "Discovery & Operational Audit",
    description:
      "We analyze your current processes, identify operational bottlenecks, and map out high-impact support strategies.",
  },
  {
    step: "02",
    title: "Talent Alignment & Custom Setup",
    description:
      "We handpick accent-neutral specialists trained specifically in your domain, brand guidelines, and software tools.",
  },
  {
    step: "03",
    title: "Seamless Transition & Integration",
    description:
      "Our team integrates into your daily workflows without disrupting ongoing business operations or customer support.",
  },
  {
    step: "04",
    title: "24/7 Execution & Continuous Optimization",
    description:
      "Round-the-clock execution backed by real-time quality monitoring, performance analytics, and SLA compliance.",
  },
];

export default function ServicesWorkflow() {
  return (
    <section className="section-padding bg-slate-100/60 dark:bg-[#0E1017] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="How We Work"
            title="Our Proven 4-Step"
            accent="Engagement Workflow"
            description="A structured, risk-free onboarding framework that delivers immediate operational continuity and long-term efficiency."
            centered
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <RevealOnScroll key={item.step} delay={index * 80} className="h-full">
              <div className="p-8 rounded-[24px] bg-white dark:bg-[#12141C] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <span className="inline-block font-display font-black text-3xl sm:text-4xl text-[#1A73FF] dark:text-[#3B82F6] mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-[#1A73FF] dark:group-hover:text-[#3B82F6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {item.description}
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
