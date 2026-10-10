import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCta from "@/components/about/AboutCta";
import { siteSections } from "@/config/sections";

export const metadata: Metadata = {
  title: "About Us | Process IQ Tech",
  description:
    "Learn about Process IQ Tech's mission, values, executive leadership, and 24/7 global support team empowering organizations worldwide.",
};

export default function AboutPage() {
  const { hero, mission, leadershipTeam: showTeam, values } = siteSections.about;

  return (
    <main className="min-h-screen">
      {hero && <AboutHero />}
      {/* Temporarily hidden: <AboutStats /> (Proven Impact) */}
      {mission && <AboutMission />}
      {values && <AboutValues />}
      {/* Temporarily hidden: <AboutJourney /> (Our Journey) */}
      {showTeam && <AboutTeam />}
      <AboutCta />
    </main>
  );
}
