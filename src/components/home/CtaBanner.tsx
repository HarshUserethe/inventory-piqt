import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-violet-700" />
      <div className="absolute inset-0 opacity-20">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/20 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            Limited spots available for Q4 2025
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Transform Your<br />Business Processes?
          </h2>

          <p className="text-base sm:text-lg text-primary-100 mb-10 leading-relaxed">
            Join 500+ enterprises that have achieved measurable results with Process IQ Tech. Start with a free 60-minute process assessment — no strings attached.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Schedule Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`tel:${siteConfig.phone}`}
              className="btn-outline-white text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-200 text-sm">
            {[
              "✓ No credit card required",
              "✓ Results within 90 days",
              "✓ ROI guaranteed",
            ].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
