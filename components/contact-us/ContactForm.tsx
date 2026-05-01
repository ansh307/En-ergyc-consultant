"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 md:py-28 px-6 md:px-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
        {/* ================= LEFT: FORM ================= */}
        <div>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-8">
            Send Us A Message
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">
                Comment or Message *
              </label>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full mt-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            {/* Button */}
            <button
              aria-label="Submit form"
              type="submit"
              className="mt-4 bg-black text-white px-6 py-3 rounded-md text-sm hover:scale-105 transition"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* ================= RIGHT: CONTACT INFO ================= */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-8 mt-10">
            Contact Info
          </h3>

          <div className="space-y-8 text-gray-700">
            {/* Phone */}
            <div className="flex gap-4">
              <Phone size={20} />
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-sm">905-123-1234</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={20} />
              <div>
                <p className="font-medium text-gray-900">Working Hours</p>
                <p className="text-sm">Mon-Fri: 10AM-5PM</p>
                <p className="text-sm">Sat-Sun: 10AM-1PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail size={20} />
              <div>
                <p className="font-medium text-gray-900">Our Email</p>
                <p className="text-sm">info@dynabolt.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <MapPin size={20} />
              <div>
                <p className="font-medium text-gray-900">Our Location</p>
                <p className="text-sm">Toronto Ontario, Canada</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="font-medium text-gray-900 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-md" />
                <div className="w-8 h-8 bg-gray-200 rounded-md" />
                <div className="w-8 h-8 bg-gray-200 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
