"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroContent } from "@/config/homepage";

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1325] pt-24 pb-12 lg:py-0 lg:h-screen lg:max-h-[960px]">
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

      <div className="container-custom relative z-10 w-full flex flex-col justify-center py-4 lg:py-6">
        {/* Top Greeting Badge */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-primary-300 mb-4 sm:mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span>{heroContent.badge}</span>
        </div>

        {/* Main Display Headline */}
        <div className="mb-6 sm:mb-8 lg:mb-10 animate-fade-in">
          <h1 className="font-display text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold text-white leading-[1.1] sm:leading-[1.05] tracking-tight max-w-6xl">
            We Make Your<br className="block sm:hidden" />{" "}
            Business<br className="block sm:hidden" />{" "}
            Work{" "}
            <span className="animate-shiny-text font-bold drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]">
              Smarter,<br className="block sm:hidden" />{" "}
              Faster & 24/7.
            </span>
          </h1>
        </div>

        {/* Bottom Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end pt-5 lg:pt-6 border-t border-white/10 animate-fade-in">
          {/* Left Side: Enterprise Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="hidden sm:block pt-1">
              <p className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-2">
                Trusted by enterprise leaders
              </p>
              <div className="flex flex-wrap gap-2.5 items-center">
                {heroContent.trustedBy.map((exchange) => (
                  <div
                    key={exchange}
                    className="px-3 py-1 rounded-md bg-neutral-800/40 border border-neutral-700/40 text-neutral-300 text-xs font-semibold backdrop-blur-sm"
                  >
                    {exchange}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Description & Pill Action Button */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 lg:pl-4">
            {/* Desktop Description */}
            <p className="hidden sm:block text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-xl">
              {heroContent.description}
            </p>
            {/* Mobile Description with Read More toggle & reserved height space */}
            <div className="block sm:hidden min-h-[130px] max-w-xl">
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                We are a 24/7 global call center empowering businesses with dedicated, accent-neutral customer support and business specialists
                {isExpanded ? (
                  <span>
                    . We fill operational gaps, helping business owners achieve seamless customer relations and scale efficiently.{" "}
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white font-semibold underline underline-offset-2 hover:text-neutral-200 transition-colors inline-block cursor-pointer"
                    >
                      show less
                    </button>
                  </span>
                ) : (
                  <span>
                    ...{" "}
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-white font-semibold underline underline-offset-2 hover:text-neutral-200 transition-colors inline-block cursor-pointer"
                    >
                      read more
                    </button>
                  </span>
                )}
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 pt-1">
              <Link
                href={heroContent.primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg group"
              >
                <span>{heroContent.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium text-sm sm:text-base transition-all duration-300"
              >
                <span>{heroContent.secondaryCta.label}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-30 pointer-events-none">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-neutral-400" />
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
      </div>
    </section>
  );
}



