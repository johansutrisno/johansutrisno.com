import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProfilePageSchema, BreadcrumbSchema } from "@/lib/schema";
import { generateCanonicalUrl } from "@/lib/seo";

const AboutClient = dynamic(() => import("./AboutClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/about") },
  title: "About",
  description: "Learn more about Johan Sutrisno's journey as a Senior Product Engineer, his core values in engineering leadership, and his commitment to building for scale.",
  keywords: ["Johan Sutrisno engineer", "flutter developer indonesia", "product mindset", "tech leader"],
  openGraph: {
    title: "About Johan Sutrisno | Product Engineer & Tech Leader",
    description: "Senior Product Engineer at Zero One Group, YC W22 Alumni, and open source contributor.",
    url: "https://johansutrisno.com/about",
  },
};

export default function About() {
  return (
    <>
      <ProfilePageSchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]} 
      />
      <AboutClient />
    </>
  );
}
