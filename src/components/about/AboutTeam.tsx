"use client";

import Image from "next/image";
import { Linkedin } from "@/components/ui/BrandIcons";
import { leadershipTeam } from "@/config/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

// Duplicate team array to create a seamless 100% infinite horizontal marquee loop
const teamLoop = [...leadershipTeam, ...leadershipTeam];

// Curved arc transform presets for a subtle curved ribbon line effect
const curvedClasses = [
  "rotate-[-3deg] translate-y-3",
  "rotate-[-1deg] translate-y-1",
  "rotate-[1deg] -translate-y-1.5",
  "rotate-[3deg] translate-y-2",
  "rotate-[-2deg] translate-y-3",
  "rotate-[2deg] translate-y-1",
];

export default function AboutTeam() {
  return (
    <section id="team" className="section-padding bg-slate-100/60 dark:bg-[#0E1017] text-slate-900 dark:text-white border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Leadership"
            title="Meet Our"
            accent="Executive Team"
            description="Our people bring together experience, expertise, and innovation to create exceptional experiences and deliver measurable business impact."
            centered
            className="mb-14"
          />
        </RevealOnScroll>
      </div>

      {/* Horizontal Curved Marquee Loop Viewport */}
      <div className="relative w-full overflow-hidden py-10 pause-on-hover">
        {/* Left & Right Gradient Fade Masks for Seamless Loop Transitions */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-100/95 dark:from-[#0E1017] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-100/95 dark:from-[#0E1017] to-transparent z-20 pointer-events-none" />

        {/* Horizontal Moving Marquee Track */}
        <div className="flex items-center gap-6 sm:gap-8 animate-marquee-horizontal w-max px-4">
          {teamLoop.map((leader, index) => {
            const curveStyle = curvedClasses[index % curvedClasses.length];
            return (
              <div
                key={`team-card-${leader.name}-${index}`}
                className={`relative w-[270px] sm:w-[320px] aspect-[3/4] shrink-0 rounded-[24px] overflow-hidden border border-slate-200/80 dark:border-white/15 bg-slate-900 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/60 hover:scale-105 hover:rotate-0 hover:translate-y-0 transition-all duration-500 group cursor-pointer select-none ${curveStyle}`}
              >
                {/* Full Cover Profile Image */}
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale contrast-110 group-hover:grayscale-0 transition-all"
                  sizes="(max-width: 640px) 270px, 320px"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating LinkedIn Icon (Top Right) */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#1A73FF] hover:border-[#1A73FF] transition-all duration-300 shadow-md z-20"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>

                {/* Frosted Glass Overlay Badge at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-4.5 rounded-[18px] bg-black/45 dark:bg-black/60 backdrop-blur-md border border-white/20 shadow-xl text-left transition-all duration-300 group-hover:bg-[#12141C]/85 group-hover:border-blue-500/50">
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl tracking-tight leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-white/80 dark:text-neutral-300 text-xs sm:text-sm font-medium mt-0.5">
                    {leader.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
