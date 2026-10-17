import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHeader } from "@/components/site";
import { meta } from "@/components/detail-pages";
import { formatINR, images, nailPrices, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => meta("Services & Prices | Makeup Artistry by Shweta, Meerut", "Bridal, pre-bridal, eye makeup, hair styling, complete bridal look and nail art in Meerut."),
  component: Services,
});

function Services() {
  const cards = [
    ...services.map((s) => ({ to: `/services/${s.slug}`, name: s.name, price: s.price, img: s.image, tagline: s.tagline })),
    { to: "/services/nail-art", name: "Nail Art", price: nailPrices[0].price, img: images.nailsPinkGold, tagline: "Manicures, gel, extensions and art." },
  ];
  return (
    <>
      <PageHeader eyebrow="Services" title="What I offer" intro="Every booking starts with a personal conversation so your look is planned around you." />
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Explore services</Eyebrow>
            <h2 className="font-display text-3xl text-primary md:text-4xl">Find a look for your occasion</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Choose a service to see what’s included, browse the gallery and book your appointment.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to as "/services"}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="relative overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2a0f16]/50 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 rounded-full bg-background/95 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur">
                  From <span className="font-display text-lg text-rosegold">{formatINR(c.price)}</span>
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-2xl text-primary">{c.name}</h3>
                <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="font-medium text-primary">Explore service</span>
                  <span className="text-lg text-rosegold transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
