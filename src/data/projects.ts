export type ProjectAccent = "violet" | "cyan" | "pink" | "emerald";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accent: ProjectAccent;
  image?: string;
  href?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "pomegranate-fyp",
    title: "Pomegranate Disease Detection (FYP)",
    description:
      "Final Year Project: InceptionV3 deep learning model to detect pomegranate diseases and estimate spoilage — transfer learning, data augmentation, and precision agriculture insights.",
    tags: ["TensorFlow", "InceptionV3", "Python", "Deep Learning"],
    accent: "emerald",
    featured: true,
  },
  {
    id: "zofeur-zendesk",
    title: "Zofeur UAE — Zendesk Implementation",
    description:
      "Production Zendesk Suite deployment: multichannel support (email, chat, web forms), automated triggers & macros, SLA policies, and full QA validation for a live client.",
    tags: ["Zendesk Suite", "Automation", "SLA", "QA"],
    accent: "violet",
    featured: true,
  },
  {
    id: "zomato-eda",
    title: "Zomato Exploratory Data Analysis",
    description:
      "Python EDA on the Zomato dataset — preprocessing, visualizations (count plots, heatmaps, box plots), and actionable business insights from trends and patterns.",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    accent: "cyan",
    featured: true,
  },
  {
    id: "pandas-analysis",
    title: "Data Analysis with Pandas",
    description:
      "Structured data exploration pipeline: DataFrame manipulation, duplicate handling, missing data treatment, and insight generation for analytical reporting.",
    tags: ["Pandas", "Python", "Data Cleaning"],
    accent: "pink",
    github: "https://github.com/UmerMakki",
  },
  {
    id: "power-bi-dashboards",
    title: "Power BI KPI Dashboards",
    description:
      "Interactive dashboards with DAX queries for real-time KPI reporting — built during AI Neuralz internship for data-driven stakeholder decisions.",
    tags: ["Power BI", "DAX", "KPI Reporting"],
    accent: "violet",
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio (This Site)",
    description:
      "Modern Next.js portfolio with Framer Motion, Supabase contact form, and Netlify deployment — showcasing my work and professional profile.",
    tags: ["Next.js", "TypeScript", "Supabase", "Netlify"],
    accent: "cyan",
    href: "https://umermakki.netlify.app",
    github: "https://github.com/UmerMakki/makkiportfolio",
  },
];
