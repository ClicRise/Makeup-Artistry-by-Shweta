import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import { meta } from "@/components/detail-pages";
import { Eyebrow } from "@/components/site";
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
    <>
      <section className="bg-blush/35 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h1 className="font-display text-4xl text-primary md:text-6xl">Let's plan your look</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Tell me a little about your occasion. I’ll be in touch to talk through the details and help plan a look that feels like you.</p>
            </div>
            <img src={logoFull} alt="Makeup Artistry by Shweta" width={1024} height={1024} className="hidden h-36 w-36 object-contain md:block" />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-16">
        <aside className="flex flex-col gap-5">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <Eyebrow>Contact details</Eyebrow>
            <h2 className="font-display text-2xl text-primary">A personal touch, from the start</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Have a question or prefer to message directly? Reach out and let’s talk about your plans.</p>
            <div className="mt-6 space-y-4 border-t border-border pt-5">
              <a href={`tel:+91${PHONE}`} className="flex items-center gap-3 rounded-xl bg-blush/35 p-4 text-sm text-primary transition hover:bg-blush/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background"><Phone className="h-4 w-4" /></span>
                <span><span className="block text-xs text-muted-foreground">Call</span><span className="font-medium">{PHONE}</span></span>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-blush/35 p-4 text-sm text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background"><MapPin className="h-4 w-4" /></span>
                <span><span className="block text-xs text-muted-foreground">Studio</span><span className="font-medium">{ADDRESS}</span></span>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Makeup Artistry by Shweta on Google Maps"
                src="https://www.google.com/maps?q=28.9721169,77.6812246&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Makeup+artistry+by+Shweta/@28.972122,77.6811118,21z/data=!4m22!1m15!4m14!1m6!1m2!1s0x390c65003eb15619:0x5a1208afe45f379d!2sShyam+Arcade,+XMCJ%2BRFV,+Jwala+Nagar,+Naval+Vihar,+Meerut,+Uttar+Pradesh+250002!2m2!1d77.6811605!2d28.9721084!1m6!1m2!1s0x390c65580d069965:0xced744d918131b7d!2sMakeup+artistry+by+Shweta,+Shyam+arcade,+near+signature+hotel,+Jwala+Nagar,+Naval+Vihar,+Meerut,+Uttar+Pradesh+250002!2m2!1d77.6812246!2d28.9721169!3m5!1s0x390c65580d069965:0xced744d918131b7d!8m2!3d28.9721169!4d77.6812246!16s%2Fg%2F11p1kqf1cb?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Open location in Google Maps →
            </a>
          </div>
        </aside>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-9">
          <Eyebrow>Your enquiry</Eyebrow>
          <h2 className="font-display text-3xl text-primary">Tell me about your occasion</h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">Share what you know so far; you can discuss the rest over WhatsApp.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-primary">Your name<input className={field} value={f.name} onChange={set("name")} maxLength={100} placeholder="e.g. Priya Sharma" /></label>
            <label className="block text-sm font-medium text-primary">Event date<input type="date" className={field} value={f.date} onChange={set("date")} /></label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">Service or package
              <select className={field} value={f.service} onChange={set("service")}>
                <option value="">Choose a service</option>
                {enquiryOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">Location<input className={field} value={f.location} onChange={set("location")} maxLength={150} placeholder="Venue or area" /></label>
            <label className="block text-sm font-medium text-primary sm:col-span-2">Anything else you’d like to share?<textarea className={field} rows={4} value={f.notes} onChange={set("notes")} maxLength={800} placeholder="Outfit, event details, or the look you have in mind…" /></label>
          </div>
          {error && <p className="mt-4 text-sm text-destructive" role="alert">{error}</p>}
          <button type="submit" className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-medium tracking-wide text-primary-foreground shadow-soft transition hover:bg-primary/90">Send enquiry on WhatsApp</button>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">Your details aren’t stored on this website. WhatsApp opens with your enquiry ready for you to review and send.</p>
        </form>
      </section>
    </>
  );
}
