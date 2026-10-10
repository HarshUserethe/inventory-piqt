"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function FaqsCta() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#FAFAFC] dark:bg-[#0A0B10] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden z-20">
      {/* Soft Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(26, 115, 255, 0.2) 0%, rgba(10, 11, 16, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-[32px] bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-blue-500/5 transition-colors duration-300">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="font-display font-bold text-slate-900 dark:text-white text-2xl sm:text-3xl mb-3 tracking-tight">
            Still Have Questions?
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            Our team is happy to walk you through anything. Book a no-obligation conversation with one of our BPM specialists.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 font-semibold text-sm transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
