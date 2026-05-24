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
          title="Data-driven thinking, reliable delivery"
          description="BSCS graduate blending analytics, CRM platforms, and hands-on IT support."
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
              I&apos;m <strong className="text-foreground">{site.name}</strong>,{" "}
              {site.summary}
            </p>
            <p>
              I&apos;m targeting roles as a <strong className="text-foreground">Data Analyst</strong>,{" "}
              <strong className="text-foreground">Power BI / BI Analyst</strong>,{" "}
              <strong className="text-foreground">Junior Zendesk Developer</strong>, or{" "}
              <strong className="text-foreground">IT / Systems Support Engineer</strong> — anywhere
              data, customer experience, and solid operations meet.
            </p>
            <p className="text-sm">
              <span className="text-foreground">{site.location}</span>
              {" · "}
              {site.languages.join(" · ")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass card-hover rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-lg font-semibold text-foreground">Key achievements</h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  step: "01",
                  title: "Zendesk for Zofeur UAE",
                  text: "End-to-end production deployment with automations, QA, and multichannel workflows.",
                },
                {
                  step: "02",
                  title: "25% efficiency at AI Neuralz",
                  text: "Automated data processing pipelines for faster analytics delivery.",
                },
                {
                  step: "03",
                  title: "Deep Learning FYP",
                  text: "InceptionV3 model for pomegranate disease detection with transfer learning.",
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
