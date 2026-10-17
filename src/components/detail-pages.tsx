import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { BookNowButton, Eyebrow, WhatsAppButton } from "@/components/site";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { OFFER_VALID_UNTIL, bookingMessage, formatINR, packages, services, type Package } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceDetail({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug)!;
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <img src={s.image} alt={s.imageAlt} className="aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
        <div>
          <Eyebrow>Service</Eyebrow>
          <h1 className="font-display text-4xl text-primary md:text-5xl">{s.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{s.tagline}</p>
          <p className="mt-6 font-display text-3xl text-rosegold">
            from {formatINR(s.price)}
          </p>
          <p className="mt-4">{s.description}</p>
          <ul className="mt-6 space-y-2">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 text-rosegold" /> {i}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookNowButton name={s.name} />
            <WhatsAppButton message={bookingMessage(s.name)} />
          </div>
          <Link to="/services" className="mt-6 inline-block text-sm text-primary underline-offset-4 hover:underline">← All services</Link>
        </div>
      </section>
      {s.gallery && (
        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {s.gallery.map((g) => (
              <img key={g.alt} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export function PackageDetail({ slug }: { slug: string }) {
  const p = packages.find((x) => x.slug === slug)!;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
      <div>
        <Eyebrow>Karva Chauth Special Offer</Eyebrow>
        <h1 className="font-display text-4xl text-primary md:text-5xl">{p.name}</h1>
        <p className="mt-4 font-display text-4xl text-rosegold">{formatINR(p.price)}</p>
        <p className="mt-2 text-sm text-muted-foreground">Offer valid until {OFFER_VALID_UNTIL}</p>
        <ul className="mt-6 space-y-2">
          {p.items.map((i) => (
            <li key={i} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 text-rosegold" /> {i}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <BookNowButton name={p.name} />
          <WhatsAppButton message={bookingMessage(p.name)} />
        </div>
        <Link to="/festival-offers" className="mt-6 inline-block text-sm text-primary underline-offset-4 hover:underline">← All festival packages</Link>
      </div>
      <PackageCarousel gallery={p.gallery} />
    </section>
  );
}

function PackageCarousel({ gallery }: { gallery: Package["gallery"] }) {
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
        <CarouselPrevious className="left-2 h-9 w-9 rounded-full border-none bg-background/80 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:h-10 md:w-10" />
        <CarouselNext className="right-2 h-9 w-9 rounded-full border-none bg-background/80 transition md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:h-10 md:w-10" />
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {gallery.map((g, i) => (
            <span key={g.alt} className={cn("h-1.5 w-1.5 rounded-full transition", i === current ? "bg-rosegold" : "bg-background/70")} />
          ))}
        </div>
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
