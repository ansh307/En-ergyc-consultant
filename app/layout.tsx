import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dynabolt.ca"), // 🔁 change this

  title: {
    default: "Dynabolt | Trusted MEP Engineering & Electrification Solutions",
    template: "%s | Dynabolt",
  },

  description:
    "Dynabolt delivers advanced MEP engineering solutions including electrical systems, automation, EV infrastructure, smart energy, and IoT technologies for industrial and commercial sectors—built for efficiency, scalability, and reliability.",

  keywords: [
    "MEP Engineering",
    "Electrical Engineering Services",
    "EV Charging Infrastructure",
    "Power Distribution Systems",
    "Smart Energy Solutions",
    "Industrial Automation",
    "Commercial Engineering Solutions",
  ],

  authors: [{ name: "Dynabolt" }],
  creator: "Dynabolt",
  publisher: "Dynabolt",

  openGraph: {
    title: "Trusted MEP Engineering Solutions | Dynabolt",
    description:
      "Advanced electrical, automation, EV infrastructure, and smart energy solutions tailored for industrial and commercial projects.",
    url: "https://dynabolt.ca", // 🔁 change this
    siteName: "Dynabolt",
    images: [
      {
        url: "/og-image.png", // 🔁 add this image in public
        width: 1200,
        height: 630,
        alt: "Dynabolt MEP Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dynabolt | Trusted MEP Engineering",
    description:
      "Powering industrial and commercial projects with advanced MEP, EV, and smart energy solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ReactLenis root>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
