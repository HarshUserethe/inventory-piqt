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
        "group relative inline-flex items-center justify-center h-[40px] sm:h-[42px] px-6 rounded-full text-[15px] sm:text-[16px] font-semibold transition-all duration-300 overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80",
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

export default function ServicesCta() {
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
            Free Operational Audit
          </div>

          <h2 className="font-display font-extrabold text-white text-3xl sm:text-5xl tracking-tight mb-6 max-w-3xl mx-auto">
            Ready to Optimize Your Business Operations?
          </h2>

          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Speak with our BPM specialists to discover how dedicated support teams can reduce costs and scale customer satisfaction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <TextRollButton label="Let's Connect" href="/contact" primary />
            <TextRollButton label="Learn About Us" href="/about" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
