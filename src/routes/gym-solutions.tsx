import { createFileRoute } from "@tanstack/react-router";
import { Building2, Dumbbell, Hotel, Home, School } from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import hero from "@/assets/cat-multistation.jpg";

export const Route = createFileRoute("/gym-solutions")({
  head: () => ({
    meta: [
      { title: "Gym Setup Solutions | Complete Gym Packages by AMSOFIT" },
      {
        name: "description",
        content:
          "Complete gym setup from AMSOFIT — floor planning, equipment selection, installation and service for commercial gyms, hotels, institutions and homes.",
      },
      { property: "og:title", content: "Gym Setup Solutions | AMSOFIT" },
      {
        property: "og:description",
        content:
          "Turnkey gym packages: layout planning, equipment mix, installation and ongoing maintenance.",
      },
    ],
  }),
  component: GymSolutions,
});

const segments = [
  { icon: Dumbbell, title: "Commercial Gyms", text: "Full cardio and strength floors sized to member load and peak-hour traffic." },
  { icon: Hotel, title: "Hotels & Resorts", text: "Compact, premium fitness rooms that match guest expectations and space limits." },
  { icon: School, title: "Institutions", text: "Schools, colleges and academies with durable, low-maintenance equipment." },
  { icon: Building2, title: "Corporate & Apartment", text: "Shared facilities designed for safe, unsupervised daily use." },
  { icon: Home, title: "Premium Homes", text: "Curated home setups with a compact footprint and quiet operation." },
];

const steps = [
  { n: "01", title: "Consultation", text: "We understand your space, budget, member profile and programming." },
  { n: "02", title: "Layout & Proposal", text: "Floor plan, equipment mix and phased investment plan." },
  { n: "03", title: "Delivery & Installation", text: "Logistics, positioning, commissioning and safety checks." },
  { n: "04", title: "Service & Support", text: "Maintenance schedules, spares and staff training." },
];

function GymSolutions() {
  return (
    <>
      <PageHero
        eyebrow="Gym Solutions"
        title="Turnkey gym setup, floor to finish"
        description="Tell us the space and the member load — AMSOFIT plans the layout, specifies the equipment, installs it and keeps it running."
        image={hero}
      />

      <Section>
        <SectionHeading eyebrow="Segments" title="Who we set up" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <div key={s.title} className="surface-panel p-6">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/30">
        <SectionHeading eyebrow="Process" title="How a project runs" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-panel p-6">
              <p className="font-display text-3xl font-bold text-primary/70">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-panel p-6 sm:p-8">
          <SectionHeading
            eyebrow="Get started"
            title="Request a gym setup plan"
            description="Share your space details and our team will revert with a layout-based proposal."
          />
          <EnquiryForm type="gym-setup" />
        </div>
      </Section>
    </>
  );
}
