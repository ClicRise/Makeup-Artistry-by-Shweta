import { createFileRoute } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";
import { meta } from "@/components/detail-pages";
import { BookNowButton, Eyebrow, InstagramLink } from "@/components/site";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Shweta | Certified Makeup Artist in Meerut", "Meet Shweta, a certified makeup artist in Meerut for bridal, pre-bridal and festive looks in HD and airbrush makeup."),
  component: About,
});

function About() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
      <img src={images.goldenBridal} alt="Bride with golden makeup" className="aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
      <div>
        <img src={logoFull} alt="Makeup Artistry by Shweta" width={1024} height={1024} loading="lazy" className="h-40 w-40 object-contain" />
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display text-4xl text-primary md:text-5xl">Hi, I'm Shweta</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          <p>I'm a certified makeup artist based in Meerut, and I create bridal, pre-bridal and festive looks for the days you'll want to remember.</p>
          <p>I work with both HD and airbrush makeup, choosing the finish that suits your skin, your outfit and your occasion.</p>
          <p>Before every booking, we have a personal conversation about what you love, what you're wearing and how you want to feel — so the look on the day is truly yours.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <BookNowButton name="an appointment" />
          <InstagramLink />
        </div>
      </div>
    </section>
  );
}
