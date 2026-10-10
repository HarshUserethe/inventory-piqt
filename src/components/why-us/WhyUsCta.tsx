"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

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
        "group relative inline-flex items-center justify-center h-[48px] px-8 rounded-full text-[16px] sm:text-[18px] font-semibold transition-all duration-300 overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80",
        primary
          ? "bg-white text-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
          : "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-105 active:scale-95"
      )}
    >
      <span className="relative inline-flex overflow-hidden py-1">
        <span className="inline-flex">
          {letters.map((char, i) => (
            <span
              key={`top-${i}`}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[130%]"
              style={{ transitionDelay: `${i * 15}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="absolute inset-0 inline-flex" aria-hidden="true">
          {letters.map((char, i) => (
            <span
              key={`bot-${i}`}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[130%] group-hover:translate-y-0"
              style={{ transitionDelay: `${i * 15}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

export default function WhyUsCta() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0B10] text-white overflow-hidden z-20">
      {/* Background Radial Glow Effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(26, 115, 255, 0.25) 0%, rgba(10, 11, 16, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Signature Mixed Sans + Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="signature-headline text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white"
        >
          <span className="sans mr-3 sm:mr-4">Ready to Unlock</span>
          <span className="serif italic text-blue-400">Untapped Potential?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Schedule a complimentary process assessment with our BPM specialists and experience why fast-scaling enterprises partner with Process IQ Tech.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center"
        >
          <TextRollButton label="Schedule Free Assessment" href="/contact" primary />
          <TextRollButton label="Explore Our Services" href="/services" />
        </motion.div>
      </div>
    </section>
  );
}
