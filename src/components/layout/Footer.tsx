import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/80 py-12">
      <div className="container-wide flex flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-8 lg:px-12">
        <div className="text-center md:text-left">
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            © {year} · Crafted with Next.js & Supabase
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--color-muted)] hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Social href={site.social.github} label="GitHub">
            <Github className="h-5 w-5" />
          </Social>
          <Social href={site.social.linkedin} label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Social>
          <Social href={site.social.twitter} label="Twitter">
            <Twitter className="h-5 w-5" />
          </Social>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-muted)] transition-all hover:border-[#7c6cff]/40 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
    >
      {children}
    </a>
  );
}
