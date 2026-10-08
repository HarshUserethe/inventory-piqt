import { Building2, MapPin, Users, BookOpen, CheckCircle } from "lucide-react";
import { processSteps } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Building: Building2,
  MapPin,
  Users,
  BookOpen,
  CheckCircle,
};

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="How We Work">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="How We Work"
            title="5 Steps to"
            accent="Seamless Operations"
            description="A proven, structured approach from company setup to live service delivery."
            centered
            className="mb-16"
          />
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-600/30 via-brand-600/60 to-brand-600/30" aria-hidden="true" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] ?? CheckCircle;
              const isLeft = index % 2 === 0;

              return (
                <RevealOnScroll key={step.step} delay={index * 100}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${index > 0 ? "lg:-mt-4" : ""}`}>
                    {/* Card */}
                    <div className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="card group hover:border-brand-600/40 flex flex-col sm:flex-row gap-4 items-start">
                        {/* Step number + icon */}
                        <div className="shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand group-hover:scale-105 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[0.7rem] font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase">
                              Step {step.step}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-[var(--text-primary)] mb-2 text-xl">
                            {step.title}
                          </h3>
                          <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center number (desktop only) */}
                    <div className={`hidden lg:flex ${isLeft ? "lg:order-2 justify-start" : "lg:order-1 justify-end"} items-center`}>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center shadow-brand text-white font-bold text-base border-4 border-[var(--bg)]">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
