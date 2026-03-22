"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getWhatsAppUrl } from "@/lib/constants";
import { getCategoryIcon } from "@/lib/icons";
import { Product } from "@/types";
import { categories } from "@/lib/categories";

interface ProductCardProps {
  product: Product;
  buttonLabel?: string;
}

export default function ProductCard({ product, buttonLabel }: ProductCardProps) {
  const { lang, t } = useLanguage();
  const name = lang === "es" ? product.nameEs : product.nameEn;
  const description = lang === "es" ? product.descriptionEs : product.descriptionEn;
  const category = categories.find((c) => c.id === product.category);
  const categoryName = category
    ? lang === "es"
      ? category.nameEs
      : category.nameEn
    : "";
  const Icon = getCategoryIcon(category?.icon || "Wrench");
  const label = buttonLabel || t.featured.inquire;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Image placeholder */}
      <div className="relative flex h-[240px] items-center justify-center bg-blue-lighter transition-colors">
        <Icon size={48} className="text-blue-DEFAULT" strokeWidth={1.5} />
        <div className="absolute inset-0 bg-blue-DEFAULT/0 transition-colors duration-300 group-hover:bg-blue-DEFAULT/5" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded-full bg-blue-lighter px-3 py-0.5 text-xs font-medium text-blue-DEFAULT">
          {categoryName}
        </span>
        <h3 className="mb-1 text-lg font-semibold leading-snug text-gray-900">{name}</h3>
        <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
        <a
          href={getWhatsAppUrl(product.nameEs)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-blue-DEFAULT px-4 text-sm font-medium text-white transition-colors hover:bg-blue-dark"
        >
          <MessageCircle size={16} />
          {label}
        </a>
      </div>
    </motion.div>
  );
}
