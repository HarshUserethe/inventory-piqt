"use client";

import { Check, X, Sparkles, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const comparisonData = [
  {
    feature: "Offshoring Ecosystem & Talent Pool",
    piq: "Top 1% Mature India Talent Pool",
    traditional: "Generic / Unscreened Staffing",
    inhouse: "High Hiring & Retraining Overhead",
    highlight: true,
  },
  {
    feature: "Scalability & Agility",
    piq: "Rapid Scale up within 48 Hours",
    traditional: "Rigid 30-60 Day Onboarding",
    inhouse: "Limited by Local Capacity",
    highlight: true,
  },
  {
    feature: "Commercial Terms & Flexibility",
    piq: "Min 5 Staff, 50% Advance & Weekly Billing",
    traditional: "Heavy Long-Term Contracts & Penalties",
    inhouse: "Fixed Capex & High Fixed Payroll",
    highlight: true,
  },
  {
    feature: "Process Optimization & Tech",
    piq: "Proprietary Workflow & Automation",
    traditional: "Manual Spreadsheet Workarounds",
    inhouse: "Siloed Software Tools",
    highlight: false,
  },
  {
    feature: "Quality & SLA Accountability",
    piq: "99.8% SLA Guarantee with Auditing",
    traditional: "Best Effort SLA Compliance",
    inhouse: "Internal Management Overhead",
    highlight: false,
  },
];

export default function WhyUsComparison() {
  return (
    <section className="relative z-20 py-20 sm:py-28 bg-[#F4F5F8] dark:bg-[#07080B] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="The Process IQ Advantage"
            title="How We Compare to"
            accent="Traditional Alternatives"
            description="Clear comparison showing why scale-ups and enterprises choose Process IQ Tech over legacy vendors or expanding internally."
            centered
            className="mb-16 sm:mb-20"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-black/40">
                    <th className="py-5 px-6 font-display font-semibold text-slate-700 dark:text-slate-300 text-base sm:text-lg w-1/3">
                      Key Dimension
                    </th>
                    <th className="py-5 px-6 font-display font-bold text-blue-600 dark:text-blue-400 text-base sm:text-lg w-1/4 bg-blue-500/5 border-x border-blue-500/20">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span>Process IQ Tech</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-display font-semibold text-slate-500 dark:text-slate-400 text-sm sm:text-base w-1/4">
                      Traditional BPM Vendor
                    </th>
                    <th className="py-5 px-6 font-display font-semibold text-slate-500 dark:text-slate-400 text-sm sm:text-base w-1/6">
                      In-House Operations
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-white/5">
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors duration-200"
                    >
                      <td className="py-4 sm:py-5 px-6 font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                        {row.feature}
                      </td>
                      <td className="py-4 sm:py-5 px-6 font-bold text-blue-600 dark:text-blue-400 text-sm sm:text-base bg-blue-500/5 border-x border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 stroke-[3]" />
                          <span>{row.piq}</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-5 px-6 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-5 px-6 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{row.inhouse}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
