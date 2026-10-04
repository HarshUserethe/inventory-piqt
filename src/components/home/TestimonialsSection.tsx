"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/config/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-neutral-50 overflow-hidden">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionHeading
            badge="Client Success"
            title="Trusted by Leaders,"
            accent="Proven by Results"
            description="Don't take our word for it — hear directly from executives who have experienced the Process IQ Tech difference."
            centered
          />
        </RevealOnScroll>

        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-neutral-200 shadow-card-hover">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-primary-100">
              <Quote className="w-14 h-14" strokeWidth={1} fill="currentColor" />
            </div>

            {/* Result badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-100 text-accent-700 text-xs font-bold mb-6">
              ✅ {testimonials[current].result}
            </div>

            <blockquote className="text-lg sm:text-2xl text-neutral-800 leading-relaxed font-medium mb-8 relative z-10">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-100 shrink-0">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-display font-bold text-neutral-900 text-lg">
                  {testimonials[current].author}
                </div>
                <div className="text-base text-neutral-600 font-normal">
                  {testimonials[current].title} · {testimonials[current].company}
                </div>
                <div className="text-sm text-primary-600 font-semibold mt-0.5">
                  {testimonials[current].industry}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center hover:border-primary-400 hover:bg-primary-50 transition-all group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-500 group-hover:text-primary-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-primary-600"
                      : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-neutral-300 flex items-center justify-center hover:border-primary-400 hover:bg-primary-50 transition-all group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
