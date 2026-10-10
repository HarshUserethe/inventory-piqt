"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Lightbulb, PhoneCall, Database, CreditCard } from "lucide-react";
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

export default function ServicesList() {
  return (
    <section
      id="service-list"
      className="relative z-20 -mt-20 sm:-mt-28 md:-mt-36 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-slate-200/70 dark:border-white/10 shadow-2xl transition-colors duration-300"
    >
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Capabilities"
            title="Comprehensive Services for"
            accent="Operational Growth"
            description="Explore our core BPM practices designed to fill operational gaps, optimize workflows, and drive measurable performance."
            centered
            className="mb-20"
          />
        </RevealOnScroll>

        <div className="space-y-24 sm:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = iconMap[service.icon] || Users;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32"
              >
                {/* Visual Image Frame */}
                <RevealOnScroll className={isEven ? "" : "lg:order-2"}>
                  <div className="relative rounded-[28px] overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl group">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    </div>

                    {/* Floating Stat Badge */}
                    <div className="absolute bottom-6 left-6 right-6 sm:right-auto p-4.5 rounded-2xl bg-white/95 dark:bg-[#12141C]/95 backdrop-blur-md border border-slate-200/80 dark:border-white/15 shadow-xl flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl text-white flex items-center justify-center shrink-0 shadow-md"
                        style={{ background: "linear-gradient(135deg, #1A73FF 0%, #3B82F6 100%)" }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-extrabold text-[#1A73FF] dark:text-[#3B82F6] leading-none">
                          {service.stats.value}
                        </div>
                        <div className="text-xs font-semibold text-slate-600 dark:text-neutral-400 mt-1 uppercase tracking-wider">
                          {service.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Service Detail Content */}
                <RevealOnScroll delay={150} className={isEven ? "" : "lg:order-1"}>
                  <div>
                    <p className="eyebrow mb-3" aria-label={`Service index: ${index + 1}`}>
                      Service {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg mb-8">
                      {service.description}
                    </p>

                    {/* Key Capabilities List */}
                    <div className="mb-8">
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-4">
                        Key Deliverables & Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-neutral-300 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#1A73FF] dark:text-[#3B82F6] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#1A73FF] text-white hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-neutral-100 font-semibold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 group"
                    >
                      <span>Discuss This Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
