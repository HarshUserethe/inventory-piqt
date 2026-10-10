"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const fannedCards = [
  {
    id: "customer-sales",
    title: "Customer Support & Sales",
    badge: "24/7 Support",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    tilt: "-rotate-6 sm:-rotate-8 -translate-x-2 sm:-translate-x-4",
    zIndex: "z-10",
  },
  {
    id: "operations-support",
    title: "Operations & Advisory",
    badge: "BPM Consulting",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    tilt: "rotate-0 scale-105 sm:scale-110 -translate-y-2 sm:-translate-y-4",
    zIndex: "z-20",
  },
  {
    id: "data-services",
    title: "Data & Financial Processing",
    badge: "Analytics & Mining",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tilt: "rotate-6 sm:rotate-8 translate-x-2 sm:translate-x-4",
    zIndex: "z-10",
  },
];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  
  // Parallax scroll effect for center card: elevated position sits cleanly below subheading, glides down to original deck position on scroll down
  const centerCardY = useTransform(scrollYProgress, [0, 0.35], [-45, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white overflow-visible z-10 flex flex-col justify-between items-center pt-32 pb-16 sm:pb-24 transition-colors duration-300"
      aria-label="Process IQ Tech Service Portfolio"
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
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-md text-slate-800 dark:text-white text-[16px] font-semibold tracking-wide shadow-sm dark:shadow-none transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            Complete BPM Service Portfolio
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
              <span className="sans mr-3 sm:mr-5">What We</span>
              <span className="serif italic">Deliver</span>
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-600 dark:text-[#a1a1a1] text-[20px] md:text-[18px] font-normal max-w-4xl mx-auto leading-relaxed transition-colors duration-300 mb-4"
        >
          From day-to-day operations support and advisory to 24/7 customer sales, data processing, and financial reconciliation — we provide full-spectrum BPM capabilities so your business operates at peak efficiency.
        </motion.p>
      </div>

      {/* ── 3 Fanned Cards at Bottom Center (Positioned lower to clear text with parallax scroll physics) ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 flex items-end justify-center mt-16 sm:mt-24 md:mt-28"
      >
        <div className="relative flex items-end justify-center">
          {fannedCards.map((card, idx) => {
            const isCenter = idx === 1;
            return (
              <motion.a
                key={card.id}
                href={`#${card.id}`}
                style={isCenter ? { y: centerCardY } : undefined}
                className={cn(
                  "relative w-[140px] sm:w-[220px] md:w-[260px] aspect-[3/4] rounded-[20px] sm:rounded-[26px] overflow-hidden border-2 border-white/80 dark:border-white/20 shadow-2xl shadow-blue-500/20 bg-slate-900 transition-[border-color,box-shadow] duration-300 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer group shrink-0",
                  card.tilt,
                  card.zIndex
                )}
              >
                {/* Cover Photo */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 220px, 260px"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
