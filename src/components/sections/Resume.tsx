import { Download, FileText } from "lucide-react";
import { Section } from "@/components/layout/Section";

const RESUME_PATH = "/resume/2026-MuhammadHafidzMisrudin-ResumeATS.pdf";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" heading="My Resume">
      <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <FileText size={32} className="text-accent" />
          <div>
            <p className="font-heading font-semibold text-text">ATS-Optimized Resume</p>
            <p className="text-sm text-text-muted">PDF · Updated 2026</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            View
          </a>
          <a
            href={RESUME_PATH}
            download
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-105"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </Section>
  );
}
