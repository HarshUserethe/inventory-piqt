import { Clock, Briefcase, Cpu, Zap } from "lucide-react";
import { valuePropositions } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Clock, Briefcase, Cpu, Zap,
};

const gradients = [
  "from-brand-600/10 to-brand-600/5",
  "from-indigo-500/10 to-indigo-500/5",
  "from-emerald-500/10 to-emerald-500/5",
  "from-coral-500/10 to-coral-500/5",
];

const iconColors = [
  "text-brand-600 dark:text-brand-400",
  "text-indigo-500",
  "text-emerald-500",
  "text-brand-600 dark:text-brand-400",
];

const borderColors = [
  "hover:border-brand-600/30",
  "hover:border-indigo-500/30",
  "hover:border-emerald-500/30",
  "hover:border-coral-500/30",
];

export default function ValuePropositionSection() {
  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Why Process IQ Tech">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Why Process IQ Tech"
            title="Built for Business"
            accent="Performance"
            description="Four core strengths that make Process IQ Tech the partner of choice for global enterprises."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valuePropositions.map((vp, index) => {
            const Icon = iconMap[vp.icon] ?? Zap;
            return (
              <RevealOnScroll key={vp.title} delay={index * 80} className="h-full">
                <div
                  className={`card h-full flex flex-col group ${borderColors[index]} bg-gradient-to-br ${gradients[index]} dark:bg-none`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} border border-white/10 dark:border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${iconColors[index]}`} aria-hidden="true" />
                  </div>

                  <h3 className="font-display font-bold text-[var(--text-primary)] mb-3">
                    {vp.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed flex-1">
                    {vp.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
