import { bpmAdvantages } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import Image from "next/image";

const iconEmojis: Record<string, string> = {
  // Legacy keys (kept for safety)
  DollarSign: "💰",
  Clock: "⏱️",
  CheckCircle: "✅",
  LineChart: "📈",
  Lock: "🔒",
  // New bpmAdvantages icon keys
  Users: "🤝",
  Maximize: "📐",
  Settings: "🛠️",
  TrendingUp: "🚀",
  Award: "🏆",
};

export default function BpmAdvantagesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <RevealOnScroll>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85"
                  alt="BPM workflow optimization dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover border border-neutral-100 max-w-[200px]">
                <div className="text-3xl font-display font-bold text-primary-600 mb-1">42%</div>
                <div className="text-xs text-neutral-500 font-medium">Average efficiency gain across all clients</div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-accent-500 rounded-xl px-4 py-3 text-white text-sm font-bold shadow-lg">
                🏆 Gartner Magic Quadrant Leader
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Advantages */}
          <div>
            <RevealOnScroll>
              <SectionHeading
                badge="BPM Advantages"
                title="The Power of Optimized"
                accent="Business Processes"
                description="Intelligent BPM transforms organizations from reactive to proactive, enabling sustainable competitive advantage."
                className="mb-10"
              />
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bpmAdvantages.map((adv, index) => (
                <RevealOnScroll key={adv.title} delay={index * 80}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors duration-200 group">
                    <div className="text-2xl shrink-0 mt-0.5">
                      {iconEmojis[adv.icon] || "⚙️"}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-neutral-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                        {adv.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-2.5">
                        {adv.description}
                      </p>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-primary-100 text-primary-700 text-xs sm:text-sm font-semibold">
                        {adv.metric}
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
