"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects, type Project, type ProjectAccent } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentGradients: Record<ProjectAccent, string> = {
  violet: "from-[#7c6cff]/50 via-[#5b4fd9]/30 to-[#07080d]",
  cyan: "from-[#38bdf8]/50 via-[#0ea5e9]/20 to-[#07080d]",
  pink: "from-[#f472b6]/50 via-[#ec4899]/20 to-[#07080d]",
  emerald: "from-[#34d399]/50 via-[#10b981]/20 to-[#07080d]",
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Academic, professional, and portfolio projects across data, Zendesk, and machine learning."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + featured.length} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="glass card-hover group overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accentGradients[project.accent]}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            {project.tags[0]}
          </span>
          <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.href && (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
                aria-label="View project"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
