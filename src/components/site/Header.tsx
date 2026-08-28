import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import { megaMenu } from "@/data/categories";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SearchDialog } from "./SearchDialog";

const nav = [
  { label: "Products", to: "/products" },
  { label: "Timberline", to: "/series/timberline" },
  { label: "Gym Solutions", to: "/gym-solutions" },
  { label: "Catalogues", to: "/catalogues" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="glass-panel sticky top-0 z-50">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-lg font-display text-lg font-bold text-primary-foreground">
            A
          </span>
          <span className="font-display text-lg font-bold tracking-tight lg:text-xl">
            AMSO<span className="text-gradient-brand">FIT</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              to="/products"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[52rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="surface-panel grid grid-cols-3 gap-6 p-6 shadow-[var(--shadow-panel)]">
                {megaMenu.map((col) => (
                  <div key={col.heading}>
                    <p className="eyebrow mb-3">{col.heading}</p>
                    <ul className="space-y-1">
                      {col.links.map((l) => (
                        <li key={l.to + l.label}>
                          <Link
                            to={l.to}
                            className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search products"
            onClick={() => setSearch(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild className="hidden bg-gradient-brand sm:inline-flex">
            <Link to="/contact">Request Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] border-border bg-surface sm:w-96">
              <SheetHeader>
                <SheetTitle className="font-display">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6 overflow-y-auto pb-16">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-semibold"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="hairline" />
                {megaMenu.map((col) => (
                  <div key={col.heading}>
                    <p className="eyebrow mb-2">{col.heading}</p>
                    <ul className="space-y-1">
                      {col.links.map((l) => (
                        <li key={l.to + l.label}>
                          <Link
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-sm text-muted-foreground"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <SearchDialog open={search} onOpenChange={setSearch} />
      <button type="button" className="sr-only" aria-hidden onClick={() => setOpen(false)}>
        <X className="h-4 w-4" />
      </button>
    </header>
  );
}
