import { SiteHeader } from '@/components/site-header';
import { SocialLinks } from '@/components/social-links';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mara Wasserman | Architectural Designer",
  description: "Portfolio showcasing my work as an architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <footer className="site-width flex flex-wrap items-center justify-between gap-6 border-t py-10 text-sm text-gray-500">
          <p>Mara Wasserman · Architectural Designer · LEED AP BD+C</p>
          <SocialLinks />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
