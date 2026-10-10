"use client";

import { Heart, TrendingUp, BookOpen, Umbrella, Home, Baby } from "lucide-react";
import { benefits } from "@/config/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  TrendingUp,
  BookOpen,
  Umbrella,
  Home,
  Baby,
};

export default function CareersBenefits() {
  return (
    <section className="relative z-20 py-20 sm:py-28 bg-[#F4F5F8] dark:bg-[#07080B] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Benefits & Perks"
            title="Everything You Need to"
            accent="Thrive"
            description="We take care of our team so they can focus on building world-class operations."
            centered
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Heart;
            return (
              <RevealOnScroll key={benefit.label} delay={index * 60}>
                <div className="group text-center p-5 sm:p-6 rounded-[22px] bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {benefit.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                    {benefit.detail}
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
