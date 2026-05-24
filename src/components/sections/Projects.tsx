"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A snapshot of builds I've shipped — swap in your real case studies anytime."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 3} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: (typeof projects)[0];
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={`glass card-hover group overflow-hidden rounded-2xl ${
        large ? "lg:col-span-1" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          {project.github && (
            <Link
              href={project.github}
              className="rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.href && (
            <Link
              href={project.href}
              className="rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
              aria-label="Live demo"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] line-clamp-2">
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
