"use client";

import { useState } from "react";
import { Search, ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { faqs, faqCategories } from "@/config/faqs";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

function FaqItemCard({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <RevealOnScroll delay={index * 40}>
      <div
        className={cn(
          "group rounded-[24px] border transition-all duration-300 overflow-hidden",
          isOpen
            ? "bg-white dark:bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-500/10"
            : "bg-white/80 dark:bg-slate-900/60 border-slate-200/80 dark:border-white/10 hover:border-blue-500/30 backdrop-blur-xl"
        )}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 sm:p-7 text-left group focus:outline-none"
          aria-expanded={isOpen}
          id={`faq-btn-${faq.id}`}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <div className="flex items-start gap-4 pr-4">
            <span
              className={cn(
                "inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase shrink-0 mt-0.5",
                isOpen
                  ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-400/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
              )}
            >
              {faq.category}
            </span>
            <h3
              className={cn(
                "font-display font-bold text-base sm:text-lg leading-snug transition-colors",
                isOpen
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
              )}
            >
              {faq.question}
            </h3>
          </div>

          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
              isOpen
                ? "bg-blue-600 text-white rotate-180 shadow-md shadow-blue-500/30"
                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            )}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        {isOpen && (
          <div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100 dark:border-white/5"
          >
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-4 font-normal">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}

export default function FaqsList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("1");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="relative z-20 pt-16 sm:pt-24 pb-20 sm:pb-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-slate-200/70 dark:border-white/10 shadow-2xl transition-colors duration-300">
      <div className="container-custom max-w-5xl">
        {/* Search Bar */}
        <RevealOnScroll className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
            <input
              type="search"
              placeholder="Search questions or topics (e.g. RPA, pricing, SLAs, security)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent shadow-sm text-sm sm:text-base backdrop-blur-xl transition-all duration-200"
              aria-label="Search FAQ questions"
            />
          </div>
        </RevealOnScroll>

        {/* Category Filters */}
        <RevealOnScroll className="mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md w-fit">
            {faqCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none",
                  activeCategory === cat.value
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* FAQ Accordion Items */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FaqItemCard
                key={faq.id}
                faq={faq}
                isOpen={openFaqId === faq.id}
                onToggle={() => toggleFaq(faq.id)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl mb-2">
              No matching questions found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto">
              Try searching with another keyword or browse questions by selecting a category tab above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
