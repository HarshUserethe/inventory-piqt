import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactWorkflow from "@/components/contact/ContactWorkflow";
import ContactCta from "@/components/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact Us | Process IQ Tech",
  description:
    "Let's start your transformation journey. Reach out to our team for a free process assessment, partnership inquiry, or just to learn more about how we can help your organization.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <ContactWorkflow />
      <ContactCta />
    </main>
  );
}
