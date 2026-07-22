"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const features = [
  {
    title: "Premium Products",
    description: "Carefully selected professional products for a flawless finish.",
  },
  {
    title: "Personalized Styling",
    description: "Every look is customized to suit your individual style.",
  },
  {
    title: "Bridal Focus",
    description:
      "Soft, elegant and long-lasting bridal makeup designed for your special day.",
  },
  {
    title: "On-Time Service",
    description: "Professional planning to ensure a relaxed experience.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden section-padding bg-[var(--ivory)]">
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.06] blur-[140px]" />

      <div className="container-width relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <FadeIn className="relative">
          <div className="glass luxury-shadow overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about/about.jpg"
              alt="Amrita, the makeup artist behind Makeover by Amrita"
              width={700}
              height={900}
              sizes="(max-width: 1024px) 90vw, 560px"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Decorative Gold Box */}
          <div className="absolute -bottom-8 -right-8 hidden rounded-3xl bg-[var(--gold)] p-8 text-black shadow-2xl lg:block">
            <p className="text-xs uppercase tracking-[0.35em]">Makeup Artist</p>
            <h3 className="mt-2 text-2xl font-bold">Amrita</h3>
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <SectionHeading
            eyebrow="About The Artist"
            title="Creating Elegant Looks"
            highlight="That Feel Naturally You"
            align="left"
            className="mb-0"
          />

          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              At <strong>Makeover by Amrita</strong>, beauty is about enhancing your natural
              features rather than hiding them. Every makeover is thoughtfully planned to suit
              your personality, outfit, jewellery, skin tone and the occasion.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether it&apos;s your wedding day, reception, engagement or a special
              celebration, the focus is on creating timeless, elegant looks that photograph
              beautifully and make you feel confident throughout your event.
            </p>
          </FadeIn>

          {/* Features */}
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="hover-lift h-full rounded-3xl border border-gray-200 bg-white p-6">
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="mt-3 text-gray-600">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn delay={0.15} className="mt-12">
            <Button href="#contact">Book Your Consultation</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
