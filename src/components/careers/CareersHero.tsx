"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Upload, Users, Sparkles, ShieldCheck } from "lucide-react";
import { careersHero } from "@/config/careers";

export default function CareersHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85svh] sm:min-h-[90svh] bg-black text-white overflow-hidden z-10 flex flex-col justify-between items-center pt-32 pb-20 transition-colors duration-300"
      aria-label="Process IQ Tech Careers"
    >
      {/* Full-Screen Autoplay Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/career/career_1.mp4" type="video/mp4" />
        </video>

        {/* Vignette & Contrast Overlay Gradients (Video visibility increased by 20%) */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/50" />
      </div>

      {/* Soft Blue Vignette Glow */}
      <motion.div
        className="hero-glow-container opacity-60 pointer-events-none"
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
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-lg transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {careersHero.badge}
          </div>
        </motion.div>

        {/* Signature Mixed Sans + Serif Headline */}
        <h1 className="signature-headline max-w-6xl mx-auto mb-6 relative z-20 text-white">
          <span className="block overflow-hidden pb-2 pt-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block relative z-20"
            >
              <span className="sans mr-3 sm:mr-5 text-white">Shape the Future of</span>
              <span className="serif italic text-blue-400">Business Operations</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-200 text-[18px] sm:text-[20px] font-normal max-w-4xl mx-auto leading-relaxed transition-colors duration-300 mb-8 drop-shadow-sm"
        >
          {careersHero.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="#resume-upload"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Submit Resume</span>
            <Upload className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* ── Key Highlights Pill Cloud at Bottom Center ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Hyderabad & Remote Teams</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200 shadow-md">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Competitive Benefits</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
