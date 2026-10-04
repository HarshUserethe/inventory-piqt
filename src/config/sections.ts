// ============================================================
// Website Section Visibility & Feature Configuration
// ============================================================
// Use this file to manage the visibility of sections across the website.
// Change boolean values to true (enable/show) or false (disable/hide).

export interface CareersSectionsConfig {
  hero: boolean;
  culture: boolean;
  benefits: boolean;
  openPositions: boolean; // Controls Open Positions / Job Listings section
  resumeUpload: boolean;  // Controls Resume Uploading section
}

export interface HomepageSectionsConfig {
  hero: boolean;
  valueProposition: boolean;
  stats: boolean;
  servicesOverview: boolean;
  bpmAdvantages: boolean;
  process: boolean;
  technology: boolean;
  industries: boolean;
  testimonials: boolean;
  whyUs: boolean;
  ctaBanner: boolean;
}

export interface AboutSectionsConfig {
  hero: boolean;
  mission: boolean;
  leadershipTeam: boolean;
  values: boolean;
  stats: boolean;
}

export interface ServicesSectionsConfig {
  hero: boolean;
  servicesGrid: boolean;
  methodology: boolean;
  ctaBanner: boolean;
}

export interface WhyUsSectionsConfig {
  hero: boolean;
  differentiators: boolean;
  comparisons: boolean;
  ctaBanner: boolean;
}

export interface FaqsSectionsConfig {
  hero: boolean;
  faqCategories: boolean;
  stillHaveQuestions: boolean;
}

export interface SiteSectionsConfig {
  careers: CareersSectionsConfig;
  homepage: HomepageSectionsConfig;
  about: AboutSectionsConfig;
  services: ServicesSectionsConfig;
  whyUs: WhyUsSectionsConfig;
  faqs: FaqsSectionsConfig;
}

export const siteSections: SiteSectionsConfig = {
  // ------------------------------------------------------------
  // Careers Page Configuration
  // ------------------------------------------------------------
  careers: {
    hero: true,
    culture: true,
    benefits: true,
    openPositions: true, // Set to false to hide open positions section
    resumeUpload: true,  // Set to false to hide resume upload section
  },

  // ------------------------------------------------------------
  // Homepage Configuration
  // ------------------------------------------------------------
  homepage: {
    hero: true,
    valueProposition: true,
    stats: true,
    servicesOverview: true,
    bpmAdvantages: true,
    process: true,
    technology: true,
    industries: true,
    testimonials: true,
    whyUs: true,
    ctaBanner: true,
  },

  // ------------------------------------------------------------
  // About Page Configuration
  // ------------------------------------------------------------
  about: {
    hero: true,
    mission: true,
    leadershipTeam: true,
    values: true,
    stats: true,
  },

  // ------------------------------------------------------------
  // Services Page Configuration
  // ------------------------------------------------------------
  services: {
    hero: true,
    servicesGrid: true,
    methodology: true,
    ctaBanner: true,
  },

  // ------------------------------------------------------------
  // Why Us Page Configuration
  // ------------------------------------------------------------
  whyUs: {
    hero: true,
    differentiators: true,
    comparisons: true,
    ctaBanner: true,
  },

  // ------------------------------------------------------------
  // FAQs Page Configuration
  // ------------------------------------------------------------
  faqs: {
    hero: true,
    faqCategories: true,
    stillHaveQuestions: true,
  },
};
