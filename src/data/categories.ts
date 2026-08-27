import type { Category } from "./types";

import treadmills from "@/assets/cat-treadmills.jpg";
import strength from "@/assets/cat-strength.jpg";
import cycling from "@/assets/cat-cycling.jpg";
import ellipticals from "@/assets/cat-ellipticals.jpg";
import functional from "@/assets/cat-functional.jpg";
import multistation from "@/assets/cat-multistation.jpg";
import freeweights from "@/assets/cat-freeweights.jpg";
import homegym from "@/assets/cat-homegym.jpg";

export const categories: Category[] = [
  {
    id: "treadmills",
    slug: "treadmills",
    name: "Treadmills",
    group: "Cardio",
    description:
      "Motorised and curved treadmills engineered for continuous commercial running loads.",
    image: treadmills,
  },
  {
    id: "strength",
    slug: "strength",
    name: "Strength Equipment",
    group: "Strength",
    description:
      "Selectorized and plate-loaded machines built around precise strength curves.",
    image: strength,
  },
  {
    id: "cycling",
    slug: "cycling",
    name: "Exercise Bikes",
    group: "Cardio",
    description: "Upright, recumbent and spin bikes for studio and floor programming.",
    image: cycling,
  },
  {
    id: "ellipticals",
    slug: "ellipticals",
    name: "Ellipticals",
    group: "Cardio",
    description: "Low-impact cross trainers with smooth, natural stride mechanics.",
    image: ellipticals,
  },
  {
    id: "functional",
    slug: "functional",
    name: "Functional Trainers",
    group: "Strength",
    description: "Dual-cable systems for athletic, multi-planar training.",
    image: functional,
  },
  {
    id: "multi-station",
    slug: "multi-station",
    name: "Multi Stations",
    group: "Strength",
    description: "Space-efficient stations covering a complete strength circuit.",
    image: multistation,
  },
  {
    id: "free-weights",
    slug: "free-weights",
    name: "Free Weights",
    group: "Strength",
    description: "Dumbbells, plates, bars, benches and racks for serious lifting.",
    image: freeweights,
  },
  {
    id: "home-gym",
    slug: "home-gym",
    name: "Home Gym",
    group: "Cardio",
    description: "Compact equipment designed for premium residential fitness spaces.",
    image: homegym,
  },
  {
    id: "commercial-cardio",
    slug: "commercial-cardio",
    name: "Commercial Cardio",
    group: "Commercial",
    description: "The full AMSOFIT commercial cardio floor in one range.",
    image: treadmills,
  },
];

export const megaMenu = [
  {
    heading: "Cardio",
    image: treadmills,
    links: [
      { label: "Treadmills", to: "/products/treadmills" },
      { label: "Ellipticals", to: "/products/ellipticals" },
      { label: "Upright & Recumbent Bikes", to: "/products/cycling" },
      { label: "Commercial Cardio", to: "/products/commercial-cardio" },
    ],
  },
  {
    heading: "Strength",
    image: strength,
    links: [
      { label: "Strength Equipment", to: "/products/strength" },
      { label: "Functional Trainers", to: "/products/functional" },
      { label: "Multi Stations", to: "/products/multi-station" },
      { label: "Free Weights", to: "/products/free-weights" },
    ],
  },
  {
    heading: "Commercial",
    image: multistation,
    links: [
      { label: "Gym Packages", to: "/gym-solutions" },
      { label: "Timberline Series", to: "/series/timberline" },
      { label: "California Series", to: "/series/california" },
      { label: "Home Gym", to: "/products/home-gym" },
    ],
  },
];
