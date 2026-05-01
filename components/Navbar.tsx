"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
        <Link
          href="/"
          className={`font-semibold tracking-widest transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          DynaBolt Engineering
        </Link>

        {/* CENTER NAV */}
        <div className="hidden lg:flex bg-white rounded-full px-6 py-2 gap-6 text-sm shadow-md">
          <NavItem label="Home" href="/" active={pathname === "/"} />
          <NavItem
            label="About us"
            href="/about-us"
            active={pathname === "/about-us"}
          />
          <NavItem
            label="Projects"
            href="/projects"
            active={pathname === "/projects"}
          />
          <NavItem
            label="Industries & Services"
            href="/services"
            active={pathname === "/services"}
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className={`hidden md:block px-4 py-2 rounded-md text-sm transition ${
              scrolled
                ? "bg-white shadow-md text-black hover:bg-stone-200"
                : "bg-white text-black hover:bg-stone-200"
            }`}
          >
            Contact us
          </Link>

          <button
            aria-label="Toggle menu"
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
        className={`fixed top-0 left-0 right-0 mx-auto w-[95%] mt-4 bg-white z-50 px-10 md:px-20 py-16 rounded-2xl shadow-lg
  ${open ? "pointer-events-auto" : "pointer-events-none"}
  opacity-0 -translate-y-full`}
      >
        {/* INNER NAVBAR */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-6">
          <div className="text-black font-semibold tracking-widest">
            DynaBolt Engineering
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              className={`hidden md:block px-4 py-2 rounded-md text-sm transition ${
                scrolled
                  ? "bg-white shadow-md text-black hover:bg-stone-200"
                  : "bg-white text-black hover:bg-stone-200"
              }`}
            >
              Contact us
            </Link>

            <button
              aria-label="Toggle menu"
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
            onClick={() => setOpen(false)}
            title="Quick Links"
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Projects", href: "/projects" },
              { label: "Free Consultation", href: "/book-a-meeting" },
              { label: "Services", href: "/services" },
              { label: "Contact Us", href: "/contact-us" },
            ]}
          />

          <MenuColumn
            isHiddenOnMobile
            onClick={() => setOpen(false)}
            title="Core Services"
            items={[
              { label: "Power Distribution", href: "/services" },
              { label: "Fire & Life Safety", href: "/services" },
              { label: "Temporary Power Design", href: "/services" },
              { label: "Solar Power Systems", href: "/services" },
              { label: "Emergency Power Design", href: "/services" },
            ]}
          />

          <MenuColumn
            isHiddenOnMobile
            onClick={() => setOpen(false)}
            title="Engineering Services"
            items={[
              { label: "HVAC Systems", href: "/services" },
              { label: "Plumbing Design", href: "/services" },
              { label: "Sprinkler Systems", href: "/services" },
              { label: "EV Charging Infrastructure", href: "/services" },
              { label: "Construction Review", href: "/services" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

// ================= COMPONENTS =================

function NavItem({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-full transition ${
        active ? "bg-green-600 text-white" : "text-gray-700 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}

function MenuColumn({
  title,
  items,
  onClick,
  isHiddenOnMobile = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClick?: () => void;
  isHiddenOnMobile?: boolean;
}) {
  return (
    <div className={`${isHiddenOnMobile ? "hidden md:block" : ""}`}>
      <h3 className="text-sm text-stone-400 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="hover:text-black transition"
              onClick={onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
