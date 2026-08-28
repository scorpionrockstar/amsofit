import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function CTASection({
  title = "Planning a new gym floor?",
  description = "Share your layout and member load — AMSOFIT will configure the right cardio and strength mix, install it and support it.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-brand">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/catalogues">Download Catalogue</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
