// ============================================================
// Website Section Visibility & Feature Configuration
// ============================================================
// Use this file to manage the visibility of sections across the website.
// Change boolean values to true (enable/show) or false (disable/hide).
//
// ┌─────────────────────────────────────────────────────────┐
// │  MAINTENANCE MODE                                       │
// │  Set `maintenanceMode: true` to replace the entire      │
// │  website with the Maintenance page on every route.      │
// │  Set `maintenanceMode: false` to restore normal site.   │
// └─────────────────────────────────────────────────────────┘

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
  ctaBanner: boolean;
}

export interface FaqsSectionsConfig {
  hero: boolean;
  faqCategories: boolean;
  stillHaveQuestions: boolean;
}

export interface SiteSectionsConfig {
  /**
   * Global maintenance mode toggle.
   *
   * - `true`  → every URL renders the "We're Down for Maintenance" page;
   *             the Navbar, Footer and all page content are hidden.
   * - `false` → normal website experience.
   */
  maintenanceMode: boolean;

  careers: CareersSectionsConfig;
  homepage: HomepageSectionsConfig;
  about: AboutSectionsConfig;
  services: ServicesSectionsConfig;
  whyUs: WhyUsSectionsConfig;
  faqs: FaqsSectionsConfig;
}

export const siteSections: SiteSectionsConfig = {
  // ------------------------------------------------------------
  // MAINTENANCE MODE — flip to true to enable the maintenance page
  // ------------------------------------------------------------
  maintenanceMode: false,

  // ------------------------------------------------------------
  // Careers Page Configuration
  // ------------------------------------------------------------
  careers: {
    hero: true,
    culture: true,
    benefits: false,
    openPositions: false, // Set to false to hide open positions section
    resumeUpload: true,  // Set to false to hide resume upload section
  },

  // ------------------------------------------------------------
  // Homepage Configuration
  // ------------------------------------------------------------
  homepage: {
    hero: true,
    valueProposition: true,
    stats: false,
    servicesOverview: true,
    bpmAdvantages: true,
    process: true,
    technology: true,
    industries: false,
    testimonials: false,
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
