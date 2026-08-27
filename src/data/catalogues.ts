import type { Catalogue, Series } from "./types";
import cover from "@/assets/catalogue-cover.jpg";
import timberline from "@/assets/timberline-hero.jpg";
import cardio from "@/assets/cat-treadmills.jpg";

export const catalogues: Catalogue[] = [
  {
    id: "amsofit-master",
    title: "AMSOFIT Product Catalogue",
    category: "Complete Range",
    description:
      "Complete commercial cardio, strength and fitness equipment range from AMSOFIT.",
    cover,
    file: "/brochures/amsofit-product-catalogue.pdf",
  },
  {
    id: "timberline",
    title: "Timberline Series",
    category: "Selectorized Strength",
    description: "Premium selectorized strength equipment collection.",
    cover: timberline,
    file: "/brochures/amsofit-timberline-series.pdf",
  },
  {
    id: "california",
    title: "California Series",
    category: "Strength & Benches",
    description: "Plate-loaded strength, racks and benches for high-traffic floors.",
    cover: cardio,
    file: "/brochures/amsofit-california-series.pdf",
  },
];

export const seriesList: Series[] = [
  {
    slug: "timberline",
    name: "Timberline",
    tagline: "Strength Meets Precision.",
    description:
      "The Timberline range is AMSOFIT's selectorized strength line — engineered frames, guided motion paths and durable upholstery for demanding commercial floors.",
    image: timberline,
    brochure: "/brochures/amsofit-timberline-series.pdf",
  },
  {
    slug: "california",
    name: "California",
    tagline: "Built For The Floor.",
    description:
      "Plate-loaded strength, racks and benches designed for heavy daily traffic in commercial and institutional gyms.",
    image: cover,
    brochure: "/brochures/amsofit-california-series.pdf",
  },
  {
    slug: "commercial-cardio",
    name: "Commercial Cardio",
    tagline: "Endurance Without Limits.",
    description:
      "AMSOFIT's commercial cardio line covering treadmills, ellipticals, upright and recumbent bikes for continuous-duty environments.",
    image: cardio,
    brochure: "/brochures/amsofit-product-catalogue.pdf",
  },
];
