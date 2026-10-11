"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const steps = [
  {
    step: "01",
    title: "Rapid Request Review",
    description:
      "Our senior team reviews your operational goals and responds within 2 business hours with an assessment outline.",
  },
  {
    step: "02",
    title: "Free 60-Min Consultation",
    description:
      "A dedicated strategy session to analyze your current process bottlenecks, software tools, and resource capacity.",
  },
  {
    step: "03",
    title: "Tailored BPM Solution",
    description:
      "We engineer a custom operational plan with clear KPIs, transparent SLAs, and cost-optimized staffing structures.",
  },
  {
    step: "04",
    title: "Seamless Deployment",
    description:
      "Domain-trained, accent-neutral specialists integrate into your workflows without disrupting day-to-day operations.",
  },
];

export default function ContactWorkflow() {
  return (
    <section className="section-padding bg-slate-100/60 dark:bg-[#0E1017] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="What To Expect"
            title="Our Transparent"
            accent="Consultation Process"
            description="From your initial inquiry to dedicated operational deployment, here is how we partner with your team."
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
