"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden bg-[var(--black)] pb-10 pt-24 text-white sm:pb-14 lg:pb-16 lg:pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute -left-52 top-0 h-[550px] w-[550px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[550px] w-[550px] rounded-full bg-pink-400/10 blur-[140px]" />

      <div className="container-width relative flex flex-col items-center gap-10 lg:flex-row lg:gap-20 lg:py-8">
        {/* Left */}
        <div className="flex-1">
          <FadeIn>
            <Badge>Bridal • Reception • Party Makeup</Badge>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[2.25rem] font-bold leading-[1.08] text-balance sm:text-5xl md:text-6xl lg:mt-8 lg:text-7xl">
              Luxury Makeup
              <span className="block gold-text">For Your</span>
              Most Beautiful Moments
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 text-balance sm:text-lg sm:leading-8 lg:mt-8">
              At <strong className="font-semibold text-white">Makeover by Amrita</strong>, every
              makeover is designed to enhance your natural beauty — elegant, precise, and made
              for your most important moments.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-4 lg:mt-10 lg:gap-5">
              <Button href="#contact">Book Consultation</Button>
              <Button href="#portfolio" variant="secondary">
                View Portfolio
              </Button>
            </div>
          </FadeIn>

          {/* Feature strip — compact on mobile, full glass card from lg up */}
          <FadeIn delay={0.32}>
            <div className="glass luxury-shadow hover-lift mt-6 max-w-xl rounded-2xl p-4 sm:rounded-3xl sm:p-5 lg:mt-12 lg:p-8">
              <div className="hidden h-1 w-16 rounded-full gold-gradient sm:mb-4 sm:block lg:w-20" />
              <h3 className="text-sm font-semibold sm:text-lg lg:text-2xl">
                Personalized Bridal Experience
              </h3>
              <p className="mt-3 hidden leading-8 text-gray-300 lg:block">
                Every bride deserves a look that feels authentic. Makeup, hairstyle, draping
                and finishing touches are carefully customized to complement your outfit,
                jewellery, skin tone and personal style.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right */}
        <motion.div
          className="relative w-full max-w-xs flex-1 sm:max-w-sm lg:max-w-lg"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass luxury-shadow hover-lift relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-white/10 sm:rounded-[2rem]">
            <Image
              src="/images/hero.jpg"
              alt="Bride styled by Makeover by Amrita, wearing a traditional pink and gold bridal ensemble"
              fill
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 512px"
              style={{ objectPosition: "100% center" }}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass hover-lift absolute left-0 top-6 hidden rounded-2xl p-5 sm:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Signature Style</p>
            <h4 className="mt-2 text-lg font-semibold">Elegant &amp; Natural</h4>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="glass hover-lift absolute bottom-6 right-0 hidden rounded-2xl p-5 sm:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Available For</p>
            <h4 className="mt-2 text-lg font-semibold">Weddings • Reception • Events</h4>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[var(--black)] to-transparent lg:h-48" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center">
        <span className="mb-3 text-xs tracking-[0.45em] text-gray-500">SCROLL</span>
        <motion.div
          className="h-14 w-[2px] gold-gradient rounded-full"
          animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
