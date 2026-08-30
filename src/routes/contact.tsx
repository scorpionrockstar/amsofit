import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import hero from "@/assets/cat-functional.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AMSOFIT | Sales, Quotes & Gym Setup Enquiries" },
      {
        name: "description",
        content:
          "Contact the AMSOFIT team for equipment pricing, gym setup proposals, dealership enquiries and service support.",
      },
      { property: "og:title", content: "Contact AMSOFIT" },
      {
        property: "og:description",
        content: "Request pricing, a gym setup plan or service support from AMSOFIT.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Sales", value: "Contact for Details" },
  { icon: Mail, label: "Email", value: "Contact for Details" },
  { icon: MapPin, label: "Address", value: "Contact for Details" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, business hours" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the AMSOFIT team"
        description="Equipment pricing, gym setup proposals, dealership enquiries or service support — we'll route your request to the right team."
        image={hero}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="surface-panel p-6 sm:p-8">
            <SectionHeading
              eyebrow="Enquiry"
              title="Send us your requirement"
              description="Tell us what you need and we'll respond with options and pricing."
            />
            <EnquiryForm type="sales" />
          </div>

          <aside className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="surface-panel flex gap-3 p-5">
                <d.icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{d.value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}
