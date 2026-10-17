import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAPS_DIRECTIONS_URL, PHONE, bookingMessage, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/festival-offers", label: "Festival Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.1 11.36-11.35 0-3.04-1.18-5.89-3.32-8.03" />
    </svg>
  );
}

export function WhatsAppButton({ message, children, className }: { message: string; children?: ReactNode; className?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-medium tracking-wide text-whatsapp-foreground shadow-soft transition hover:brightness-95",
        className,
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children ?? "Chat on WhatsApp"}
    </a>
  );
}

export function BookNowButton({ name, className, label = "Book Now" }: { name: string; className?: string; label?: string }) {
  return (
    <a
      href={waLink(bookingMessage(name))}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground shadow-soft transition hover:bg-primary/90",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function InstagramLink({ className }: { className?: string }) {
  return (
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline", className)}>
      <Instagram className="h-5 w-5" /> {INSTAGRAM_HANDLE}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-rosegold">{children}</p>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-blush/40 px-6 py-16 text-center md:py-20">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl text-primary md:text-6xl">{title}</h1>
      {intro && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display text-xl leading-none text-primary">
            Makeup Artistry <span className="italic text-rosegold">by Shweta</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-sm text-foreground/80 transition hover:text-primary" activeProps={{ className: "text-primary font-medium" }}>
              {n.label}
            </Link>
          ))}
          <BookNowButton name="an appointment" className="px-5 py-2 text-xs" />
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-primary px-6 py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Makeup Artistry by Shweta</p>
          <p className="mt-2 text-sm opacity-80">Certified makeup artist in Meerut</p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={`tel:+91${PHONE}`} className="flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {PHONE}</a>
          <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><MapPin className="h-4 w-4" /> {ADDRESS} · Get directions</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/festival-offers" className="hover:underline">Festival Offers</Link>
          <Link to="/contact" className="hover:underline">Send an enquiry</Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs opacity-60">© {new Date().getFullYear()} Makeup Artistry by Shweta</p>
    </footer>
  );
}
