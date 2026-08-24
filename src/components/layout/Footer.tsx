import { ExternalLink, IdCard } from "lucide-react";
import type { ReactNode } from "react";
import type { SocialLink } from "@/types/content";
import { profile, socialLinks } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

type IconComponent = (props: { size?: number; className?: string }) => ReactNode;

const socialIcons: Record<SocialLink["icon"], IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  "external-link": ExternalLink,
  "id-card": IdCard,
};

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="flex gap-5">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-muted transition-colors hover:text-accent"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-text-faint">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
