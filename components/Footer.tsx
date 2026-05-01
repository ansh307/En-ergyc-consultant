"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0f0f] text-white px-6 md:px-32 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-medium mb-4">Dynabolt</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Dynabolt is a Canadian engineering consulting firm specializing in
              mechanical and electrical engineering design services for
              residential and commercial industries.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Our Company</li>
              <li className="hover:text-white cursor-pointer">Who We Are</li>
              <li className="hover:text-white cursor-pointer">
                Services We Provide
              </li>
              <li className="hover:text-white cursor-pointer">
                What We Have Done
              </li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Power Distribution</li>
              <li>Fire and Life Safety</li>
              <li>Fire Alarm System Design</li>
              <li>Solar Power System Design</li>
              <li>Temporary Power Design</li>
              <li>Emergency Power Design</li>
              <li>EV Charger Infrastructure</li>
              <li>Construction Review</li>
              <li>Electrical Cost Estimation</li>
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
                <p>905-123-1234</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <p>info@dynabolt.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-white/50 gap-4">
          <p>© 2026 Dynabolt. All rights reserved.</p>
          <p>Made by AIMP</p>
        </div>
      </div>
    </footer>
  );
}
