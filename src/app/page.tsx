import { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateCanonicalUrl } from "@/lib/seo";

const HomeClient = dynamic(() => import("./HomeClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/") },
  title: "Johan Sutrisno — Senior Product Engineer",
  description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile. Specializing in Flutter, React, and Django. Based in Jakarta.",
  keywords: ["senior product engineer", "flutter engineer jakarta", "fullstack mobile engineer", "Johan Sutrisno"],
  openGraph: {
    title: "Johan Sutrisno — Senior Product Engineer",
    description: "Senior Product Engineer with 6+ years building high-quality digital products. YC W22 Alumni.",
    url: "https://johansutrisno.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Johan Sutrisno — Senior Product Engineer",
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
