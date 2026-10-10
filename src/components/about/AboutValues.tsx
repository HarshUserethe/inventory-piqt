"use client";

import { Lightbulb, Handshake, Star, Heart, Globe, Shield } from "lucide-react";
import { companyValues } from "@/config/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const valueIconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Handshake,
  Star,
  Heart,
  Globe,
  Shield,
};

export default function AboutValues() {
  return (
    <section className="section-padding bg-slate-100/60 dark:bg-[#0A0B10] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Our Values"
            title="Principles That Guide"
            accent="Everything We Do"
            description="Our core values form our operational blueprint — guiding every interaction, SLA commitment, and support delivery."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyValues.map((value, index) => {
            const Icon = valueIconMap[value.icon] ?? Star;
            return (
              <RevealOnScroll key={value.title} delay={index * 80} className="h-full">
                <div className="p-8 rounded-[24px] bg-white dark:bg-[#12141C] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  {/* Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{ background: "linear-gradient(135deg, #1A73FF 0%, #3B82F6 100%)" }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl mb-3 group-hover:text-[#1A73FF] dark:group-hover:text-[#3B82F6] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
