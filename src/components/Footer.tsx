"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-lighter">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/logo.svg"
              alt="Venezuela Dental"
              className="mb-4 h-28 w-auto"
            />
            <p className="text-sm text-gray-600">{t.footer.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/catalogo", label: t.nav.catalog },
                { href: "/nosotros", label: t.nav.about },
                { href: "/servicios", label: t.nav.services },
                { href: "/contacto", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-DEFAULT"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-DEFAULT" />
                {CONTACT.address.short}
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone.number} className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-blue-DEFAULT" />
                  <a href={`tel:${phone.number.replace(/\s|-/g, "")}`} className="hover:text-blue-DEFAULT">
                    {phone.number}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-blue-DEFAULT" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-DEFAULT">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {CONTACT.businessName}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
