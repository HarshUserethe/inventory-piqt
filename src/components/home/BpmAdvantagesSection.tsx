import { Users, Maximize, Settings, TrendingUp, DollarSign, Award } from "lucide-react";
import { bpmAdvantages } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Users, Maximize, Settings, TrendingUp, DollarSign, Award,
};

const tagColors = [
  "bg-brand-600/10 text-brand-600 dark:text-brand-400 border-brand-600/15",
  "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/15",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15",
  "bg-brand-600/10 text-brand-600 dark:text-brand-400 border-brand-600/15",
  "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/15",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15",
];

export default function BpmAdvantagesSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface-alt, var(--surface))" }}
      aria-label="BPM Advantages"
    >
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="BPM Advantages"
            title="Why Outsource Your"
            accent="Business Processes"
            description="Business Process Management delivers strategic advantages that help you focus on what matters most — growth."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bpmAdvantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] ?? Award;
            return (
              <RevealOnScroll key={advantage.title} delay={index * 80} className="h-full">
                <div className="card h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-600/8 dark:bg-brand-600/12 border border-brand-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[0.7rem] font-semibold ${tagColors[index]}`}>
                      {advantage.metric}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed flex-1">
                    {advantage.description}
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
