import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C#", "VB.NET", "PowerShell", "Java", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "ASP.NET",
      "ASP.NET Core MVC",
      "WebForms",
      "SPFx",
      "React",
      "Angular",
      "jQuery",
      "Bootstrap",
      "Laravel",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Azure DevOps",
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Dynamics 365",
      "SonarQube",
      "CI/CD Pipelines",
      "Git & GitHub",
    ],
  },
  {
    category: "Testing",
    skills: ["xUnit", "NUnit", "Jest", "Functional Testing", "E2E Testing", "UAT"],
  },
  {
    category: "Design & Prototyping",
    skills: ["Adobe Photoshop", "Adobe XD", "Figma", "Canva", "Microsoft Visio"],
  },
  {
    category: "Platforms & Databases",
    skills: [
      "Microsoft SQL Server 2022",
      "SSMS",
      "Oracle Database",
      "Windows Server 2019",
      "Linux (CentOS/Ubuntu)",
      "macOS",
    ],
  },
  {
    category: "AI-Assisted Development",
    skills: ["GitHub Copilot", "Anthropic Claude", "ChatGPT", "Microsoft Copilot", "IFX4GPT"],
  },
];

export const headlineTraits = [
  { icon: "lightbulb", label: "Driven, Creative & Innovative" },
  { icon: "code-2", label: "Research, Design, Coding & Testing" },
  { icon: "wrench", label: "Problem Solving & Troubleshooting" },
  { icon: "users", label: "Communicative & Dynamic" },
] as const;
