import { Users, Maximize, Settings, TrendingUp, DollarSign, Award } from "lucide-react";
import { bpmAdvantages } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Users, Maximize, Settings, TrendingUp, DollarSign, Award,
};

const glowGradients = [
  "from-brand-600/40 to-purple-600/40",
  "from-indigo-500/40 to-blue-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-coral-500/40 to-orange-500/40",
  "from-cyan-500/40 to-blue-500/40",
  "from-rose-500/40 to-pink-500/40",
];

const iconColors = [
  "text-brand-600 dark:text-brand-400",
  "text-indigo-500",
  "text-emerald-500",
  "text-coral-500 dark:text-coral-400",
  "text-cyan-500",
  "text-rose-500",
];

const iconBgColors = [
  "bg-brand-600/10 border-brand-600/20",
  "bg-indigo-500/10 border-indigo-500/20",
  "bg-emerald-500/10 border-emerald-500/20",
  "bg-coral-500/10 border-coral-500/20",
  "bg-cyan-500/10 border-cyan-500/20",
  "bg-rose-500/10 border-rose-500/20",
];

export default function BpmAdvantagesSection() {
  return (
    <section
      className="section-padding relative z-10"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bpmAdvantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] ?? Award;
            return (
              <RevealOnScroll key={advantage.title} delay={index * 80} className="h-full">
                <div className="relative group h-full">
                  {/* Soft background shadow / glow */}
                  <div className={`absolute -inset-1 sm:-inset-1.5 rounded-[32px] bg-gradient-to-br ${glowGradients[index]} opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-700`} />
                  
                  {/* Card Container */}
                  <div className="relative z-10 h-full flex flex-col p-8 rounded-[28px] bg-[var(--surface)] border border-neutral-200/50 dark:border-white/[0.08] shadow-sm transition-all duration-500 group-hover:-translate-y-1.5">
                    
                    <div className="flex items-start justify-between mb-8">
                      {/* Floating Glassmorphic Icon */}
                      <div className={`w-14 h-14 rounded-2xl ${iconBgColors[index]} border flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500`}>
                        <Icon className={`w-6 h-6 ${iconColors[index]}`} aria-hidden="true" />
                      </div>

                      {/* Metric Badge */}
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200/60 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[0.75rem] font-bold text-[var(--text-primary)] tracking-wide shadow-sm">
                        {advantage.metric}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed flex-1">
                      {advantage.description}
                    </p>
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
