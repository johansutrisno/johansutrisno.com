import type { Project } from "@/data/projects";

/**
 * Common Schema Props
 * Test at: https://validator.schema.org
 */

export const PersonSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://johansutrisno.com/#person",
    "name": "Johan Sutrisno",
    "url": "https://johansutrisno.com",
    "email": "johansutrisno30@gmail.com",
    "jobTitle": "Senior Product Engineer",
    "description": "Senior Product Engineer specializing in Flutter, React, and Django with 6+ years of experience.",
    "gender": "Male",
    "nationality": "Indonesian",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "Flutter", "Dart", "React", "TypeScript", "Django", "Python", "Kotlin", "JavaScript", 
      "Software Architecture", "Mobile Development", "Web Development", "Product Engineering"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Binus University",
        "sameAs": "https://binus.ac.id/"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Telkom University",
        "sameAs": "https://telkomuniversity.ac.id/"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Zero One Group",
      "sameAs": "https://zeroonegroup.com/"
    },
    "sameAs": [
      "https://github.com/johansutrisno",
      "https://www.linkedin.com/in/johansutrisno"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export const WebSiteSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Johan Sutrisno Portfolio",
    "url": "https://johansutrisno.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://johansutrisno.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export const ProfilePageSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://johansutrisno.com/#person"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://johansutrisno.com${item.url}`
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export const ItemListSchema = ({ projects }: { projects: Project[] }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects by Johan Sutrisno",
    "description": "A list of mobile and web development projects by Johan Sutrisno.",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "applicationCategory": project.type?.includes("Mobile App") ? "MobileApplication" : "WebApplication",
        "operatingSystem": project.type?.includes("Mobile App") ? "Android, iOS" : "Web",
        "url": project.links.website || project.links.github || project.links.googlePlay || project.links.appStore
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};
