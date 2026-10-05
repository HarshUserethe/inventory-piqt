"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { heroContent } from "@/config/homepage";

const highlights = [
  "No long-term lock-ins",
  "90-day results guarantee",
  "24/7 global support",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1325] pt-28 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Base Color */}
        <div className="absolute inset-0 bg-[#0A1325]" />

        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[100px] pointer-events-none" />

        {/* Subtle Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vertical glass panel reflection line effect */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[55%] w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />
        <div className="hidden lg:block absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-accent-500/15 to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col justify-between py-6">
        {/* Top Greeting Badge */}
        <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary-300 mb-8 sm:mb-12 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span>{heroContent.badge}</span>
        </div>

        {/* Main Giant Display Headline */}
        <div className="mb-14 sm:mb-20 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold text-white leading-[1.05] tracking-tight max-w-7xl">
            {heroContent.headline}{" "}
            <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-accent-400 bg-clip-text text-transparent font-bold">
              {heroContent.headlineAccent}
            </span>
          </h1>
        </div>

        {/* Bottom Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pt-8 border-t border-white/10 animate-fade-in">
          {/* Left Side: Key Highlights & Enterprise Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                Trusted by enterprise leaders
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {heroContent.trustedBy.map((exchange) => (
                  <div
                    key={exchange}
                    className="px-3.5 py-1.5 rounded-md bg-neutral-800/40 border border-neutral-700/40 text-neutral-300 text-xs font-semibold backdrop-blur-sm"
                  >
                    {exchange}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Description & Pill Action Button */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 lg:pl-6">
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-xl">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={heroContent.primaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-base transition-all duration-300 shadow-lg group"
              >
                <span>{heroContent.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium text-base transition-all duration-300"
              >
                <span>{heroContent.secondaryCta.label}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-30 pointer-events-none">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-neutral-400" />
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
      </div>
    </section>
  );
}

