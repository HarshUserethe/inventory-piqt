"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactWorkflow from "@/components/contact/ContactWorkflow";
import ContactCta from "@/components/contact/ContactCta";

export default function ContactClient() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactWorkflow />
      <ContactCta />
    </>
  );
}
