import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, MessageCircle } from "lucide-react";
import { useState } from "react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ProductCard } from "@/components/site/ProductCard";
import { Section, SectionHeading } from "@/components/site/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductBySlug, getRelatedProducts } from "@/services/products";
import { whatsappLink } from "@/services/enquiries";

export const Route = createFileRoute("/products/$category/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.category, params.slug);
    if (!product) throw notFound();
    return { product, related: getRelatedProducts(product) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable | AMSOFIT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} | AMSOFIT`;
    return {
      meta: [
        { title },
        { name: "description", content: product.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: product.shortDescription },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="container-page pt-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/products" className="hover:text-foreground">
            Products
          </Link>
          <span className="px-2">/</span>
          <Link
            to="/products/$category"
            params={{ category: product.category }}
            className="hover:text-foreground"
          >
            {product.categoryName}
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface-2">
              <img
                src={product.images[active]}
                alt={product.name}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-20 w-24 overflow-hidden rounded-lg border ${
                      i === active ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.bestSeller && <Badge className="bg-gradient-brand">Best Seller</Badge>}
              {product.commercial && <Badge variant="secondary">Commercial</Badge>}
              <Badge variant="outline">{product.usage}</Badge>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Model {product.model}</p>
            <p className="mt-5 text-muted-foreground">{product.description}</p>

            <div className="mt-6 surface-panel p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Pricing</p>
              <p className="mt-1 font-display text-2xl font-bold text-primary">
                Contact for Details
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pricing depends on configuration, quantity and installation scope.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand">
                <a href="#enquire">Enquire Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={whatsappLink(`Hi AMSOFIT, I'd like details on the ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp
                </a>
              </Button>
              {product.brochure && (
                <Button asChild size="lg" variant="ghost">
                  <a href={product.brochure} download>
                    <Download className="mr-1 h-4 w-4" /> Brochure
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <Tabs defaultValue="specs" className="mt-14">
          <TabsList>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="support">Warranty & Support</TabsTrigger>
          </TabsList>
          <TabsContent value="specs" className="mt-6">
            <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {product.specifications.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-6 border-b border-border py-2.5 text-sm"
                >
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="text-right font-medium">{s.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 border-b border-border py-2.5 text-sm">
                <dt className="text-muted-foreground">Other specifications</dt>
                <dd className="text-right font-medium">Contact for Details</dd>
              </div>
            </dl>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="support" className="mt-6">
            <p className="max-w-2xl text-sm text-muted-foreground">
              Warranty terms, spare-part availability and annual maintenance contracts are
              quoted with each order. Installation and commissioning are handled by the AMSOFIT
              service team.
            </p>
          </TabsContent>
        </Tabs>

        <div id="enquire" className="mt-16 surface-panel p-6 sm:p-8">
          <SectionHeading
            eyebrow="Enquiry"
            title={`Request pricing for the ${product.model}`}
            description="Share your requirement and our team will respond with configuration and pricing."
          />
          <EnquiryForm type="quote" productModel={product.model} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-surface-2/30">
          <SectionHeading eyebrow="Related" title="You may also consider" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
