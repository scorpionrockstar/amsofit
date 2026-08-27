import { products } from "@/data/products";
import type { MuscleGroup, Product, Usage } from "@/data/types";

/**
 * Data-access layer. Swap these implementations for REST/CMS calls later
 * without touching any presentation component.
 */

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsBySeries(seriesSlug: string): Product[] {
  return products.filter((p) => p.seriesSlug === seriesSlug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getBestSellers(limit = 6): Product[] {
  return products.filter((p) => p.bestSeller).slice(0, limit);
}

export function getProductsByMuscle(group: MuscleGroup): Product[] {
  return products.filter((p) => p.muscleGroups.includes(group));
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function searchProducts(query: string, limit = 8): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products
    .filter((p) =>
      [p.name, p.model, p.categoryName, p.series ?? "", p.shortDescription]
        .join(" ")
        .toLowerCase()
        .includes(q),
    )
    .slice(0, limit);
}

export interface ProductFilters {
  categories?: string[];
  usage?: Usage[];
  muscles?: MuscleGroup[];
  series?: string[];
  inStockOnly?: boolean;
}

export type SortKey = "featured" | "newest" | "price-asc" | "price-desc" | "popular" | "commercial";

export function filterProducts(
  list: Product[],
  filters: ProductFilters,
  sort: SortKey = "featured",
): Product[] {
  let out = list.filter((p) => {
    if (filters.categories?.length && !filters.categories.includes(p.category)) return false;
    if (filters.usage?.length && !filters.usage.includes(p.usage)) return false;
    if (filters.series?.length && !filters.series.includes(p.seriesSlug ?? "")) return false;
    if (filters.muscles?.length && !filters.muscles.some((m) => p.muscleGroups.includes(m)))
      return false;
    if (filters.inStockOnly && !p.inStock) return false;
    return true;
  });

  const price = (p: Product) => p.price ?? Number.MAX_SAFE_INTEGER;
  out = [...out];
  switch (sort) {
    case "price-asc":
      out.sort((a, b) => price(a) - price(b));
      break;
    case "price-desc":
      out.sort((a, b) => price(b) - price(a));
      break;
    case "popular":
      out.sort((a, b) => Number(!!b.bestSeller) - Number(!!a.bestSeller));
      break;
    case "commercial":
      out.sort((a, b) => Number(!!b.commercial) - Number(!!a.commercial));
      break;
    case "newest":
      out.reverse();
      break;
    default:
      out.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }
  return out;
}
