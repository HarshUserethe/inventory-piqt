import { Link2, Cloud, ShieldCheck } from "lucide-react";
import { technologies } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

/* Tech logo text placeholders (using initials since we can't hot-link external SVGs) */
const techInitials: Record<string, { bg: string; text: string; short: string }> = {
  zendesk:     { bg: "bg-teal-500/10",   text: "text-teal-600 dark:text-teal-400",  short: "ZD" },
  zoho:        { bg: "bg-brand-600/10",  text: "text-brand-600 dark:text-brand-400", short: "ZO" },
  salesforce:  { bg: "bg-blue-500/10",   text: "text-blue-600 dark:text-blue-400",  short: "SF" },
  twilio:      { bg: "bg-rose-500/10",   text: "text-rose-600 dark:text-rose-400",  short: "TW" },
  five9:       { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", short: "F9" },
  logitech:    { bg: "bg-neutral-500/10",text: "text-neutral-600 dark:text-neutral-400", short: "LG" },
};

const capabilities = [
  {
    Icon: Link2,
    title: "150+ Pre-built Connectors",
    description: "Native integrations with SAP, Salesforce, Microsoft, Oracle, ServiceNow, and 145+ more enterprise systems.",
  },
  {
    Icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Deployed on AWS, Azure, or GCP — or on-premise. Supports hybrid architectures and multi-cloud strategies.",
  },
  {
    Icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Zero-trust security, end-to-end encryption, and compliance with GDPR, SOC 2, ISO 27001, and PCI DSS.",
  },
];

export default function TechnologySection() {
  const allTech = [...technologies, ...technologies];

  return (
    <section
      className="section-padding"
      style={{ background: "var(--surface-alt, var(--surface))" }}
      aria-label="Technology Ecosystem"
    >
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Technology Ecosystem"
            title="Integrated with Your"
            accent="Existing Tech Stack"
            description="Pre-built connectors and certified partnerships across all major enterprise platforms ensure seamless integration."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        {/* Infinite marquee */}
        <div className="overflow-hidden mb-16" aria-label="Technology partners marquee">
          <div className="flex gap-4 animate-marquee w-max">
            {allTech.map((tech, index) => {
              const config = techInitials[tech.logo];
              return (
                <div
                  key={`${tech.logo}-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-brand-600/40 hover:shadow-card transition-all duration-300 group"
                >
                  <div className={`w-9 h-9 rounded-lg ${config?.bg ?? "bg-neutral-500/10"} flex items-center justify-center shrink-0 transition-all duration-300`}>
                    <span className={`text-xs font-black ${config?.text ?? "text-neutral-600"}`}>
                      {config?.short ?? tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-secondary)] group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <RevealOnScroll key={cap.title} delay={index * 100} className="h-full">
              <div className="card h-full text-center flex flex-col items-center group">
                <div
                  className="w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #1A73FF 0%, #3B82F6 100%)" }}
                >
                  <cap.Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-3">
                  {cap.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed flex-1">
                  {cap.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
