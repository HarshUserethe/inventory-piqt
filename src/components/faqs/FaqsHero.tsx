"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HelpCircle, Sparkles, MessageSquare } from "lucide-react";

export default function FaqsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden z-10 flex flex-col justify-center items-center pt-32 pb-16 transition-colors duration-300"
      aria-label="Frequently Asked Questions"
    >
      {/* Soft Blue Vignette Glow */}
      <motion.div
        className="hero-glow-container"
        style={{ y: glowY, willChange: "transform", transform: "translateZ(0)" }}
        aria-hidden="true"
      >
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="hero-glow-bottom" />
      </motion.div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center my-auto">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Frequently Asked Questions
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline max-w-6xl mx-auto mb-6 relative z-20">
          <span className="block overflow-hidden pb-2 pt-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans mr-3 sm:mr-5">Got Questions?</span>
              <span className="serif italic">We Have Answers</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[18px] sm:text-[20px] font-normal max-w-3xl mx-auto leading-relaxed transition-colors duration-300 mb-8"
        >
          Everything you need to know about Process IQ Tech&apos;s BPM practices, technology stack, security standards, commercial terms, and engagement models.
        </motion.p>
      </div>
    </section>
  );
}
