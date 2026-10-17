import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { BookNowButton, PageHeader } from "@/components/site";
import { OFFER_VALID_UNTIL, formatINR, images, packages } from "@/lib/site";

export const Route = createFileRoute("/festival-offers/")({
  head: () => meta("Karva Chauth Special Offer | Makeup Artistry by Shweta", `Five festive beauty packages from ₹499 in Meerut. Valid until ${OFFER_VALID_UNTIL}.`),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHeader eyebrow={`Valid until ${OFFER_VALID_UNTIL}`} title="Karva Chauth Special Offer" intro="Glow for the festival with a package made for the occasion." />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <img src={images.brideRedGold} alt="Festive look in red and gold" className="mx-auto mb-12 aspect-[16/9] w-full rounded-3xl object-cover object-top shadow-soft" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl text-primary">{p.name}</h2>
              <p className="mt-1 font-display text-3xl text-rosegold">{formatINR(p.price)}</p>
              <ul className="mt-4 flex-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-3">
                <BookNowButton name={p.name} className="px-5 py-2 text-xs" />
                <Link to={`/festival-offers/${p.slug}` as "/festival-offers"} className="text-sm text-primary underline-offset-4 hover:underline">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
