import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynabolt.ca"),

  title: {
    default:
      "DynaBolt Engineering | MEP, Electrification & Smart Energy Solutions",
    template: "%s | DynaBolt Engineering",
  },

  description:
    "DynaBolt Engineering provides high-performance MEP engineering, electrical systems, EV charging infrastructure, industrial automation, and smart energy solutions for commercial and industrial projects.",

  keywords: [
    "MEP Engineering",
    "Electrical Engineering",
    "EV Charging Infrastructure",
    "Smart Energy Systems",
    "Industrial Automation",
    "IoT Engineering",
    "Power Distribution",
    "Commercial Engineering",
    "Energy Efficiency Solutions",
  ],

  authors: [{ name: "DynaBolt Engineering" }],
  creator: "DynaBolt Engineering",
  publisher: "DynaBolt Engineering",

  category: "engineering",
  applicationName: "DynaBolt Engineering",

  alternates: {
    canonical: "https://www.dynabolt.ca",
  },

  openGraph: {
    title: "DynaBolt Engineering | Smart MEP & Electrification Solutions",
    description:
      "Scalable MEP engineering, EV infrastructure, automation, and smart energy systems built for modern industrial and commercial needs.",
    url: "https://www.dynabolt.ca",
    siteName: "DynaBolt Engineering",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DynaBolt Engineering - MEP & Energy Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DynaBolt Engineering | MEP & Smart Energy Experts",
    description:
      "Advanced electrical systems, EV infrastructure, and smart energy solutions for modern industries.",
    images: ["/og-image.png"],
    creator: "@dynabolt", // optional → add real handle later
  },

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

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest", // create this (important for PWA)

  // // Optional but powerful
  // verification: {
  //   google: "your-google-site-verification-code", // add later
  // },

  // // Helps SEO + indexing clarity
  // other: {
  //   "theme-color": "#0f0f0f",
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ReactLenis root>
        <body className="min-h-full flex flex-col">
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "DynaBolt Engineering",
                url: "https://www.dynabolt.ca",
                logo: "https://www.dynabolt.ca/logos/dynabolt_logo-withoutbg.png",
                description:
                  "Trusted MEP engineering and electrification solutions for industrial and commercial sectors.",
              }),
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
