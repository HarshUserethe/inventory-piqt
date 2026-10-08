"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Users, Lightbulb, PhoneCall, Database, CreditCard } from "lucide-react";
import { services } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Lightbulb,
  PhoneCall,
  Database,
  CreditCard,
};

const badgeColors: Record<string, string> = {
  High:       "bg-brand-600/10 text-brand-600 dark:text-brand-400 border-brand-600/20",
  Excellent:  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Consistent: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  "99.9%":    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Rapid:      "bg-brand-600/10 text-brand-600 dark:text-brand-400 border-brand-600/20",
};

export default function ServicesOverview() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Our Services">
      <div className="container-custom">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              badge="Our Services"
              title="Comprehensive BPM"
              accent="Solutions"
              description="From strategy to execution — the full spectrum of business process management."
              className="max-w-xl"
            />
            <Link href="/services" className="btn-secondary shrink-0">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Users;
            const isActive = activeId === service.id;
            const badgeClass = badgeColors[service.stats.value] ?? badgeColors.High;

            return (
              <RevealOnScroll key={service.id} delay={index * 80} className="h-full">
                <div
                  className="card h-full flex flex-col group cursor-pointer"
                  onMouseEnter={() => setActiveId(service.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-600/8 dark:bg-brand-600/12 border border-brand-600/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed mb-4 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* KPI badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-4 w-fit ${badgeClass}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {service.stats.value} — {service.stats.label}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-4 h-4 rounded-full bg-brand-600/10 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-brand-600 dark:text-brand-400" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more */}
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2.5 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
