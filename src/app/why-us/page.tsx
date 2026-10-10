import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MapPin, Users, TrendingUp, CheckCircle } from "lucide-react";
import { whyUsHero, differentiators, partnerBrands } from "@/config/why-us";
import { siteSections } from "@/config/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover what sets Process IQ Tech apart — outcome guarantees, proprietary technology, and domain-expert teams that deliver real results.",
};

const iconMap: Record<string, React.ElementType> = {
  MapPin, Users, TrendingUp, CheckCircle,
};

export default function WhyUsPage() {
  const { hero, differentiators: showDifferentiators } = siteSections.whyUs;

  return (
    <>
      {/* Hero */}
      {hero && (
        <PageHero
          badge={whyUsHero.badge}
          title={whyUsHero.headline}
          titleAccent={whyUsHero.headlineAccent}
          description={whyUsHero.description}
          breadcrumbs={[{ label: "Why Us" }]}
        />
      )}

      {/* Differentiators */}
      {showDifferentiators && (
        <section className="section-padding bg-[var(--bg)]">
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="What Sets Us Apart"
                title="Reasons Why"
                accent="Enterprises Choose Us"
                centered
                className="mb-14"
              />
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((diff, index) => {
                const Icon = iconMap[diff.icon] ?? CheckCircle;
                return (
                  <RevealOnScroll key={diff.number} delay={index * 80} className="h-full">
                    <div className="card h-full group relative overflow-hidden">
                      {/* Large background number */}
                      <div
                        className="absolute top-4 right-5 font-display font-black text-[var(--border)] select-none pointer-events-none leading-none"
                        style={{ fontSize: "5rem", color: "var(--border)" }}
                        aria-hidden="true"
                      >
                        {diff.number}
                      </div>

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-brand-600/8 dark:bg-brand-600/12 border border-brand-600/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                        </div>

                        <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {diff.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed mb-5">
                          {diff.description}
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-600/8 dark:bg-brand-600/12 text-brand-600 dark:text-brand-400 rounded-lg text-xs font-semibold border border-brand-600/15">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          {diff.highlight}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Partner Logos */}
      <section className="section-padding" style={{ background: "var(--surface-alt, var(--surface))" }}>
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Technology Partners"
              title="Certified Partnerships with"
              accent="Industry Leaders"
              centered
              className="mb-12"
            />
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerBrands.map((brand, index) => (
              <RevealOnScroll key={brand} delay={index * 40}>
                <div className="px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm font-semibold text-[var(--text-secondary)] hover:border-brand-600/40 hover:text-brand-600 dark:hover:text-brand-400 transition-all cursor-default shadow-sm">
                  {brand}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0B10] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 60% 40%, #1A73FF 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Experience the Difference Yourself
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free process assessment and see why 500+ enterprises trust Process IQ Tech.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 h-12 inline-flex">
            Start Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
