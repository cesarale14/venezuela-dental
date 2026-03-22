"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "./SectionHeading";

const brands = [
  "3M Oral Care",
  "Dentsply Sirona",
  "Kerr Dental",
  "Ivoclar Vivadent",
  "Ultradent",
  "GC America",
  "Hu-Friedy",
  "Colgate Professional",
  "Zhermack",
  "NSK",
  "Woodpecker",
  "Maquira",
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
              key={`${brand}-${i}`}
              className="flex h-16 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-8"
              style={{ minWidth: "160px" }}
            >
              <span className="whitespace-nowrap text-sm font-semibold text-gray-600">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
