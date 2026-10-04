import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

const colorConfig: Record<string, { bg: string; text: string; badge: string }> = {
  indigo: { bg: "bg-primary-50", text: "text-primary-700", badge: "bg-primary-100 text-primary-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", badge: "bg-violet-100 text-violet-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-700", badge: "bg-rose-100 text-rose-700" },
};

const serviceIcons: Record<string, string> = {
  // Legacy keys (kept for safety)
  GitBranch: "🎯",
  Cpu: "⚡",
  Workflow: "🔄",
  FileText: "📄",
  BarChart3: "📊",
  Users: "🌐",
  // New service icon keys
  Building: "🏢",
  Lightbulb: "💡",
  PhoneCall: "📞",
  Database: "🗄️",
  CreditCard: "💳",
};

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              badge="Our Services"
              title="Comprehensive BPM"
              accent="Solutions"
              description="From strategy to execution, we offer the full spectrum of business process management services."
              className="max-w-xl"
            />
            <Link
              href="/services"
              className="btn-secondary whitespace-nowrap shrink-0"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorConfig[service.color] || colorConfig.indigo;
            const emoji = serviceIcons[service.icon] || "🔧";
            return (
              <RevealOnScroll key={service.id} delay={index * 80} className="h-full">
                <Link
                  href={`/services#${service.id}`}
                  className="card-premium group flex flex-col h-full hover:border-primary-200"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 text-2xl`}>
                    {emoji}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed mb-5 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Stat badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.badge} text-xs sm:text-sm font-semibold mb-4 w-fit`}>
                    <span className="text-base">📈</span>
                    {service.stats.value} — {service.stats.label}
                  </div>

                  {/* Features preview */}
                  <ul className="space-y-2 mb-5">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center gap-1 text-sm font-semibold ${colors.text} group-hover:gap-2 transition-all`}>
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
