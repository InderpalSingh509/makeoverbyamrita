"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-24"
          aria-label="Primary"
        >
          <Link href="/" className="relative z-10 flex items-center leading-none">
            <Image
              src="/logo/logo-nav.png"
              alt={siteConfig.name}
              width={653}
              height={502}
              priority
              className="h-14 w-auto lg:h-16"
            />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeHash === item.href ? "page" : undefined}
                className={`relative text-sm uppercase tracking-[0.25em] transition-colors duration-300 hover:text-[#D4AF37]
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#D4AF37]
                after:transition-all after:duration-300 hover:after:w-full
                ${
                  activeHash === item.href
                    ? "text-[#D4AF37] after:w-full"
                    : "text-white after:w-0"
                }`}
              >
                {item.label}
              </a>
            ))}

            <Button href="#contact" size="md">
              Book Now
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-0 right-0 top-20 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 sm:px-8">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-5 text-lg text-white transition hover:text-[#D4AF37]"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="mt-8">
                <Button href="#contact" onClick={() => setMenuOpen(false)}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
