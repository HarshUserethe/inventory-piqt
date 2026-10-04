// ============================================================
// Why Us Page Configuration
// ============================================================

export const whyUsHero = {
  badge: "Why Process IQ Tech",
  headline: "The Difference Between",
  headlineAccent: "Good and Transformational",
  description:
    "In a crowded market of BPM vendors and consultants, Process IQ Tech stands apart through a unique combination of deep domain expertise, proprietary technology, and an unwavering commitment to client outcomes.",
};

export const differentiators = [
  {
    number: "01",
    icon: "MapPin",
    title: "Why India?",
    description:
      "India is considered a favorite destination for offshoring, maintaining its dominance in global sourcing of services owing to its mature ecosystem.",
    highlight: "Mature offshoring ecosystem",
  },
  {
    number: "02",
    icon: "Users",
    title: "Top Talent Pool",
    description:
      "India still stands out in terms of size, breadth and quality of talent pool, lower cost of operations, lower business risk and ability to scale up.",
    highlight: "Quality talent and scalability",
  },
  {
    number: "03",
    icon: "TrendingUp",
    title: "Evolved Industry",
    description:
      "With time India's offshoring industry has evolved to cater to varied needs of its client base across different domains and functions.",
    highlight: "Adaptable to client needs",
  },
  {
    number: "04",
    icon: "DollarSign",
    title: "Transparent Pricing",
    description:
      "Our business process management starts at USD 1800 per month per employee (9 hours a day, 5 days a week). This pricing includes all expenses, payroll, taxes and all related costs.",
    highlight: "All-inclusive $1800/mo pricing",
  },
  {
    number: "05",
    icon: "CheckCircle",
    title: "Clear Terms",
    description:
      "We require a minimum of 5 employees to start a project. We take a 50% advance payment to start the project and thereafter payments will be made in advance every Friday.",
    highlight: "Simple terms and conditions",
  },
];

export const comparisonTable = {
  headers: ["Capability", "Process IQ Tech", "Traditional SI", "Boutique Consultant", "Offshore BPO"],
  rows: [
    { capability: "End-to-End BPM Services", piqt: true, si: true, boutique: false, bpo: false },
    { capability: "Proprietary Automation Platform", piqt: true, si: false, boutique: false, bpo: false },
    { capability: "AI/ML Cognitive Automation", piqt: true, si: "partial", boutique: false, bpo: false },
    { capability: "Outcome-Based Pricing", piqt: true, si: false, boutique: "partial", bpo: false },
    { capability: "Domain Expert Teams", piqt: true, si: "partial", boutique: true, bpo: false },
    { capability: "24/7 Global Support", piqt: true, si: true, boutique: false, bpo: true },
    { capability: "Process Intelligence & Mining", piqt: true, si: "partial", boutique: false, bpo: false },
    { capability: "Rapid 90-Day Value Delivery", piqt: true, si: false, boutique: "partial", bpo: false },
    { capability: "Change Management Built-In", piqt: true, si: "partial", boutique: "partial", bpo: false },
    { capability: "ROI Guarantee", piqt: true, si: false, boutique: false, bpo: false },
  ],
};

export const clientSuccessStories = [
  {
    company: "Nexora Financial Group",
    industry: "Financial Services",
    challenge: "Manual, paper-heavy accounts payable process causing 14-day invoice cycles and frequent compliance violations.",
    solution: "Deployed intelligent document processing + RPA for end-to-end AP automation integrated with SAP S/4HANA.",
    results: [
      { metric: "Invoice cycle time", before: "14 days", after: "1.8 days" },
      { metric: "Processing cost per invoice", before: "$18.40", after: "$3.20" },
      { metric: "Straight-through processing", before: "22%", after: "91%" },
      { metric: "Compliance score", before: "67%", after: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    company: "GlobalTech Manufacturing",
    industry: "Manufacturing",
    challenge: "Fragmented supply chain workflows across 12 ERP systems causing $47M in annual inventory overruns.",
    solution: "Unified process layer with real-time visibility dashboard and predictive demand planning automation.",
    results: [
      { metric: "Inventory carrying cost", before: "$47M excess", after: "$9M excess" },
      { metric: "Order accuracy", before: "84%", after: "99.1%" },
      { metric: "Supplier lead time", before: "22 days", after: "11 days" },
      { metric: "Annual savings", before: "-", after: "$38M" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

export const partnerBrands = [
  "UiPath", "Automation Anywhere", "Microsoft", "SAP", "Salesforce",
  "ServiceNow", "AWS", "Google Cloud", "Oracle", "IBM", "Blue Prism", "Pegasystems",
];
