import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PersonSchema, WebSiteSchema } from "@/lib/schema";
import { WebVitals } from "@/components/WebVitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johansutrisno.com"),
  title: {
    default: "Johan Sutrisno — Senior Product Engineer",
    template: "%s | Johan Sutrisno",
  },
  description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile. Expert in Flutter, React, and Django. Based in Jakarta.",
  keywords: [
    "Johan Sutrisno",
    "Senior Product Engineer",
    "Product Engineer",
    "Flutter Developer",
    "React Developer",
    "Fullstack Engineer",
    "Jakarta",
    "Indonesia",
    "Software Engineer",
    "TypeScript",
    "Django",
    "Dart",
    "Mobile App Developer",
    "Web Developer",
    "YC W22",
  ],
  authors: [{ name: "Johan Sutrisno", url: "https://johansutrisno.com" }],
  creator: "Johan Sutrisno",
  publisher: "Johan Sutrisno",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Johan Sutrisno — Senior Product Engineer",
    description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile. Led KickAvenue migration, contributed to AppFlowy.",
    url: "https://johansutrisno.com",
    siteName: "Johan Sutrisno",
    images: [
      {
        url: "/opengraph-image", // Points to dynamic OG image
        width: 1200,
        height: 630,
        alt: "Johan Sutrisno — Senior Product Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Sutrisno — Senior Product Engineer",
    description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent/30 selection:text-white`}
      >
        <WebVitals />
        <Nav />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
