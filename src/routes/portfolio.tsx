import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
] as const;

const categories = ["All", ...groups.map((group) => group.title)] as const;
type Category = (typeof categories)[number];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const visibleItems = groups
    .filter((group) => selectedCategory === "All" || group.title === selectedCategory)
    .flatMap((group) => group.items.map((src, index) => ({ src, category: group.title, index })));

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Recent work" />
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-14">
        <nav aria-label="Portfolio categories" className="-mx-2 mb-10 flex gap-3 overflow-x-auto px-2 py-1 md:mx-0 md:justify-center">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full border px-6 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/20 bg-transparent text-primary hover:border-primary hover:bg-primary/5"
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {visibleItems.map(({ src, category, index }) => (
            <img
              key={`${category}-${index}`}
              src={src}
              alt={`${category} work ${index + 1}`}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          ))}
        </div>
        <section className="mt-12 rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground md:py-12">
          <h2 className="font-display text-3xl md:text-4xl">Ready for a look that feels like you?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed opacity-85 md:text-base">
            Tell us about your occasion and the style you love. We’ll plan your makeup together in a personal conversation before you book.
          </p>
          <BookNowButton
            name="an appointment"
            className="mt-7 bg-background text-primary hover:bg-background/90"
          />
        </section>
      </div>
    </>
  );
}
