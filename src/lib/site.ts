import nailsPinkGold from "@/assets/nails-pink-gold.jpg";
import nails1 from "@/assets/nails-closeup-1.jpg";
import nails2 from "@/assets/nails-closeup-2.jpg";
import spaManicure from "@/assets/spa-manicure.jpg";
import brideRedGold from "@/assets/bride-red-gold.jpg";
import bridalGlowPrep from "@/assets/bridal-glow-prep.jpg";
import goldenBridal from "@/assets/golden-bridal.jpg";
import prebridal from "@/assets/prebridal-studio.jpg";
import hairWaves from "@/assets/hair-waves.jpg";
import eyeRoseGold from "@/assets/eye-rosegold.jpg";

export const PHONE = "9997776650";
export const ADDRESS = "Shyam Arcade, Meerut";
export const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=28.9721169%2C77.6812246";
export const INSTAGRAM_HANDLE = "@makeup_artistry_by_shweta_";
export const INSTAGRAM_URL = "https://www.instagram.com/makeup_artistry_by_shweta_/";
export const OFFER_VALID_UNTIL = "29 October 2026";

export const images = {
  nailsPinkGold,
  nails1,
  nails2,
  spaManicure,
  brideRedGold,
  bridalGlowPrep,
  goldenBridal,
  prebridal,
  hairWaves,
  eyeRoseGold,
};

export function bookingMessage(name: string) {
  return `Hello, I'd like to book ${name}`;
}

export function waLink(message: string) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

export function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export type Service = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    price: 8999,
    tagline: "Your wedding-day look, made to last from pheras to farewell.",
    description:
      "A long-wearing bridal look in HD or airbrush finish, planned together with you before the big day so it matches your outfit, jewellery and style.",
    includes: ["HD or airbrush makeup", "Pre-booking look consultation", "Lashes and finishing touches", "Dupatta draping support"],
    image: brideRedGold,
    imageAlt: "Indian bride in red and gold lehenga with bridal makeup",
    gallery: [{ src: goldenBridal, alt: "Golden bridal makeup being finished with a brush" }],
  },
  {
    slug: "pre-bridal-makeup",
    name: "Pre-Bridal Makeup",
    price: 6999,
    tagline: "Soft, glowing looks for haldi, mehendi, sangeet and engagement.",
    description:
      "Fresh, luminous makeup for the celebrations before the wedding, styled to suit each function and outfit.",
    includes: ["Glow-focused base", "Look matched to your outfit", "Soft hair finish", "Pre-booking consultation"],
    image: prebridal,
    imageAlt: "Woman in cream outfit with soft waves and glowing makeup",
  },
  {
    slug: "eye-makeup",
    name: "Eye Makeup",
    price: 1299,
    tagline: "Defined, shimmering eyes for festivals, parties and photos.",
    description: "From soft smoky to rose-gold glam, eye makeup that brings your look together.",
    includes: ["Eyeshadow look of your choice", "Liner and kajal", "Lashes"],
    image: eyeRoseGold,
    imageAlt: "Rose-gold eye makeup being applied",
  },
  {
    slug: "hair-styling",
    name: "Hair Styling",
    price: 1499,
    tagline: "Waves, buns and braids styled to stay put all evening.",
    description: "Hair styling for brides, guests and festive occasions, chosen to complement your makeup and outfit.",
    includes: ["Style consultation", "Curls, waves, buns or braids", "Accessory setting"],
    image: hairWaves,
    imageAlt: "Stylist creating soft waves with a curling iron",
  },
  {
    slug: "complete-bridal-look",
    name: "Complete Bridal Look",
    price: 14999,
    tagline: "Makeup, hair and finishing details — your whole bridal look in one booking.",
    description:
      "Everything you need for the wedding day: HD or airbrush bridal makeup, bridal hairstyling and draping, planned in a personal conversation before you book.",
    includes: ["HD or airbrush bridal makeup", "Bridal hairstyling", "Dupatta draping", "Lashes and finishing touches", "Pre-booking consultation"],
    image: bridalGlowPrep,
    imageAlt: "Bride receiving bridal makeup from the artist",
    gallery: [{ src: goldenBridal, alt: "Golden bridal beauty preparation" }],
  },
];

