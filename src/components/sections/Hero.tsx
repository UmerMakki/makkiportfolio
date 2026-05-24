"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site, stats } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { easeSmooth } from "@/lib/motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: easeSmooth },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden mesh-bg pt-28 pb-20 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#7c6cff]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#38bdf8]/15 blur-[100px]" />

      <div className="container-wide relative section-padding !pb-16">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-2 text-sm text-[var(--color-muted)]"
        >
          <Sparkles className="h-4 w-4 text-[#7c6cff]" />
          <span>{site.availability}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{site.name}</span>
          <span className="text-foreground"> — </span>
          {site.title}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#contact" size="lg">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#projects" variant="ghost" size="lg">
            View my work
          </Button>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-10 md:max-w-xl"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold gradient-text md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)] md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="mx-auto h-2 w-1 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
