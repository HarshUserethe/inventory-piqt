import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const whyUsPoints = [
  {
    title: "Outcome-guaranteed engagements",
    description: "We put our fees on the line — if we don't hit agreed KPIs, you don't pay the full amount.",
  },
  {
    title: "Proprietary IQ Automate platform",
    description: "Our purpose-built platform reduces implementation risk and delivers 3x faster time-to-value.",
  },
  {
    title: "Domain-expert staffing only",
    description: "Every engagement lead has 12+ years average experience in your specific process domain.",
  },
  {
    title: "Continuous optimization post-launch",
    description: "Our process intelligence layer monitors and improves performance automatically, forever.",
  },
  {
    title: "Zero breaches in 15 years",
    description: "Enterprise-grade security built in from day one — SOC 2, ISO 27001, CMMI Level 5 certified.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Why Choose Us">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <RevealOnScroll>
              <SectionHeading
                badge="Why Choose Us"
                title="More Than a Vendor —"
                accent="A Strategic Partner"
                description="We measure our success by your outcomes, not by billable hours. That's what makes us different."
                className="mb-10"
              />
            </RevealOnScroll>

            <div className="space-y-5">
              {whyUsPoints.map((point, index) => (
                <RevealOnScroll key={point.title} delay={index * 80}>
                  <div className="flex gap-4 items-start group">
                    <div className="w-7 h-7 rounded-full bg-brand-600/10 border border-brand-600/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[var(--text-primary)] text-base mb-1">
                        {point.title}
                      </h4>
                      <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Image with floating stats */}
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85"
                  alt="Team collaboration and strategy session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat — top left */}
              <div className="absolute -top-4 -left-6 card px-5 py-4 shadow-brand-lg border border-brand-600/20 bg-[var(--surface)]">
                <div className="text-2xl font-display font-extrabold gradient-text mb-0.5">98.5%</div>
                <div className="text-[0.75rem] text-[var(--text-muted)] font-medium">Client Satisfaction Rate</div>
              </div>

              {/* Floating stat — bottom right */}
              <div className="absolute -bottom-4 -right-6 card px-5 py-4 shadow-lg border border-emerald-500/20 bg-[var(--surface)]">
                <div className="text-2xl font-display font-extrabold text-emerald-500 mb-0.5">$2.4B+</div>
                <div className="text-[0.75rem] text-[var(--text-muted)] font-medium">Savings Delivered</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
