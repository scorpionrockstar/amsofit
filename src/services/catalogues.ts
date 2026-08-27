import { catalogues, seriesList } from "@/data/catalogues";
import type { Catalogue, Series } from "@/data/types";

export function getCatalogues(): Catalogue[] {
  return catalogues;
}

export function getSeriesList(): Series[] {
  return seriesList;
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return seriesList.find((s) => s.slug === slug);
}
