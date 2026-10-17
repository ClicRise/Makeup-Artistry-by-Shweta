import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { BookNowButton, Eyebrow, PageHeader, WhatsAppButton } from "@/components/site";
import { bookingMessage, formatINR, images, nailPrices } from "@/lib/site";

export const Route = createFileRoute("/services/nail-art")({
  head: () => meta("Nail Art in Meerut | Makeup Artistry by Shweta", "Manicures, gel polish, gel extensions, nail art and French or ombré nails in Meerut. Book on WhatsApp."),
  component: NailArt,
});

function NailArt() {
  return (
    <>
      <PageHeader eyebrow="Service" title="Nail Art" intro="Polished hands for every occasion — from a classic manicure to detailed gel art." />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <img src={images.nailsPinkGold} alt="Pink nails with gold accents" className="aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
        <div>
          <Eyebrow>Price list</Eyebrow>
          <ul className="divide-y divide-border">
            {nailPrices.map((n) => (
              <li key={n.name} className="flex items-center justify-between gap-4 py-4">
                <span className="text-lg">{n.name}</span>
                <span className="flex items-center gap-4">
                  <span className="font-display text-2xl text-rosegold">{formatINR(n.price)}</span>
                  <BookNowButton name={n.name} label="Book" className="px-4 py-2 text-xs" />
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8"><WhatsAppButton message={bookingMessage("Nail Art")} /></div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
        {[images.nails1, images.nails2, images.spaManicure].map((src, i) => (
          <img key={i} src={src} alt="Nail work by Shweta" loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
        ))}
      </section>
    </>
  );
}
