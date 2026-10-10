import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Linkedin } from "@/components/ui/BrandIcons";
import { aboutHero, leadershipTeam, companyValues } from "@/config/about";
import { siteSections } from "@/config/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { PageHero } from "@/components/ui/PageHero";
import {
  Lightbulb, Handshake, Star, Heart, Globe, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Process IQ Tech's mission, values, and executive team transforming business processes for organizations worldwide.",
};

const valueIconMap: Record<string, React.ElementType> = {
  Lightbulb, Handshake, Star, Heart, Globe, Shield,
};

export default function AboutPage() {
  const { hero, mission, leadershipTeam: showTeam, values } = siteSections.about;

  return (
    <>
      {/* Hero */}
      {hero && (
        <PageHero
          badge={aboutHero.badge}
          title={aboutHero.headline}
          titleAccent={aboutHero.headlineAccent}
          description={aboutHero.description}
          breadcrumbs={[{ label: "About Us" }]}
        />
      )}

      {/* Mission & Image */}
      {mission && (
        <section className="section-padding bg-[var(--bg)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                    alt="Process IQ Tech global team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={150}>
                <SectionHeading
                  badge="Our Mission"
                  title="Empowering Organizations to"
                  accent="Operate at Their Best"
                  description="We believe every organization has untapped potential locked in inefficient processes. Our mission is to unlock it — using the best of human expertise and technological innovation."
                  className="mb-8"
                />
                <p className="text-[var(--text-secondary)] leading-relaxed text-[0.9375rem]">
                  We partner with ambitious companies — from high-growth scale-ups to established enterprises — to redesign the way they work. What drives us is simple: when processes work better, businesses grow faster, employees work smarter, and customers are served better.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* Company Values */}
      {values && (
        <section className="section-padding" style={{ background: "var(--surface-alt, var(--surface))" }}>
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="Our Values"
                title="Principles That Guide"
                accent="Everything We Do"
                description="Our values aren't words on a wall — they're the operating system that guides every decision, every interaction, and every delivery."
                centered
                className="mb-14"
              />
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => {
                const Icon = valueIconMap[value.icon] ?? Star;
                return (
                  <RevealOnScroll key={value.title} delay={index * 80} className="h-full">
                    <div className="card h-full flex flex-col group">
                      <div className="w-12 h-12 rounded-xl bg-brand-600/8 dark:bg-brand-600/12 border border-brand-600/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-[0.9375rem] leading-relaxed flex-1">
                        {value.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Team */}
      {showTeam && (
        <section id="team" className="section-padding bg-[var(--bg)]">
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="Leadership"
                title="Meet Our"
                accent="Executive Team"
                description="Industry veterans and innovators who have spent their careers transforming how organizations operate."
                centered
                className="mb-14"
              />
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipTeam.map((leader, index) => (
                <RevealOnScroll key={leader.name} delay={index * 80}>
                  <div className="card group overflow-hidden p-0">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <a
                        href={leader.linkedin}
                        className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-[var(--text-primary)] text-xl mb-0.5">{leader.name}</h3>
                      <p className="text-brand-600 dark:text-brand-400 text-[0.9375rem] font-semibold mb-3">{leader.title}</p>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#0A0B10] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 50%, #1A73FF 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto">
            Be part of a company that&apos;s redefining business operations for the world&apos;s leading organizations.
          </p>
          <Link href="/careers" className="btn-primary text-base px-8 h-12 inline-flex">
            Explore Careers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
