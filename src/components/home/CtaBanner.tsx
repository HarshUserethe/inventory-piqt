import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustItems = [
  "No credit card required",
  "Results within 90 days",
  "ROI guaranteed",
];

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Call to action">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0B10]" aria-hidden="true" />

      {/* Blue radial glows */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A73FF 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #5B5BFF 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 border border-white/12 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot" />
            Limited spots available for Q4 2025
          </div>

          {/* Headline */}
          <h2
            className="font-display font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Ready to Transform Your{" "}
            <span className="gradient-text">Business Processes?</span>
          </h2>

          {/* Sub */}
          <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 500+ enterprises that have achieved measurable results with Process IQ Tech. Start with a free 60-minute process assessment — no strings attached.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              id="cta-banner-primary"
              className="btn-primary text-base px-8 h-12 group"
            >
              Schedule Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              id="cta-banner-phone"
              className="btn-ghost text-base px-8 h-12"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Trust ticks */}
          <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-sm">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 pt-10 border-t border-white/8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-2">
                Ready to transform your operations?
              </h3>
              <p className="text-neutral-400 text-base">
                Schedule a free 60-minute process assessment with one of our senior experts.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/contact" className="btn-primary">
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
