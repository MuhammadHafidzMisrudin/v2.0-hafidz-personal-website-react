import { Lightbulb, Code2, Wrench, Users, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { skillGroups, headlineTraits } from "@/data/skills";

const traitIcons: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  "code-2": Code2,
  wrench: Wrench,
  users: Users,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" heading="What I Work With">
      <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {headlineTraits.map((trait) => {
          const Icon = traitIcons[trait.icon] ?? Lightbulb;
          return (
            <div
              key={trait.label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 text-center"
            >
              <Icon size={28} className="text-accent" />
              <p className="text-sm font-medium text-text">{trait.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-heading text-sm font-semibold tracking-wide text-text uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface-alt px-3 py-1 text-xs text-text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
