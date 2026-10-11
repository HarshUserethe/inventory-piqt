"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import OrbitImages from "@/components/ui/OrbitImages";

const orbitalTeamImages = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop",
];

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
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden flex flex-col justify-between items-center pt-[12svh] pb-8 sm:pt-[14svh] sm:pb-12 md:pt-36 md:pb-20 transition-colors duration-300"
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

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-between flex-1">
        {/* Top Group: Eyebrow Pill, Headline, Subheading, Action Buttons */}
        <div className="flex flex-col items-center w-full">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
              Our Story & Mission
            </div>
          </motion.div>

          {/* Signature Mixed Sans + Serif Headline */}
          <h1 className="signature-headline max-w-6xl mx-auto mb-4 sm:mb-6 relative z-20 text-center">
            <span className="flex justify-center overflow-hidden pb-3 pt-1 text-center">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-baseline justify-center whitespace-nowrap relative z-20 pr-1.5"
              >
                <span className="sans mr-2.5 sm:mr-4">Who We</span>
                <span className="serif italic">Are?</span>
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-600 dark:text-[#a1a1a1] text-[17px] md:text-[18px] font-normal max-w-4xl mx-auto leading-relaxed transition-colors duration-300 text-center"
          >
            We are a 24/7 global solution-oriented call center aimed at meeting customer relation goals. We fill operational gaps by employing a highly skilled, dedicated team of accent-neutral customer service professionals and business support specialists.
          </motion.p>

          {/* Action Buttons (Let's connect & Explore services) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-8"
          >
            <TextRollButton label="Let's connect" href="/contact" primary />
            <TextRollButton label="Explore services" href="/services" />
          </motion.div>
        </div>

        {/* Spin Orbital Gallery (Mobile only, just above the capsule frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.56 }}
          className="w-full flex md:hidden items-center justify-center my-auto py-1 sm:py-2 overflow-hidden"
          aria-hidden="true"
        >
          <OrbitImages
            images={orbitalTeamImages}
            shape="ellipse"
            baseWidth={380}
            radiusX={155}
            radiusY={58}
            rotation={-7}
            duration={26}
            itemSize={46}
            showPath={true}
            pathColor="rgba(26, 115, 255, 0.25)"
            pathWidth={1.5}
            responsive={true}
            className="w-full max-w-[340px] h-[160px]"
            centerContent={
              <div className="flex flex-col items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-black/70 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
                  Global Team
                </span>
              </div>
            }
          />
        </motion.div>

        {/* Capsule Image Button (Placed at its place near the bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full flex justify-center mt-auto pt-6 sm:pt-8"
        >
          <Link
            href="/contact"
            aria-label="Connect with Process IQ Tech 24/7 Global Support Team"
            className="group relative inline-flex items-center gap-3.5 sm:gap-4 min-h-[76px] sm:min-h-20 h-auto py-3.5 sm:py-3 px-4 sm:px-6 pl-3 rounded-full bg-white/90 dark:bg-[#12141C]/90 border border-slate-200/90 dark:border-white/20 shadow-xl backdrop-blur-md hover:scale-[1.03] active:scale-95 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl max-w-full sm:max-w-none"
          >
            {/* Real Unsplash Call Center Representative Thumbnail */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-blue-500/40 shadow-md">
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
            <div className="text-left pr-1 sm:pr-2 flex-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-slate-900 dark:text-white font-bold text-[14px] sm:text-lg tracking-tight group-hover:text-[#1A73FF] dark:group-hover:text-[#3B82F6] transition-colors leading-snug">
                  24/7 Dedicated Support Team
                </span>
                <span className="hidden sm:inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Active
                </span>
              </div>
              <p className="text-slate-500 dark:text-neutral-400 text-[11.5px] sm:text-sm font-medium leading-normal mt-0.5">
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
