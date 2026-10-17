import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import logoFull from "@/assets/logo-full.png";
import { meta } from "@/components/detail-pages";
import { Eyebrow, WhatsAppButton } from "@/components/site";
import { ADDRESS, PHONE, enquiryMessage, enquiryOptions, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string | undefined } => ({ service: typeof s["service"] === "string" ? (s["service"] as string) : undefined }),
  head: () => meta("Contact & Enquiry | Makeup Artistry by Shweta, Meerut", "Send an enquiry on WhatsApp for bridal, festive and nail art bookings in Meerut."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  date: z.string().max(20),
  service: z.string().min(1, "Please choose a service or package").max(120),
  location: z.string().trim().max(150),
  notes: z.string().trim().max(800),
});

const field = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const { service } = Route.useSearch();
  const [f, setF] = useState({ name: "", date: "", service: service && enquiryOptions.includes(service) ? service : "", location: "", notes: "" });
  const [error, setError] = useState("");
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) return setError(r.error.issues[0]?.message ?? "Please check the form");
    setError("");
    window.open(waLink(enquiryMessage(r.data)), "_blank", "noopener");
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
      <div>
        <img src={logoFull} alt="Makeup Artistry by Shweta" width={1024} height={1024} className="h-48 w-48 object-contain" />
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-4xl text-primary md:text-5xl">Let's plan your look</h1>
        <p className="mt-4 text-lg text-muted-foreground">Fill in a few details and WhatsApp will open with your message ready — just tap Send. Nothing is saved or sent automatically.</p>
        <p className="mt-6">Phone: <a href={`tel:+91${PHONE}`} className="text-primary">{PHONE}</a></p>
        <p>Studio: {ADDRESS}</p>
        <div className="mt-6"><WhatsAppButton message="Hello, I'd like to book an appointment" /></div>
      </div>
      <form onSubmit={submit} className="space-y-4 rounded-3xl bg-blush/40 p-6 md:p-8">
        <label className="block">Name<input className={field} value={f.name} onChange={set("name")} maxLength={100} /></label>
        <label className="block">Event date<input type="date" className={field} value={f.date} onChange={set("date")} /></label>
        <label className="block">Service or package
          <select className={field} value={f.service} onChange={set("service")}>
            <option value="">Choose…</option>
            {enquiryOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label className="block">Location<input className={field} value={f.location} onChange={set("location")} maxLength={150} placeholder="Venue or area" /></label>
        <label className="block">Notes<textarea className={field} rows={4} value={f.notes} onChange={set("notes")} maxLength={800} /></label>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button type="submit" className="w-full rounded-full bg-whatsapp px-6 py-3 font-medium text-whatsapp-foreground">Continue on WhatsApp</button>
      </form>
    </section>
  );
}
