import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whyUsHero, differentiators, partnerBrands } from "@/config/why-us";
import { siteSections } from "@/config/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover what sets Process IQ Tech apart — outcome guarantees, proprietary technology, and domain-expert teams that deliver real results.",
};

const differentiatorIcons: Record<string, string> = {
  Brain: "🧠",
  Layers: "🏗️",
  Users: "👥",
  Globe: "🌍",
  Repeat: "🔁",
  Shield: "🛡️",
};

export default function WhyUsPage() {
  const { hero, differentiators: showDifferentiators } = siteSections.whyUs;

  return (
    <>
      {/* Hero */}
      {hero && (
        <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
          <div className="container-custom relative z-10">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                {whyUsHero.badge}
              </div>
              <h1 className="font-display text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-extrabold text-white mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight max-w-6xl">
                {whyUsHero.headline}{" "}
                <span className="animate-shiny-text font-extrabold inline-block drop-shadow-[0_0_25px_rgba(192,132,252,0.35)]">
                  {whyUsHero.headlineAccent}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-4xl">
                {whyUsHero.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Differentiators ("What Sets Us Apart") */}
      {showDifferentiators && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="What Sets Us Apart"
                title={`Reasons Why`}
                accent="Enterprises Choose Us"
                centered
              />
            </RevealOnScroll>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {differentiators.map((diff, index) => (
                <RevealOnScroll key={diff.number} delay={index * 80} className="h-full">
                  <div className="card-premium group relative overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Number */}
                      <div className="absolute top-5 right-5 font-display text-6xl font-black text-neutral-100 group-hover:text-primary-100 transition-colors leading-none select-none pointer-events-none">
                        {diff.number}
                      </div>

                      <div className="text-3xl mb-4 relative z-10">{differentiatorIcons[diff.icon] || "✨"}</div>
                      <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 relative z-10 group-hover:text-primary-600 transition-colors">
                        {diff.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-6 relative z-10">
                        {diff.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{diff.highlight}</span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}





      {/* Partner Logos */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Technology Partners"
              title="Certified Partnerships with"
              accent="Industry Leaders"
              centered
            />
          </RevealOnScroll>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {partnerBrands.map((brand, index) => (
              <RevealOnScroll key={brand} delay={index * 40}>
                <div className="px-6 py-3 rounded-xl bg-white border border-neutral-200 text-sm font-semibold text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-all cursor-default shadow-sm">
                  {brand}
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
            Experience the Difference Yourself
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free process assessment and see why 500+ enterprises trust Process IQ Tech.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Start Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
