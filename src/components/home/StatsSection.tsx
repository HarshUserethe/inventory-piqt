// StatsSection — currently hidden per sections config, but keeping for completeness
import { stats } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="section-padding bg-[var(--surface)]" aria-label="Company Statistics">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="By the Numbers"
            title="Trusted at"
            accent="Global Scale"
            centered
            className="mb-14"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 60} className="h-full">
              <div className="card text-center h-full">
                <p className="font-display font-extrabold gradient-text text-3xl mb-1">{stat.value}</p>
                <p className="text-[var(--text-primary)] font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-[var(--text-muted)] text-xs">{stat.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
