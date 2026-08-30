import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { getCatalogues } from "@/services/catalogues";
import hero from "@/assets/catalogue-cover.jpg";

export const Route = createFileRoute("/catalogues")({
  head: () => ({
    meta: [
      { title: "Catalogues & Brochures | AMSOFIT Fitness Equipment" },
      {
        name: "description",
        content:
          "Download AMSOFIT product catalogues and series brochures — complete range, Timberline selectorized strength and California strength equipment.",
      },
      { property: "og:title", content: "Catalogues & Brochures | AMSOFIT" },
      {
        property: "og:description",
        content: "Download the full AMSOFIT equipment catalogue and series brochures.",
      },
    ],
  }),
  component: CataloguesPage,
});

function CataloguesPage() {
  const catalogues = getCatalogues();

  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Catalogues & Brochures"
        description="Full specifications, ranges and configurations — ready to share with your team."
        image={hero}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogues.map((c) => (
            <div key={c.id} className="surface-panel overflow-hidden">
              <div className="aspect-4/3 overflow-hidden bg-surface-2">
                <img
                  src={c.cover}
                  alt={`${c.title} cover`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {c.category}
                </p>
                <h2 className="mt-1.5 font-display text-lg font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                <Button asChild className="mt-5 bg-gradient-brand">
                  <a href={c.file} download>
                    <Download className="mr-1 h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
