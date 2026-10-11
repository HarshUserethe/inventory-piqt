"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden z-10 flex flex-col justify-between items-center pt-[12svh] pb-8 sm:pt-[14svh] sm:pb-12 md:pt-36 transition-colors duration-300"
      aria-label="Process IQ Tech Contact"
    >
      {/* Soft Blue Vignette Glow (GPU Accelerated) */}
      <motion.div
        className="hero-glow-container"
        style={{ y: glowY, willChange: "transform", transform: "translateZ(0)" }}
        aria-hidden="true"
      >
        <div className="hero-glow-left" />
        <div className="hero-glow-right" />
        <div className="hero-glow-bottom" />
      </motion.div>

      {/* Centered Hero Content Column */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center w-full">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Contact Us
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline max-w-6xl mx-auto mb-6 relative z-20">
          <span className="block overflow-hidden pb-3 sm:pb-2 pt-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans mr-3 sm:mr-5">Let&apos;s Start Your</span>
              <span className="serif italic">Transformation Journey</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[17px] md:text-[18px] font-normal max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed transition-colors duration-300"
        >
          Reach out to our team for a free process assessment, partnership inquiry, or just to learn more about how we can help your organization.
        </motion.p>

        {/* Hero Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#1A73FF] text-white hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-neutral-100 font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 group"
          >
            <span>Schedule Free Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Call Us Directly</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#contact-form-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 text-slate-400 dark:text-neutral-500 hover:text-[#1A73FF] dark:hover:text-blue-400 transition-colors group cursor-pointer pb-2"
        aria-label="Scroll to contact form"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 dark:text-neutral-500 group-hover:text-[#1A73FF] dark:group-hover:text-blue-400 transition-colors">
          Scroll to Form
        </span>
        <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#1A73FF] dark:text-[#3B82F6]" />
        </div>
      </motion.a>
    </section>
  );
}
