export type Usage = "Home" | "Semi Commercial" | "Commercial";

export type MuscleGroup =
  | "Chest"
  | "Back"
  | "Shoulders"
  | "Arms"
  | "Legs"
  | "Glutes"
  | "Core"
  | "Full Body";

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  model: string;
  category: string;
  categoryName: string;
  series?: string;
  seriesSlug?: string;
  usage: Usage;
  muscleGroups: MuscleGroup[];
  shortDescription: string;
  description: string;
  images: string[];
  price?: number;
  mrp?: number;
  featured?: boolean;
  bestSeller?: boolean;
  commercial?: boolean;
  inStock: boolean;
  specifications: Specification[];
  features: string[];
  brochure?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  group: "Cardio" | "Strength" | "Commercial";
  description: string;
  image: string;
}

export interface Series {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  brochure?: string;
}

export interface Catalogue {
  id: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  file: string;
  productCount?: number;
}

export interface CartLine {
  productId: string;
  quantity: number;
}
