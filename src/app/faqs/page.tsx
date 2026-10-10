import type { Metadata } from "next";
import FaqsHero from "@/components/faqs/FaqsHero";
import FaqsList from "@/components/faqs/FaqsList";
import FaqsCta from "@/components/faqs/FaqsCta";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Process IQ Tech",
  description:
    "Find answers to common questions about Process IQ Tech's BPM services, automation stack, commercial models, SLAs, and security standards.",
};

export default function FaqsPage() {
  return (
    <main className="relative min-h-screen bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <FaqsHero />
      <FaqsList />
      <FaqsCta />
    </main>
  );
}
