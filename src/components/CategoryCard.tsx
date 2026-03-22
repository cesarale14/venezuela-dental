"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Layers,
  Monitor,
  ShieldPlus,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Category } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Layers,
  Monitor,
  ShieldPlus,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { lang, t } = useLanguage();
  const name = lang === "es" ? category.nameEs : category.nameEn;
  const description =
    lang === "es" ? category.descriptionEs : category.descriptionEn;
  const Icon = iconMap[category.icon] || Wrench;

  return (
    <Link href={`/catalogo?categoria=${category.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col items-start rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-DEFAULT/30 hover:shadow-lg"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-lighter">
          <Icon size={24} className="text-blue-DEFAULT" strokeWidth={1.5} />
        </div>
        <h3 className="mb-1 text-lg font-bold text-gray-900">{name}</h3>
        <p className="mb-3 text-sm text-gray-500">{description}</p>
        <span className="text-sm font-medium text-blue-DEFAULT">
          {category.productCount} {t.categories.products}
        </span>
      </motion.div>
    </Link>
  );
}
