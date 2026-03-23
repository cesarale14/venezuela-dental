"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "./SectionHeading";

const brands = [
  { name: "Young Dental", logo: "/brands/young-dental.jpg" },
  { name: "American Eagle Instruments", logo: "/brands/american-eagle.jpg" },
  { name: "Microbrush", logo: "/brands/microbrush.jpg" },
  { name: "Zooby", logo: "/brands/zooby.jpg" },
  { name: "Denticator", logo: "/brands/denticator.jpg" },
  { name: "Biotrol", logo: "/brands/biotrol.jpg" },
  { name: "Defend", logo: "/brands/defend.jpg" },
  { name: "Johnson-Promident", logo: "/brands/johnson-promident.jpg" },
  { name: "Young Specialties", logo: "/brands/young-specialties.jpg" },
  { name: "Plak Smacker", logo: "/brands/plak-smacker.jpg" },
  { name: "OrthoNu", logo: "/brands/orthonu.jpg" },
  { name: "Obtura Spartan", logo: "/brands/obtura-spartan.jpg" },
  { name: "Orthodontic Store", logo: "/brands/orthodontic-store.jpg" },
  { name: "OrthoQuest", logo: "/brands/orthoquest.jpg" },
  { name: "Ortho Specialties", logo: "/brands/ortho-specialties.jpg" },
  { name: "Panoramic", logo: "/brands/panoramic.jpg" },
  { name: "Young Surgical", logo: "/brands/young-surgical.jpg" },
  { name: "MPS", logo: "/brands/mps.jpg" },
  { name: "VitalErt Kit", logo: "/brands/vitalertkit.jpg" },
  { name: "PuraGraft", logo: "/brands/puragraft.jpg" },
  { name: "Salvin", logo: "/brands/salvin.png" },
  { name: "Preat", logo: "/brands/preat.jpg" },
  { name: "Germiphene", logo: "/brands/germiphene.jpg" },
  { name: "Bridge2", logo: "/brands/bridge2.jpg" },
];

export default function BrandCarousel({ embedded }: { embedded?: boolean }) {
  const { t } = useLanguage();

  const content = (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.brands.title} subtitle={t.brands.subtitle} />
      </div>
      <div className="relative mt-8 overflow-hidden">
        {/* Fade edges */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r ${embedded ? "from-[#ebf5fe]" : "from-gray-50"} to-transparent`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l ${embedded ? "from-[#ebf5fe]" : "from-gray-50"} to-transparent`} />

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
    </>
  );

  if (embedded) {
    return <div>{content}</div>;
  }

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      {content}
    </section>
  );
}
