"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="section-padding !py-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[#7c6cff]/20 via-[var(--color-surface-elevated)] to-[#38bdf8]/10 p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7c6cff]/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#38bdf8]/20 blur-[80px]" />

          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#7c6cff]">
            Ready when you are
          </p>
          <h2 className="relative mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">remarkable</span> together
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
            Tell me about your project — I typically reply within 24 hours with next steps
            and a clear path forward.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button href="#contact" size="lg">
              Book a conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost" size="lg">
              Email directly
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
