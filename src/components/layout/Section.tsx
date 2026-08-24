import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  heading?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, heading, eyebrow, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {(eyebrow || heading) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            {eyebrow && (
              <p className="mb-2 font-heading text-sm font-semibold tracking-widest text-accent uppercase">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">{heading}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
