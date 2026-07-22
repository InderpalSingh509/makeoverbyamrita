/**
 * Central site configuration.
 *
 * IMPORTANT — Replace the placeholder values below with real business details
 * before going live. Every component pulls contact info from here, so this is
 * the only file you need to touch to update phone / email / social links.
 */

export const siteConfig = {
  name: "Makeover by Amrita",
  shortName: "Amrita",
  tagline: "Luxury Bridal Beauty",
  title: "Makeover by Amrita | Luxury Bridal & Party Makeup Artist in Kolkata",
  description:
    "Luxury bridal, engagement, reception and party makeup artist based in Kolkata. Elegant, personalized makeovers designed to enhance your natural beauty.",
  // TODO: replace with the real production domain once deployed
  url: "https://www.makeoverbyamrita.com",

  // ---- Placeholder contact details — REPLACE before launch ----
  phone: {
    display: "+91 90000 00000",
    href: "tel:+919000000000",
  },
  whatsapp: {
    number: "919000000000", // digits only, country code first
    defaultMessage: "Hi Amrita, I'd like to book a makeup consultation.",
  },
  email: "hello@makeoverbyamrita.com",
  location: {
    display: "Kolkata, West Bengal",
    mapsHref: "https://maps.google.com/?q=Kolkata,West+Bengal",
  },
  social: {
    instagram: "https://instagram.com/makeoverbyamrita",
    facebook: "",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
