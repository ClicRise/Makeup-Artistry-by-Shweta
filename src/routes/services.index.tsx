import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { PageHeader } from "@/components/site";
import { formatINR, images, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => meta("Services & Prices | Makeup Artistry by Shweta, Meerut", "Bridal, pre-bridal, eye makeup, hair styling, complete bridal look and nail art in Meerut."),
  component: Services,
});

function Services() {
  const cards = [
    ...services.map((s) => ({ to: `/services/${s.slug}`, name: s.name, price: s.price, img: s.image, tagline: s.tagline })),
    { to: "/services/nail-art", name: "Nail Art", price: 399, img: images.nailsPinkGold, tagline: "Manicures, gel, extensions and art." },
  ];
  return (
    <>
      <PageHeader eyebrow="Services" title="What I offer" intro="Every booking starts with a personal conversation so your look is planned around you." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link key={c.to} to={c.to as "/services"} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-soft">
            <img src={c.img} alt={c.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-6">
              <h2 className="font-display text-2xl text-primary">{c.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
              <p className="mt-3 font-display text-xl text-rosegold">from {formatINR(c.price)}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
