"use client";

import { motion } from "framer-motion";
import { certifications, education, experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[var(--color-surface)]/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked & learned"
          description="Hands-on roles across data analytics, Zendesk CRM, and IT operations."
        />

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass card-hover rounded-2xl p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                  <p className="text-[#7c6cff]">{job.company}</p>
                </div>
                <div className="text-sm text-[var(--color-muted)] sm:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c6cff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
            <ul className="mt-6 space-y-5">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {item.school} · {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm leading-relaxed text-[var(--color-muted)]"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
