import { MapPin, Mail, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" eyebrow="About" heading="Who I Am">
      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-text-muted leading-relaxed md:col-span-2">{profile.summary}</p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <MapPin size={18} className="text-accent" />
            {profile.location}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} className="text-accent" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <Phone size={18} className="text-accent" />
            {profile.phone}
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-heading text-lg font-semibold text-text">
          Open to opportunities in
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {profile.interests.map((interest) => (
            <li
              key={interest}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-muted"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
