import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-fade)" }}
            aria-hidden
          />
        </>
      )}
      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
