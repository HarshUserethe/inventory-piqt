"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroContent } from "@/config/homepage";

import MoltenMetal from "@/components/ui/MoltenMetal";

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A0B10" }}
      aria-label="Hero"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <MoltenMetal
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
          opacity={1}
        />
        {/* Subtle top gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="container-custom relative z-10 w-full pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 animate-fade-in">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
            {heroContent.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-in delay-100 max-w-7xl w-full mx-auto"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
        >
          {heroContent.headline}{" "}
          <span className="animate-shiny-text inline">
            {heroContent.headlineAccent}
          </span>
        </h1>

        {/* Description — desktop */}
        <p className="hidden sm:block text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in delay-200"
           style={{ fontSize: "1.0625rem" }}>
          {heroContent.description}
        </p>

        {/* Description — mobile (expandable) */}
        <div className="block sm:hidden mb-8 max-w-md mx-auto animate-fade-in delay-200">
          <p className="text-neutral-300 leading-relaxed text-[0.9375rem]">
            We are a 24/7 global call center empowering businesses with dedicated, accent-neutral customer support and business specialists
            {isExpanded ? (
              <>
                . We fill operational gaps, helping business owners achieve seamless customer relations and scale efficiently.{" "}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white font-semibold underline underline-offset-2 cursor-pointer"
                >
                  show less
                </button>
              </>
            ) : (
              <>
                ...{" "}
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-white font-semibold underline underline-offset-2 cursor-pointer"
                >
                  read more
                </button>
              </>
            )}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in delay-300">
          <Link
            href={heroContent.primaryCta.href}
            id="hero-cta-primary"
            className="btn-primary text-base px-7 h-12 group"
          >
            <span>{heroContent.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            id="hero-cta-secondary"
            className="btn-ghost text-base px-7 h-12 group"
          >
            <span>{heroContent.secondaryCta.label}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Trusted by strip */}
        <div className="animate-fade-in delay-400">
          <p className="text-[0.7rem] font-semibold text-neutral-500 uppercase tracking-[0.14em] mb-4">
            Trusted by enterprise leaders
          </p>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {heroContent.trustedBy.map((brand) => (
              <span
                key={brand}
                className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 text-sm font-semibold"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 pointer-events-none animate-bounce" aria-hidden="true">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
      </div>
    </section>
  );
}
