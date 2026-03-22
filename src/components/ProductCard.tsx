"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Layers,
  Monitor,
  ShieldPlus,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getWhatsAppUrl } from "@/lib/constants";
import { Product } from "@/types";
import { categories } from "@/lib/categories";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Layers,
  Monitor,
  ShieldPlus,
};

function getCategoryIcon(categoryId: string) {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return Wrench;
  return iconMap[cat.icon] || Wrench;
}

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
  const Icon = getCategoryIcon(product.category);
  const label = buttonLabel || t.featured.inquire;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div className="flex h-[200px] items-center justify-center bg-blue-lighter">
        <Icon size={48} className="text-blue-DEFAULT" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded-full bg-blue-lighter px-3 py-0.5 text-xs font-medium text-blue-DEFAULT">
          {categoryName}
        </span>
        <h3 className="mb-1 text-base font-semibold text-gray-900">{name}</h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-500">
          {description}
        </p>
        <a
          href={getWhatsAppUrl(product.nameEs)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-blue-DEFAULT px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-dark"
        >
          {label}
        </a>
      </div>
    </motion.div>
  );
}
