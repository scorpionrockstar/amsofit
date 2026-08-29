import { createFileRoute, Link } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero, Section } from "@/components/site/Section";
import { getSeriesList } from "@/services/catalogues";
import hero from "@/assets/timberline-hero.jpg";

export const Route = createFileRoute("/series/")({
  head: () => ({
    meta: [
      { title: "Equipment Series | AMSOFIT Timberline, California & Cardio" },
      {
        name: "description",
        content:
          "Explore AMSOFIT equipment series — Timberline selectorized strength, California plate-loaded strength and the Commercial Cardio range.",
      },
      { property: "og:title", content: "Equipment Series | AMSOFIT" },
      {
        property: "og:description",
        content: "Timberline, California and Commercial Cardio equipment series from AMSOFIT.",
      },
    ],
  }),
  component: SeriesIndex,
});

function SeriesIndex() {
  const series = getSeriesList();
  return (
    <>
      <PageHero
        eyebrow="Series"
        title="Equipment Series"
        description="Each AMSOFIT series is engineered around a specific training environment and floor requirement."
        image={hero}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {series.map((s) => (
            <Link
              key={s.slug}
              to="/series/$slug"
              params={{ slug: s.slug }}
              className="group surface-panel overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.name} series`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold">{s.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{s.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
