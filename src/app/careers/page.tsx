"use client";

import { useState } from "react";
import CareersHero from "@/components/careers/CareersHero";
import CareersCulture from "@/components/careers/CareersCulture";
import CareersOpenRoles from "@/components/careers/CareersOpenRoles";
import ResumeUploadSection from "@/components/careers/ResumeUploadSection";
import { siteSections } from "@/config/sections";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const { openPositions } = siteSections.careers;

  return (
    <main className="relative min-h-screen bg-[#FAFAFC] dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <CareersHero />
      <CareersCulture />
      {openPositions && (
        <CareersOpenRoles onSelectRole={(roleTitle) => setSelectedRole(roleTitle)} />
      )}
      <ResumeUploadSection selectedRoleTitle={selectedRole} />
    </main>
  );
}
