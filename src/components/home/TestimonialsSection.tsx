import Image from "next/image";
import { Quote, TrendingUp } from "lucide-react";
import { testimonials } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export default function TestimonialsSection() {
  // Show the primary testimonial (Sarah Chen) prominently
  const primary = testimonials[0];

  return (
    <section className="section-padding bg-[var(--bg)]" aria-label="Client Success">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Client Success"
            title="Real Results,"
            accent="Real Stories"
            description="Hear from the leaders who have transformed their operations with Process IQ Tech."
            centered
            className="mb-14"
          />
        </RevealOnScroll>

        {/* Primary testimonial — large card */}
        <RevealOnScroll delay={100}>
          <div className="relative rounded-[28px] overflow-hidden bg-[#0A0B10] border border-white/8 p-8 md:p-12 mb-8">
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, #E11D2E 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Quote side */}
              <div className="lg:col-span-3">
                <Quote className="w-10 h-10 text-brand-600 mb-6" aria-hidden="true" />
                <blockquote className="font-display font-bold text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8">
                  &ldquo;{primary.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-600/40 shrink-0">
                    <Image
                      src={primary.image}
                      alt={primary.author}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base">{primary.author}</p>
                    <p className="text-neutral-400 text-sm">{primary.title}</p>
                    <p className="text-brand-400 text-sm font-medium">{primary.company}</p>
                  </div>
                </div>
              </div>

              {/* Stats side */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {/* Result badge */}
                <div className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-brand-gradient shadow-brand w-fit">
                  <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
                  <div>
                    <p className="text-white font-bold text-xl leading-none">{primary.result}</p>
                    <p className="text-white/70 text-xs mt-1">vs previous year</p>
                  </div>
                </div>

                {/* Industry tag */}
                <div className="card-glass rounded-xl p-4 text-center border border-white/8">
                  <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Industry</p>
                  <p className="text-white font-semibold">{primary.industry}</p>
                </div>

                {/* Other testimonials mini preview */}
                {testimonials.slice(1).map((t) => (
                  <div key={t.author} className="card-glass rounded-xl p-4 border border-white/8">
                    <p className="text-neutral-300 text-sm leading-relaxed mb-3 line-clamp-2">
                      &ldquo;{t.quote.substring(0, 100)}...&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <Image src={t.image} alt={t.author} fill className="object-cover" sizes="32px" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">{t.author}</p>
                        <p className="text-neutral-500 text-[0.7rem]">{t.company}</p>
                      </div>
                      <span className="ml-auto text-xs font-bold text-brand-400">{t.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
