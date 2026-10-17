import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { BookNowButton, Eyebrow } from "@/components/site";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { OFFER_VALID_UNTIL, formatINR, packages, services, type Package } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceDetail({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug)!;
  const gallery = [{ src: s.image, alt: s.imageAlt }, ...(s.gallery ?? [])];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:py-16">
        <Link to="/services" className="text-sm text-primary underline-offset-4 hover:underline md:col-span-2">← All services</Link>
        <ImageCarousel gallery={gallery} />
        <div>
          <Eyebrow>Service</Eyebrow>
          <h1 className="font-display text-4xl text-primary md:text-5xl">{s.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{s.tagline}</p>
          <div className="mt-5 rounded-2xl border border-border bg-blush/30 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Starting price</p>
            <p className="mt-1 font-display text-3xl text-rosegold">from {formatINR(s.price)}</p>
          </div>
          <p className="mt-5 leading-relaxed">{s.description}</p>
          <h2 className="mt-7 font-display text-2xl text-primary">Included in your service</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {s.includes.map((i) => (
              <li key={i} className="flex items-start gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-rosegold" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookNowButton name={s.name} />
          </div>
        </div>
      </section>
    </>
  );
}

export function PackageDetail({ slug }: { slug: string }) {
  const p = packages.find((x) => x.slug === slug)!;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-14 md:py-16">
      <Link to="/festival-offers" className="text-sm text-primary underline-offset-4 hover:underline md:col-span-2">← All festival packages</Link>
      <ImageCarousel gallery={p.gallery} />
      <div>
        <Eyebrow>Karva Chauth Special Offer</Eyebrow>
        <h1 className="font-display text-4xl text-primary md:text-5xl">{p.name}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-border bg-blush/30 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Package price</p>
            <p className="mt-1 font-display text-3xl text-rosegold">{formatINR(p.price)}</p>
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">Offer valid until {OFFER_VALID_UNTIL}</p>
        </div>
        <h2 className="mt-8 font-display text-2xl text-primary">Included in your package</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {p.items.map((i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-rosegold" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <BookNowButton name={p.name} />
        </div>
      </div>
    </section>
  );
}

export function ImageCarousel({ gallery }: { gallery: Package["gallery"] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className="group">
      <div className="relative overflow-hidden rounded-t-full shadow-soft">
        <CarouselContent>
          {gallery.map((g) => (
            <CarouselItem key={g.alt}>
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {gallery.length > 1 && (
          <>
            <CarouselPrevious className="left-2 h-9 w-9 rounded-full border-none bg-background/80 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:h-10 md:w-10" />
            <CarouselNext className="right-2 h-9 w-9 rounded-full border-none bg-background/80 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:h-10 md:w-10" />
            <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {gallery.map((g, i) => (
                <span key={g.alt} className={cn("h-1.5 w-1.5 rounded-full transition", i === current ? "bg-rosegold" : "bg-background/70")} />
              ))}
            </div>
          </>
        )}
      </div>
    </Carousel>
  );
}

export function serviceHead(slug: string) {
  const s = services.find((x) => x.slug === slug)!;
  const title = `${s.name} in Meerut | Makeup Artistry by Shweta`;
  return meta(title, `${s.tagline} From ${formatINR(s.price)}. Book on WhatsApp.`);
}

export function packageHead(slug: string) {
  const p = packages.find((x) => x.slug === slug)!;
  return meta(`${p.name} ${formatINR(p.price)} – Karva Chauth Offer | Makeup Artistry by Shweta`, `${p.items.join(", ")}. Book on WhatsApp.`);
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
