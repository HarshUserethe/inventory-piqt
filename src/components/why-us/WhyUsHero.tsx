"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Users, TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { whyUsHero, differentiators } from "@/config/why-us";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Users,
  TrendingUp,
  CheckCircle: CheckCircle2,
};

export default function WhyUsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88svh] sm:min-h-[92svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-hidden z-10 flex flex-col justify-between items-center pt-32 pb-16 sm:pb-20 transition-colors duration-300"
      aria-label="Why Process IQ Tech"
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
            {whyUsHero.badge}
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
              <span className="sans mr-3 sm:mr-5">{whyUsHero.headline}</span>
              <span className="serif italic">{whyUsHero.headlineAccent}</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[18px] sm:text-[20px] font-normal max-w-4xl mx-auto leading-relaxed transition-colors duration-300 mb-8"
        >
          {whyUsHero.description}
        </motion.p>
      </div>

      {/* ── 4 Key Pillar Highlight Cards Deck at Bottom Center ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {differentiators.map((diff, idx) => {
            const Icon = iconMap[diff.icon] ?? CheckCircle2;
            return (
              <motion.div
                key={diff.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                className={cn(
                  "relative p-4 sm:p-5 md:p-6 rounded-[20px] sm:rounded-[24px] bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 group flex flex-col justify-between"
                )}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {diff.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {diff.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
