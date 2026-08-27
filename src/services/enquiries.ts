export interface EnquiryPayload {
  type: "sales" | "gym-setup" | "support" | "quote" | "newsletter";
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  gymType?: string;
  area?: string;
  budget?: string;
  requirements?: string;
  message?: string;
  productModel?: string;
}

/**
 * Enquiry transport. Currently local-only; replace with an API/CRM call.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 600));
  if (typeof window !== "undefined") {
    console.info("[AMSOFIT] enquiry captured", payload);
  }
  return { ok: true };
}

export const WHATSAPP_NUMBER = "";

export function whatsappLink(message: string): string {
  const base = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}`
    : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}
