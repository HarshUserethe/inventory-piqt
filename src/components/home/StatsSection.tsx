import { stats } from "@/config/homepage";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-neutral-900 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 80}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1.5 group-hover:text-primary-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400">{stat.description}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
