import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import infrastructure from "@/assets/infrastructure.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AMSOFIT | Fitness Equipment Manufacturing & Service" },
      {
        name: "description",
        content:
          "AMSOFIT designs, manufactures and services commercial fitness equipment — from cardio floors to selectorized strength lines, installed and supported end to end.",
      },
      { property: "og:title", content: "About AMSOFIT" },
      {
        property: "og:description",
        content:
          "In-house engineering, manufacturing and service for commercial gym equipment.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Engineering",
    text: "Frames, motion paths and drive systems designed around real gym-floor loads rather than showroom specs.",
  },
  {
    title: "Manufacturing",
    text: "Fabrication, welding, finishing and upholstery handled in-house with checks at every stage.",
  },
  {
    title: "Installation",
    text: "Delivery, positioning, commissioning and staff handover managed by our own teams.",
  },
  {
    title: "Service",
    text: "Preventive maintenance schedules, spares availability and responsive support contracts.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for the floors that never stop"
        description="AMSOFIT supplies commercial cardio, strength and functional equipment to gyms, hotels, institutions, corporate facilities and premium homes."
        image={infrastructure}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Our approach</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              One partner for equipment, setup and support
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A gym is only as good as the equipment that survives its busiest hour. AMSOFIT
              builds machines for continuous duty and backs them with planning, installation
              and service so operators deal with one accountable partner.
            </p>
            <p>
              Our range spans the AMSOFIT commercial cardio line, the Timberline selectorized
              strength series, California plate-loaded strength, functional trainers, multi
              stations, free weights and compact home equipment.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-2/30">
        <SectionHeading eyebrow="Capability" title="What we handle in-house" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="surface-panel p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
