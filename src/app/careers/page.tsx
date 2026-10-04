import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, Users } from "lucide-react";
import { careersHero, culturePoints, openRoles, benefits } from "@/config/careers";
import { siteSections } from "@/config/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import Image from "next/image";
import ResumeUploadSection from "@/components/careers/ResumeUploadSection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Process IQ Tech's team of 2,800+ process experts. Explore open roles in consulting, engineering, analytics, and more.",
};

const cultureIcons: Record<string, string> = {
  GraduationCap: "🎓",
  Globe: "🌍",
  Heart: "❤️",
  TrendingUp: "📈",
  Users: "👥",
  Clock: "⏰",
};

const benefitIcons: Record<string, string> = {
  Heart: "❤️",
  TrendingUp: "📈",
  BookOpen: "📚",
  Umbrella: "☂️",
  Home: "🏠",
  Baby: "👶",
};

const departmentColors: Record<string, string> = {
  Consulting: "bg-indigo-100 text-indigo-700",
  Engineering: "bg-violet-100 text-violet-700",
  Analytics: "bg-blue-100 text-blue-700",
  Sales: "bg-emerald-100 text-emerald-700",
  Product: "bg-amber-100 text-amber-700",
};

export default function CareersPage() {
  const { hero, culture, benefits: showBenefits, openPositions, resumeUpload } = siteSections.careers;

  // Determine Hero CTA behavior dynamically based on section config
  const heroCtaHref = openPositions
    ? "#open-roles"
    : resumeUpload
    ? "#resume-upload"
    : "/contact";

  const heroCtaText = openPositions
    ? "See Open Roles"
    : resumeUpload
    ? "Upload Resume"
    : "Contact Us";

  return (
    <>
      {/* Hero Section */}
      {hero && (
        <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/60 to-neutral-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/8 rounded-full blur-[120px]" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  {careersHero.badge}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                  {careersHero.headline}{" "}
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    {careersHero.headlineAccent}
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                  {careersHero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={heroCtaHref} className="btn-primary">
                    {heroCtaText} <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-2 text-neutral-300 text-sm">
                    <div className="flex -space-x-2">
                      {[
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60",
                        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=60",
                        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60",
                      ].map((src, i) => (
                        <Image
                          key={i}
                          src={src}
                          alt="Team member"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full border-2 border-neutral-800 object-cover"
                        />
                      ))}
                    </div>
                    <span>Join 2,800+ experts</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85"
                    alt="Process IQ Tech team"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Culture & Perks Section */}
      {culture && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="Life at Process IQ Tech"
                title="A Culture Built for"
                accent="Extraordinary People"
                description="We invest in the people who power our mission. Here's what it means to work at Process IQ Tech."
                centered
              />
            </RevealOnScroll>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturePoints.map((point, index) => (
                <RevealOnScroll key={point.title} delay={index * 80}>
                  <div className="card-premium group">
                    <div className="text-3xl mb-4">{cultureIcons[point.icon] || "🌟"}</div>
                    <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{point.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {showBenefits && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <RevealOnScroll>
              <SectionHeading
                badge="Benefits & Perks"
                title="Everything You Need to"
                accent="Thrive"
                centered
              />
            </RevealOnScroll>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((benefit, index) => (
                <RevealOnScroll key={benefit.label} delay={index * 60}>
                  <div className="text-center p-5 rounded-2xl bg-white border border-neutral-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{benefitIcons[benefit.icon] || "✨"}</div>
                    <div className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors mb-1">{benefit.label}</div>
                    <div className="text-xs text-neutral-400">{benefit.detail}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions Section */}
      {openPositions && (
        <section id="open-roles" className="section-padding bg-white scroll-mt-24">
          <div className="container-custom">
            <RevealOnScroll>
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                <SectionHeading
                  badge="Open Positions"
                  title={`${openRoles.length} Open`}
                  accent="Roles"
                  description="Find your next career challenge across our global offices and remote positions."
                />
                <div className="flex items-center gap-2 text-sm text-neutral-500 shrink-0">
                  <Users className="w-4 h-4" />
                  {openRoles.length} positions available
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              {openRoles.map((role, index) => (
                <RevealOnScroll key={role.id} delay={index * 60}>
                  <div className="group relative bg-white border border-neutral-200 rounded-2xl p-6 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                              departmentColors[role.department] || "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            {role.department}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-600 text-xs font-medium">
                            {role.type}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-neutral-900 text-xl mb-1.5 group-hover:text-primary-600 transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-base text-neutral-600 leading-relaxed mb-3.5 max-w-2xl">{role.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary-500" /> {role.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary-500" /> {role.experience}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-primary-500" /> {role.type}
                          </span>
                        </div>
                      </div>
                      <a
                        href={resumeUpload ? "#resume-upload" : "/contact"}
                        className="btn-primary shrink-0 text-sm py-3 px-5"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resume Uploading Section */}
      {resumeUpload && <ResumeUploadSection />}
    </>
  );
}

