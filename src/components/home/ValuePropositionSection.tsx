import { Zap, Shield, TrendingUp, Globe, Clock, Briefcase, Cpu } from "lucide-react";
import { valuePropositions } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Briefcase,
  Cpu,
};

const colorMap: Record<string, string> = {
  Zap: "from-amber-500 to-orange-500",
  Shield: "from-emerald-500 to-teal-500",
  TrendingUp: "from-primary-500 to-violet-500",
  Globe: "from-blue-500 to-cyan-500",
  Clock: "from-sky-500 to-blue-500",
  Briefcase: "from-violet-500 to-purple-500",
  Cpu: "from-teal-500 to-emerald-500",
};

const bgMap: Record<string, string> = {
  Zap: "bg-amber-50",
  Shield: "bg-emerald-50",
  TrendingUp: "bg-primary-50",
  Globe: "bg-blue-50",
  Clock: "bg-sky-50",
  Briefcase: "bg-violet-50",
  Cpu: "bg-teal-50",
};

export default function ValuePropositionSection() {
  return (
    <section className="section-padding bg-white border-b border-neutral-100">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Why Process IQ Tech"
            title="Built for Enterprise Excellence,"
            accent="Delivered with Speed"
            description="We combine deep BPM expertise, proprietary technology, and outcome-driven delivery to create transformations that last."
            centered
          />
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((vp, index) => {
            const Icon = iconMap[vp.icon];
            return (
              <RevealOnScroll key={vp.title} delay={index * 100} className="h-full">
                <div className="card-premium group h-full flex flex-col justify-start">
                  <div className={`w-12 h-12 rounded-xl ${bgMap[vp.icon]} flex items-center justify-center mb-5`}>
                    <div className={`bg-gradient-to-br ${colorMap[vp.icon]} rounded-lg p-2.5`}>
                      {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2} />}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {vp.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed flex-1">
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
