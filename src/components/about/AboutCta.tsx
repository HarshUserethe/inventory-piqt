"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

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
          ? "bg-white text-black hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
          : "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-105 active:scale-95"
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

export default function AboutCta() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1A73FF 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-custom text-center relative z-10">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Shape the Future of BPM
          </div>

          <h2 className="font-display font-extrabold text-white text-3xl sm:text-5xl tracking-tight mb-6 max-w-3xl mx-auto">
            Ready to Build a Career or Scale Your Brand?
          </h2>

          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with a 24/7 global support team dedicated to operational excellence, seamless customer relations, and business growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <TextRollButton label="Explore Careers" href="/careers" primary />
            <TextRollButton label="Get in Touch" href="/contact" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
