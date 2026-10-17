import { describe, expect, it } from "vitest";
import { bookingMessage, enquiryMessage, nailPrices, packages, services, waLink } from "@/lib/site";

describe("site rules", () => {
  it("WhatsApp links go to 9997776650 with the booking message", () => {
    expect(waLink(bookingMessage("Glow Package"))).toBe(
      "https://wa.me/919997776650?text=" + encodeURIComponent("Hello, I'd like to book Glow Package"),
    );
  });
  it("package prices", () => {
    expect(packages.map((p) => [p.name, p.price])).toEqual([
      ["Mini Package", 499], ["Glow Package", 899], ["Radiance Package", 1499], ["Glam Package", 2499], ["Premium Package", 3499],
    ]);
  });
  it("service prices", () => {
    expect(Object.fromEntries(services.map((s) => [s.slug, s.price]))).toEqual({
      "bridal-makeup": 8999, "pre-bridal-makeup": 6999, "eye-makeup": 1299, "hair-styling": 1499, "complete-bridal-look": 14999,
    });
    expect(nailPrices.map((n) => n.price)).toEqual([399, 599, 1199, 799, 899]);
  });
  it("enquiry message includes form details", () => {
    const m = enquiryMessage({ name: "Riya", date: "2026-11-20", service: "Bridal Makeup", location: "Meerut", notes: "" });
    expect(m).toContain("book Bridal Makeup");
    expect(m).toContain("Event date: 2026-11-20");
    expect(m).not.toContain("Notes");
  });
});
