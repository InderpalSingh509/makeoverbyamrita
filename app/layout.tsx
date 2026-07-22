import type { Metadata, Viewport } from "next";
import { Geist, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bridal Makeup Artist",
    "Makeup Artist Kolkata",
    "Wedding Makeup",
    "Reception Makeup",
    "Engagement Makeup",
    "Party Makeup",
    "Makeover by Amrita",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.url}/images/hero.jpg`,
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  areaServed: "Kolkata, West Bengal",
  sameAs: [siteConfig.social.instagram].filter(Boolean),
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        geist.variable,
        inter.variable,
        playfair.variable
      )}
    >
      <body className="min-h-screen bg-[#FFFDFB] font-[var(--font-geist)] text-gray-900 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script
          id="ld-json-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
