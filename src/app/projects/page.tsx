import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ItemListSchema, BreadcrumbSchema } from "@/lib/schema";
import { projects } from "@/data/projects";
import { generateCanonicalUrl } from "@/lib/seo";

const ProjectsClient = dynamic(() => import("./ProjectsClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/projects") },
  title: "Projects",
  description: "Explore a curated selection of fullstack projects and open-source contributions by Johan Sutrisno, featuring Flutter, React, and performance-driven apps.",
  keywords: ["flutter projects portfolio", "mobile app developer portfolio", "open source contributions", "fullstack products"],
  openGraph: {
    title: "Projects | Johan Sutrisno",
    description: "From large-scale platform migrations to open source contributions and full-stack products.",
    url: "https://johansutrisno.com/projects",
  },
};

export default function Projects() {
  return (
    <>
      <ItemListSchema projects={projects} />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ]} 
      />
      <ProjectsClient />
    </>
  );
}
