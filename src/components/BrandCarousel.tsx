"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "./SectionHeading";

const brands = [
  { name: "3M Oral Care", logo: "/brands/3m.svg" },
  { name: "Dentsply Sirona", logo: "/brands/dentsply.svg" },
  { name: "Kerr Dental", logo: "/brands/kerr.svg" },
  { name: "Ivoclar Vivadent", logo: "/brands/ivoclar.svg" },
  { name: "Ultradent", logo: "/brands/ultradent.svg" },
  { name: "GC America", logo: "/brands/gc-america.svg" },
  { name: "Hu-Friedy", logo: "/brands/hu-friedy.svg" },
  { name: "Colgate Professional", logo: "/brands/colgate.svg" },
  { name: "Zhermack", logo: "/brands/zhermack.svg" },
  { name: "NSK", logo: "/brands/nsk.svg" },
  { name: "Woodpecker", logo: "/brands/woodpecker.svg" },
  { name: "Maquira", logo: "/brands/maquira.svg" },
];

export default function BrandCarousel() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.brands.title} subtitle={t.brands.subtitle} />
      </div>
      <div className="relative mt-8 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-gray-50 to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-6">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-20 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-6"
              style={{ minWidth: "180px" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
