"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { faqs, faqCategories } from "@/config/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RevealOnScroll delay={index * 50}>
      <div
        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border-primary-200 shadow-card bg-white"
            : "border-neutral-200 bg-white hover:border-neutral-300"
        }`}
      >
        <button
          className="w-full flex items-center justify-between px-6 py-5 text-left group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          id={`faq-btn-${faq.id}`}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <span className={`font-display font-semibold text-base pr-4 transition-colors ${isOpen ? "text-primary-600" : "text-neutral-900 group-hover:text-primary-600"}`}>
            {faq.question}
          </span>
          <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-500"}`}>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>
        {isOpen && (
          <div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            className="px-6 pb-6 border-t border-neutral-100"
          >
            <p className="text-neutral-500 leading-relaxed pt-4 text-sm">{faq.answer}</p>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}

export default function FaqsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Frequently Asked Questions
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              We Have Answers.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Everything you need to know about our services, engagement model, technology, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-5xl">
          {/* Search */}
          <RevealOnScroll>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm text-sm"
                aria-label="Search FAQ questions"
              />
            </div>
          </RevealOnScroll>

          {/* Category filters */}
          <RevealOnScroll delay={50}>
            <div className="flex flex-wrap gap-2 mb-10">
              {faqCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-primary-600 text-white shadow-primary"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* FAQ items */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <FaqItem key={faq.id} faq={faq} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-display font-bold text-neutral-800 text-xl mb-2">
                No results found
              </h3>
              <p className="text-neutral-500 text-sm">
                Try a different search term or browse all categories.
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <RevealOnScroll delay={200}>
            <div className="mt-14 text-center p-10 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  className="absolute inset-0"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-white text-2xl mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-primary-100 text-sm mb-6 max-w-md mx-auto">
                  Our team is happy to walk you through anything. Book a no-obligation conversation with one of our experts.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-lg">
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
