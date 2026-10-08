// IndustriesSection — currently hidden per sections config
import { Building2, Heart, Factory, ShoppingBag, Truck, Wifi, Zap, Landmark } from "lucide-react";
import { industries } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Building2, Heart, Factory, ShoppingBag, Truck, Wifi, Zap, Landmark,
};

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Industries We Serve">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Industries"
            title="Serving Leaders"
            accent="Across Sectors"
            centered
            className="mb-14"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? Building2;
            return (
              <RevealOnScroll key={industry.name} delay={index * 60} className="h-full">
                <div className="card text-center h-full flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/8 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                  </div>
                  <p className="text-[var(--text-primary)] font-semibold text-sm mb-1">{industry.name}</p>
                  <p className="text-brand-600 dark:text-brand-400 text-xs font-bold">{industry.clients}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
