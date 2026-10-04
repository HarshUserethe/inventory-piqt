import { industries } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const industryIcons: Record<string, string> = {
  Building2: "🏦",
  Heart: "🏥",
  Factory: "🏭",
  ShoppingBag: "🛍️",
  Truck: "🚚",
  Wifi: "📡",
  Zap: "⚡",
  Landmark: "🏛️",
};

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Industries We Serve"
            title="Deep Expertise Across"
            accent="Every Sector"
            description="Our domain specialists have spent careers inside your industry, understanding its unique challenges and compliance requirements."
            centered
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry.name} delay={index * 60}>
              <div className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-neutral-200 bg-white hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300 cursor-default">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industryIcons[industry.icon] || "🏢"}
                </div>
                <h4 className="font-display font-semibold text-neutral-800 text-sm text-center mb-1.5 group-hover:text-primary-700 transition-colors">
                  {industry.name}
                </h4>
                <span className="text-xs text-neutral-400 font-medium">
                  {industry.clients} clients
                </span>

                {/* Hover indicator */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
