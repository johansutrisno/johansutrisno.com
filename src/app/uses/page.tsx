import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schema";
import { generateCanonicalUrl } from "@/lib/seo";

const UsesClient = dynamic(() => import("./UsesClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/uses") },
  title: "Uses",
  description: "A semi-comprehensive list of the tools, technologies, and hardware Johan Sutrisno uses to ship great products every day.",
  keywords: ["flutter developer tools", "react typescript setup", "software engineering hardware", "productivity stack"],
  openGraph: {
    title: "Uses | My Tech Stack & Tools - Johan Sutrisno",
    description: "The tools, languages, and hardware I use to ship great products every day.",
    url: "https://johansutrisno.com/uses",
  },
};

export default function Uses() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Uses", url: "/uses" },
        ]} 
      />
      <UsesClient />
    </>
  );
}
