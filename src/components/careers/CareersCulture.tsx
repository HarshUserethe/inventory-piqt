"use client";

import { GraduationCap, Building2, Zap, TrendingUp, Smile, Clock } from "lucide-react";
import { culturePoints } from "@/config/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Building: Building2,
  Zap,
  TrendingUp,
  Smile,
  Clock,
};

export default function CareersCulture() {
  return (
    <section className="relative z-20 pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-slate-200/70 dark:border-white/10 shadow-2xl transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Life at Process IQ Tech"
            title="A Culture Built for"
            accent="Extraordinary People"
            description="We invest in the people who power our mission. Here's what it means to work at Process IQ Tech."
            centered
            className="mb-16 sm:mb-20"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {culturePoints.map((point, index) => {
            const Icon = iconMap[point.icon] ?? Zap;
            return (
              <RevealOnScroll key={point.title} delay={index * 80} className="h-full">
                <div className="group relative h-full rounded-[26px] p-7 sm:p-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/15 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-500/15 border border-blue-600/20 dark:border-blue-400/25 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-[#a1a1a1] text-sm sm:text-base leading-relaxed font-normal">
                      {point.description}
                    </p>
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
