import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchProducts } from "@/services/products";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => searchProducts(query, 8), [query]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search treadmills, Timberline, functional trainers…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>Start typing to search the AMSOFIT range.</CommandEmpty>
        {results.length > 0 && (
          <CommandGroup heading="Products">
            {results.map((p) => (
              <CommandItem
                key={p.id}
                value={p.name}
                onSelect={() => {
                  onOpenChange(false);
                  setQuery("");
                  void navigate({
                    to: "/products/$category/$slug",
                    params: { category: p.category, slug: p.slug },
                  });
                }}
              >
                <span className="font-medium">{p.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{p.categoryName}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
