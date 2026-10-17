import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageCarousel, meta } from "@/components/detail-pages";
import { BookNowButton, Eyebrow } from "@/components/site";
import { formatINR, images, nailPrices } from "@/lib/site";

export const Route = createFileRoute("/services/nail-art")({
  head: () => meta("Nail Art in Meerut | Makeup Artistry by Shweta", "Manicures, gel polish, gel extensions, nail art and French or ombré nails in Meerut. Book on WhatsApp."),
  component: NailArt,
});

function NailArt() {
  const gallery = [
    { src: images.nailsPinkGold, alt: "Pink nails with gold accents" },
    { src: images.nails1, alt: "Nail art close-up" },
    { src: images.nails2, alt: "Nail design by Shweta" },
    { src: images.spaManicure, alt: "Spa manicure" },
  ];

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:py-16">
      <Link to="/services" className="text-sm text-primary underline-offset-4 hover:underline md:col-span-2">← All services</Link>
      <ImageCarousel gallery={gallery} />
      <div>
        <Eyebrow>Service</Eyebrow>
        <h1 className="font-display text-4xl text-primary md:text-5xl">Nail Art</h1>
        <p className="mt-4 text-lg text-muted-foreground">Polished hands for every occasion — from a classic manicure to detailed gel art.</p>
        <h2 className="mt-7 font-display text-2xl text-primary">Price list</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {nailPrices.map((n) => (
            <li key={n.name} className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-card px-4 py-4">
              <span className="font-medium">{n.name}</span>
              <span className="flex items-center justify-between gap-3">
                <span className="font-display text-2xl text-rosegold">{formatINR(n.price)}</span>
                <BookNowButton name={n.name} label="Book" className="px-4 py-2 text-xs" />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8"><BookNowButton name="Nail Art" /></div>
      </div>
    </section>
  );
}
