import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { industries } from "@/config/homepage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Process IQ Tech's comprehensive BPM services: consulting, automation, workflow optimization, IDP, analytics, and managed BPO.",
};

const industryIcons: Record<string, string> = {
  Building2: "🏦", Heart: "🏥", Factory: "🏭", ShoppingBag: "🛍️",
  Truck: "🚚", Wifi: "📡", Zap: "⚡", Landmark: "🏛️",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              Our Services
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
              The Complete BPM{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl">
              From strategy and consulting to automation and managed services — we provide the full spectrum of BPM capabilities your enterprise needs to operate at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center scroll-mt-24"
                >
                  {/* Image */}
                  <RevealOnScroll className={isEven ? "" : "lg:order-2"}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                      {/* Stat badge */}
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                        <div className="text-2xl font-display font-bold text-primary-600">{service.stats.value}</div>
                        <div className="text-xs text-neutral-500 font-medium">{service.stats.label}</div>
                      </div>
                    </div>
                  </RevealOnScroll>

                  {/* Content */}
                  <RevealOnScroll delay={150} className={isEven ? "" : "lg:order-1"}>
                    <div>
                      <SectionHeading
                        badge={`Service ${String(index + 1).padStart(2, "0")}`}
                        title={service.title}
                        className="mb-4"
                      />
                      <p className="text-neutral-500 leading-relaxed mb-6">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-display font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-4">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-neutral-600">
                              <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="btn-primary"
                      >
                        Discuss This Service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </RevealOnScroll>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Industries"
              title="Specialized Expertise for"
              accent="Every Sector"
              centered
            />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <RevealOnScroll key={industry.name} delay={i * 50}>
                <div className="text-center p-5 rounded-xl bg-white border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/20 transition-all group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {industryIcons[industry.icon]}
                  </div>
                  <div className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600 transition-colors">{industry.name}</div>
                  <div className="text-xs text-neutral-400 mt-1">{industry.clients} clients</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Our experts will help you identify the highest-impact opportunities in a free 60-minute assessment.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Book Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