export const nailPrices = [
  { name: "Classic manicure", price: 399 },
  { name: "Gel polish", price: 599 },
  { name: "Gel extensions", price: 1199 },
  { name: "Nail art", price: 799 },
  { name: "French or ombré", price: 899 },
];

export type Package = { slug: string; name: string; price: number; items: string[]; gallery: { src: string; alt: string }[] };

export const packages: Package[] = [
  {
    slug: "mini-package",
    name: "Mini Package",
    price: 499,
    items: ["Cleanup", "Upper-lip threading", "Underarm normal wax", "Trimming", "Back massage"],
    gallery: [
      { src: goldenBridal, alt: "Golden bridal beauty preparation" },
      { src: prebridal, alt: "Soft glowing look in a cream outfit" },
      { src: hairWaves, alt: "Soft waves being styled" },
    ],
  },
  {
    slug: "glow-package",
    name: "Glow Package",
    price: 899,
    items: ["D-Tan facial", "Gold bleach for face", "Full-hand normal wax", "Threading", "Underarm"],
    gallery: [
      { src: prebridal, alt: "Soft glowing look in a cream outfit" },
      { src: goldenBridal, alt: "Golden bridal beauty preparation" },
      { src: eyeRoseGold, alt: "Rose-gold eye makeup being applied" },
    ],
  },
  {
    slug: "radiance-package",
    name: "Radiance Package",
    price: 1499,
    items: ["Red wine facial", "Bleach / D-Tan", "Threading", "Full-hand wax", "Chocolate underarm wax", "Manicure"],
    gallery: [
      { src: bridalGlowPrep, alt: "Bride receiving bridal makeup" },
      { src: goldenBridal, alt: "Golden bridal beauty preparation" },
      { src: prebridal, alt: "Soft glowing look in a cream outfit" },
    ],
  },
  {
    slug: "glam-package",
    name: "Glam Package",
    price: 2499,
    items: ["Rice water facial", "D-Tan / bleach", "Half-leg milk wax", "Medium-length hair spa", "Hair wash", "Blow dry", "Pedicure", "Threading"],
    gallery: [
      { src: hairWaves, alt: "Glamorous waves being styled" },
      { src: eyeRoseGold, alt: "Rose-gold eye makeup being applied" },
      { src: goldenBridal, alt: "Golden bridal beauty preparation" },
    ],
  },
  {
    slug: "premium-package",
    name: "Premium Package",
    price: 3499,
    items: ["O3 facial", "Bleach / D-Tan for face and neck", "Rica wax on full hands, legs and underarms", "Threading for eyebrows, forehead and upper lip", "Neck / back bleach", "Hair spa", "Hair wash", "Blow dry"],
    gallery: [
      { src: goldenBridal, alt: "Golden bridal beauty preparation" },
      { src: brideRedGold, alt: "Festive bridal look in red and gold" },
      { src: bridalGlowPrep, alt: "Bride receiving bridal makeup" },
    ],
  },
];

export const enquiryOptions = [
  ...services.map((s) => s.name),
  "Nail Art",
  ...packages.map((p) => `${p.name} (Karva Chauth Special)`),
  "Something else",
];

export function enquiryMessage(f: { name: string; date: string; service: string; location: string; notes: string }) {
  const lines = [
    `Hello, I'd like to book ${f.service || "an appointment"}.`,
    `Name: ${f.name}`,
    f.date && `Event date: ${f.date}`,
    f.location && `Location: ${f.location}`,
    f.notes && `Notes: ${f.notes}`,
  ].filter(Boolean);
  return lines.join("\n");
}
