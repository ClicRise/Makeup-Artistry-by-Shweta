import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/components/detail-pages";
import { BookNowButton, Eyebrow, InstagramLink } from "@/components/site";
import { OFFER_VALID_UNTIL, images } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => meta("Makeup Artistry by Shweta | Bridal Makeup Artist in Meerut", "Certified makeup artist in Meerut for bridal, pre-bridal and festive looks, HD and airbrush makeup, hair styling and nail art. Book on WhatsApp."),
  component: Index,
});

const featured = [
  { src: images.brideRedGold, label: "Bridal", to: "/services/bridal-makeup" },
  { src: images.eyeRoseGold, label: "Eye Makeup", to: "/services/eye-makeup" },
  { src: images.hairWaves, label: "Hair Styling", to: "/services/hair-styling" },
  { src: images.nails2, label: "Nail Art", to: "/services/nail-art" },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#2a0f16]">
        <img src={images.brideRedGold} alt="Indian bride in red and gold lehenga with bridal makeup" className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-90 md:object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0f16] via-[#2a0f16]/85 to-[#2a0f16]/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0f16]/80 via-transparent to-transparent" aria-hidden />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.35em] text-rosegold">Makeup Artistry by Shweta · Meerut</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-[#f7ece1] md:text-7xl">
            For the
            <span className="block italic text-rosegold">Bride in You</span>
          </h1>
          <div className="mt-8 h-px w-16 bg-rosegold" aria-hidden />
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#f7ece1]/80 md:text-lg">
            Not just applied. Felt. Remembered. Bridal, pre-bridal and festive makeup in HD and airbrush finishes — styled around you after a personal conversation before every booking.
          </p>
          <BookNowButton name="an appointment" className="mt-10 w-fit" />
          <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-[#f7ece1]/50">Bridal · Pre-bridal · Festive · Hair · Nails</p>
        </div>
      </section>

      <section className="mx-4 mt-8 rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground md:mx-auto md:max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] opacity-80">Festival offers</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">Karva Chauth Special — packages from ₹499</h2>
        <p className="mt-2 opacity-80">Valid until {OFFER_VALID_UNTIL}</p>
        <Link to="/festival-offers" className="mt-6 inline-block rounded-full bg-background px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">View offers</Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <Eyebrow>Featured work</Eyebrow>
          <h2 className="font-display text-4xl text-primary">Looks made for your moments</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {featured.map((f) => (
            <Link key={f.label} to={f.to} className="group">
              <img src={f.src} alt={f.label} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover transition group-hover:opacity-90" />
              <p className="mt-3 text-center font-display text-xl text-primary">{f.label}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link to="/portfolio" className="text-primary underline underline-offset-4">See the full portfolio</Link>
          <InstagramLink />
        </div>
      </section>
    </>
  );
}
