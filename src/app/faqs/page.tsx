import type { Metadata } from "next";
import FaqsClient from "@/components/faqs/FaqsClient";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to frequently asked questions about Process IQ Tech's BPM services, technology, pricing, security, and engagement model.",
};

export default function FaqsPage() {
  return <FaqsClient />;
}
