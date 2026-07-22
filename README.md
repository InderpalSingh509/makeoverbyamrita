# Makeover by Amrita — Website

A luxury bridal, reception, engagement & party makeup artist website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live — replace placeholders

This project ships with elegant, on-brand **placeholder visuals and contact details** so
nothing looks broken. Swap these out before launch:

### 1. Contact details — `lib/site-config.ts`
Every phone number, WhatsApp link, email address and Instagram handle across the whole site
is pulled from this one file. Update it once and it updates everywhere (Navbar, Footer,
Hero, Contact, FloatingWhatsApp).

### 2. Photos
Replace these files with real photography (keep the same filenames and aspect ratios, or
update the paths in the matching component):

| Section | File(s) | Recommended size |
|---|---|---|
| About | `public/images/about/about.jpg` | 700×900 (portrait) |
| Services | `public/images/services/{bridal,reception,engagement,party}.jpg` | 800×1000 (4:5) |
| Portfolio | `public/images/portfolio/*.jpg` (8 files) | 800×1000 (4:5) |
| Hero | `public/images/hero.jpg` | 1536×1024 or similar landscape |

### 3. Testimonials
`components/sections/Testimonials/Testimonials.tsx` currently shows an honest "reviews
coming soon" state instead of fabricated quotes. Once you have real client reviews, replace
the placeholder card with a grid of genuine testimonials (name + occasion + quote).

### 4. Domain & SEO
Update `siteConfig.url` in `lib/site-config.ts` to your real production domain once deployed
— this feeds the sitemap, robots.txt and Open Graph tags.

## Project structure

```
app/                  Next.js App Router pages, layout, metadata, sitemap/robots
components/layout/    Navbar, Footer
components/sections/  Hero, About, Services, Portfolio, Testimonials, FAQ, Contact
components/ui/        Reusable primitives (Button, Card, Badge, SectionHeading, FadeIn…)
lib/site-config.ts    Single source of truth for business/contact info
public/                Images, logo, generated icons
```

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Deploying

The easiest way to deploy is [Vercel](https://vercel.com/new), the creators of Next.js.
