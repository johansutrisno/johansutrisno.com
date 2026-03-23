import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schema";
import { generateCanonicalUrl } from "@/lib/seo";

const WorkClient = dynamic(() => import("./WorkClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/work") },
  title: "Work Experience",
  description: "Professional history of Johan Sutrisno. Experience leading technical teams, migrating platforms, and shipping products at startups like Zero One Group and KickAvenue.",
  keywords: ["senior engineer experience", "flutter architect", "software engineering career", "product delivery"],
  openGraph: {
    title: "Work Experience | Johan Sutrisno",
    description: "Building products across the full stack — from engineering scalable systems to leading cross-functional teams.",
    url: "https://johansutrisno.com/work",
  },
};

export default function Work() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Work", url: "/work" },
        ]} 
      />
      <WorkClient />
    </>
  );
}
