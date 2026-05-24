"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong");
      }

      setStatus("success");
      setMessage("Thanks! Your message was sent — I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Failed to send. Please try email instead.",
      );
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's start a conversation"
              description="Share your idea, timeline, and budget — no pressure, just an honest chat about fit."
            />

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4 text-[var(--color-muted)]">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#7c6cff]" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm hover:text-[#7c6cff] transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-[var(--color-muted)]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7c6cff]" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm">{site.location}</p>
                </div>
              </li>
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-foreground">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[#7c6cff]/50 focus:ring-2 focus:ring-[#7c6cff]/20"
                  placeholder="Tell me about your project..."
                />
              </label>
            </div>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[#7c6cff]/50 focus:ring-2 focus:ring-[#7c6cff]/20"
        placeholder={label}
      />
    </label>
  );
}
