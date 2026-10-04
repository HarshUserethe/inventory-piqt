import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Linkedin } from "@/components/ui/BrandIcons";
import { aboutHero, companyMilestones, leadershipTeam, companyValues, awards } from "@/config/about";
import { siteSections } from "@/config/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Process IQ Tech's mission, history, and the global team transforming business processes for 500+ enterprises worldwide.",
};

const valueIcons: Record<string, string> = {
  Lightbulb: "💡",
  Handshake: "🤝",
  Star: "⭐",
  Heart: "❤️",
  Globe: "🌍",
  Shield: "🛡️",
};

const awardIcons: Record<string, string> = {
  Award: "🏆",
  Trophy: "🥇",
  Star: "⭐",
  Users: "👥",
};

export default function AboutPage() {
  const { hero, mission, leadershipTeam: showTeam, values } = siteSections.about;

  return (
    <>
      {/* Hero */}
      {hero && (
        <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
          <div className="container-custom relative z-10">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {aboutHero.badge}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                {aboutHero.headline}{" "}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {aboutHero.headlineAccent}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl">
                {aboutHero.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Mission & Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                  alt="Process IQ Tech global team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent" />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div>
                <SectionHeading
                  badge="Our Mission"
                  title="Empowering Organizations to"
                  accent="Operate at Their Best"
                  description="We believe every organization has untapped potential locked in inefficient processes. Our mission is to unlock it — using the best of human expertise and technological innovation."
                  className="mb-8"
                />
                <p className="text-neutral-500 leading-relaxed mb-6">
                  Since 2009, we have partnered with some of the world's most ambitious companies — from high-growth scale-ups to Global 2000 enterprises — to redesign the way they work. What drives us is simple: when processes work better, businesses grow faster, employees work smarter, and customers are served better.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: "2009" },
                    { label: "Employees", value: "2,800+" },
                    { label: "Clients", value: "500+" },
                    { label: "Countries", value: "40+" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="text-2xl font-display font-bold text-primary-600 mb-1">{item.value}</div>
                      <div className="text-sm text-neutral-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Our Values"
              title="Principles That Guide"
              accent="Everything We Do"
              description="Our values aren't words on a wall — they're the operating system that guides every decision, every interaction, and every delivery."
              centered
            />
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <RevealOnScroll key={value.title} delay={index * 80} className="h-full">
                <div className="card-premium h-full flex flex-col justify-start group">
                  <div className="text-3xl mb-4">{valueIcons[value.icon] || "✨"}</div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed flex-1">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Our Journey"
              title="15 Years of"
              accent="Continuous Growth"
              centered
            />
          </RevealOnScroll>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-[2.2rem] top-0 bottom-0 w-px bg-neutral-200" />
              <div className="space-y-8">
                {companyMilestones.map((milestone, index) => (
                  <RevealOnScroll key={milestone.year} delay={index * 80}>
                    <div className="flex gap-6 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex flex-col items-center justify-center text-white shrink-0 shadow-primary z-10">
                        <span className="text-xs font-bold leading-tight">{milestone.year}</span>
                      </div>
                      <div className="bg-white border border-neutral-100 rounded-2xl p-5 flex-1 shadow-card hover:shadow-card-hover hover:border-primary-100 transition-all duration-300">
                        <h4 className="font-display font-bold text-neutral-900 mb-2">{milestone.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Leadership"
              title="Meet Our"
              accent="Executive Team"
              description="Industry veterans and innovators who have spent their careers transforming how organizations operate."
              centered
            />
          </RevealOnScroll>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, index) => (
              <RevealOnScroll key={leader.name} delay={index * 80}>
                <div className="card-premium group overflow-hidden p-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                    <a
                      href={leader.linkedin}
                      className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-primary-600 transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-neutral-900 text-xl mb-0.5">{leader.name}</h3>
                    <p className="text-primary-600 text-base font-semibold mb-3">{leader.title}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <RevealOnScroll>
            <SectionHeading
              badge="Recognition"
              title="Industry Awards &"
              accent="Accolades"
              centered
            />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <RevealOnScroll key={award.title} delay={index * 80}>
                <div className="text-center p-8 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{awardIcons[award.icon] || "🏆"}</div>
                  <div className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">{award.year}</div>
                  <h4 className="font-display font-bold text-neutral-900 text-base mb-2 group-hover:text-primary-700 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-xs text-neutral-400">{award.category}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Be part of a company that&apos;s redefining business operations for the world&apos;s leading organizations.
          </p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Explore Careers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
