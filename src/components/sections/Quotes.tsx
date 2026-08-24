import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { quotes } from "@/data/quotes";

export function Quotes() {
  return (
    <Section id="quotes" eyebrow="Quotes" heading="Favourite Quotes">
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((quote, index) => (
          <motion.figure
            key={quote.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative flex min-h-72 flex-col justify-end overflow-hidden rounded-xl border border-border p-6"
          >
            <img
              src={quote.image}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-bg/75" />

            <QuoteIcon size={22} className="mb-3 text-accent" />
            <blockquote className="text-sm leading-relaxed text-text">
              "{quote.text}"
            </blockquote>
            <figcaption className="mt-4 text-xs font-medium text-text-muted">
              — {quote.author}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
