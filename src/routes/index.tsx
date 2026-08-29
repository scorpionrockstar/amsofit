import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ShieldCheck, Truck, Wrench } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/services/categories";
import { getSeriesList } from "@/services/catalogues";
import { getBestSellers, getFeaturedProducts } from "@/services/products";
import hero from "@/assets/hero-gym.jpg";
import infrastructure from "@/assets/infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMSOFIT | Commercial Gym & Fitness Equipment Manufacturer" },
      {
        name: "description",
        content:
          "AMSOFIT builds commercial treadmills, ellipticals, bikes and selectorized strength equipment for gyms, hotels, institutions and premium homes.",
      },
      {
        property: "og:title",
        content: "AMSOFIT | Commercial Gym & Fitness Equipment",
      },
      {
        property: "og:description",
        content:
          "Commercial cardio and strength equipment engineered for high-traffic gym floors. Complete gym setup, installation and service.",
      },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: Building2, title: "Complete Gym Setup", text: "Floor planning, equipment mix and layout design." },
  { icon: ShieldCheck, title: "Commercial Grade", text: "Frames and drives built for continuous daily traffic." },
  { icon: Truck, title: "Pan-India Delivery", text: "Logistics and on-site installation handled end to end." },
  { icon: Wrench, title: "Service Support", text: "Preventive maintenance and spares for the long run." },
];

function HomePage() {
  const categories = getCategories().slice(0, 8);
  const featured = getFeaturedProducts(8);
  const bestSellers = getBestSellers(4);
  const series = getSeriesList();

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="AMSOFIT commercial gym floor"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ backgroundImage: "var(--gradient-fade)" }}
        />
        <div className="container-page relative py-24 sm:py-32 lg:py-40">
          <p className="eyebrow mb-4">Commercial Fitness Equipment</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Equipment That Builds <span className="text-primary">Champions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Cardio, strength and functional equipment engineered for gyms, hotels,
            institutions and premium home setups — supplied, installed and serviced by
            AMSOFIT.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-brand">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/gym-solutions">Setup Your Gym</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-surface-2/40">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex gap-3">
              <t.icon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-display text-sm font-semibold">{t.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Categories"
          title="Shop by category"
          description="From continuous-duty cardio to selectorized strength — every category built for the floor it lives on."
          action={
            <Button asChild variant="outline">
              <Link to="/products">View all products</Link>
            </Button>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/products/$category"
              params={{ category: c.slug }}
              className="group surface-panel relative overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{c.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/30">
        <SectionHeading
          eyebrow="Featured"
          title="Featured equipment"
          description="A selection of AMSOFIT machines specified most often on commercial floors."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Series" title="Equipment series" />
        <div className="grid gap-5 md:grid-cols-3">
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
                <h3 className="font-display text-xl font-bold">{s.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{s.tagline}</p>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={infrastructure}
              alt="AMSOFIT manufacturing infrastructure"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Manufacturing</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Engineered in-house, proven on the floor
            </h2>
            <p className="mt-4 text-muted-foreground">
              AMSOFIT controls design, fabrication, finishing and quality checks so every
              machine holds up to continuous commercial use. Equipment is delivered,
              installed and supported by our own service network.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-brand">
                <Link to="/about">About AMSOFIT</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/catalogues">Catalogues</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {bestSellers.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Best sellers" title="Most specified machines" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
