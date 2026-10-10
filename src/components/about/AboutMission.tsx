"use client";

import Image from "next/image";
import { Headphones, Users, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const missionPillars = [
  {
    icon: Headphones,
    title: "24/7 Accent-Neutral Support",
    description: "Fluent, empathetic customer service specialists available around the clock.",
  },
  {
    icon: Users,
    title: "Dedicated Operational Talent",
    description: "Handpicked specialists integrated seamlessly into your existing workflows.",
  },
  {
    icon: Sparkles,
    title: "Human Expertise & Technology",
    description: "Unlocking untapped potential in inefficient processes by combining human skill with technological innovation.",
  },
  {
    icon: TrendingUp,
    title: "Accelerated Business Growth",
    description: "Partnering with scale-ups and enterprises so businesses grow faster and teams work smarter.",
  },
];

export default function AboutMission() {
  return (
    <section className="section-padding bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Frame */}
          <RevealOnScroll>
            <div className="relative rounded-[28px] overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                  alt="Process IQ Tech global team collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 dark:bg-[#12141C]/90 backdrop-blur-md border border-slate-200/80 dark:border-white/15 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A73FF] text-white flex items-center justify-center shrink-0 font-bold text-xl">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Process IQ Tech Operations Hub
                  </h4>
                  <p className="text-slate-600 dark:text-neutral-300 text-xs mt-0.5">
                    Empowering global scale-ups & enterprises to operate at their best.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Mission Content */}
          <div>
            <RevealOnScroll>
              <SectionHeading
                badge="Our Mission"
                title="Unlocking Potential in"
                accent="Every Workflow"
                description="We believe every organization has untapped potential locked in inefficient processes. Our mission is to unlock it using human expertise and technological innovation."
                className="mb-6"
              />
              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
                We partner with ambitious companies — from high-growth scale-ups to established enterprises — to redesign the way they work. What drives us is simple: when processes work better, businesses grow faster, employees work smarter, and customers are served better.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {missionPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <RevealOnScroll key={pillar.title} delay={idx * 70}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/15 border border-blue-500/20 text-[#1A73FF] dark:text-[#3B82F6] flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-600 dark:text-neutral-400 text-xs leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
