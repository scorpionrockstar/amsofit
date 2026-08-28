import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$category/$slug"
      params={{ category: product.category, slug: product.slug }}
      className="group surface-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-surface-2">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.bestSeller && <Badge className="bg-gradient-brand">Best Seller</Badge>}
          {product.commercial && (
            <Badge variant="secondary" className="bg-secondary/80">
              Commercial
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.categoryName}
        </p>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View details <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
