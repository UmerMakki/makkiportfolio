"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, Headset, Monitor } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  chart: BarChart3,
  zendesk: Headset,
  it: Monitor,
  brain: Brain,
} as const;

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Expertise"
          title="What I bring to your team"
          description="Analytics, CRM automation, IT support, and machine learning — from internship to production deployments."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass card-hover group rounded-2xl p-8"
              >
                <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-[#7c6cff]/20 to-[#38bdf8]/10 p-3 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#7c6cff]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
