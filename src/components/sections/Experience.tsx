import { GraduationCap, Award } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { experience, education, certifications } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" heading="Where I've Worked">
      <ol className="space-y-10 border-l border-border pl-8">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.startDate}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent" />

            <p className="text-xs font-medium tracking-wide text-text-faint uppercase">
              {entry.startDate} – {entry.endDate}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-text">{entry.role}</h3>
            <p className="text-sm text-accent">
              {entry.company} · {entry.companyType}
            </p>
            <p className="text-xs text-text-faint">{entry.location}</p>

            <ul className="mt-3 space-y-2">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-text-muted leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-text">
            <GraduationCap size={20} className="text-accent" />
            Education
          </h3>
          <div className="space-y-5">
            {education.map((entry) => (
              <div key={entry.institution}>
                <p className="text-sm font-medium text-text">{entry.credential}</p>
                <p className="text-sm text-text-muted">{entry.institution}</p>
                <p className="text-xs text-text-faint">{entry.dateRange}</p>
                <ul className="mt-1 space-y-1">
                  {entry.details.map((detail) => (
                    <li key={detail} className="text-xs text-text-muted">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-text">
            <Award size={20} className="text-accent" />
            Certifications
          </h3>
          <div className="space-y-5">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className="text-sm font-medium text-text">{cert.name}</p>
                <p className="text-sm text-text-muted">{cert.issuer}</p>
                <p className="text-xs text-text-faint">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
