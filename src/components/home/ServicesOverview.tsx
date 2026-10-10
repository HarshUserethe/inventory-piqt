"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const bentoLayouts = [
  "md:col-span-2 lg:col-span-2", // 1. Contact Center (Wide)
  "md:col-span-1 lg:col-span-1", // 2. Back Office
  "md:col-span-1 lg:col-span-1", // 3. IT Helpdesk
  "md:col-span-1 lg:col-span-2", // 4. Finance (Wide)
  "md:col-span-1 lg:col-span-2", // 5. HR (Wide)
];

const serviceImages = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80", // Contact center
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80", // Back office
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", // IT Helpdesk
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80", // Finance
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // HR
];

const gradientOverlays = [
  "from-teal-900/90 via-teal-900/60 to-transparent", // Wide
  "from-slate-900/95 via-slate-900/70 to-transparent", // Tall
  "from-orange-900/90 via-orange-900/60 to-transparent", // Square
  "from-blue-900/90 via-blue-900/60 to-transparent", // Square
  "from-rose-900/90 via-rose-900/60 to-transparent", // Wide
];

export default function ServicesOverview() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Our Services">
      <div className="container-custom">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const layoutClass = bentoLayouts[index] ?? "col-span-1";
            
            return (
              <RevealOnScroll key={service.id} delay={index * 80} className={`${layoutClass}`}>
                <div
                  className="card h-full min-h-[230px] flex flex-col justify-between group cursor-pointer relative overflow-hidden rounded-[24px] border border-white/10 dark:border-white/5 transition-transform duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                  onMouseEnter={() => setActiveId(service.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {/* Background Image */}
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradientOverlays[index]} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Content - Top */}
                  <div className="relative z-10 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2 block">
                      Service
                    </span>
                    <h3 className="font-display font-extrabold text-white text-xl md:text-2xl leading-tight max-w-[95%]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content - Bottom (Reveals on Hover) */}
                  <div className="relative z-10 p-6 pt-0 mt-auto opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col">
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/90">
                          <Check className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded-lg font-bold text-xs shadow-xl hover:bg-neutral-100 transition-colors w-fit"
                    >
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
