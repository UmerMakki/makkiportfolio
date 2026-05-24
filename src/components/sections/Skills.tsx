"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--color-surface)]/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="The stack I use for analytics, CRM, IT operations, and machine learning."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[#7c6cff]">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
