export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  techStack: string[];
  metrics?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Zero One Group",
    role: "Product Engineer",
    period: "Oct 2022 – Present",
    highlights: [
      "KickAvenue migration (React Native to Flutter)",
      "Euromedica AIZER development",
      "Chai Bot Builder & Auth Redesign",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "AI Integration", "Riverpod"],
    metrics: ["20K+ Daily Users migrated", "17% ahead of schedule"],
  },
  {
    company: "StafBook (YC W22)",
    role: "Mobile Engineer",
    period: "Mar – Sep 2022",
    highlights: [
      "Built MVP from concept to production in months",
      "Part of the Y Combinator W22 cohort",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js"],
    metrics: ["3K DAU reached for MVP"],
  },
  {
    company: "GITS Indonesia",
    role: "Mobile Engineer",
    period: "Jun 2019 – Mar 2022",
    highlights: [
      "Implemented full Flutter architecture for enterprise clients",
      "Mentored junior engineers in product development",
    ],
    techStack: ["Flutter", "Dart", "BLoC", "Kotlin", "Swift"],
  },
  {
    company: "Sakti Mobile",
    role: "Android Developer",
    period: "Dec 2018 – May 2019",
    highlights: [
      "First professional role as Android Developer",
      "Worked on various telecom service applications",
    ],
    techStack: ["Java", "Android SDK", "Kotlin"],
  },
];
