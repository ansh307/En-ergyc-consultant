"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // =========================
  // MENU ANIMATION
  // =========================
  useLayoutEffect(() => {
    if (!overlayRef.current) return;

    if (open) {
      gsap.set(overlayRef.current, { pointerEvents: "auto" });

      gsap.to(overlayRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: "none" });
        },
      });
    }
  }, [open]);

  // =========================
  // SCROLL HIDE / SHOW NAVBAR
  // =========================
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!navRef.current) return;

      // prevent jitter
      if (Math.abs(currentScroll - lastScroll) < 10) return;

      if (currentScroll > lastScroll && currentScroll > 100) {
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // DETECT HERO SCROLL (COLOR CHANGE)
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;

      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= OUTER NAVBAR ================= */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-32 py-6 transition-all duration-300 `}
      >
        {/* LOGO */}
        <div
          className={`font-semibold tracking-widest transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          En-ergyc
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex bg-white rounded-full px-6 py-2 gap-6 text-sm shadow-md">
          <NavItem label="Home" active />
          <NavItem label="About us" />
          <NavItem label="Industries & Services" />
          <NavItem label="The experience" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button
            className={`hidden md:block px-4 py-2 rounded-md text-sm transition ${
              scrolled
                ? " bg-white shadow-md text-black hover:bg-stone-200"
                : " bg-white text-black hover:bg-stone-200"
            }`}
          >
            • Contact us
          </button>

          <button
            onClick={toggleMenu}
            className={`w-10 h-10 flex items-center justify-center rounded-md transition ${
              scrolled
                ? "bg-white shadow-md text-black hover:bg-stone-200"
                : "bg-white text-black hover:bg-stone-200"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        ref={overlayRef}
        className={`fixed w-[95%] bg-white z-50 px-10 md:px-20 mt-4 mx-12 py-16 rounded-2xl shadow-lg
${open ? "pointer-events-auto" : "pointer-events-none"}
opacity-0 -translate-y-full`}
      >
        {/* INNER NAVBAR */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-6">
          <div className="text-black font-semibold tracking-widest">
            En-ergyc
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block border border-black text-black px-4 py-2 rounded-md text-sm hover:scale-105 transition">
              • Contact us
            </button>

            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center border border-black rounded-md text-black hover:scale-105 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* MENU CONTENT */}
        <div className="grid md:grid-cols-3 gap-12 text-gray-800 mt-16">
          <MenuColumn
            title="Company"
            items={[
              "About",
              "Career",
              "The Experience",
              "Partners",
              "Customers",
            ]}
          />

          <MenuColumn
            title="Services"
            items={[
              "Electrical services",
              "Airport lighting and Aviation Services",
              "HVAC, Fire Fighting & Mechanical supplies",
              "Control & Automation Supplies",
              "Electrical Supplies",
            ]}
          />

          <MenuColumn
            title="Resources"
            items={["Blog & News", "Success Stories"]}
          />
        </div>
      </div>
    </>
  );
}

// ================= COMPONENTS =================

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={`px-3 py-1 rounded-full cursor-pointer transition ${
        active ? "bg-stone-800 text-white" : "text-gray-700 hover:text-black"
      }`}
    >
      {label}
    </span>
  );
}

function MenuColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm text-stone-400 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
