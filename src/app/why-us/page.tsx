import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, X, Minus } from "lucide-react";
import { whyUsHero, differentiators, comparisonTable, clientSuccessStories, partnerBrands } from "@/config/why-us";
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
  const { hero, differentiators: showDifferentiators, comparisons, ctaBanner } = siteSections.whyUs;

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
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                {whyUsHero.headline}{" "}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {whyUsHero.headlineAccent}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl">
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
                title={`${differentiators.length} Reasons Why 500+`}
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

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Competitive Comparison"
              title="How We Compare to the"
              accent="Alternatives"
              description="A transparent look at what makes Process IQ Tech the smarter choice over traditional alternatives."
              centered
            />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-5 text-sm font-semibold text-neutral-500 bg-white border-b border-neutral-200 rounded-tl-2xl w-[35%]">
                      Capability
                    </th>
                    {[
                      { label: "Process IQ Tech", highlight: true },
                      { label: "Traditional SI", highlight: false },
                      { label: "Boutique Consultant", highlight: false },
                      { label: "Offshore BPO", highlight: false },
                    ].map((col) => (
                      <th
                        key={col.label}
                        className={`text-center py-4 px-4 text-sm font-semibold border-b border-neutral-200 ${
                          col.highlight
                            ? "bg-primary-600 text-white"
                            : "bg-white text-neutral-600"
                        } ${col.label === "Process IQ Tech" ? "rounded-tr-none" : ""}`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row, rowIndex) => (
                    <tr
                      key={row.capability}
                      className={rowIndex % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}
                    >
                      <td className="py-4 px-5 text-sm font-medium text-neutral-700 border-b border-neutral-100">
                        {row.capability}
                      </td>
                      {[row.piqt, row.si, row.boutique, row.bpo].map((val, colIndex) => (
                        <td
                          key={colIndex}
                          className={`text-center py-4 px-4 border-b border-neutral-100 ${
                            colIndex === 0 ? "bg-primary-50/50" : ""
                          }`}
                        >
                          {val === true ? (
                            <CheckCircle2 className={`w-5 h-5 mx-auto ${colIndex === 0 ? "text-primary-600" : "text-accent-500"}`} />
                          ) : val === false ? (
                            <X className="w-4 h-4 mx-auto text-neutral-300" />
                          ) : (
                            <Minus className="w-4 h-4 mx-auto text-amber-400" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-neutral-400 mt-3 pl-2">
                <Minus className="w-3 h-3 inline mr-1 text-amber-400" /> = Partial capability
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Case Studies"
              title="Real Results,"
              accent="Real Clients"
              description="Numbers don't lie. Here's what we delivered for some of our most complex engagements."
              centered
            />
          </RevealOnScroll>
          <div className="mt-14 space-y-12">
            {clientSuccessStories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <RevealOnScroll key={story.company} delay={index * 100}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:grid-flow-col" : ""}`}>
                    <div className={`relative rounded-3xl overflow-hidden aspect-video shadow-xl ${!isEven ? "lg:order-2" : ""}`}>
                      <Image
                        src={story.image}
                        alt={story.company}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-bold text-primary-700">
                          {story.industry}
                        </span>
                      </div>
                    </div>
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">{story.company}</h3>
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Challenge</span>
                        <p className="text-neutral-600 text-sm leading-relaxed mt-1">{story.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Solution</span>
                        <p className="text-neutral-600 text-sm leading-relaxed mt-1">{story.solution}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Results</span>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {story.results.map((result) => (
                            <div key={result.metric} className="p-3 rounded-xl bg-primary-50 border border-primary-100">
                              <div className="text-xs text-neutral-500 mb-1">{result.metric}</div>
                              <div className="flex items-center gap-1 text-sm">
                                <span className="text-neutral-400 line-through">{result.before}</span>
                                <ArrowRight className="w-3 h-3 text-accent-500" />
                                <span className="font-bold text-primary-600">{result.after}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

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
