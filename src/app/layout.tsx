import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johan Sutrisno — Senior Product Engineer",
  description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile. Led KickAvenue migration, contributed to AppFlowy. Based in Jakarta.",
  openGraph: {
    title: "Johan Sutrisno — Senior Product Engineer",
    description: "Senior Product Engineer with 6+ years building high-quality digital products across web and mobile. Led KickAvenue migration, contributed to AppFlowy. Based in Jakarta.",
    url: "https://johansutrisno.com",
    siteName: "Johan Sutrisno",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent/30 selection:text-white`}
      >
        <Nav />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
