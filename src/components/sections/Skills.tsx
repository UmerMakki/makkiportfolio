"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[var(--color-surface)]/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="The stack I reach for to ship fast, maintainable, and beautiful software."
          align="center"
        />

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="cursor-default rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-shadow hover:border-[#7c6cff]/40 hover:shadow-[var(--shadow-glow)]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
