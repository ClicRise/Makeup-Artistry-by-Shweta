import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { BookNowButton, PageHeader } from "@/components/site";
import { images } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => meta("Portfolio | Makeup Artistry by Shweta, Meerut", "Bridal, pre-bridal, eye makeup, hair styling and nail art by Makeup Artistry by Shweta."),
  component: Portfolio,
});

const groups = [
  { title: "Bridal", items: [images.brideRedGold, images.bridalGlowPrep, images.goldenBridal] },
  { title: "Pre-Bridal", items: [images.prebridal] },
  { title: "Eye Makeup", items: [images.eyeRoseGold] },
  { title: "Hair Styling", items: [images.hairWaves] },
  { title: "Nail Art", items: [images.nailsPinkGold, images.nails1, images.nails2] },
];

function Portfolio() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Recent work" />
      <div className="mx-auto max-w-6xl space-y-16 px-6 py-14">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="mb-6 font-display text-3xl text-primary">{g.title}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {g.items.map((src, i) => (
                <img key={i} src={src} alt={`${g.title} work ${i + 1}`} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              ))}
            </div>
          </section>
        ))}
        <div className="text-center"><BookNowButton name="an appointment" /></div>
      </div>
    </>
  );
}
