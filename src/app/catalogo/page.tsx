"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

export default function CatalogoPage() {
  return (
    <Suspense>
      <CatalogoContent />
    </Suspense>
  );
}

function CatalogoContent() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const name = lang === "es" ? product.nameEs : product.nameEn;
      const desc = lang === "es" ? product.descriptionEs : product.descriptionEn;
      const matchesSearch =
        !searchQuery ||
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, lang]);

  return (
    <>
      <section className="bg-blue-lighter py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.catalog.title} subtitle={t.catalog.subtitle} />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-blue-DEFAULT text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t.catalog.all}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-blue-DEFAULT text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {lang === "es" ? cat.nameEs : cat.nameEn}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t.catalog.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 transition-colors focus:border-blue-DEFAULT focus:outline-none sm:w-64"
              />
            </div>
          </div>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  buttonLabel={t.catalog.inquire}
                />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-gray-500">
              {t.catalog.noResults}
            </p>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="mb-6 text-lg font-semibold text-gray-900">
              {t.catalog.notFound}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-whatsapp px-6 py-3 text-sm font-semibold text-white transition-colors hover:brightness-110"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phones[0].number.replace(/\s|-/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Phone size={18} />
                {CONTACT.phones[0].number}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
