"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/catalogo", key: "catalog" as const },
  { href: "/nosotros", key: "about" as const },
  { href: "/servicios", key: "services" as const },
  { href: "/contacto", key: "contact" as const },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Venezuela Dental"
            className="h-24 w-auto md:h-28"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-DEFAULT"
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 transition-colors hover:text-blue-DEFAULT"
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
