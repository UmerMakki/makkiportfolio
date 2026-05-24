export type Job = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    id: "fusionwave",
    role: "Junior Zendesk Developer / System Support Officer",
    company: "3LI Global · FusionWave (Pvt.) Ltd.",
    period: "Feb 2025 – May 2025",
    location: "Lahore, Pakistan",
    highlights: [
      "Delivered end-to-end Zendesk Suite implementation for Zofeur UAE — automations, triggers, multichannel workflows, and production-ready QA.",
      "Configured Admin Center: roles, SLAs, custom views, Help Center branding, and Agent Workspace improvements.",
      "Provided IT support for hardware, software, networks, and access controls while tracking ops data in ticketing systems.",
    ],
  },
  {
    id: "ai-neuralz",
    role: "Data Analyst Intern",
    company: "AI Neuralz",
    period: "May 2024 – Nov 2024",
    location: "Multan, Pakistan",
    highlights: [
      "Built Power BI, Tableau, and Looker Studio dashboards for KPI monitoring and stakeholder reporting.",
      "Analyzed datasets with Python & SQL; automated routine processing — improving efficiency by 25%.",
      "Used GA4 and Shopify data to refine acquisition strategy and user funnel performance.",
    ],
  },
  {
    id: "hafiz-halwa",
    role: "Computer Operator (Part-Time)",
    company: "Hafiz Sohan Halwa",
    period: "Jun 2022 – Aug 2023",
    location: "Multan, Pakistan",
    highlights: [
      "Maintained digital inventory and customer records with high accuracy — reducing errors by 15%.",
      "Generated monthly performance reports and streamlined spreadsheet-based workflows.",
      "Provided user support and procedural documentation for daily operations.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "NCBA&E, Multan",
    year: "2020 – 2024",
  },
  {
    degree: "AI, Machine Learning & Deep Learning Apprenticeship",
    school: "NAVTTC",
    year: "2024",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Central College Multan",
    year: "2018 – 2020",
  },
] as const;

export const certifications = [
  "Supervised ML — Stanford University",
  "Google Data Analytics & Ask Questions (Data-Driven Decisions)",
  "Microsoft Fabric — Udemy",
  "Data Analysis with Python — freeCodeCamp",
  "Zendesk Sales Specialist & Partner Sales Expert",
  "Cisco: Data Analytics Essentials & Computer Hardware Basics",
] as const;
