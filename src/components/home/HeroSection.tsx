"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { heroContent } from "@/config/homepage";

const highlights = [
  "No long-term lock-ins",
  "90-day results guarantee",
  "24/7 global support",
];

const heroSlides = [
  {
    src: "/hero-bpo-1.png",
    alt: "Global BPO Call Center Customer Support Professional",
  },
  {
    src: "/hero-bpo-2.png",
    alt: "Business Process Management & Tech Operations Center",
  },
  {
    src: "/hero-bpo-3.png",
    alt: "24/7 Enterprise Contact Center Specialists",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1325]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Base Color */}
        <div className="absolute inset-0 bg-[#0A1325]" />

        {/* Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[100px] pointer-events-none" />

        {/* Subtle Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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

      {/* Animated Hero Slideshow Layer */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%)",
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-top lg:object-center"
                />
              </div>
            );
          })}

          {/* Left-focused Navy Fade Overlay (Preserves left text contrast while leaving image bright & clear) */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0A1325] via-[#0A1325]/80 via-25% to-transparent lg:via-[#0A1325]/60 pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0A1325]/50 via-transparent via-15% to-[#0A1325]/50 pointer-events-none" />
        </div>
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8 animate-fade-in backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            {heroContent.badge}
          </div>

          {/* Main headline */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.08] tracking-tight mb-6 animate-fade-in">
            {heroContent.headline}
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-accent-400 bg-clip-text text-transparent font-medium">
              {heroContent.headlineAccent}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl mb-10 animate-fade-in">
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in">
            <Link href={heroContent.primaryCta.href} className="btn-primary text-base px-7 py-4">
              {heroContent.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={heroContent.secondaryCta.href} className="btn-outline-white text-base px-7 py-4">
              {heroContent.secondaryCta.label}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-5 mb-16 animate-fade-in">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="animate-fade-in">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              Trusted by companies listed on
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {heroContent.trustedBy.map((exchange) => (
                <div
                  key={exchange}
                  className="px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 text-sm font-semibold backdrop-blur-sm"
                >
                  {exchange}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators / Navigation Controls */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-30 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide
                ? "w-8 bg-accent-400"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-neutral-400" />
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
      </div>
    </section>
  );
}
