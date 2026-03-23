import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/lib/schema";
import { generateCanonicalUrl } from "@/lib/seo";

const ContactClient = dynamic(() => import("./ContactClient"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: generateCanonicalUrl("/contact") },
  title: "Contact",
  description: "Get in touch with Johan Sutrisno for collaborations, technical leadership roles, or consulting engagements. Based in Jakarta, available for remote work.",
  keywords: ["hire flutter engineer", "senior mobile engineer available", "contact Johan Sutrisno", "technical consulting"],
  openGraph: {
    title: "Contact Johan Sutrisno | Hire a Product-Minded Engineer",
    description: "Interested in collaborating or discussing technical strategies? I'd love to hear from you.",
    url: "https://johansutrisno.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]} 
      />
      <ContactClient />
    </>
  );
}
