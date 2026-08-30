import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry, type EnquiryPayload } from "@/services/enquiries";

export function EnquiryForm({
  type = "sales",
  productModel,
  compact,
}: {
  type?: EnquiryPayload["type"];
  productModel?: string;
  compact?: boolean;
}) {
  const [busy, setBusy] = useState(false);

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setBusy(true);
        await submitEnquiry({
          type,
          ...(productModel ? { productModel } : {}),
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          city: String(data.get("city") ?? ""),
          gymType: String(data.get("gymType") ?? ""),
          area: String(data.get("area") ?? ""),
          requirements: String(data.get("requirements") ?? ""),
        });
        setBusy(false);
        form.reset();
        toast.success("Enquiry received. Our team will contact you shortly.");
      }}
    >
      <Field name="name" label="Full name" required />
      <Field name="phone" label="Phone" type="tel" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="city" label="City" />
      {!compact && (
        <>
          <Field name="gymType" label="Facility type" placeholder="Gym, hotel, corporate…" />
          <Field name="area" label="Floor area (sq ft)" />
        </>
      )}
      <div className="sm:col-span-2">
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea
          id="requirements"
          name="requirements"
          rows={4}
          className="mt-2 bg-surface-2"
          placeholder={
            productModel
              ? `I'd like a quote for ${productModel}…`
              : "Tell us about your equipment requirement…"
          }
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={busy} className="w-full bg-gradient-brand sm:w-auto">
          {busy ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 bg-surface-2"
      />
    </div>
  );
}
