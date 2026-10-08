import Image from "next/image";
import { Clock, Briefcase, Cpu, Zap } from "lucide-react";
import { valuePropositions } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Clock, Briefcase, Cpu, Zap,
};

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const glowGradients = [
  "from-brand-600/40 to-purple-600/40",
  "from-indigo-500/40 to-blue-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-coral-500/40 to-orange-500/40",
];

const iconColors = [
  "text-brand-600 dark:text-brand-400",
  "text-indigo-500",
  "text-emerald-500",
  "text-coral-500 dark:text-coral-400",
];

export default function ValuePropositionSection() {
  return (
    <section className="section-padding bg-[var(--bg)] relative z-10" aria-label="Why Process IQ Tech">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Why Process IQ Tech"
            title="Built for Business"
            accent="Performance"
            description="Four core strengths that make Process IQ Tech the partner of choice for global enterprises."
            centered
            className="mb-16"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((vp, index) => {
            const Icon = iconMap[vp.icon] ?? Zap;
            return (
              <RevealOnScroll key={vp.title} delay={index * 100} className="h-full">
                <div className="relative group h-full">
                  {/* Soft background shadow / glow */}
                  <div className={`absolute -inset-1 sm:-inset-1.5 rounded-[32px] bg-gradient-to-br ${glowGradients[index]} opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-700`} />

                  {/* Card Container */}
                  <div className="relative z-10 h-full flex flex-col rounded-[28px] overflow-hidden bg-[var(--surface)] border border-neutral-200/50 dark:border-white/[0.08] shadow-sm transition-all duration-500 group-hover:-translate-y-1.5">

                    {/* Edge-to-edge Image */}
                    <div className="relative w-full h-[220px] overflow-hidden">
                      <Image
                        src={images[index]}
                        alt={vp.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      />
                      {/* Gradient fade into surface */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/40 to-transparent" />

                      {/* Floating Glassmorphic Icon */}
                      <div className="absolute bottom-5 left-6 w-12 h-12 rounded-2xl bg-[var(--surface)]/60 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-500">
                        <Icon className={`w-5 h-5 ${iconColors[index]}`} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 pb-7 pt-2 flex flex-col flex-1 relative z-20">
                      <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                        {vp.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed flex-1">
                        {vp.description}
                      </p>
                    </div>
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
