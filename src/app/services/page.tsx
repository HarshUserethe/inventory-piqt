import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesWorkflow from "@/components/services/ServicesWorkflow";
import ServicesCta from "@/components/services/ServicesCta";

export const metadata: Metadata = {
  title: "Services | Process IQ Tech",
  description:
    "Explore Process IQ Tech's comprehensive BPM services: operations support, advisory, customer support & sales, data processing, and financial reconciliation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesWorkflow />
      <ServicesCta />
    </main>
  );
}
