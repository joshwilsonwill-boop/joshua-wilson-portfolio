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
  metadataBase: new URL("https://joshuawilson.dev"),
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
    url: "https://joshuawilson.dev",
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
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
