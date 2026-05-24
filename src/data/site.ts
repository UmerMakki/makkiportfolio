export const site = {
  name: "Umer Makki",
  title: "IT Professional & Digital Craftsman",
  tagline:
    "I design and build reliable software — from polished web experiences to scalable backends.",
  email: "hello@umermakki.com",
  location: "Available worldwide · Remote",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  availability: "Open to freelance & full-time roles",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Web Development",
    description:
      "Fast, accessible React & Next.js apps with thoughtful UX and clean architecture.",
    icon: "code" as const,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "APIs, databases, and auth with Supabase, Node, and modern cloud tooling.",
    icon: "layers" as const,
  },
  {
    title: "UI/UX & Branding",
    description:
      "Minimal interfaces, design systems, and landing pages that convert visitors into clients.",
    icon: "palette" as const,
  },
  {
    title: "Consulting & Support",
    description:
      "Code reviews, performance audits, and ongoing maintenance for growing products.",
    icon: "headphones" as const,
  },
] as const;

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Supabase / PostgreSQL",
  "Tailwind CSS",
  "REST & GraphQL",
  "Git & CI/CD",
  "Figma",
  "Netlify / Vercel",
  "Linux",
] as const;

export const stats = [
  { value: "15+", label: "Projects delivered" },
  { value: "3+", label: "Years experience" },
  { value: "100%", label: "Client-focused" },
] as const;
