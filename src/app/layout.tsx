import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joshbuilds.me"),
  title: {
    default: "Joshua Wilson | Engineering the Invisible",
    template: "%s | Joshua Wilson",
  },
  description: "Personal portfolio of Joshua Wilson — Creative Technologist, Systems Engineer, and AI-Native Builder.",
  keywords: [
    "Joshua Wilson",
    "Creative Technologist",
    "Systems Engineer",
    "WebGL",
    "Three.js",
    "Next.js",
    "React",
    "TypeScript",
    "Prometheus Studio",
    "AI Infrastructure",
  ],
  authors: [{ name: "Joshua Wilson" }],
  creator: "Joshua Wilson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshbuilds.me",
    title: "Joshua Wilson | Engineering the Invisible",
    description: "Personal portfolio of Joshua Wilson — Creative Technologist & Systems Engineer.",
    siteName: "Joshua Wilson Portfolio",
    images: [
      {
        url: "/images/hero-red.png",
        width: 1200,
        height: 630,
        alt: "Joshua Wilson — Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Wilson | Engineering the Invisible",
    description: "Personal portfolio of Joshua Wilson — Creative Technologist & Systems Engineer.",
    creator: "@joshwilson_will",
    images: ["/images/hero-red.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@id": "https://joshbuilds.me/#person",
  "@type": "Person",
  "affiliation": {
    "@type": "EducationalOrganization",
    "name": "Alex Ekwueme Federal University Ndufu-Alike",
    "url": "https://www.funai.edu.ng/"
  },
  "alternateName": [
    "Josh Will",
    "Joshua Ayogu"
  ],
  "description": "Creative Technologist, Systems Engineer, and AI-Native Builder. Co-founder and AI Engineer at Prometheus.",
  "image": "https://joshbuilds.me/images/hero-red.png",
  "jobTitle": "Co-founder and AI Engineer",
  "knowsAbout": [
    "AI video editing",
    "Next.js",
    "TypeScript",
    "React",
    "Remotion",
    "FFmpeg",
    "Supabase",
    "AI agents",
    "Cybersecurity"
  ],
  "name": "Joshua Wilson",
  "sameAs": [
    "https://github.com/joshwilsonwill-boop",
    "https://www.linkedin.com/in/great-joshua-767b62252",
    "https://x.com/joshwilson_will",
    "https://x.com/gadflyrebel",
    "https://www.instagram.com/i_m_joshwilson/",
    "https://www.quora.com/profile/Joshua-Wilson-1094/",
    "https://www.youtube.com/@joshua_willson",
    "https://www.youtube.com/@WilllnLeonida",
    "https://www.tiktok.com/@wiljinx"
  ],
  "url": "https://joshbuilds.me/",
  "worksFor": {
    "@type": "Organization",
    "name": "Prometheus",
    "url": "https://prometheusstudio.tech"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-cyan)] selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
