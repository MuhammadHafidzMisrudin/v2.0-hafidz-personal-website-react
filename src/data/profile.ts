import type { Profile, SocialLink } from "@/types/content";

export const profile: Profile = {
  name: "Muhammad Hafidz bin Misrudin",
  title: "Software Engineer (DevOps)",
  altNames: ["The Praiseworthy Guardian", "何飞志", "El Guardián"],
  summary:
    "Software Engineer with 5+ years of experience designing and delivering enterprise software solutions across .NET, SharePoint, and Microsoft Azure environments. Proficient in C#, Java, PHP, and JavaScript, with hands-on expertise in ASP.NET Core, Microsoft 365, and cloud-based development. Skilled in Agile delivery, CI/CD automation, and DevOps practices, with a consistent track record of improving application performance and reliability. Holds Microsoft certifications MS-900, AZ-900, and AZ-104. Open to QA or DevOps opportunities.",
  interests: [
    "Front End Developer (React/Angular)",
    "Fullstack Developer (.NET/NodeJS/Laravel)",
    "Cloud/DevOps Engineer (Azure/AWS)",
    "QA Engineer (Automation/Manual Testing)",
  ],
  photo: "/images/icon-me.jpg",
  location: "Kuala Lumpur, Malaysia",
  email: "hafidz.invictus@gmail.com",
  phone: "+6017 444 8226",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/MuhammadHafidzMisrudin",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://au.linkedin.com/in/muhammad-hafidz-misrudin-6b748245",
    icon: "linkedin",
  },
  {
    label: "Resume Slideshow",
    href: "https://myresumeslideshow.netlify.app/",
    icon: "external-link",
  },
  {
    label: "3D Business Card",
    href: "https://hafidz-3d-business-card.web.app/",
    icon: "id-card",
  },
];
