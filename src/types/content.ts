export interface NavItem {
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  altNames: string[];
  summary: string;
  interests: string[];
  photo: string;
  location: string;
  email: string;
  phone: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  companyType: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  dateRange: string;
  details: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
  name: string;
  technologies: string;
  image: string;
  link: string;
}

export interface Quote {
  text: string;
  author: string;
  image: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "external-link" | "id-card";
}
