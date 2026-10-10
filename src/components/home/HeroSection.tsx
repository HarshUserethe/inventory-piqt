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
        "group relative inline-flex items-center justify-center h-[46px] px-8 rounded-full text-[18px] font-medium transition-all duration-300 overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80",
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
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden flex flex-col justify-center items-center pt-28 pb-16 md:pt-36 md:pb-24 transition-colors duration-300"
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

      {/* ── Centered Hero Content Column ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center my-auto">

        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Global BPM & Call Center Solutions
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline max-w-6xl mx-auto mb-6 relative z-20">
          {/* Line 1 */}
          <span className="block overflow-hidden pb-2 pt-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans mr-3 sm:mr-5">Connecting</span>
              <span className="serif italic">Businesses</span>
            </motion.span>
          </span>

          {/* Line 2 */}
          <span className="block overflow-hidden pb-3 pt-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="serif italic mr-3 sm:mr-5">With</span>
              <span className="sans">Excellence</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[20px] md:text-[18px] font-normal max-w-4xl mx-auto mb-10 leading-relaxed transition-colors duration-300"
        >
          We are a 24/7 global call center empowering businesses with dedicated, accent-neutral customer support and business specialists. We fill operational gaps, helping business owners achieve seamless customer relations and scale efficiently.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <TextRollButton label="Get in touch" href="/contact" primary />
          <TextRollButton label="Our services" href="/services" />
        </motion.div>
      </div>
    </section>
  );
}

