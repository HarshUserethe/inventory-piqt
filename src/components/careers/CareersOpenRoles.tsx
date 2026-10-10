"use client";

import { useState } from "react";
import { MapPin, Clock, Briefcase, Users, ArrowRight, Sparkles } from "lucide-react";
import { openRoles } from "@/config/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const departmentStyles: Record<string, string> = {
  Consulting: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/40",
  Engineering: "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/40",
  Analytics: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40",
  Sales: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",
  Product: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40",
};

interface CareersOpenRolesProps {
  onSelectRole?: (title: string) => void;
}

export default function CareersOpenRoles({ onSelectRole }: CareersOpenRolesProps) {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");

  const departments = ["All", ...Array.from(new Set(openRoles.map((r) => r.department)))];

  const filteredRoles =
    activeDepartment === "All"
      ? openRoles
      : openRoles.filter((r) => r.department === activeDepartment);

  const handleApplyClick = (title: string) => {
    if (onSelectRole) {
      onSelectRole(title);
    }
    const elem = document.getElementById("resume-upload");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="open-roles" className="relative z-20 py-20 sm:py-28 bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 scroll-mt-24">
      <div className="container-custom">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Open Positions"
              title={`${openRoles.length} Open`}
              accent="Roles"
              description="Find your next career challenge across our global tech hubs and remote teams."
            />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-500/20 shrink-0 self-start md:self-end">
              <Users className="w-4 h-4" />
              <span>{openRoles.length} Positions Available</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Filter Tabs */}
        <RevealOnScroll className="mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md w-fit">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none",
                  activeDepartment === dept
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Role Cards List */}
        <div className="space-y-4 sm:space-y-5">
          {filteredRoles.map((role, index) => (
            <RevealOnScroll key={role.id} delay={index * 60}>
              <div className="group relative bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 rounded-[24px] p-6 sm:p-8 backdrop-blur-xl hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold border",
                          departmentStyles[role.department] || "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200"
                        )}
                      >
                        {role.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                        {role.type}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl sm:text-2xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {role.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-[#a1a1a1] text-sm sm:text-base leading-relaxed mb-4 max-w-3xl font-normal">
                      {role.description}
                    </p>

                    {/* Metadata items */}
                    <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        {role.experience}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        {role.type}
                      </span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => handleApplyClick(role.title)}
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
