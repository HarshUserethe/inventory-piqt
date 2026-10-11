"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Per-Letter Text Roll Button ──
interface TextRollButtonProps {
  label: string;
  href: string;
  primary?: boolean;
}

function TextRollButton({ label, href, primary = false }: TextRollButtonProps) {
  const letters = Array.from(label);

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group relative inline-flex items-center justify-center h-[40px] sm:h-[42px] px-6 rounded-full text-[15px] sm:text-[16px] font-semibold transition-all duration-300 overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80",
        primary
          ? "bg-[#1A73FF] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:shadow-white/10 hover:scale-105 active:scale-95"
          : "bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-100 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/5 hover:scale-105 active:scale-95 shadow-sm dark:shadow-none"
      )}
    >
      <span className="relative inline-flex overflow-hidden py-1">
        {/* Top layer (slides UP) */}
        <span className="inline-flex">
          {letters.map((char, i) => (
            <span
              key={`top-${i}`}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[130%]"
              style={{
                transitionDelay: `${i * 15}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Bottom layer (slides IN FROM BELOW) */}
        <span className="absolute inset-0 inline-flex" aria-hidden="true">
          {letters.map((char, i) => (
            <span
              key={`bot-${i}`}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[130%] group-hover:translate-y-0"
              style={{
                transitionDelay: `${i * 15}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

// ── Main Hero Section ──
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden flex flex-col justify-between items-center pt-[12svh] pb-16 sm:pt-[14svh] md:pt-36 md:pb-24 transition-colors duration-300"
      aria-label="Visuvate Hero"
    >
      {/* ── Soft Blue Vignette Glow (GPU Accelerated) ── */}
      <motion.div
        className="hero-glow-container"
        style={{ y: glowY, willChange: "transform", transform: "translateZ(0)" }}
        aria-hidden="true"
      >
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="hero-glow-bottom" />
      </motion.div>

      {/* ── Hero Content Column ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 text-left md:text-center flex flex-col items-start md:items-center w-full flex-1">

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 self-start md:self-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[14px] md:text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Global BPM & Call Center Solutions
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline home-hero-headline max-w-6xl mx-auto mb-6 relative z-20 !text-left md:!text-center w-full !text-[3.5rem] !leading-[0.92] md:!text-[clamp(2.5rem,6.25vw,6.25rem)] md:!leading-[1.1]">
          {/* Word 1: Connecting */}
          <span className="block md:inline-block overflow-hidden pb-1 md:pb-3 md:mr-5 pt-0.5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans whitespace-nowrap">Connecting</span>
            </motion.span>
          </span>

          {/* Word 2: Businesses */}
          <span className="block md:inline-block overflow-hidden pb-1 md:pb-3 pt-0.5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="serif italic whitespace-nowrap">Businesses</span>
            </motion.span>
          </span>

          {/* Line break for Desktop */}
          <span className="hidden md:block" />

          {/* Word 3: with */}
          <span className="block md:inline-block overflow-hidden pb-1 md:pb-3 md:mr-5 pt-0.5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="serif italic whitespace-nowrap">with</span>
            </motion.span>
          </span>

          {/* Word 4: Excellence */}
          <span className="block md:inline-block overflow-hidden pb-1.5 md:pb-3 pt-0.5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans whitespace-nowrap">Excellence</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[17px] md:text-[18px] font-normal max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed transition-colors duration-300 text-left md:text-center"
        >
          We are a 24/7 global call center empowering businesses with dedicated, accent-neutral customer support and business specialists. We fill operational gaps, helping business owners achieve seamless customer relations and scale efficiently.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-start md:justify-center gap-4 w-full md:w-auto"
        >
          <TextRollButton label="Get in touch" href="/contact" primary />
          <TextRollButton label="Our services" href="/services" />
        </motion.div>
      </div>
    </section>
  );
}

