export const site = {
  name: "Umer Makki",
  title: "Data Analyst & Zendesk Developer",
  tagline:
    "Turning data into decisions — from Power BI dashboards and Python analytics to Zendesk automations and IT systems support.",
  summary:
    "Detail-oriented Data Analyst and junior Zendesk Developer with a BSCS from NCBA&E. Experienced in SQL, Python, Power BI, machine learning, and Zendesk Suite administration. Passionate about business process optimization, data-driven decision-making, and technology adoption.",
  email: "umermakki123@gmail.com",
  phone: "+92-302-6252013",
  location: "Lahore / Multan, Pakistan",
  social: {
    github: "https://github.com/UmerMakki",
    linkedin: "https://www.linkedin.com/in/umer-makki-b0b8231b1",
    kaggle: "https://www.kaggle.com/umermakki38",
  },
  availability: "Open to Data Analyst, BI, Zendesk & IT Support roles",
  languages: ["Urdu (Native)", "English (Advanced)"],
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Data Analytics & BI",
    description:
      "Interactive Power BI dashboards, SQL analysis, GA4 insights, and KPI reporting that help teams act on data — not guess.",
    icon: "chart" as const,
  },
  {
    title: "Zendesk & CRM Automation",
    description:
      "End-to-end Zendesk Suite setup: triggers, macros, SLAs, Help Center branding, and multichannel workflows for support teams.",
    icon: "zendesk" as const,
  },
  {
    title: "IT & Systems Support",
    description:
      "Desktop, network, and access management — plus ticketing workflows and operational data tracking for reliable day-to-day ops.",
    icon: "it" as const,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Python-based ML pipelines, deep learning (TensorFlow), and computer vision projects — from EDA to deployed models.",
    icon: "brain" as const,
  },
] as const;

export const skillCategories = [
  {
    label: "Data & BI",
    skills: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Google Analytics 4",
      "Microsoft Fabric",
      "SQL",
      "Excel",
    ],
  },
  {
    label: "Programming & ML",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Scikit-learn",
      "Deep Learning",
      "JavaScript",
    ],
  },
  {
    label: "CRM & Platforms",
    skills: [
      "Zendesk Suite",
      "Zendesk Explore",
      "HubSpot",
      "REST APIs",
      "Shopify Analytics",
    ],
  },
  {
    label: "IT & Tools",
    skills: [
      "Network Troubleshooting",
      "Windows / macOS",
      "Git & GitHub",
      "Documentation",
      "Workflow Design",
    ],
  },
] as const;

export const stats = [
  { value: "25%", label: "Process efficiency gain (AI Neuralz)" },
  { value: "15%", label: "Error reduction (inventory ops)" },
  { value: "BSCS", label: "Computer Science, NCBA&E 2024" },
] as const;
