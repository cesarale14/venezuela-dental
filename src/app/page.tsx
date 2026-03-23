"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Truck,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import BrandCarousel from "@/components/BrandCarousel";
import GoogleMap from "@/components/GoogleMap";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Home() {
  const { t } = useLanguage();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-lighter to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div {...fadeIn}>
              <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-[clamp(36px,5vw,56px)]">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                {t.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex min-h-[48px] items-center rounded-lg bg-blue-DEFAULT px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
                >
                  {t.hero.ctaCatalog}
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-green-whatsapp px-7 text-sm font-semibold text-white transition-colors hover:brightness-110"
                >
                  <MessageCircle size={18} />
                  {t.hero.ctaWhatsApp}
                </a>
              </div>
            </motion.div>

            {/* Hero image placeholder */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex h-72 items-center justify-center rounded-2xl bg-blue-lighter md:h-96"
            >
              <img
                src="/logo.svg"
                alt="Venezuela Dental"
                className="h-48 w-auto opacity-50 md:h-60"
              />
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { icon: Truck, label: t.trustBadges.shipping },
              { icon: Users, label: t.trustBadges.personalized },
              { icon: Award, label: t.trustBadges.brands },
              { icon: ShieldCheck, label: t.trustBadges.pricing },
            ].map((badge, i) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 rounded-xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              >
                <badge.icon
                  size={24}
                  className="flex-shrink-0 text-blue-DEFAULT"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-gray-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Lines — Young Innovations style */}
      <section className="relative bg-[#ebf5fe] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeIn}
            className="text-center text-3xl font-light text-[#001480] md:text-4xl"
          >
            {t.productLines.title}
          </motion.h2>

          {/* Cards container — flex row like Young Innovations .wrap */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-y-0 lg:flex-nowrap"
            style={{ margin: "40px -20px 0" }}
          >
            {[
              {
                image: "/brands/dental-tools.png",
                gradient: "radial-gradient(circle, #d8b8ff 0%, #773dbd 94%)",
                title: t.productLines.line1.title,
                description: t.productLines.line1.description,
                href: "/catalogo?categoria=preventiva",
              },
              {
                image: "/brands/specialist-hand.jpg",
                gradient: "radial-gradient(circle, #ffb0ca 0%, #dc1e5c 100%)",
                title: t.productLines.line2.title,
                description: t.productLines.line2.description,
                href: "/catalogo?categoria=endodoncia",
              },
              {
                image: "/brands/implant-tech.png",
                gradient: "radial-gradient(circle, #a4ffe5 0%, #1eb389 94%)",
                title: t.productLines.line3.title,
                description: t.productLines.line3.description,
                href: "/catalogo?categoria=equipos",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="w-full px-5 sm:w-1/2 lg:w-1/3"
                style={{ marginTop: "120px" }}
              >
                <Link
                  href={card.href}
                  className="group relative block"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="relative flex flex-col overflow-y-visible border-2 border-[#cacfd6] bg-white transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ borderRadius: "10px" }}
                  >
                    {/* Colored gradient image area — 270px, rounded top only, seamless with content below */}
                    <div
                      className="relative w-full overflow-y-visible"
                      style={{
                        background: card.gradient,
                        height: "270px",
                        borderRadius: "8px 8px 0 0",
                      }}
                    >
                      {/* White radial glow behind the image */}
                      <div
                        className="absolute left-1/2 z-[1] -translate-x-1/2"
                        style={{
                          top: "-100px",
                          maxWidth: "455px",
                          width: "100%",
                          height: "calc(100% + 100px)",
                          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)",
                        }}
                      />
                      {/* img-wrap: absolute, top -100px, height calc(100%+100px) */}
                      <div
                        className="absolute left-1/2 z-[2] w-full -translate-x-1/2"
                        style={{
                          top: "-100px",
                          maxWidth: "455px",
                          height: "calc(100% + 100px)",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-contain"
                          style={{ objectPosition: "bottom" }}
                        />
                      </div>
                    </div>

                    {/* Card content area — centered, generous padding */}
                    <div
                      className="relative text-center"
                      style={{ padding: "36px 32px 90px" }}
                    >
                      {/* Logo placeholder — Venezuela Dental logo */}
                      <div className="mx-auto mb-5" style={{ maxWidth: "200px" }}>
                        <img
                          src="/logo.svg"
                          alt="Venezuela Dental"
                          className="mx-auto h-12 w-auto object-contain"
                        />
                      </div>

                      <h6
                        className="mb-2.5 text-lg font-semibold uppercase tracking-wide"
                        style={{ color: "#001480" }}
                      >
                        {card.title}
                      </h6>
                      <p
                        className="mb-5 leading-relaxed"
                        style={{ fontSize: "18px", color: "#545859" }}
                      >
                        {card.description}
                      </p>

                      {/* Pill button — absolute bottom like original */}
                      <span
                        className="absolute left-1/2 -translate-x-1/2 rounded-full border-2 border-[#0084f2] bg-transparent px-[60px] py-2.5 font-extrabold text-[#0084f2] transition-all duration-300 group-hover:bg-[#0084f2] group-hover:text-white"
                        style={{ bottom: "36px", whiteSpace: "nowrap" }}
                      >
                        {t.productLines.viewProducts}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand carousel — directly below product line cards */}
        <div className="mt-16">
          <BrandCarousel embedded />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.featured.title} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/catalogo"
              className="inline-flex min-h-[48px] items-center rounded-lg border border-blue-DEFAULT px-7 text-sm font-semibold text-blue-DEFAULT transition-colors hover:bg-blue-DEFAULT hover:text-white"
            >
              {t.featured.viewAll} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.categories.title} />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-lighter py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.whyUs.title} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Truck,
                title: t.whyUs.shipping,
                desc: t.whyUs.shippingDesc,
              },
              {
                icon: ShieldCheck,
                title: t.whyUs.guaranteed,
                desc: t.whyUs.guaranteedDesc,
              },
              { icon: Clock, title: t.whyUs.fast, desc: t.whyUs.fastDesc },
              {
                icon: Award,
                title: t.whyUs.brands,
                desc: t.whyUs.brandsDesc,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-lighter">
                  <item.icon
                    size={28}
                    className="text-blue-DEFAULT"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-DEFAULT to-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-[clamp(28px,3.5vw,42px)]">
              {t.ctaBanner.title}
            </h2>
            <p className="mt-4 text-lg text-blue-lighter">{t.ctaBanner.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-green-whatsapp px-7 text-sm font-semibold text-white transition-colors hover:brightness-110"
              >
                <MessageCircle size={18} />
                {t.ctaBanner.whatsapp}
              </a>
              <a
                href={`tel:${CONTACT.phones[0].number.replace(/\s|-/g, "")}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                {t.ctaBanner.call}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.location.title} />
          <div className="grid items-start gap-8 md:grid-cols-2">
            <motion.div {...fadeIn}>
              <GoogleMap />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="mb-5 flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-blue-DEFAULT"
                  />
                  <p className="text-sm leading-relaxed text-gray-600">
                    {CONTACT.address.full}
                  </p>
                </div>
                <div className="mb-5 flex items-start gap-3">
                  <Clock
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-blue-DEFAULT"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {t.location.hours}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t.location.hoursDetail}
                    </p>
                  </div>
                </div>
                {CONTACT.phones.map((phone) => (
                  <div
                    key={phone.number}
                    className="mb-3 flex items-center gap-3"
                  >
                    <Phone
                      size={20}
                      className="flex-shrink-0 text-blue-DEFAULT"
                    />
                    <a
                      href={`tel:${phone.number.replace(/\s|-/g, "")}`}
                      className="text-sm text-gray-600 hover:text-blue-DEFAULT"
                    >
                      {phone.number}
                    </a>
                  </div>
                ))}
                <a
                  href={CONTACT.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-blue-DEFAULT px-6 text-sm font-medium text-white transition-colors hover:bg-blue-dark"
                >
                  <MapPin size={16} />
                  {t.location.directions}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
