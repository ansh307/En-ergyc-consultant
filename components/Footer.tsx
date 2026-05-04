"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0f0f] text-white px-6 md:px-32 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
          {/* ABOUT */}
          <div>
            <Link
              href="/"
              className={`transition-all duration-300 flex items-center `}
            >
              <Image
                src="/logos/dynabolt_logo-withoutbg.png"
                alt="DynaBolt Engineering Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-40 md:h-20 w-auto -translate-x-10 md:-translate-x-5"
              />
            </Link>

            <p className="text-sm text-white/70 leading-relaxed">
              DynaBolt Engineering is a Canadian engineering consulting firm
              specializing in mechanical and electrical engineering design
              services for residential and commercial industries.
            </p>
          </div>

          {/* QUICK LINKS (UPDATED) */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-a-meeting" className="hover:text-white">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-white">
                  Power Distribution
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Fire and Life Safety
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Fire Alarm System Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Solar Power System Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Temporary Power Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Emergency Power Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  EV Charger Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Construction Review
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Electrical Cost Estimation
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">
              Contact Details
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <p>Toronto Ontario, Canada</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:9051231234" className="hover:text-white">
                  905-123-1234
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:info@dynabolt.com" className="hover:text-white">
                  info@dynabolt.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-white/50 gap-4">
          <p>© 2026 DynaBolt Engineering. All rights reserved.</p>
          <p>Made by AIMP</p>
        </div>
      </div>
    </footer>
  );
}
