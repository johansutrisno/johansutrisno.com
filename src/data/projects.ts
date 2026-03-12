export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "KickAvenue Mobile",
    slug: "kickavenue",
    description: "Led the migration of a major sneaker marketplace app from React Native to Flutter, serving 20K+ daily active users.",
    tags: ["Flutter", "Architecture", "Team Lead"],
    featured: true,
  },
  {
    title: "Euromedica AIZER",
    slug: "aizer",
    description: "An AI-powered dermatology platform featuring skin analysis, voice narration, and complex animation systems.",
    tags: ["Flutter", "AI Integration", "Animations"],
    featured: true,
  },
  {
    title: "Chai Bot Builder",
    slug: "chai",
    description: "Designed and implemented a bot building platform with a focus on UX improvements and authentication redesign.",
    tags: ["Flutter", "UX", "Product Design"],
    featured: true,
  },
  {
    title: "StafBook YC MVP",
    slug: "stafbook",
    description: "Developed the initial MVP for a YC-backed startup, taking it from concept to production in just a few months.",
    tags: ["Flutter", "Startup", "MVP"],
    featured: true,
  },
  {
    title: "AppFlowy Contribution",
    slug: "appflowy",
    description: "Open source contributor to AppFlowy (68K+ GitHub stars), working on Dart and Flutter core components.",
    tags: ["Open Source", "Dart", "Community"],
    featured: true,
  },
];
