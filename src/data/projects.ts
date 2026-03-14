export interface ProjectLinks {
	googlePlay?: string;
	appStore?: string;
	github?: string;
	website?: string;
}

export interface Project {
	title: string;
	slug: string;
	role: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
	tags: string[];
	links: ProjectLinks;
	status: "Live" | "Open Source" | "Completed";
	type?: "Mobile App" | "Web App" | "Open Source" | "AI Platform";
	metrics?: { label: string; value: string }[];
	featured?: boolean;
}

export const projects: Project[] = [
	{
		title: "KickAvenue Mobile",
		slug: "kickavenue",
		role: "Mobile Migration Lead",
		company: "Zero One Group × KickAvenue",
		period: "2022–2023",
		description:
			"Led a full-scale migration and redesign of Indonesia's largest sneaker marketplace from React Native to Flutter. Delivered a polished, production-ready app serving tens of thousands of daily users—ahead of schedule and under budget.",
		highlights: [
			"Directed a team of 5 engineers to deliver the migration 17% ahead of schedule (5-month timeline)",
			"Rebuilt the entire app architecture in Flutter, improving performance and maintainability significantly",
			"Maintained and grew a 20K+ DAU base through a seamless transition with zero service disruption",
		],
		tags: ["Flutter", "Architecture", "Team Lead", "Migration", "E-commerce"],
		links: {
			googlePlay:
				"https://play.google.com/store/apps/details?id=com.kickavenue.androidshop&hl=id",
			appStore:
				"https://apps.apple.com/id/app/kick-avenue-shop-hype-here/id1478394222",
		},
		status: "Live",
		type: "Mobile App",
		metrics: [
			{ label: "DAU", value: "20K+" },
			{ label: "Delivery", value: "17% Early" },
			{ label: "Team Size", value: "5 Eng" },
		],
		featured: true,
	},
	{
		title: "Euromedica AIZER",
		slug: "aizer",
		role: "Lead Frontend Engineer (Mobile & Web)",
		company: "Zero One Group × Euromedica / Skin+ Clinic",
		period: "2023–2024",
		description:
			"Built the frontend of an AI-powered dermatology platform for Skin+ Clinic, spanning both mobile and web. The platform features predictive skin aging models, real-time voice narration, and a cinematic custom animation system that sets a new bar for healthcare UX.",
		highlights: [
			"Engineered a predictive skin aging model UI with AI-generated visual summaries and real-time voice narration",
			"Designed and implemented a bespoke cinematic animation system, delivering a premium user experience",
			"Owned the full frontend across Flutter mobile and web from architecture to pixel-perfect delivery",
		],
		tags: ["Flutter", "AI", "Web", "Animation", "Healthcare"],
		links: {
			website: "https://skinplusclinic.com/id/",
		},
		status: "Live",
		type: "AI Platform",
		featured: true,
	},
	{
		title: "Chai — Chat AI Platform",
		slug: "chai",
		role: "Mobile Engineer",
		company: "Zero One Group × Chai",
		period: "2023",
		description:
			"Redesigned core product surfaces of Chai, an AI social chat platform with millions of users. Focused on improving usability and conversion through a revamped bot builder interface, subscription system, and authentication flow.",
		highlights: [
			"Redesigned the bot builder interface from the ground up, reducing friction for creators and improving key UX flows",
			"Rebuilt the subscription system UI to streamline upgrade paths and improve conversion rates",
			"Overhauled the authentication flow for a smoother onboarding experience",
		],
		tags: ["Flutter", "AI", "UX", "Subscription", "Auth"],
		links: {
			googlePlay:
				"https://play.google.com/store/apps/details?id=com.Beauchamp.Messenger.external&hl=id",
			appStore:
				"https://apps.apple.com/id/app/chai-social-ai-platform-chat/id1544750895",
		},
		status: "Live",
		type: "Mobile App",
		featured: true,
	},
	{
		title: "StafBook",
		slug: "stafbook",
		role: "Mobile Engineer",
		company: "StafBook (YC W22)",
		period: "March 2022 – September 2022",
		description:
			"Took StafBook from a concept to a production-ready mobile platform for this Y Combinator W22 startup. Architected a scalable Flutter codebase that enabled the team to iterate rapidly post-MVP, growing to 3K+ daily active users.",
		highlights: [
			"Architected the Flutter codebase from scratch, establishing patterns optimised for rapid post-MVP iteration",
			"Brought the platform from concept to production in under 6 months, meeting all launch milestones",
			"Grew the product to 3K+ daily active users following the initial launch",
		],
		tags: ["Flutter", "Startup", "YC W22", "MVP", "HR Tech"],
		links: {
			googlePlay:
				"https://play.google.com/store/apps/details?id=com.stafbook.employee",
			appStore: "https://apps.apple.com/id/app/stafbook-karyawan/id6444427879",
		},
		status: "Live",
		type: "Mobile App",
		metrics: [
			{ label: "DAU", value: "3K+" },
			{ label: "Backed by", value: "YC W22" },
		],
		featured: true,
	},
	{
		title: "AppFlowy",
		slug: "appflowy",
		role: "Open Source Contributor",
		company: "AppFlowy-IO",
		period: "2022–Present",
		description:
			"Active contributor to AppFlowy, an open source Notion alternative built with Flutter and Rust that has earned 68K+ GitHub stars. Contributions span core app features and the AppFlowy Editor package — one of the most-starred Dart projects in the world.",
		highlights: [
			"Contributed features and fixes to the core AppFlowy app (68K+ GitHub stars)",
			"Contributed to the AppFlowy Editor package, improving the rich-text editing experience",
			"Engaged with the open source community, reviewing proposals and collaborating on product direction",
		],
		tags: ["Open Source", "Flutter", "Dart", "Productivity", "Community"],
		links: {
			github:
				"https://github.com/pulls?q=is%3Apr+author%3Ajohansutrisno+org%3AAppFlowy-IO",
		},
		status: "Open Source",
		type: "Open Source",
		metrics: [{ label: "GitHub Stars", value: "68K+" }],
		featured: true,
	},
];
