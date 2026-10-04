import { processSteps } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const stepIcons: Record<string, string> = {
  // Legacy
  Search: "🔍",
  PenTool: "✏️",
  Settings: "⚙️",
  Rocket: "🚀",
  // Current 5-step icons
  Building: "🏢",
  MapPin: "📍",
  Users: "🤝",
  BookOpen: "📖",
  CheckCircle: "✅",
};

export default function ProcessSection() {
  return (
    <section className="section-padding bg-neutral-950 relative overflow-hidden">
      {/* BG decor */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <RevealOnScroll>
          <SectionHeading
            badge="How We Work"
            title="Our Proven"
            accent="Transformation Process"
            description="A structured, time-tested methodology that delivers results with precision and consistency — every time."
            centered
            light
          />
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary-700 via-primary-500 to-accent-600" />

          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 120}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 border-4 border-primary-500/30 flex flex-col items-center justify-center mb-6 shadow-primary relative z-10 group-hover:scale-105 transition-transform">
                  <span className="text-3xl mb-0.5">{stepIcons[step.icon] || "✨"}</span>
                  <span className="text-xs font-bold text-primary-200 tracking-wider">
                    STEP {step.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
