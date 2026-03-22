"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getCategoryIcon } from "@/lib/icons";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { lang, t } = useLanguage();
  const name = lang === "es" ? category.nameEs : category.nameEn;
  const description =
    lang === "es" ? category.descriptionEs : category.descriptionEn;
  const Icon = getCategoryIcon(category.icon);

  return (
    <Link href={`/catalogo?categoria=${category.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex h-full flex-col items-start rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-DEFAULT/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-lighter">
          <Icon size={28} className="text-blue-DEFAULT" strokeWidth={1.5} />
        </div>
        <h3 className="mb-1 text-base font-bold text-gray-900">{name}</h3>
        <p className="mb-3 line-clamp-1 text-sm text-gray-500">{description}</p>
        <div className="mt-auto flex items-center gap-1">
          <span className="text-sm font-medium text-blue-DEFAULT">
            {category.productCount} {t.categories.products}
          </span>
          <ChevronRight size={14} className="text-blue-DEFAULT transition-transform group-hover:translate-x-0.5" />
        </div>
      </motion.div>
    </Link>
  );
}
