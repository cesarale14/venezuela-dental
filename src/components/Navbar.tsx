"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { categories } from "@/lib/categories";
import { getCategoryIcon } from "@/lib/icons";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { lang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const navLinks = [
    { href: "/nosotros", key: "about" as const },
    { href: "/servicios", key: "services" as const },
    { href: "/contacto", key: "contact" as const },
  ];

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

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-DEFAULT"
          >
            {t.nav.home}
          </Link>

          {/* Products dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-blue-DEFAULT"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              {t.nav.products}
              <ChevronDown
                size={14}
                className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega menu */}
            <div
              className={`absolute left-1/2 top-full pt-3 -translate-x-1/2 transition-all duration-200 ${
                productsOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="w-[640px] rounded-xl border border-gray-200 bg-white p-5 shadow-xl">
                <div className="grid grid-cols-3 gap-1">
                  {categories.map((cat) => {
                    const Icon = getCategoryIcon(cat.icon);
                    const name = lang === "es" ? cat.nameEs : cat.nameEn;
                    return (
                      <Link
                        key={cat.id}
                        href={`/catalogo?categoria=${cat.id}`}
                        onClick={() => setProductsOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-lighter"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-white">
                          <Icon size={16} className="text-blue-DEFAULT" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-DEFAULT">
                          {name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <Link
                    href="/catalogo"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center gap-1 text-sm font-semibold text-blue-DEFAULT transition-colors hover:text-blue-dark"
                  >
                    {t.nav.viewAllCatalog}
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
          className="text-gray-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-gray-600"
          >
            {t.nav.home}
          </Link>

          {/* Mobile products expandable */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-600"
            >
              {t.nav.products}
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="mb-2 ml-3 space-y-1 border-l-2 border-blue-lighter pl-3">
                {categories.map((cat) => {
                  const Icon = getCategoryIcon(cat.icon);
                  const name = lang === "es" ? cat.nameEs : cat.nameEn;
                  return (
                    <Link
                      key={cat.id}
                      href={`/catalogo?categoria=${cat.id}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileProductsOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-lg py-2 text-sm text-gray-500 transition-colors hover:text-blue-DEFAULT"
                    >
                      <Icon size={14} className="text-blue-DEFAULT" strokeWidth={1.5} />
                      {name}
                    </Link>
                  );
                })}
                <Link
                  href="/catalogo"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileProductsOpen(false);
                  }}
                  className="flex items-center gap-1 py-2 text-sm font-semibold text-blue-DEFAULT"
                >
                  {t.nav.viewAllCatalog}
                  <ChevronRight size={14} />
                </Link>
              </div>
            )}
          </div>

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
