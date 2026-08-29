import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { MuscleGroup, Usage } from "@/data/types";
import { getCategories } from "@/services/categories";
import { getSeriesList } from "@/services/catalogues";
import { filterProducts, getAllProducts, type SortKey } from "@/services/products";
import hero from "@/assets/cat-strength.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "All Fitness Equipment | AMSOFIT Product Range" },
      {
        name: "description",
        content:
          "Browse the complete AMSOFIT range — treadmills, ellipticals, bikes, selectorized strength, functional trainers, multi stations and free weights.",
      },
      { property: "og:title", content: "All Fitness Equipment | AMSOFIT" },
      {
        property: "og:description",
        content: "Filter the full AMSOFIT catalogue by category, usage, muscle group and series.",
      },
    ],
  }),
  component: ProductsPage,
});

const usages: Usage[] = ["Home", "Semi Commercial", "Commercial"];
const muscles: MuscleGroup[] = [
  "Chest",
  "Back",
  "Shoulders",
  "Arms",
  "Legs",
  "Glutes",
  "Core",
  "Full Body",
];

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function ProductsPage() {
  const all = getAllProducts();
  const categories = getCategories();
  const series = getSeriesList();

  const [cats, setCats] = useState<string[]>([]);
  const [use, setUse] = useState<Usage[]>([]);
  const [mus, setMus] = useState<MuscleGroup[]>([]);
  const [ser, setSer] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("featured");

  const results = useMemo(
    () =>
      filterProducts(all, { categories: cats, usage: use, muscles: mus, series: ser }, sort),
    [all, cats, use, mus, ser, sort],
  );

  const group = (title: string, children: React.ReactNode) => (
    <div className="border-b border-border pb-5">
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">{title}</p>
      <div className="space-y-2.5">{children}</div>
    </div>
  );

  const row = (id: string, label: string, checked: boolean, onChange: () => void) => (
    <div key={id} className="flex items-center gap-2.5">
      <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={id} className="cursor-pointer text-sm font-normal text-muted-foreground">
        {label}
      </Label>
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="All Equipment"
        description="Filter the complete AMSOFIT catalogue by category, usage environment, muscle group and series."
        image={hero}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-5">
            <div className="flex items-center justify-between">
              <p className="font-display font-semibold">Filters</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setCats([]);
                  setUse([]);
                  setMus([]);
                  setSer([]);
                }}
              >
                Clear
              </Button>
            </div>
            {group(
              "Category",
              categories.map((c) =>
                row(`c-${c.slug}`, c.name, cats.includes(c.slug), () =>
                  setCats((v) => toggle(v, c.slug)),
                ),
              ),
            )}
            {group(
              "Usage",
              usages.map((u) =>
                row(`u-${u}`, u, use.includes(u), () => setUse((v) => toggle(v, u))),
              ),
            )}
            {group(
              "Muscle Group",
              muscles.map((m) =>
                row(`m-${m}`, m, mus.includes(m), () => setMus((v) => toggle(v, m))),
              ),
            )}
            {group(
              "Series",
              series.map((s) =>
                row(`s-${s.slug}`, s.name, ser.includes(s.slug), () =>
                  setSer((v) => toggle(v, s.slug)),
                ),
              ),
            )}
          </aside>

          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">{results.length} products</p>
              <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                <SelectTrigger className="w-52">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="popular">Most popular</SelectItem>
                  <SelectItem value="commercial">Commercial first</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {results.length === 0 ? (
              <p className="text-muted-foreground">No products match these filters.</p>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
