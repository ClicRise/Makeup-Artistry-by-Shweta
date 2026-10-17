import { createFileRoute } from "@tanstack/react-router";
import logoFull from "@/assets/logo-full.png";
import { meta } from "@/components/detail-pages";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Shweta | Certified Makeup Artist in Meerut", "Meet Shweta, a certified makeup artist in Meerut for bridal, pre-bridal and festive looks in HD and airbrush makeup."),
  component: About,
});

function About() {
  return (
    <>
      <section className="overflow-hidden bg-blush/30">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-t-full border border-rosegold/30" aria-hidden="true" />
            <img src={images.goldenBridal} alt="Bride with golden makeup" className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-background px-5 py-4 shadow-soft sm:right-0">
              <p className="font-display text-xl text-primary">Meerut, India</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Makeup artistry</p>
            </div>
          </div>
          <div className="pt-4 md:pt-0">
            <img src={logoFull} alt="Makeup Artistry by Shweta" width={1024} height={1024} loading="lazy" className="mb-3 h-24 w-36 object-contain object-left" />
            <h1 className="font-display text-3xl leading-tight text-primary md:text-4xl">Every bride carries a story — my work is to let it shine.</h1>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>Based in Meerut, I’ve spent years perfecting bridal and occasion makeup that looks flawless in person, on camera and through every ritual of your day. My looks are soft where they should be, bold where they matter, and always true to you.</p>
              <p>I work only with premium, skin-safe products and follow strict hygiene practices. Before every booking we talk through your outfit, jewellery, skin and the feeling you want — so the final look is entirely personal.</p>
              <p>From pre-bridal skin prep to the final dupatta pin, I’m with you every step of the way.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-rosegold/25 pt-6 text-center">
              {[
                { value: "7+", label: "Years of artistry" },
                { value: "500+", label: "Happy brides" },
                { value: "100%", label: "Premium products" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-rosegold md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-rosegold">The experience</p>
          <h2 className="font-display text-3xl text-primary md:text-4xl">A look that feels like yours</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">From the first conversation to the finishing touches, your makeup is shaped around you and the occasion.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { number: "01", title: "Made for your occasion", text: "Bridal, pre-bridal and festive looks planned around your outfit, style and celebration." },
            { number: "02", title: "The right finish", text: "HD or airbrush makeup selected to suit your skin and the look you have in mind." },
            { number: "03", title: "Personal from the start", text: "A thoughtful conversation helps shape a look that feels comfortable and truly yours." },
          ].map((item) => (
            <article key={item.number} className="rounded-2xl border border-border bg-card p-6 md:p-7">
              <span className="font-display text-2xl text-rosegold">{item.number}</span>
              <h3 className="mt-4 font-display text-2xl text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
