import { createFileRoute, notFound } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { getSeriesBySlug } from "@/services/catalogues";
import { getProductsBySeries } from "@/services/products";

export const Route = createFileRoute("/series/$slug")({
  loader: ({ params }) => {
    const series = getSeriesBySlug(params.slug);
    if (!series) throw notFound();
    return { series, products: getProductsBySeries(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Series unavailable | AMSOFIT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { series } = loaderData;
    const title = `${series.name} Series | AMSOFIT`;
    return {
      meta: [
        { title },
        { name: "description", content: series.description },
        { property: "og:title", content: title },
        { property: "og:description", content: series.description },
      ],
    };
  },
  component: SeriesDetail,
});

function SeriesDetail() {
  const { series, products } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`${series.name} Series`}
        title={series.tagline}
        description={series.description}
        image={series.image}
      >
        {series.brochure && (
          <Button asChild size="lg" className="bg-gradient-brand">
            <a href={series.brochure} download>
              <Download className="mr-1 h-4 w-4" /> Download {series.name} Brochure
            </a>
          </Button>
        )}
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Range"
          title={`${series.name} equipment`}
          description={`${products.length} machines in this series.`}
        />
        {products.length === 0 ? (
          <p className="text-muted-foreground">
            Full range details for this series are available on request.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </Section>

      <CTASection />
    </>
  );
}
