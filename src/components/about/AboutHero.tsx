"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden flex flex-col justify-center items-center pt-32 pb-20 md:pt-40 md:pb-28 transition-colors duration-300"
      aria-label="About Process IQ Tech"
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

      {/* ── Centered Content ── */}
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
            Our Story & Mission
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline max-w-6xl mx-auto mb-6 relative z-20">
          <span className="block overflow-hidden pb-3 pt-1 pr-6 sm:pr-8">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20 pr-6 sm:pr-8"
            >
              <span className="sans mr-3 sm:mr-5">Who We</span>
              <span className="serif italic pr-2">Are?</span>
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
          We are a 24/7 global solution-oriented call center aimed at meeting customer relation goals. We fill operational gaps by employing a highly skilled, dedicated team of accent-neutral customer service professionals and business support specialists.
        </motion.p>

        {/* Capsule Image Button (Replaces standard buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/contact"
            aria-label="Connect with Process IQ Tech 24/7 Global Support Team"
            className="group relative inline-flex items-center gap-4 h-16 sm:h-20 px-4 sm:px-6 pl-3.5 rounded-full bg-white/90 dark:bg-[#12141C]/90 border border-slate-200/90 dark:border-white/20 shadow-xl backdrop-blur-md hover:scale-[1.03] active:scale-95 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl"
          >
            {/* Real Unsplash Call Center Representative Thumbnail */}
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-blue-500/40 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="Process IQ Tech Global Support Specialist"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="56px"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#12141C]" />
            </div>

            {/* Capsule Info Text */}
            <div className="text-left pr-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-[#1A73FF] dark:group-hover:text-[#3B82F6] transition-colors">
                  24/7 Dedicated Support Team
                </span>
                <span className="hidden sm:inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Active
                </span>
              </div>
              <p className="text-slate-500 dark:text-neutral-400 text-xs sm:text-sm font-medium">
                Accent-neutral experts ready to scale your business
              </p>
            </div>

            {/* Right Action Arrow Badge */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1A73FF] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-300 shadow-md">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
