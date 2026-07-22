"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Bridal", "Reception", "Engagement", "Party"] as const;

const portfolio = [
  { image: "/images/portfolio/bridal-1.jpg", category: "Bridal" },
  { image: "/images/portfolio/bridal-2.jpg", category: "Bridal" },
  { image: "/images/portfolio/bridal-3.jpg", category: "Bridal" },
  { image: "/images/portfolio/reception-1.jpg", category: "Reception" },
  { image: "/images/portfolio/reception-2.jpg", category: "Reception" },
  { image: "/images/portfolio/engagement-1.jpg", category: "Engagement" },
  { image: "/images/portfolio/party-1.jpg", category: "Party" },
  { image: "/images/portfolio/party-2.jpg", category: "Party" },
];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [index, setIndex] = useState(-1);

  const filtered = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter((item) => item.category === active);
  }, [active]);

  const slides = filtered.map((item) => ({ src: item.image }));

  return (
    <section id="portfolio" className="relative overflow-hidden section-padding bg-[var(--ivory)]">
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent"
          highlight="Transformations"
          description="Every look is customized for the client, creating timeless beauty that feels elegant both in person and in photographs."
        />

        {/* Filter */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
          role="group"
          aria-label="Filter portfolio by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={clsx(
                "min-h-11 rounded-full border px-5 py-2.5 text-sm transition-colors duration-200 active:scale-95 sm:px-6 sm:py-3",
                active === cat
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                  : "border-gray-300 bg-white hover:border-[#D4AF37] hover:text-[#a9832a]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — plain CSS grid (not a multi-column masonry) so filtering
            reflows predictably instead of glitching as columns recalculate
            mid-animation. AnimatePresence + layout gives a smooth reshuffle. */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item, i) => (
              <motion.button
                key={item.image}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIndex(i)}
                aria-label={`View ${item.category} makeup photo ${i + 1} in full screen`}
                className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl text-left sm:rounded-[2rem]"
              >
                <Image
                  src={item.image}
                  alt={`${item.category} makeup portfolio photo`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-8 sm:left-8">
                  <div className="mb-2 h-1 w-10 gold-gradient rounded-full sm:mb-3 sm:w-14" />
                  <h3 className="text-base font-semibold text-white sm:text-2xl">
                    {item.category}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} />
    </section>
  );
}
