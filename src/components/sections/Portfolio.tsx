import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Portfolio" heading="Things I've Built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-medium text-text">
                  View project <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-text">{project.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{project.technologies}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
