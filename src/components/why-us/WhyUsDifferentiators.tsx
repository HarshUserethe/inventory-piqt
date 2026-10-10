"use client";

import { motion } from "framer-motion";
import { MapPin, Users, TrendingUp, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { differentiators } from "@/config/why-us";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Users,
  TrendingUp,
  CheckCircle: CheckCircle2,
};

export default function WhyUsDifferentiators() {
  return (
    <section
      id="differentiators"
      className="relative z-20 pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-slate-200/70 dark:border-white/10 shadow-2xl transition-colors duration-300"
    >
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="What Sets Us Apart"
            title="Reasons Why Enterprises"
            accent="Choose Us"
            description="Explore the strategic, operational, and commercial advantages of partnering with Process IQ Tech."
            centered
            className="mb-16 sm:mb-20"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] ?? CheckCircle2;
            return (
              <RevealOnScroll key={diff.number} delay={index * 100} className="h-full">
                <div className="group relative h-full rounded-[28px] p-8 sm:p-10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/15 hover:border-blue-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                  {/* Large Stylized Background Number */}
                  <div
                    className="absolute -top-4 -right-2 font-mono font-extrabold text-[7rem] sm:text-[8rem] text-slate-100 dark:text-slate-800/40 select-none pointer-events-none group-hover:text-blue-500/10 transition-colors duration-500 leading-none"
                    aria-hidden="true"
                  >
                    {diff.number}
                  </div>

                  {/* Ambient Glow Pill on Hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-400/25 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {diff.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-[#a1a1a1] text-base leading-relaxed mb-6 font-normal">
                      {diff.description}
                    </p>
                  </div>

                  {/* Bottom Highlight Pill */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200/80 dark:border-blue-800/40">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>{diff.highlight}</span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      Pillar {diff.number}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
