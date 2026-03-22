export interface Category {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  icon: string;
  productCount: number;
}

export interface Product {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export type Language = "es" | "en";
