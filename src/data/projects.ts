export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with cart, checkout, and admin dashboard. Built with Next.js and Supabase for real-time inventory.",
    tags: ["Next.js", "Supabase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    href: "#",
    github: "#",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Data-rich admin panel with charts, role-based access, and dark-mode UI optimized for daily power users.",
    tags: ["React", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "#",
    github: "#",
    featured: true,
  },
  {
    id: "agency-landing",
    title: "Agency Landing Page",
    description:
      "High-converting marketing site with scroll animations, CMS-ready sections, and sub-second load times.",
    tags: ["Next.js", "Framer Motion", "Netlify"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "#",
    featured: true,
  },
  {
    id: "task-app",
    title: "Team Task Manager",
    description:
      "Collaborative task board with drag-and-drop, notifications, and offline-friendly PWA support.",
    tags: ["React", "Supabase", "PWA"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    github: "#",
  },
  {
    id: "portfolio-template",
    title: "Developer Portfolio Kit",
    description:
      "Reusable portfolio template with project grid, contact form, and SEO best practices out of the box.",
    tags: ["Next.js", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    href: "#",
    github: "#",
  },
  {
    id: "api-gateway",
    title: "API Integration Service",
    description:
      "Middleware layer connecting third-party APIs with caching, rate limiting, and structured logging.",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    github: "#",
  },
];
