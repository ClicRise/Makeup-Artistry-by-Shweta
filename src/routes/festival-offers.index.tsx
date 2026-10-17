import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { BookNowButton, Eyebrow, PageHeader } from "@/components/site";
import { OFFER_VALID_UNTIL, formatINR, packages } from "@/lib/site";

export const Route = createFileRoute("/festival-offers/")({
  head: () => meta("Karva Chauth Special Offer | Makeup Artistry by Shweta", `Five festive beauty packages from ₹499 in Meerut. Valid until ${OFFER_VALID_UNTIL}.`),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHeader eyebrow={`Valid until ${OFFER_VALID_UNTIL}`} title="Karva Chauth Special Offer" intro="Glow for the festival with a package made for the occasion." />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Explore packages</Eyebrow>
            <h2 className="font-display text-3xl text-primary md:text-4xl">Find your festive favourite</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Compare what’s included, then open a package to see the full details.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.slug} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft">
              <Link
                to={`/festival-offers/${p.slug}` as "/festival-offers"}
                aria-label={`View ${p.name} details`}
                className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
              <div className="relative">
                <img src={p.gallery[0].src} alt={p.gallery[0].alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2a0f16]/50 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 rounded-full bg-background/95 px-4 py-2 text-sm text-primary shadow-sm backdrop-blur">
                  From <span className="font-display text-lg text-rosegold">{formatINR(p.price)}</span>
                </span>
              </div>
              <div className="pointer-events-none relative z-10 flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-2xl text-primary">{p.name}</h3>
                <ul className="mt-3 min-h-20 flex-1 space-y-1 text-sm text-muted-foreground">
                  {p.items.slice(0, 3).map((i) => <li key={i} className="line-clamp-1">{i}</li>)}
                </ul>
                {p.items.length > 3 && <p className="mt-2 text-xs text-muted-foreground">+ {p.items.length - 3} more included</p>}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="pointer-events-auto"><BookNowButton name={p.name} className="px-5 py-2 text-xs" /></span>
                  <span className="text-sm font-medium text-primary">Explore package <span className="text-lg text-rosegold" aria-hidden="true">→</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
