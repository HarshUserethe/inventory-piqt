import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { heroContent } from "@/config/homepage";

const highlights = [
  "No long-term lock-ins",
  "90-day results guarantee",
  "24/7 global support",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/80 to-neutral-950" />
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Decorative orbs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full border border-primary-800/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[15%] w-48 h-48 rounded-full border border-primary-700/20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full border border-accent-800/20 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            {heroContent.badge}
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            {heroContent.headline}
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-accent-400 bg-clip-text text-transparent">
              {heroContent.headlineAccent}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <Link href={heroContent.primaryCta.href} className="btn-primary text-base px-7 py-4">
              {heroContent.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={heroContent.secondaryCta.href} className="btn-outline-white text-base px-7 py-4">
              {heroContent.secondaryCta.label}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-5 mb-16 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              Trusted by companies listed on
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {heroContent.trustedBy.map((exchange) => (
                <div
                  key={exchange}
                  className="px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 text-sm font-semibold"
                >
                  {exchange}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-neutral-400" />
        <div className="w-1 h-1 rounded-full bg-neutral-400" />
      </div>
    </section>
  );
}
