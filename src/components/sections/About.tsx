"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About"
          title="Building digital products with clarity & craft"
          description="I help teams and founders ship software that feels premium — without the bloat."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[var(--color-muted)] leading-relaxed"
          >
            <p>
              I&apos;m <strong className="text-foreground">{site.name}</strong>, an IT
              professional focused on modern web development, clean architecture, and
              user-centered design. I turn ideas into production-ready applications —
              from first wireframe to deployed product on Netlify or your cloud of choice.
            </p>
            <p>
              Whether you need a portfolio that stands out, a SaaS MVP, or ongoing
              engineering support, I bring a calm, detail-oriented approach and clear
              communication at every step.
            </p>
            <p className="text-sm text-[var(--color-muted)]">{site.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass card-hover rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-lg font-semibold text-foreground">How I work</h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  step: "01",
                  title: "Discover",
                  text: "Understand goals, users, and constraints before writing code.",
                },
                {
                  step: "02",
                  title: "Design & build",
                  text: "Iterate in small releases with modern stack and measurable quality.",
                },
                {
                  step: "03",
                  title: "Ship & support",
                  text: "Deploy, monitor, and refine based on real feedback.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-mono text-sm text-[#7c6cff]">{item.step}</span>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
