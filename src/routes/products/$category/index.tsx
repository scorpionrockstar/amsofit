import { createFileRoute, notFound } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero, Section } from "@/components/site/Section";
import { getCategoryBySlug } from "@/services/categories";
import { getProductsByCategory } from "@/services/products";

export const Route = createFileRoute("/products/$category/")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category unavailable | AMSOFIT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} | AMSOFIT Fitness Equipment`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.name}
        description={category.description}
        image={category.image}
      />
      <Section>
        <p className="mb-6 text-sm text-muted-foreground">{products.length} products</p>
        {products.length === 0 ? (
          <p className="text-muted-foreground">
            Equipment in this category is available on request — contact our team for options.
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
